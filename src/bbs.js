define(function(require, exports, module) {
    var href = document.location.href;
    var nodeReg1 = /forum-(\d+)-\d+.html/;
    var nodeReg2 = /mod=forumdisplay&fid=(\d+)/;
    var topicReg1 = /thread-(\d+)-\d+-\d+.html/;
    var topicReg2 = /mod=viewthread&tid=(\d+)/;
    var getTid = function(url) {
        var tid = undefined;
        href = url || href;
        if (window.tid && !url) {
            tid = window.tid + '';
        } else {
            var temp = href.match(topicReg1);
            if (temp && temp[1]) {
                tid = temp[1];
            } else {
                temp = href.match(topicReg2);
                if (temp && temp[1]) {
                    tid = temp[1];
                }
            }
        }
        return tid;
    };

    var getFid = function(url) {
        var fid = undefined;
        href = url || href;
        if (window.fid && !url) {
            fid = window.fid + '';
        } else {
            var temp = href.match(nodeReg1);
            if (temp && temp[1]) {
                fid = temp[1];
            } else {
                temp = href.match(nodeReg2);
                if (temp && temp[1]) {
                    fid = temp[1];
                }
            }
           
        }
        return fid;
    };
    exports.page = {
        // 是否为wap站
        isWap: function() {
            return /m.seedit.com/.test(href);
        },
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
});
