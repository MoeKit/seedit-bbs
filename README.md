# seedit.bbs

---

BBS 工具脚本

---

## 使用说明

只用于bbs，即`PC`端和`WAP`端。
对于`get`相关函数，当没有参数时，默认为`当前页面地址`(document.location.href)。

````javascript
seajs.use('seedit.bbs', function(bbs){
        console.log(bbs.page);
});
````

## API

### isWap   `page.isWap()`
检查是否为`WAP(手机)`站

### isNode    `page.isNode([url])`
检查是否为`版块`页面


### isTopic `page.isTopic([url])`
检查是否为`帖子`页面

### getTid  `page.getTid([url])`
获取帖子tid,不为帖子页面返回 `undefined`

### getFid  `page.getFid([url])`
获取版块fid,不为版块页面返回 `undefined`

