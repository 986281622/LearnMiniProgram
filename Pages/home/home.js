// Pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },

  handleIncrement(event){
    console.log("---------", event.detail.name)
    this.setData({
      counter: this.data.counter + 1
    })
  },

  tabControlClick(event){
    console.log(event)
  },
  handleIncrementCpn(){
   // console.log('------')
   //最终目的，修改my-sel 中的counter
   //1.获取组件对象
   const my_sel =  this.selectComponent('#sel-id')
 
   console.log(my_sel)
   //2.通过setData修改组件中的数据（不合理）
/*    my_sel.setData({
    counter: my_sel.data.counter + 20
   }) */
   //3.通过方法对数据进行修改
   my_sel.incrementCounter(10)
  }
})