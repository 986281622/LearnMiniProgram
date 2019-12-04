// Pages/home/home.js

//getApp() 获取app() 产生的事例对象
//const app = getApp()
//console.log(app.globalData.name)
//console.log(app.globalData.age)

/* const name = app.globalData.name
const age = app.globalData.age */

//注册一个页面
//页面有自己的生命周期的函数
Page({


    //--------------2.初始化数据----------------
    data: {
        massage: '许二双'
    },
    //--------------1.监听生命周期函数----------------
    //页面被加载出来
    onLoad() {
        console.log('onLoad')
    },

    onReady() {
        console.log('onReady')
    },

    onShow() {
        console.log('onShow')
    },

    onHide() {
        console.log('onHide')
    },

    onUnload() {
        console.log('onUnload')
    },

    //--------------3.监听xml中相关的一些时间----------------
    handleGetUserInfo(event) {
        console.log(event)
    },

    handleViewClick(){
        console.log('二双被电击了')
    },

    //--------------4.监听其他事件----------------
    //监听页面滚动
    onPageScroll(obj){
        console.log(obj)
    },

    //监听页面滚动到底部
    onReachBottom(){
        console.log('到底了')
    },

    onPullDownRefresh(){
        console.log('下拉刷新')
    }
})