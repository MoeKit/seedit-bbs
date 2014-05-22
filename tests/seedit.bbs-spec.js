var bbs = require('index');
var expect = require('expect');
describe('normal usage', function() {
    it('is node', function() {
        expect(bbs.page).to.be.an('object');
        expect(bbs.page.isTopic).to.be.a('function');
        expect(bbs.page.isNode('http://bbs.seedit.com/forum.php?mod=forumdisplay&fid=24&filter=typeid&typeid=551')).to.be(true);
        expect(bbs.page.isNode('http://bbs.seedit.com/forum.php?mod=forumdisplay&fid=2258&filter=sortid&sortid=3')).to.be(true);
        expect(bbs.page.isNode('http://bbs.seedit.com/forum-24-1.html')).to.be(true);
        expect(bbs.page.isNode('http://bbs.seedit.com/forum-24-2.html')).to.be(true);
        expect(bbs.page.isNode('http://bbs.seedit.com/forum-1.html')).to.be(false);
        expect(bbs.page.isNode('http://bbs.seedit.com/forum.php?mod=post&action=newthread&fid=2258')).to.be(false);
        expect(bbs.page.isNode()).to.be(false);
    });

    it('is topic', function() {
        expect(bbs.page.isTopic('http://bbs.seedit.com/thread-37678242-1-1.html')).to.be(true);
        expect(bbs.page.isTopic('http://bbs.seedit.com/thread-37678242-2-1.html')).to.be(true);
        expect(bbs.page.isTopic('http://bbs.seedit.com/forum.php?mod=forumdisplay&fid=1929&page=1')).to.be(false);
        expect(bbs.page.isTopic('http://m.seedit.com/forum.php?mod=forumdisplay&fid=1929&page=1')).to.be(false);
        expect(bbs.page.isTopic()).to.be(false);
    });

    it('get tid', function() {
        expect(bbs.page.getTid('http://bbs.seedit.com/thread-37678242-1-1.html')).to.be('37678242');
        expect(bbs.page.getTid('http://bbs.seedit.com/thread-37678242-2-1.html')).to.be('37678242');
        expect(bbs.page.getTid('http://bbs.seedit.com/forum-24-1.html')).to.be(undefined);
        expect(bbs.page.getTid('http://bbs.seedit.com/forum.php?mod=viewthread&tid=37678652&page=1#pid47535682')).to.be('37678652');
        window.tid = 2233;
        expect(bbs.page.getTid()).to.be('2233');
        window.tid = 2234;
        expect(bbs.page.getTid()).to.be('2234');
        expect(bbs.page.getTid('http://bbs.seedit.com/forum.php?mod=viewthread&tid=37678652&page=1#pid47535682')).to.be('37678652');
    });

    it('get fid', function() {
        expect(bbs.page.getFid('http://bbs.seedit.com/thread-37678242-1-1.html')).to.be(undefined);
        expect(bbs.page.getFid('http://bbs.seedit.com/forum-24-1.html')).to.be('24');
        expect(bbs.page.getFid('http://bbs.seedit.com/forum.php?mod=forumdisplay&fid=24&filter=typeid&typeid=551')).to.be('24');
        window.fid = 2233;
        expect(bbs.page.getFid()).to.be('2233');
        window.fid = 2234;
        expect(bbs.page.getFid()).to.be('2234');
        expect(bbs.page.getFid('http://bbs.seedit.com/forum-24-1.html')).to.be('24');
    });

    it('isWap', function() {
        expect(bbs.page.isWap()).to.be(false);
    });
});
