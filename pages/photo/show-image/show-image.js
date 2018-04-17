// pages/photo/show-image/show-image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    isImageShow:false,
    imageUrl:'',
    fromWhere:'photo',
    alradySave:false,

  
  },


   hideToast: function(){

    wx.hideToast();
  },


  showToast: function(title,icon,duration){

    wx.showToast({
      title: title,
      icon:icon,
      duration:duration,
    })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.showToast('loading','loading',5000);


    var imageUrl=options.imageUrl;

    this.setData({imageUrl:imageUrl});

    this.setData({fromWhere:options.fromWhere})

    console.log(imageUrl);


  
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


  onBindError: function () {

  },
  onBindLoad: function () {
    wx.hideToast();
    this.setData({ isImageShow: true });
  },

 


  onLongTap:function(){

    console.log("======onLongTap");

    if(!this.data.isImageShow){

      console.log("======onLongTap this.data.isImageShow");

     
      return;
    }

  
    var that=this;

    var fromWhere=this.data.Where;

    if(fromWhere='photo'){

      wx.showActionSheet({
        itemList: ['保存照片', '收藏照片', '分享照片'],
        success: function(res){

          switch(res.tapIndex){

            case 0:

            that.saveImage();

            break;

            case 1:

            that.collectedImage();

            case 2:
            that.toShareImage();

            break;
          }

        },
        fail:function(res){

          console.log(res.errMsg);

        }
      })



    }else if(fromWhere=='collected'){

      wx.showActionSheet({
        itemList: ['保存图片'],

        success:function(res){

          switch(res.tapIndex){

            case 0:
              that.saveImage();
              break;


          }


        },

        fail:function(res){

          console.log(res.errMsg);

        }
      })


    }




  },


//   //分享 图片

//   toShareImage:function(){

//     // this.onShareAppMessage

//     console.log("==============toShareImage");

//     this.onShareAppMessage
// },



//收藏   图片
  collectedImage:function(){


    if(!this.data.isImageShow){

      return;

    }


    var that=this;

    var imageUrl = this.data.imageUrl;

    var app=getApp();

    var key=app.globalData.COLLECT_IMAGE_KEY;

    var collectedImages=[];

    wx.getStorage({
      key: key,
      success: function(res) {

        console.log('success');

        for(var i=0;i<res.data.length;i++){

          if(res.data[i]==imageUrl){
            that.setData({alradySave:true});
            break;
          }
        }
        collectedImages=res.data.concat(imageUrl);
      },
       fail:function(){
        console.log('fail');
        collectedImages=collectedImages.concat(imageUrl);
        },

      complete:function(){
        console.log(that.data.alradySave);
        if(that.data.alradySave){
          that.showToast('请勿重复收藏','complete',1500);
          return;
        }


        wx.setStorage({
          key: key,
          data: collectedImages,
          success:function(){
            console.log("===收藏成功")
            that.showToast('收藏成功', 'success', 1500);

          },
          fail:function(){
            that.showToast('收藏失败', 'fail', 1500);
            
          },
          complete:function(){

          }

        })



      },
    })






  },




  saveImage:function(){

    if (!this.data.isImageShow){
            return;
      }

    wx.downloadFile({
      url:this.data.imageUrl,
      success:function(res){
        var tempFilePath=res.tempFilePath;
        wx.saveFile({
          tempFilePath: tempFilePath,
          success: function(res){
          wx.showToast({
            title:'保存成功',
            icon:'success',
          })

          }
        })

      }
      
    })

  },

  // /**
  //  * 用户点击右上角分享
  //  */
  onShareAppMessage: function () {

    console.log("=======onShareAppMessage::" + this.data.imageUrl)
    debugger
  if(!this.data.imageUrl){
    debugger
      retun;
    }
  return {
      title: '分享图片',
      desc: '妹子-.-',
      path: this.data.imageUrl,
    }
  
  }

  // onShareAppMessage: function (res) {
  //   debugger
  //   if (res.from === 'button') {
  //     // 来自页面内转发按钮
  //     console.log(res.target)
  //   }
  //   return {
  //     title: '自定义转发标题',
  //     path: '/page/user?id=123',
  //     success: function (res) {
  //       // 转发成功
  //     },
  //     fail: function (res) {
  //       // 转发失败
  //     }
  //   }
  // }
})