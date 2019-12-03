// Pages/home/home.js
Page({
  data: {
    name:  'zhangyuj',
    age: 25,
    students: [
      {id: 110, name: 'zz', age: 20},
      {id: 111, name: 'zq', age: 21},
      {id: 112, name: 'zw', age: 22},
      {id: 113, name: 'ze', age: 23}
    ],
    counter: 0
  },

  //counter + 1
  handleBtnClick(){
    /* 
      1.错误的做法； 界面不会刷新
     this.data.counter += 1 
    */

    //.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },

  //counter - 1
  handleSubClick(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
})