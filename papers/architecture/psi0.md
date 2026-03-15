# Ψ0 (Psi-Zero)
**An Open Foundation Model Towards Universal Humanoid Loco-Manipulation**

- **论文**: [arXiv:2603.12263](https://arxiv.org/abs/2603.12263)
- **作者**: Songlin Wei, Hongyi Jing, Boqian Li, Zhenyu Zhao, Jiageng Mao, Zhenhao Ni, Sicheng He, Jie Liu, Xiawei Liu, Kaidi Kang, Sheng Zang, Weiduo Yuan, Marco Pavone, Di Huang, Yue Wang

## 核心观点
认为直接用大规模人类+人形数据联合训练不是最优解，因为人和人形机器人在**运动学上存在根本差异**。数据效率和模型性能仍然不理想。

## 方法：分阶段训练范式

### Stage 1: VLM 预训练
- 用大规模**自我中心人类视频**进行自回归预训练
- 获得通用化的视觉-动作表示

### Stage 2: Action Expert 微调
- 用**高质量人形机器人数据**微调
- 基于 **flow-based** action expert
- 学习精确的机器人关节控制

## 关键洞察
- **解耦学习**：将学习过程解耦，最大化异构数据源的效用
- **分阶段训练**：不同学习目标对应不同数据源

## 对 Axis 的价值
- 分阶段训练范式可借鉴
- 先学视觉表示，再学动作 expert
