import {acceptHMRUpdate, defineStore} from "pinia";
import {getItem, setItem, removeItem} from "@/utils/storage";
import {TOKEN, USER_INFO} from "@/constant";
import {ethereumClient, wagmiClient} from "@/utils/wallet";
import {getAccount, signMessage} from "@wagmi/core";
import dayjs from "dayjs";
import {getUserInfo, login, updateAvatar, updateUserNickname} from "@/api/user";

export const useUserStore = defineStore('user', {
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: getItem(USER_INFO) || {},
    userImages: [],
  }),
  getters: {

  },
  actions: {
    async login() {
      const account = getAccount()
      console.log(account, 'login')
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
                    setItem(TOKEN, res.token);
                    setItem(USER_INFO, {
                      address: res.address,
                      name: res.name,
                      avatar: res.avatar
                    });
                    this.token = res.token;
                    this.userInfo = {
                      address: res.address,
                      name: res.name,
                      avatar: res.avatar
                    };
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
    logout() {
      removeItem(TOKEN);
      removeItem(USER_INFO);
      this.$reset();
      if (wagmiClient.status === 'connected') {
        ethereumClient.disconnect();
      }
    },
    /**
     * 获取用户信息
     * get user‘s information
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    async getUserInfo() {
      const res = await getUserInfo();
      setItem(USER_INFO, {
        address: res.address,
        name: res.name,
        avatar: res.avatar
      });
      this.userInfo = {
        address: res.info?.user_address,
        name: res.info?.name,
        avatar: res.info?.avatar
      };
    },
    /**
     * 更新用户昵称
     * update user's nickname
     * @param name
     * @returns {Promise<unknown>}
     */
    async updateUserNickname(name) {
      return await updateUserNickname(name)
    },
    /**
     * 更新用户头像
     * update user's avatar
     * @param file
     * @returns {AxiosPromise<any>}
     */
    async updateAvatar(file) {
      const form = new FormData()
      form.append('avatar', file)
      return updateAvatar(form)
    },
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}