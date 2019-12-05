// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },
  handleChooseAlbum(){
    //系统api，让用户在相册中选择图片（或者拍照）
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: (res) => {
        //1.取出路径
        const path = res.tempFilePaths[0]

        //2.设置imagePath
        //this: undefined
        this.setData({
          imagePath: path
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  handleImageLode(){
    console.log('图片加载完成')
  }

})