# 演示文档

---

````javascript
seajs.use('index', function(bbs){
        console.log(bbs);
        console.log(bbs.page.isTopic());
        console.log(bbs.page.isNode('http://bbs.seedit.com/forum.php?mod=forumdisplay&fid=24&filter=typeid&typeid=551'))
        console.log(bbs.page.isNode('http://bbs.seedit.com/forum-24-1.html'))
        console.log(bbs.page.isNode('http://bbs.seedit.com/forum-1.html'))
});
````
