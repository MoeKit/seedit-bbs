# seedit.bbs [![Build Status](https://secure.travis-ci.org/MoeKit/seedit-bbs.png)](https://travis-ci.org/MoeKit/seedit-bbs)

---

BBS 工具脚本


---

## 使用说明

只用于bbs，即`PC`端和`WAP`端。
对于`get`相关函数，默认参数为`当前页面地址`(document.location.href)。

````javascript
seajs.use('index', function(bbs){
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
获取帖子tid,返回`字符串`,不为帖子页面返回 `undefined`


### getFid  `page.getFid([url])`
获取版块fid,返回`字符串`,不为版块页面返回 `undefined`

