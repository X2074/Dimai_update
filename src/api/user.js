import request from '../utils/request'

export const login = (data) => {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

export const getHotWords = () => {
    return request({
        url: '/hotword',
        method: 'get'
    })
}
export const getGallerys = () => {
    return request({
        url: '/gallerys',
        method: 'get'
    })
}
export const getTasks = () => {
    return request({
        url: '/tasks',
        method: 'get'
    })
}
export const getTaskByToken = (taskToken) => {
    return request({
        url: '/task/' + taskToken,
        method: 'get'
    })
}
export const drawLt = (data) => {
    return request({
        url: '/draw/lt',
        method: 'post',
        data
    })
}
export const drawWx = (data) => {
    return request({
        url: '/draw/wx',
        method: 'post',
        data
    })
}
export const getImgs = () => {
    return request({
        url: '/imgs',
        method: 'get'
    })
}
export const addImgToTheme = (data) => {
    return request({
        url: '/theme',
        method: 'post',
        data
    })
}
export const getThemeImgs = () => {
    return request({
        url: '/theme',
        method: 'get'
    })
}
export const getUserInfo = () => {
    return request({
        url: '/info',
        method: 'get'
    })
}
export const updateUserNickname = (name) => {
    return request({
        url: '/name',
        method: 'post',
        data:{
            name: name
        }
    })
}
export const updateAvatar = (data) => {
    return request({
        url: '/avatar',
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        data
    })
}
export const getImgsWithTasskToken = (taskToken) => {
    return request({
        url: '/imgs/' + taskToken,
        method: 'get'
    })
}