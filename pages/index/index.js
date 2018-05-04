//index.js
//获取应用实例
const app = getApp()


var bmap = require('../../utils/bmap-wx.js');
var common = require('../../utils/common.js'); 


//Gmtl4zD3UafImVuXvVrYYLblMXtnKfUZ

Page({

      onShareAppMessage: function(){

              return {
                title: app.AllAppName.ALL_APP_NAME_TITLE,
              desc:'',
              path:'/pages/index/index'

              }

      },


      data: {
        motto: 'FromWhere',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        animationW:{},
        animationM: {},

        gogoright: -50,
        gogoleft: 0,
        gogostatus: false,


        aboutWeatherData: '',

        animationW: {},
        animationM: {},

        cityMenus: [],

        theWeather: {
              weatherIcon: "/images/w/w01",
              date: 0,
              currentCity: "北京",
              weatherDesc: "晴",
              pm25: 6611,
              temperature: "24 ~ 14",
              wind: " 无风"
        },


        otherWeather: {
          weatherIcon: "/images/w/w01",
          date: 0,
          currentCity: "南京",
          weatherDesc: "多云",
          pm25: 6611,
          temperature: "24 ~ 14",
          wind: " 无风11"
        },

        wall: "/images/clearday"

      },


      setAdd: function () {
        wx.navigateTo({
          // url: '../otheradd/otheradd'

          // url: '../otherclassic/otherclassic'

          url: '../classic/classic'
        })
      },

      setMenuNatural: function(){

        var that=this;

        var animationW = wx.createAnimation({
          duration: 100
        });
        var animationM = wx.createAnimation({
          duration: 100
        });
        var menuStatus = false;

        if(this.data.gogostatus){

          animationW.width("100%").height("100vh").top("0vh").left("0%").step();
          animationM.right("40%").step();
          menuStatus=false



        }else{

          animationW.width("90%").height("90vh").top("5vh").left("-40%").step();
          animationM.right("0%").step();
          menuStatus = true;
        }

        this.setData({
          animationW: animationW.export(),
          animationM: animationM.export(),
          gogostatus: menuStatus,
          cityMenus: common.getCityList()

           })
        },

      //点击右下角的按钮跳转

      toalllook:function(e){
        wx.switchTab({
          url: '../calc/calc',
        })
},


//历史城市
      menuTab: function (e) {

        wx.showLoading();
        var itemId = e.target.id;
        var that = this;
        if (itemId == "") {
          console.log("id 空着");
          return;
        }
        var theCity = common.getCity()[itemId];
        var BMap = new bmap.BMapWX({
          ak: 'Gmtl4zD3UafImVuXvVrYYLblMXtnKfUZ'
        });
        var fail = function (data) {
          console.log(data);
          wx.hideLoading();
          return null;
        };
        var success = function (data) {
       
          wx.hideLoading();
          var weatherData = data.currentWeather[0];
          weatherData.fullData = data.originalData.results[0];
          console.log(weatherData);
          var date = weatherData.date;
          date = date.substring(date.indexOf("：") + 1, date.indexOf("℃"))
          weatherData.date = date
          var days = weatherData.fullData.weather_data;
          for (var i = 0; i < days.length; i++) {
            if (i == 0) {
              var todayText = days[i].date;
              todayText = todayText.substring(todayText.indexOf("周"), todayText.indexOf("周") + 2);
              days[i].date = todayText;
            }
            days[i].weather = common.iconChanger(days[i].weather).icon;
          }
          weatherData.fullData.weather_data = days;
          weatherData.xy = theCity.xy;
          var tudayStatus = common.iconChanger(weatherData.weatherDesc);
          weatherData.weatherIcon = tudayStatus.icon;
          weatherData.weatherDesc = tudayStatus.status;
          weatherData.wind = common.windHelper(weatherData.wind);
          weatherData.pmpm = common.pmText(weatherData.pm25);

          
          that.setData({
            theWeather: weatherData,
            today: common.getToday(),
            wall: tudayStatus.wall
          });

          that.setMenuNatural();
        }
        // 发起weather请求 
        BMap.weather({
          location: theCity.xy,
          fail: fail,
          success: success
        });
      },
      onPullDownRefresh: function () {
        console.log("wakakakak"); // scroll上无效
        // wx.stopPullDownRefresh 是他的停止函数
      },

onLoad: function (options) {



  console.log("index =========onLaunch"); //

    wx.showLoading();

    common.init();



    console.log("===========" + "=========name:::" + options.name + "========zh:::" + options.zh + "=========location:::" + options.location); //
    var that = this;

    if(options.name==null){
      // 新建百度地图对象 
      var BMap = new bmap.BMapWX({
        ak: 'Gmtl4zD3UafImVuXvVrYYLblMXtnKfUZ'
      });
      var fail = function (data) {
        console.log(data)

        wx.hideLoading();
      };

      console.log("正在添加新城市");



      var success = function (data) {
          wx.hideLoading();
        var weatherData = data.currentWeather[0];


       
        console.log("返回的天气json:" + weatherData);


       
        weatherData.fullData = data.originalData.results[0];
        console.log(weatherData);
        var date = weatherData.date;
        date = date.substring(date.indexOf("：") + 1, date.indexOf("℃"))
        weatherData.date = date
        var days = weatherData.fullData.weather_data;
        for (var i = 0; i < days.length; i++) {
          if (i == 0) {
            var todayText = days[i].date;
            todayText = todayText.substring(todayText.indexOf("周"), todayText.indexOf("周") + 2);
            days[i].date = todayText;
          }
          days[i].weather = common.iconChanger(days[i].weather).icon;
        }
        weatherData.fullData.weather_data = days;
     
        weatherData.xy = options.location;
        var tudayStatus = common.iconChanger(weatherData.weatherDesc);
        weatherData.weatherIcon = tudayStatus.icon;
        weatherData.weatherDesc = tudayStatus.status;
        weatherData.wind = common.windHelper(weatherData.wind);
        weatherData.pmpm = common.pmText(weatherData.pm25);

        console.log("城市天气信息：：" + weatherData);

        common.refreshCity(weatherData);
      
       that.setData({
          theWeather: weatherData,
          today: common.getToday(),
          wall: tudayStatus.wall,
          // otherWeather: theWeather
        });
       

        console.log();
       
     
      }
      // 发起weather请求 
      BMap.weather({
      
        fail: fail,
        success: success
      });

    }else{

            var BMap = new bmap.BMapWX({
              ak: 'Gmtl4zD3UafImVuXvVrYYLblMXtnKfUZ'
            });
            var fail = function (data) {
             
              console.log(data);
              wx.hideLoading();
            };
      console.log("正在添加新城市");
      //调用应用实例的方法获取全局数据
      var success = function (data) {
   
     
        wx.hideLoading();
        var weatherData = data.currentWeather[0];
        weatherData.fullData = data.originalData.results[0];
        //console.log(weatherData);
        var date = weatherData.date;
        date = date.substring(date.indexOf("：") + 1, date.indexOf("℃"));
        weatherData.date = date;
        var days = weatherData.fullData.weather_data;
              for (var i = 0; i < days.length; i++) {
                if (i == 0) {
                  var todayText = days[i].date;
                  todayText = todayText.substring(todayText.indexOf("周"), todayText.indexOf("周") + 2);
                  days[i].date = todayText;
                }
                days[i].weather = common.iconChanger(days[i].weather).icon;
            }
            weatherData.fullData.weather_data = days;
            weatherData.xy = options.location;
            var tudayStatus = common.iconChanger(weatherData.weatherDesc);
            weatherData.weatherIcon = tudayStatus.icon;
            weatherData.weatherDesc = tudayStatus.status;
            weatherData.wind = common.windHelper(weatherData.wind);
            weatherData.pmpm = common.pmText(weatherData.pm25);
            common.addCity(weatherData);
        
            that.setData({
              theWeather: weatherData,
              today: common.getToday(),
              wall: tudayStatus.wall,
            });

      }
        
        // 发起weather请求 
        BMap.weather({
          location: options.location,
          fail: fail,
          success: success
        });
      }
      },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },


toCalc:function(){
    wx.navigateTo({
      url: '../calc/calc',
    })

},


onShareAppMessage: function () {

  console.log("=======onShareAppMessage::" + this.data.imageUrl)
  debugger
  if (!this.data.imageUrl) {
    debugger
    retun;
  }
  return {
    title: '不错的小程序',
    desc: '不错的小程序 哦',
    path: '../index/index',
  }

},



  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
