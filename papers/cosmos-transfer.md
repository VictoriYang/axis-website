# Cosmos-Transfer1: Conditional World Generation with Adaptive Multimodal Control

https://arxiv.org/abs/2503.14492

作者: NVIDIA (Hassan Abu Alhaija, Dieter Fox, Ming-Yu Liu, 等)

---

## 核心观点

- **条件世界生成**：基于多种空间控制输入生成世界模拟
- 控制输入可以是分割图、深度图、边缘图等多种模态
- 空间条件方案是**自适应和可定制**的

## 技术特点

### 自适应多模态控制

- 允许在不同空间位置**不同权重**地加权不同条件输入
- 实现高度可控的世界生成
- 适用于各种 world-to-world 转换用例

### 应用场景

1. **机器人 Sim2Real** - 仿真到真实迁移
2. **自动驾驶数据增强** - 生成多样化场景

### 推理扩展

- 支持实时世界生成（使用 NVIDIA GB200 NVL72）

## 开源

- 模型和代码已开源：https://github.com/nvidia-cosmos/cosmos-transfer1

## 与具身智能的关系

Cosmos-Transfer 可以用于：
- 生成多样化训练场景
- 填补真实数据分布的空缺
- Sim2Real 迁移
- 低成本大规模数据生成
