// pages/classic/classic.js
Page({

  /**
   * 页面的初始数据
   */

  /**
   * 页面的初始数据
   */
  data: {

    navLeftItems: [
      {
        title: "工具",
        id: 1,
        tree: [
          {
            title: "计算器",
            id: 1,
            logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2Fa2.jpg",
            jumpto:"pages/calc/calc"
            
          },
          {
            title: "地图",
            id: 2,
            logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2Fa2.jpg",
            jumpto: "pages/aboutmap/aboutmap"
          }
        ]
      },

      {
        title: "美图",
        id: 2,
        tree: [
          {
            title: "美女",
            id: 1,
            logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2Fa2.jpg",
            jumpto: "pages/aboutmap/aboutmap"
          },
          {
            title: "表情",
            id: 2,
            logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2Fa2.jpg"
          }
        ]
      },
      {
        title: "游戏",
        id: 3,
        tree: [
          {
            title: "游戏1",
            id: 1,
            logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2Fa2.jpg"
          },
          {
            title: "游戏2",
            id: 2,
            logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2Fa2.jpg"
          }
        ]
      },
      {
        title: "娱乐",
        id: 4,
        tree: [
          {
            title: "娱乐1",
            id: 1,
            logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2Fa2.jpg"
          },
          {
            title: "娱乐2",
            id: 2,
            logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2Fa2.jpg"
          }
        ]
      }

    ]
   ,
    navRightItems: [
      {
        title: "工具",
        id: 1,
        tree: [
          {
            title: "工具1",
            id: 1,
            logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2Fa2.jpg"
          },
          {
            title: "工具2",
            id: 2,
            logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2Fa2.jpg"
          }
        ]
      },
      {
        title: "游戏",
        id: 1,
        tree: [
          {
            title: "游戏1",
            id: 1,
            logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2Fa2.jpg"
          },
          {
            title: "游戏2",
            id: 2,
            logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2Fa2.jpg"
          }
        ]
      }

    ]

   
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // that.setData({
    //   navLeftItems: navAllDatas,
    //   navRightItems: navAllDatas,
    // })
  
  },

  //事件处理函数
  switchRightTab: function (e) {
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: id,
      curIndex: index
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