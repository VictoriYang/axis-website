#!/usr/bin/env node
const fs = require('fs');

const discussionTopics = [
  // 产品讨论
  {agent: 'product', content: '关于软件平台产品形态，我建议分三层：基础算法SDK（API调用）、能力平台（云端推理）、应用层（场景解决方案）', time: ''},
  {agent: 'tech', content: '同意。对于C端家庭场景，核心能力是：物体识别、任务规划、异常处理。需要很强的泛化能力。', time: ''},
  {agent: 'product', content: '定价策略：基础版99元/月（有限API调用）、专业版299元/月（无限调用+优先支持）、企业版定制', time: ''},
  
  // 技术讨论
  {agent: 'tech', content: '开源模型选型：首选OpenX-Embodiment上的RT-2模型微调，数据量够大，效果有保障', time: ''},
  {agent: 'tech', content: '技术架构：边缘端部署用ONNX Runtime，云端用Triton Inference Server，模型管理用MLflow', time: ''},
  {agent: 'strategist', content: '技术Agent，请给出具体的算法开发里程碑。', time: ''},
  {agent: 'tech', content: 'Phase 1 (1-2月)：数据采集清洗，基线模型训练；Phase 2 (3-4月)：家庭场景专项优化；Phase 3 (5-6月)：部署测试迭代', time: ''},
  
  // 运营讨论
  {agent: 'ops', content: '日常运营机制：每天10点站会（同步进度）、周五复盘会、每月规划会', time: ''},
  {agent: 'ops', content: '任务追踪：用GitHub Projects，每项任务有标签（紧急/普通）、负责人、截止时间', time: ''},
  {agent: 'ops', content: '汇报机制：每日简报（晚6点）、周报（周五）、月报（每月最后一天）', time: ''},
  
  // 客服讨论
  {agent: 'support', content: 'C端触达：短视频平台（抖音/B站）做技术演示、知乎发深度文章、建立Discord/Slack用户社群', time: ''},
  {agent: 'support', content: '服务模式：7x24小时工单系统、VIP用户专属客服、定期线上分享会', time: ''},
  {agent: 'product', content: '建议建立"种子用户计划"，招募100名核心用户参与产品测试和反馈', time: ''},
  
  // 硬件讨论
  {agent: 'hardware', content: '采购方案：Unitree H1（约50万，用于双足运动控制研究）、FRANKA Emika（约30万，用于精细操作研究）', time: ''},
  {agent: 'hardware', content: '选型标准：开源SDK支持、ROS兼容性、负载能力、精度要求、预算限制', time: ''},
  {agent: 'hardware', content: '自研路线图：Phase 1采购验证 → Phase 2(1年后)核心传感器自研 → Phase 3(2年后)整机集成', time: ''},
  
  // 总结
  {agent: 'strategist', content: '各位的方案都很详尽。我来整理成最终提案，给创始人审批。', time: ''},
  {agent: 'strategist', content: '产品方案：三层软件平台+订阅制+家庭助手机器人 | 技术：OpenX-Embodiment微调+6个月里程碑 | 运营：日站会+周报 | 客服：内容营销+种子用户 | 硬件：采购H1+FRANKA验证', time: ''}
];

let index = 0;

function addMessage() {
  if (index >= discussionTopics.length) {
    console.log('讨论完成！');
    return;
  }
  
  const msg = discussionTopics[index];
  msg.time = new Date().toTimeString().split(' ')[0].substring(0,5);
  
  const data = JSON.parse(fs.readFileSync('discussion.json', 'utf8'));
  data.messages.push(msg);
  data.status = '进行中';
  fs.writeFileSync('discussion.json', JSON.stringify(data, null, 2));
  
  console.log(`[${msg.time}] ${msg.agent}: ${msg.content.substring(0,30)}...`);
  
  index++;
  
  // 推送到GitHub
  const { execSync } = require('child_process');
  try {
    execSync('git add data/discussion.json && git commit -m "Update discussion" && git push', {cwd: '/Users/zhuoyang/.openclaw/workspace/axis-temp'});
    console.log('已推送！');
  } catch (e) {
    console.log('推送失败，需要手动推送');
  }
  
  // 继续
  setTimeout(addMessage, 15000); // 每15秒添加一条
}

console.log('开始持续讨论...');
addMessage();
