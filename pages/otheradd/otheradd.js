// pages/otheradd/otheradd.js


var common =require('../../utils/common.js')

var xjCitys = {};
Page({

  /**
   * 页面的初始数据
   */
  data: {

    hotCitys:[],
    chinaCitys:[]
  
  },


  //热门城市   

  hotTaped:function(e){

    var itemId=e.target.id;
    var city=xjCitys.citys[itemId];

    wx.redirectTo({


      url: '../index/index?name=' + city.cityzh + '&zh=' + city.cityzh + '&location=' + city.location

  

      })


  },

  chinaTaped:function(e){
    var itemId=e.target.id;
    var city =xjCitys.province[itemId];
      console.log("===========chinaTaped");
    console.log("===========chinaTaped::url::"+'../index/index?name=' + city.cityzh + '&zh=' + city.cityzh + '&location=' + city.location);

    // wx.redirectTo({
    //   url: '../logs/logs'
    // })


    // wx.switchTab({
    //   url: '../logs/logs'
    // })


  
     wx.redirectTo({
    
      // url: '../index/index?name=' + city.cityzh + '&zh=' + city.cityzh + '&location=' + city.location

       url: '../index/index?name=' + city.cityzh + '&zh=' + city.cityzh + '&location=' + city.location

  
    })

 
},






  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //页面初始化  options 为页面跳转所带来的参数
    xjCitys=common.readXJCitys();

    this.setData({

      chinaCitys:xjCitys.province
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})