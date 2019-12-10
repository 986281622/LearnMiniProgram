// Pages/home/home.js
Page({

  handleShowToast(){
    wx.showToast({
      title: '加载中',
      duration: 3000,
      icon: 'loading',
      mask: true,
      success: function() {
        console.log('展示弹窗成功')
      },
      fail: function() {
        console.log('展示弹窗失败')
      },
      complete: function() {
        console.log('展示弹窗完成')
      }
    })
  },

  handleShowModal(){
    wx.showModal({
      title: '张皮皮',
      content: '内容 我的老妹张咪咪',
      showCancel: false,
      success: function(res) {
        console.log(res)
        if(res.cancel){
          console.log('用户点击了取消按钮')
        }
        if(res.confirm) {
          console.log('用户点击了确定按钮')
        }
      }
    })
  },

  handleShowLoading(){
    wx.showLoading({
      title: '加载ing',
      mask: true,
    })

    setTimeout(() => {
      //必须受到调用wx.hideLoading() 才会让loading消失
      wx.hideLoading();
    }, 1000)
  },

  handleshowActionSheet(){
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      success: function(res) {
        console.log(res)
      }
    })
  },

  
  onShareAppMessage: function(options) {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }

})
