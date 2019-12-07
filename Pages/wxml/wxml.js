// Pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    massage: '你好 二爽',
    firstName: '科比',
    lastName: '布莱恩',
    age: 12,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 82,
    movies: ['复仇者联盟', '蜘蛛侠', '飞天小女警'],
    letts: ['a', 'b', 'c']

  },

  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },

  handleSwitchColor(){
    this.setData({
      isActive: !this.data.isActive
    })
  },

  handleSwitchShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },

})