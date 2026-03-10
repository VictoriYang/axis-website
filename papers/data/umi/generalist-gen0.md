# Generalist AI - GEN-0: Embodied Foundation Models That Scale

https://generalistai.com/blog/nov-04-2025-GEN-0

---

## 核心观点

- 机器人基础模型需要从视觉-语言预训练转向 **高保真物理交互数据**
- 建立机器人领域的 **scaling laws**：更多数据和计算 → 可预测的性能提升

## 关键数据

- **270,000 小时** 真实世界操作数据
- 每周新增 **10,000 小时**
- 6 DoF, 7 DoF, 16+ DoF 半人形机器人

## Scaling Laws

### 智能阈值 (Intelligence Threshold)
- 1B 模型：数据过载时出现 "ossification"（僵化），无法吸收新信息
- 6B 模型：开始受益于预训练，展示强大多任务能力
- 7B+ 模型：能够内化大规模预训练数据，仅需少量后训练即可迁移

### 预训练-后训练幂律
- 预训练数据量与后训练性能呈强幂律关系
- 550+ 小时后训练数据可达 99% 峰值性能

## Harmonic Reasoning

- 同时思考和行动的 **谐波推理**
- 异步、连续时间的感觉和动作 token 流
- 可扩展到大模型，无需 System1-System2 架构

## Cross-Embodiment

- 架构天然支持不同机器人
- 在 6DoF, 7DoF, 16+DoF 半人形机器人上测试

## 训练基础设施

- 自定义硬件、dataloader、网络基础设施
- O(10K) 核心持续多模态数据处理
- 压缩数十 PB 数据
- 每天可吸收 **6.85 年** 真实世界操作经验
