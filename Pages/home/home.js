// Pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['张皮皮', '张米米', '许老二']
  },
  handleBtnClick(){
    console.log("按钮点击")
  },

  handleTouchStart(){
    console.log("handleTouchStart")
  },
  handleTouchMove(){
    console.log("handleTouchMove")
  },
  handleTouchEnd(){
    console.log("handleTouchEnd")
  },
  handleTap(){
    console.log("handleTap")
  },
  handleLongPress(){
    console.log("handleLongPress")
  },
  handleEventClick(event){
    console.log("```````", event)
  },
  handleInter(event) {
    console.log(event)
  },
  handleIntemClick(event) {
    console.log(event)
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title, index)
  },

  //--------------事件冒泡和事件捕获
  handleCaptureView1(){
    console.log("handleCaptureView1")
  },
  handleBindView1(){
    console.log("handleBindView1")
  },

  handleCaptureView2(){
    console.log("handleCaptureView2")
  },
  handleBindView2(){
    console.log("handleBindView2")
  },

  handleCaptureView3(){
    console.log("handleCaptureView3")
  },
  handleBindView3(){
    console.log("handleBindView3")
  }

})