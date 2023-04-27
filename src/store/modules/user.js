import {
    addImgToTheme,
    drawLt,
    drawWx,
    getGallerys,
    getHotWords,
    getImgs,
    getTaskByToken,
    getTasks,
    getThemeImgs,
    getUserInfo,
    login,
    updateAvatar,
    updateUserNickname,
    getImgsWithTasskToken
} from '@/api/user'
import {getItem, removeItem, setItem} from '@/utils/storage'
import {TOKEN, USER_INFO} from '@/constant'
import {getAccount, signMessage} from '@wagmi/core'
import {ethereumClient, wagmiClient} from '@/utils/wallet'
import dayjs from 'dayjs'
import store from '@/store'

export default {
    namespaced: true,
    state: () => ({
        token: getItem(TOKEN) || '',
        userInfo: getItem(USER_INFO) || {}
    }),
    mutations: {
        setToken(state, token) {
            state.token = token
            setItem(TOKEN, token)
        },
        removeToken(state) {
            state.token = ''
            removeItem(TOKEN)
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo
            setItem(USER_INFO, userInfo)
        },
        removeUserInfo(state) {
            state.userInfo = {}
            removeItem(USER_INFO)
        }
    },
    actions: {
        /**
         * 处理用户登录(web3)
         * Process user login
         */
        async login(context) {
            const account = getAccount()
            console.log(account)
            const loginContent = {
                method: 'login',
                address: account.address.toLocaleLowerCase(),
                time: dayjs().valueOf()
            }
            const loginMsg = JSON.stringify(loginContent)
            await signMessage({ message: loginMsg })
                .then((res) => {
                    console.log(res)
                    const userInfo = {
                        signature: res,
                        message: loginMsg
                    }
                    return new Promise((resolve, reject) => {
                        login(userInfo)
                            .then((res) => {
                                store.commit('user/setToken', res.token)
                                store.commit('user/setUserInfo', {address: res.address, name: res.name, avatar: res.avatar})
                                resolve(res)
                            })
                            .catch((err) => {
                                reject(err)
                            })
                    })
                })
                .catch((err) => {
                    console.log(err)
                    ethereumClient.disconnect()
                })
        },
        /**
         * 主动登出用户
         * Logout user
         */
        logout() {
            store.commit('user/removeToken')
            store.commit('user/removeUserInfo')
            if (wagmiClient.status === 'connected') {
                ethereumClient.disconnect()
            }
        },
        /**
         * 获取热词
         * get hotwords
         * @param context
         * @returns {*}
         */
        getHotWords(context) {
            return getHotWords()
        },
        /**
         * 获取画廊
         * get gallerys
         * @param context
         * @returns {*}
         */
        getGallerys(context) {
            return getGallerys()
        },
        /**
         * 创建调用吴龙涛接口的绘画任务
         *  draw with model α
         * @param context
         * @param drawInfo
         * @returns {Promise<unknown>}
         */
        async drawLt(context, drawInfo) {
            const { text, anti, size } = drawInfo
            return new Promise((resolve, reject) => {
                drawLt({text, anti, size})
                    .then((res) => {
                        resolve(res)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },
        /**
         * 创建调用百度文心接口的绘画任务
         * draw with model β
         * @param context
         * @param drawInfo
         * @returns {Promise<unknown>}
         */
        async drawWx(context, drawInfo) {
            const { text, style, size, num } = drawInfo
            return new Promise((resolve, reject) => {
                drawWx({text, style, size, num})
                    .then((res) => {
                        resolve(res)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },
        /**
         * 获取用户绘画任务
         * get user's tasks
         * @param context
         * @returns {*}
         */
        getTasks(context) {
            return getTasks()
        },
        /**
         * 使用Token获取对应的task
         * @param context
         * @param taskToken
         * @returns {AxiosPromise}
         */
        getTaskByToken(context,taskToken) {
            return getTaskByToken(taskToken)
        },
        /**
         * 获取用户所有图片
         * get all pictures drawn by user
         * @param context
         * @returns {*}
         */
        getImgs(context) {
            return getImgs()
        },
        /**
         * 将图片加入到主题中
         * Add Image to Theme
         * @param context
         * @param imgInfo
         * @returns {Promise<unknown>}
         */
        async addImgToTheme(context, img_id) {
            return addImgToTheme({img_id: img_id})
        },
        /**
         * 获取主题图片
         * get all theme images
         * @param context
         * @returns {*}
         */
        getThemeImgs(context) {
            return getThemeImgs()
        },
        /**
         * 获取用户信息
         * get user‘s information
         * @param context
         * @returns {Promise<axios.AxiosResponse<any>>}
         */
        getUserInfo(context) {
            const res = getUserInfo()
            const userinfo = {
                address: res.info?.user_address,
                name: res.info?.name,
                avatar: res.info?.avatar
            }
            store.commit('user/setUserInfo', userinfo)
        },
        /**
         * 更新用户昵称
         * update user's nickname
         * @param context
         * @param name
         * @returns {Promise<unknown>}
         */
        async updateUserNickname(context,name) {
            return updateUserNickname(name)
        },
        /**
         * 更新用户头像
         * update user's avatar
         * @param context
         * @param file
         * @returns {AxiosPromise<any>}
         */
        async updateAvatar(context, file) {
            const form = new FormData()
            form.append('avatar', file)
            return updateAvatar(form)
        },
        /**
         * 根据绘图任务的token查询图片信息
         * get imgs by taskToken
         * @param context
         * @param taskToken
         * @returns {AxiosPromise}
         */
        getImgsWithTasskToken(context, taskToken) {
            return getImgsWithTasskToken(taskToken)
        }

    }
}