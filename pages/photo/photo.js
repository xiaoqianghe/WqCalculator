// pages/photo/photo.js
Page({






  /**
   * 页面的初始数据
   */
  data: {


    meizi: {},
    page: 1,
    isLoadMore: false,
  
  },


  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮

      console.log("==============res.from === 'button")
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/pages/photo/photo',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },





  onImageTap: function (event) {
    var imageIndex = event.currentTarget.dataset.imageIndex;
    var imageUrl = this.data.meizi.results[imageIndex].url;
    wx.navigateTo({
      // url: '/pages/meizi/show-image/show-image?imageUrl=' + imageUrl + '&fromWhere=meizi',
       url: '/pages/photo/show-image/show-image?imageUrl=' + imageUrl + '&fromWhere=meizi',
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

 


  onReachBottom: function () {
    this.loadMoreData();
  },

  loadMoreData: function (event) {
    if (this.data.isLoadMore) {
      return;
    }
    this.setData({ isLoadMore: true });
    var that = this;
    var page = this.data.page + 1;
    wx.request({
      url: 'https://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/' + page,
      //url: 'https://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/1',
      // url: 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/1',
      // method: 'GET',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var meizi = res.data;
        var thisMeizi = that.data.meizi;
        console.log(meizi);
        if (!meizi.error) {
          thisMeizi.results = thisMeizi.results.concat(meizi.results);
          that.setData({
            meizi: thisMeizi
          });
        }
        wx.stopPullDownRefresh()
        that.setData({
          page: that.data.page + 1
        });
      },
      fail: function () {

      },
      complete: function () {
        that.setData({ isLoadMore: false });
      }

    })
  },






  onPullDownRefresh: function () {
    this.refreshData();
  },


  refreshData: function () {
    var that = this;
    wx.request({
      url: 'https://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/1',
      data: {
      },
      // method: 'GET',
      header: {
        'content-type': 'application/json',
      },
      success: function (res) {
        var meizi = res.data;
        console.log(meizi);
        that.setData({
          meizi: meizi.error ? {} : meizi
        });
      },
      fail: function () {



        console.log("=====fail");

        

      },
      complete: function () {
        wx.stopPullDownRefresh()
      }

    })
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 页面初始化 options为页面跳转所带来的参数
    this.refreshData();
  
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



  toallback: function () {

    wx.navigateTo({
      url: '../index/index',
    })

  },

  toallcollected: function () {

    wx.navigateTo({
      url: '../photo/collected/collected',
    })

  },

  toallshare: function () {

  

  },


  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function () {
  
  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function () {
  
  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function () {
  
  // }
})