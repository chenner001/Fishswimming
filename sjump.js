/**
 * 加密搜索逻辑
 * 调用方法：encryptedSearch("您的搜索词");
 */
const _0x1f3a = [
    '\x72\x65\x70\x6c\x61\x63\x65', 
    '\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65', 
    '\u590f\u552f', 
    '\x78\x69\x61\x77\x65\x69\x31\x2e\x68\x74\x6d\x6c', 
    '\x66\x6d\x39\x38\x2e\x36', 
    '\x46\x4d\x39\x38\x2e\x36\x2e\x68\x74\x6d\x6c', 
    '\x72\x65\x64\x68\x65\x72\x72\x69\x6e\x67', 
    '\x62\x62\x73\x2e\x68\x74\x6d\x6c', 
    '\u6c5f\u57ce\u5b9e\u9a8c\u4e2d\u5b66', 
    '\x78\x75\x65\x78\x69\x61\x6f\x31\x2e\x68\x74\x6d\x6c', 
    '\u949f\u591c', 
    '\x7a\x68\x6f\x6e\x67\x79\x65\x31\x2e\x68\x74\x6d\x6c', 
    '\u4e07\u76db\u96c6\u56e2', 
    '\x77\x61\x6e\x68\x61\x6f\x31\x2e\x68\x74\x6d\x6c', 
    '\u6797\u5a1c', // 林娜
    '\x6c\x69\x6e\x6e\x61\x31\x2e\x68\x74\x6d\x6c', // linna1.html
    '\u6c5f\u57ce\u7b2c\u4e00\u4eba\u6c11\u533b\u9662', 
    '\x6a\x69\x61\x6e\x67\x63\x68\x65\x6e\x67\x31\x2e\x68\x74\x6d\x6c', 
    '\x6f\x70\x65\x6e', 
    '\x5f\x62\x6c\x61\x6e\x6b'
];

function encryptedSearch(rawKeyword) {
    if(typeof rawKeyword !== 'string') return;
    
    var _0x9d2c = {};
    _0x9d2c[_0x1f3a[2]] = _0x1f3a[3];
    _0x9d2c[_0x1f3a[4]] = _0x1f3a[5];
    _0x9d2c[_0x1f3a[6]] = _0x1f3a[7];
    _0x9d2c[_0x1f3a[8]] = _0x1f3a[9];
    _0x9d2c[_0x1f3a[10]] = _0x1f3a[11];
    _0x9d2c[_0x1f3a[12]] = _0x1f3a[13];
    _0x9d2c[_0x1f3a[14]] = _0x1f3a[15]; // 林娜 -> linna1.html
    _0x9d2c[_0x1f3a[16]] = _0x1f3a[17];
    
    // 正则过滤所有空格符并统一转为小写
    var processedStr = rawKeyword[_0x1f3a[0]](/\s+/g, '')[_0x1f3a[1]]();
    
    // 若匹配成功，在新标签页打开对应的链接
    if (_0x9d2c[processedStr]) {
        window[_0x1f3a[18]](_0x9d2c[processedStr], _0x1f3a[19]);
    } else {
        // ========== 拒绝使用系统 alert，改用网页内嵌提示框 ==========
        
        // 1. 如果之前已经弹了提示框，先把它删掉，防止点多了堆叠
        var oldTip = document.getElementById('custom-qiandu-tip');
        if(oldTip) oldTip.remove();

        // 2. 创建一个新的 div 元素
        var tip = document.createElement('div');
        tip.id = 'custom-qiandu-tip';
        // 使用 innerText 避免 XSS 注入，同时展示玩家搜错的词
        tip.innerText = '抱歉，未搜索到与“' + rawKeyword + '”相关的网页。';
        
        // 3. 赋予它 2006 年常见的警告框 UI 样式
        tip.style.position = 'fixed';
        tip.style.top = '35%';               // 屏幕偏上方
        tip.style.left = '50%';
        tip.style.transform = 'translate(-50%, -50%)'; // 绝对居中
        tip.style.backgroundColor = '#fdfdfd';
        tip.style.border = '1px solid #cc0000'; // 经典红色警告边框
        tip.style.padding = '12px 25px';
        tip.style.fontSize = '14px';
        tip.style.fontFamily = '"SimSun", "宋体"';
        tip.style.color = '#cc0000';
        tip.style.boxShadow = '2px 2px 4px rgba(0,0,0,0.2)'; // 微微的复古阴影
        tip.style.zIndex = '9999';
        
        // 4. 将提示框挂载到网页上
        document.body.appendChild(tip);
        
        // 5. 设定 2.5 秒后自动消失
        setTimeout(function(){
            if(tip.parentNode) tip.parentNode.removeChild(tip);
        }, 2500);
    }
}
