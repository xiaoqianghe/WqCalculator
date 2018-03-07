



*栈和队列都是动态的集合，
在栈中，可以去掉的元素是最近插入的那一个。栈实现了后进先出。
在队列中，可以去掉的元素总是在集合中存在的时间最长的那一个。队列实现了先进先出的策略。

ECMAScript为数组专门提供了 shift() 和 unshift() 方法，以便实现类似队列的行为。由于 push() 是向数组末端添加数组项的方法，因此要模拟队列只需一个从数组前端取得数组项的方法。实现这一操作的数组方法就是 shift() ，它能够移除数组中的第一个项并返回该项，同时将数组长度减1。

顾名思义， unshift() 与 shift() 的用途相反：它能在数组前端添加任意个数组项并返回新数组的长度。因此，同时使用 unshift() 和 pop() 方法，可以从相反的方向来模拟队列，即在数组的前端添加数组项，从数组末端移除数组项。

push()： 向数组 末尾添加一个或者多个元素 并且返回这个数组的长度

pop();的用法 和push()的方法相反  删除数组的最后一个元素 并且数组的长度减1 并且返回删除的数






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




