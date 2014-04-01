define("moe/seedit.bbs/1.0.0/seedit.bbs-debug", [], function(require, exports, module) {
    var href = document.location.href;
    var nodeReg1 = /forum-(\d+)-\d+.html/;
    var nodeReg2 = /mod=forumdisplay&fid=(\d+)/;
    var topicReg1 = /thread-(\d+)-\d+-\d+.html/;
    var topicReg2 = /mod=viewthread&tid=(\d+)/;
    var getTid = function(url) {
        href = url || href;
        if (window.tid) {
            return window.tid;
        }
        var temp = href.match(topicReg1);
        if (temp && temp[1]) {
            return temp[1];
        }
        temp = href.match(topicReg2);
        if (temp && temp[1]) {
            return temp[1];
        }
        return undefined;
    };
    var getFid = function(url) {
        href = url || href;
        if (window.fid) {
            return window.fid;
        }
        var temp = href.match(nodeReg1);
        if (temp && temp[1]) {
            return temp[1];
        }
        temp = href.match(nodeReg2);
        if (temp && temp[1]) {
            return temp[1];
        }
        return undefined;
    };
    exports.page = {
        // 是否为wap站
        isWap: function() {},
        // 是否为版块页面
        isNode: function(url) {
            href = url || href;
            return nodeReg1.test(href) || nodeReg2.test(href);
        },
        // 是否为帖子页面
        isTopic: function(url) {
            href = url || href;
            return topicReg1.test(href) || topicReg2.test(href);
        },
        // 获得tid
        getTid: getTid,
        // 获得fid
        getFid: getFid
    };
    exports.user = {
        // 是否已经登录
        isLogin: function() {
            var cookie = document.cookie;
            return /MTap_c401_auth/.test(cookie) || /seedit_auth/.test(cookie);
        }
    };
});
