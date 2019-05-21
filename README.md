给儿子抢课的Chrome插件：

# 使用方式

1. clone这个项目

2. 在chrome中输入：<chrome://extensions/>

3. 点击右上角的“开发者模式”，左上角会多出3个按钮

4. 点击“加载已解压缩的扩展程序”，选择clone的目录

5. 然后你登录该死的[北京市课外实践网站](http://kfsjkx.bjedu.cn/),然后跳转到[选课列表页](http://kfsjkx.bjedu.cn/index_page#/app/stuoptionalcourselist)，即可。

6. 如果有新课，你的邮件软件会自动弹出，产生一个新建邮件，标题是那门课，这个时候，你就需要冲到网站，去抢课了！

# 开发

- 本来想用后台爬虫写的，觉得觉得麻烦，就决定用chrome插件方式了
- 学了一下chrome插件，发现他还分多个模式，什么background，content_scripts，inject_scripts等多种，我们这种可以操纵DOM的，用的是content_scripts，他不如inject_scripts可以访问页面的js对象。
- 然后我发现jquery无法操纵anjularjs，虽然可以用inject_scripts方式去获得angularjs对象来操纵，无奈我不熟悉angularjs，还得学，没兴趣
- 所以最终的方案是，就在这个list页面是刷，如果发现有课，弹出通知来（通知本来享用桌面通知，但是http不支持，必须网站是https的，只好用了邮件方式，很诡异）
- 靠，这个破网站是http的，chrome对http网站不支持桌面通知，只好用一个诡异的邮件通知来代替了，就是 href：mailto方式，触发你的邮件客户端。
- 本来想自动抢，无奈网站是angularjs的，不太好用jquery操纵，无奈我angularjs不熟悉，否则，可以使用inject_script的方式，获得angularjs的引用，操纵之，有时间再研究吧
- 需要使用<test_email.html>来测试一下你的邮件撰写界面是否能弹出，如果不能，你需要配置一下你的邮件客户端，比如outlook/mac的mail/foxmail等。
- 已知的bug：在windows下的chrome，貌似一reload页面，就无法回list页面，而去了一个默认的一面，我想是因为http://kfsjkx.bjedu.cn/index_page#/app/stuoptionalcourselist 中间的那个#号导致的，也暂时没想出什么解决方法，目前在mac下的chrome跑的没问题
## 参考
- <https://blog.csdn.net/zhangwx6/article/details/56838678>
- <https://blog.csdn.net/hhmouse111/article/details/36901699> 
- <https://segmentfault.com/a/1190000004969298>
- <https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html>
- <https://github.com/sxei/chrome-plugin-demo>