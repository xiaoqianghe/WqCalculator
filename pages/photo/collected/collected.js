// pages/photo/collected/collected.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    collectedImages: [],
    left: 25,

    longtap: false,
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var app= getApp();
    var key = app.globalData.COLLECT_IMAGE_KEY;
    var that =this;

    wx.getStorage({
      key: key,
      success: function(res) {
        //success

      

        console.log("success ::");
        that.setData({collectedImages: res.data});
       
        console.log("res.data ::"+res.data);

        
        // console.log("collectedImages::" + collectedImages);



      },
      fail:function(){
        
        console.log("fail::");

      },
      complete:function(){

      }
    })
  
  },

  onLongImageTap: function(event){
    console.log('===============onLongImageTap');
    var that=this;

    //关于cang
    that.setData({
      longtap: true,
    })
    that.timer = setTimeout(() => {
      that.setData({
        longtap: false,
      })
    }, 500);

   


    wx.showModal({
      title: '删除收藏',
      content: '确定要删除收藏吗',
      success: function(res){
      if(res.confirm){
        console.log('用户点击了确定')
        var imageUrl=event.currentTarget.dataset.imageUrl;
        var collectedImages=that.data.collectedImages;
        for(var i=0;i<collectedImages.length;i++){
          if(collectedImages[i]==imageUrl){
                collectedImages.splice(i, 1);
              break;
          }
        }
        that.setData({collectedImages: collectedImages})
          
          var app =getApp();

         

          var key = app.globalData.COLLECT_IMAGE_KEY;
         
          wx.setStorage({
            key: key,
            data: collectedImages,

            success: function(res){

            },
            fail:function(){

            },complete(){

            }
          })

        }
      },
      
    })


  },

 


  onImageTap: function(event){


    let that = this;
    if (that.data.longtap) {
      me.setData({
        longtap: false,
      })
      clearTimeout(me.timer);
      return;
    }

    

    console.log('===============onImageTap');

    var imageUrl=event.currentTarget.dataset.imageUrl;
    wx.navigateTo({
      // url: '/pages/meizi/show-image/show-image?imageUrl=' + imageUrl + '&fromWhere=meizi',
      url: '../show-image/show-image?imageUrl=' + imageUrl + '&fromWhere=meizi',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })


  },

  showToast:function(title,icon,duration){

    wx.showToast({
      title: title,
      icon: icon,
      duration: duration,
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