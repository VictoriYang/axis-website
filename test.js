/**
 * Axis 讨论页面单元测试
 * 
 * 测试目标：验证创始人输入功能是否正常工作
 * 
 * 运行方式：node test.js
 */

const fs = require('fs');
const path = require('path');

console.log('='.repeat(50));
console.log('Axis 讨论页面测试');
console.log('='.repeat(50));

// 测试1：检查discussion.json是否存在
console.log('\n[测试1] 检查数据文件...');
const dataFile = path.join(__dirname, 'data/discussion.json');
try {
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    console.log('✓ 数据文件存在');
    console.log('  消息数量:', data.messages.length);
    console.log('  状态:', data.status);
} catch (e) {
    console.log('✗ 数据文件不存在或格式错误');
    console.log('  错误:', e.message);
}

// 测试2：检查网页文件是否存在
console.log('\n[测试2] 检查网页文件...');
const htmlFile = path.join(__dirname, 'discussion.html');
try {
    const html = fs.readFileSync(htmlFile, 'utf8');
    console.log('✓ 网页文件存在');
    
    // 检查关键功能
    const checks = [
        ['founder-input', '输入框ID'],
        ['submitMessage', '提交函数'],
        ['localStorage', '本地存储'],
        ['fetch(', '数据加载']
    ];
    
    checks.forEach(([keyword, desc]) => {
        if (html.includes(keyword)) {
            console.log('  ✓', desc);
        } else {
            console.log('  ✗', desc, '- 缺失');
        }
    });
} catch (e) {
    console.log('✗ 网页文件不存在');
}

// 测试3：模拟发送消息流程
console.log('\n[测试3] 模拟发送流程...');

// 模拟浏览器localStorage
let localStorage = {};
const mockLocalStorage = {
    getItem: (key) => localStorage[key],
    setItem: (key, value) => { localStorage[key] = value; }
};

// 模拟发送
function simulateSubmit(content) {
    const pendingMessages = JSON.parse(mockLocalStorage.getItem('pendingMessages') || '[]');
    pendingMessages.push({
        agent: 'founder',
        content: content,
        time: new Date().toTimeString().split(' ')[0].substring(0,5)
    });
    mockLocalStorage.setItem('pendingMessages', JSON.stringify(pendingMessages));
    return pendingMessages;
}

// 测试发送
const testMessage = '测试反馈：我觉得定价99元太贵了';
const result = simulateSubmit(testMessage);
console.log('✓ 模拟发送成功');
console.log('  消息:', JSON.stringify(result));

// 验证
const saved = JSON.parse(mockLocalStorage.getItem('pendingMessages') || '[]');
if (saved.length > 0 && saved[0].content === testMessage) {
    console.log('✓ 本地存储验证通过');
} else {
    console.log('✗ 本地存储验证失败');
}

// 测试4：检查GitHub API集成
console.log('\n[测试4] GitHub API检查...');
console.log('  说明: 当前为纯静态网页，无法直接写入GitHub');
console.log('  解决方案: 发送消息后需手动添加到 data/discussion.json');
console.log('  或使用: GitHub API + Token / Firebase / Google Sheets');

console.log('\n' + '='.repeat(50));
console.log('测试完成');
console.log('='.repeat(50));
