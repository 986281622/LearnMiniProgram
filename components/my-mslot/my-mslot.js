// components/my-mslot/my-mslot.js
Component({

  //----------------让使用者可以给组件传入数据-----------------------
  properties: {
    title: {
      type: String,
      value: ''
    }
  },

  //-------------定义组件内部的初始化数据---------------------
  data: {
    counter: 0
  },

  //---------------用于定义组件内部的函数-----------------------------
  methods: {
    foo() {

    }
  },

  //------------------定义组件的配置选项-----------------------------
  //----multipleSlots： 在使用多插槽时需要设置为true   
  // styleIsolation希望页面样式对自定义组件样式有影响，默认不影响
  options: {
    multipleSlots: true
  },

  //--------------外界给组件传入额外的样式-------------------------
  externalClasses: ['titleclass'],

  //------------------可以监听属性的改变------------------------
  observer: {
    counter: function (newVal) {

    }
  },

  //------------------组件中监听生命周期函数-------------------
  //1.监听所在页面的生命周期
  pageLifetimes: {
    show: function () {
      // 页面被展示
      console.log("页面被展示")
    },
    hide: function () {
      // 页面被隐藏
      console.log("页面被隐藏")
    },
    resize: function (size) {
      // 页面尺寸变化
      console.log("页面尺寸变化")
    }
  },

  //2.监听组件本身的生命周期
  lifetimes: {
    created(){
      console.log("组件被创建出来")
    },

    attached: function () {
      // 在组件实例进入页面节点树时执行
      console.log("在组件实例进入页面节点树时执行")
    },
    ready(){
      console.log("在组件在视图层布局完成后执行")
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
      console.log("在组件实例被从页面节点树移除时执行")
    },
  },
})
