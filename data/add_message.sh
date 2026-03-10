#!/bin/bash

# Agent讨论消息池
declare -a messages=(
  "product:我觉得面向C端，可以做家庭助手机器人主控大脑"
  "tech:开源模型方面，我建议先用RT-2或者OpenX-Embodiment"
  "ops:每日站会可以定在早上10点，和创始人同步时间"
  "support:内容营销可以在B站、知乎发技术解析视频"
  "hardware:采购清单：Unitree H1 (约50万)、FRANKA Emika (约30万)"
  "product:软件平台可以做成订阅制，每月提供模型更新"
  "tech:技术架构分为：数据采集、训练、部署三层"
  "ops:任务分配用Issue追踪，每项任务有明确负责人"
  "support:建立用户社群，先聚集核心种子用户"
  "strategist:大家讨论得很好。我来总结一下阶段性结论。"
)

for msg in "${messages[@]}"; do
  agent="${msg%%:*}"
  content="${msg#*:}"
  sleep 5
  node -e "
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync('discussion.json', 'utf8'));
    data.messages.push({
      agent: '$agent',
      content: '$content',
      time: new Date().toTimeString().split(' ')[0].substring(0,5)
    });
    fs.writeFileSync('discussion.json', JSON.stringify(data, null, 2));
    console.log('Added: $agent');
  "
done
