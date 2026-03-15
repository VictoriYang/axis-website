# DiT4DiT
**Jointly Modeling Video Dynamics and Actions for Generalizable Robot Control**

- **论文**: [arXiv:2603.10448](https://arxiv.org/abs/2603.10448)
- **作者**: Teli Ma, Jia Zheng, Zifan Wang, Chuili Jiang, Andy Cui, Junwei Liang, Shuo Yang

## 核心观点
- VLA 模型从**静态图像-文本预训练**继承表示，物理动力学只能从有限的动作数据学习
- 生成式视频模型编码丰富的**时空结构**和**隐式物理**，是更好的基础
- 视频生成可以作为机器人策略学习的**有效 scaling proxy**

## 方法：Video-Action 级联框架

### 架构
- **视频 Diffusion Transformer** + **动作 Diffusion Transformer** 统一级联
- 不依赖重建的未来帧

### 关键创新
1. 从视频生成过程中提取**中间去噪特征**，作为动作预测的**时间 grounding 条件**
2. **Dual flow-matching objective**：
   - 解耦的时间步和噪声尺度
   - 视频预测、隐藏状态提取、动作推理联合训练

## 实验结果

| Benchmark | 成功率 |
|-----------|--------|
| LIBERO | 98.6% |
| RoboCasa GR1 | 50.8% |

- **样本效率提升 10x+**
- **收敛速度提升 7x**
- 真实机器人 Unitree G1 上具有优越的零样本泛化能力

## 对 Axis 的价值
- 视频生成作为动作学习的 scaling proxy
- 用更少数据达到更好效果
- 联合建模视频动态和动作的思路
