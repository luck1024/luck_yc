Page({
  data: {
    url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F020520123437%2F200205123437-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654328657&t=8cd1f9f63808f3f1e6c897d8f823fb90",
    info:["https://img0.baidu.com/it/u=1227896191,1613668141&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281","https://img0.baidu.com/it/u=1227896191,1613668141&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281"],
    userInfo:''
  },
  onLoad(){
    let user=wx.getStorageSync('user')
    console.log('进入小程序的页面获取缓存',user)
    this.setData({
      userInfo:user
    })
    if(this.data.userInfo==''){
      wx.showToast({
        title: '请先登录', // 标题
        icon: 'error',  // 图标类型，默认success
        duration: 1500  // 提示窗停留时间，默认1500ms
      })
    }
    console.log(this.data.userInfo);
  },
  //授权登录
  login(){
    wx.getUserProfile({
      desc: '用于资料',//声明获取用户个人信息后的用途，后续会展示在弹窗中
      success:res =>{
        let user = res.userInfo
        //把用户信息缓存到本地
        wx.setStorageSync('user', user)
        console.log("用户信息",user)
        this.setData({
          userInfo:user
        })
      },
      fail: res=>{
        console.log('授权失败',res)
      }
    })
  },
  //退出登录
  loginOut(){
    this.setData({
      userInfo:''
    })
    wx.setStorageSync('user', null)
  }
})
  
 

  //获取后端图片数据
  // onLoad: function(options) {
  //   var _this = this; //获取自身
  //   wx.request({
  //     url: 'http://139.196.197.158/api/room/searchRoom',
  //     data: {
  //       userAccount:'qingjingzehui',
  //       userPWD:'12345678',
  //     },
  //     method: 'post',
  //     dataType: 'json',
  //     success: function(res) {
  //       _this.setData({
  //         info: res.data, //通过res.data获取数据
  //       })
  //     } 
  //   })
  // },
