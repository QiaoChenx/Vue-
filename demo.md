基本数据类型：String、Number、Boolean、Null、Undefined、Bigint、Symbol
引用数据类型：Math、Function、RegExp、Object、Array、Date

浏览器分为：渲染引擎和JS引擎

渲染引擎：解析HTML与CSS，chrome浏览器的blink，和老版本的webkit
JS引擎（JS解释器：解析与执行网页的JavaScript语句，比如chrome浏览器的V8
浏览器本身不会解析js语句，通过JS解释器，一句一句地读取网页中的角色语句，因为是读取一句执行一句，所以JavaScript也称为解释型语言，脚本语言

JavaScript组成：
  - ECMAScript: 规定了JS的基本语法
  - DOM：文档对象模型，W3C推荐的一套处理可扩展标记语言的标准编程接口
  - BOM：浏览器对象模型，提供独立于内容的，可以与浏览器进行交互的文档对象。

JavaScript书写样式：
  - 行内样式  <button onclick='function() {}'>
  - 内嵌样式  <script> </script>
  - 外部样式  <script src="../scr/javascript"></script> 标签中不可以写代码

JavaScript没有输出输出的概念，它是一个依托在宿主环境中的运行的脚本语言，任何与外间沟通的机制都是由属猪环境提供的。

JavaScript的一种动态语言，即在变量声明的时候不需要确定数据类型
静态语言要求在使用变量之前必须要先确定数据类型.
多范式编程语言是指多种计算机风格和典范模式

3-27
3-30