
https://www.w3cschool.cn/weixinapp/weixinapp-list.html  微信小程序样式学习


我们的


*栈和队列都是动态的集合，
在栈中，可以去掉的元素是最近插入的那一个。栈实现了后进先出。
在队列中，可以去掉的元素总是在集合中存在的时间最长的那一个。队列实现了先进先出的策略。

ECMAScript为数组专门提供了 shift() 和 unshift() 方法，以便实现类似队列的行为。由于 push() 是向数组末端添加数组项的方法，因此要模拟队列只需一个从数组前端取得数组项的方法。实现这一操作的数组方法就是 shift() ，它能够移除数组中的第一个项并返回该项，同时将数组长度减1。

顾名思义， unshift() 与 shift() 的用途相反：它能在数组前端添加任意个数组项并返回新数组的长度。因此，同时使用 unshift() 和 pop() 方法，可以从相反的方向来模拟队列，即在数组的前端添加数组项，从数组末端移除数组项。

push()： 向数组 末尾添加一个或者多个元素 并且返回这个数组的长度

pop();的用法 和push()的方法相反  删除数组的最后一个元素 并且数组的长度减1 并且返回删除的数


===========关于页面跳转

  类似小程序这样的跳转是由小程序框架提供的接口实现的，这几个接口是：wx.navigateTo(OBJECT)、wx.redirectTo(OBJECT)、wx.navigateBack(OBJECT)和wx.switchTab。

  下面分别介绍这几个功能的使用区别与联系：

wx.navigateTo(OBJECT)

  这个接口是跳转到一个应用内的某个页面，但是，保留着当前页面

  wx.navigateBack(OBJECT)

关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
























unshift()：方法是向数组的开头添加一个或多个元素，并且返回新的长度。


shift()方法和unshift()方法恰恰相反。该方法用于把数组的第一个元素从其中删除，并返回被删除的值。如果数组是空的，shift()方法将不进行任何操作，返回undefined的值。

NaN是number类型中一个特殊的数值，在JavaScript中它有个奇怪的定义：非数值（Not a Number）,即是一个不是数字的数值，这个数值用于表示一个本来要返回数值的操作数未返回数值的情况。

在其他语言中，任何数值在未返回都会得到错误，但在JS中，会返回NaN,这样它就不会抛出错误了，继续解析执行接下来的代码。

console.log(typeof NaN);   //返回Number


2.NaN与任何值都不相等，包括NaN自身。

console.log(NaN == NaN);      //返回false
console.log(NaN === NaN);         //返回false
console.log(NaN == -1);             //返回false



该函数接收一个参数，这个参数可以是任何类型，如果接收的参数是数字类型，返回false;如果是其他类型（除了数字的任何其他类型），则返回true;


isNaN(): 判断

    当算术运算返回一个未定义的或无法表示的值时，NaN就产生了。但是，NaN并不一定用于表示某些值超出表示范围的情况。将某些不能强制转换为数值的非数值转换为数值的时候，也会得到NaN。

例如，0 除以0会返回NaN —— 但是其他数除以0则不会返回NaN。


  isNaN() 函数用于检查其参数是否是非数字值。
如果参数值为 NaN 或字符串、对象、undefined等非数字值则返回 true, 否则返回 false。




shift： 第一个元素 删除  返回删除元素的值

unshift：开头添加一个元素  返回添加后的长度



unshift 开头添加  shift 开头删除

push 末尾添加    pop 末尾删除



1.需要wx:key的情况

列表中项目的位置会动态改变或者有新的项目添加到列表中
希望列表中的项目保持自己的特征和状态
（如 <input/> 中的输入内容，<switch/> 的选中状态）
需要使用 wx:key 来指定列表中项目的唯一的标识符。
2.可不需要wx:key的情况

如果明确知道该列表是静态，或者不必关注其顺序，可以不用加wx:key，忽略如下的警告

条件渲染 wx:if
在框架中，我们用wx:if="{{condition}}"来判断是否需要渲染该代码块：


---------------  
  rpx适配

rpx是小程序中的尺寸单位，它有以下特征：

小程序的屏幕宽固定为750rpx（即750个物理像素），在所有设备上都是如此
1rpx=（screenWidth / 750）px，其中screenWidth为手机屏幕的实际的宽度（单位px），例如iphone6的screenWidth=375px，则在iphone6中1rpx=0.5px
由上可知，在不同设备上rpx与px的转换是不相同的，但是宽度的rpx却是固定的，所以可以使用rpx作为单位，来设置布局的宽高。

vw、vh适配

vw和vh是css3中的新单位，是一种视窗单位，在小程序中也同样适用。

小程序中，窗口宽度固定为100vw，将窗口宽度平均分成100份，1份是1vw
小程序中，窗口高度固定为100vh ，将窗口高度平均分成100份，1份是1vh
所以，我们在小程序中也可以使用vw、vh作为尺寸单位使用在布局中进行布局，但是一般情况下，百分比+rpx就已经足够使用了,所以它们的出场机会很少。


  float: right------定义的是哪一个方向浮动


  在组件上使用 wx:for 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。


  box-sizing 属性允许您以特定的方式定义匹配某个区域的特定元素。


  content-box	
这是由 CSS2.1 规定的宽度高度行为。
宽度和高度分别应用到元素的内容框。
在宽度和高度之外绘制元素的内边距和边框。
border-box	
为元素设定的宽度和高度决定了元素的边框盒。
就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。
通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。
inherit	规定应从父元素继承 box-sizing 属性的值

  









1.启动 校验本地的是否是第一次登录页面 是第一次 则进入引导页面

2.进入启动页面---接口

    2.1，校验版本号

    ---判断是否设置手势密码  没有的话  提示去设置
    
    2.2，校验手势好吗
    2.3

3.首页。


//2号线  ： 起点--靠边停车--路口 --学校区域---路口---公交站台 ----人行横道---路口---会车---路口右转  ------变更车道 -- 
            掉头---超车---自行变更车道-路口左转--路口直行 --路口---加减挡操作---路口-----直线行驶--路口 ---靠边停车
            
            ----------------------------------------
                                                    |
                                                    |
                                                    |
                                                    |
                                                    |
                                                    |
                                                    |
                                                    |
              

        

            
//5号线： 起点---靠边停车 -----人行横道 -----路口 ----变更车道------路口右转-----会车---------加减挡操作--------掉头----
          学校区域-----直线行驶------路口左转 ----超车----路口直行--路口------终点


          |
          |
          |
          |
          |
          |
          |
          |
          |
          ————-------------------------------------------



//4号线：4号线 和2号 线其实是类似的呢
      起点---路边停车---路口左转---人行横道---路口-----超车---学校区域----变更车道---
      掉头----公交站台----会车--路口---直线行驶----路口直行动--路口---加减到操作--路口右转-------终点-靠边停车

      ‘’‘
      
      
      ’
  //4号线路：  起点--靠停车---路口左转-----人行横道--路口--超车--学校区域--掉头--公交站台--会车-路口-直线行驶 
            --路口直线 路口 --- 加减挡操作----------路口右转--终点 靠边停车



  //1号线路： 起点--路边停车--路口左转----路口直线-路口---公交站台--------路口左转-----加减挡操作---会车---掉头

            ---超车---路口---变更车道---路口---路口右转---直线行驶---人行横道---路口----学校区域---路口右转---终点 靠边停车


            1.





