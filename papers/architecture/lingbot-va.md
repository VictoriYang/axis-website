# LingBot-VA: Causal World Modeling for Robot Control

https://arxiv.org/abs/2601.21998

作者: Lin Li, Qihang Zhang, et al.

---

## 核心观点

- **视频世界建模** + **视觉语言预训练** = 机器人学习的新基础
- 视频世界模型通过理解动作与视觉动态的因果关系来想象未来

## 技术特点

### 架构：自回归扩散框架

1. **共享潜在空间** - 整合视觉和动作 token，使用 **Mixture-of-Transformers (MoT)** 架构
2. **闭环 rollout 机制** - 获取环境反馈与真实观测
3. **异步推理流水线** - 动作预测与电机执行并行化

### 能力

- 长程操作
- 后训练数据效率
- 强泛化能力

## 开源

- 代码: https://github.com/robbyant/lingbot-va
- 主页: https://technology.robbyant.com/lingbot-va
