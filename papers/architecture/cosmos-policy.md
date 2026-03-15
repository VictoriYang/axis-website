# Cosmos Policy: World Model + Policy for Autonomous Systems

https://research.nvidia.com/labs/dir/cosmos-policy/

作者: NVIDIA Deep Imagination Research

---

## 核心观点

- **世界模型 + 策略模型**：联合建模物理世界的理解和决策
- 目标：实现自动驾驶和机器人的通用物理 AI
- 基于 NVIDIA Cosmos 世界模型系列

## 技术特点

### 组合式架构

- **World Model**: 理解物理世界规律，预测未来状态
- **Policy Model**: 基于世界理解生成动作决策
- 可组合使用，适应不同任务

### 应用场景

1. **自动驾驶** - 场景理解 + 运动规划
2. **机器人控制** - 物理交互决策
3. **通用具身智能** - 理解物理世界并行动

### 与 Cosmos-Transfer 的关系

- **Cosmos-Transfer**: 条件世界生成（生成模型）
- **Cosmos Policy**: 世界理解 + 动作策略（理解+决策）

## 开源

- 即将发布模型和代码

## 与具身智能的关系

Cosmos Policy 可以用于：
- 机器人世界理解
- 动作规划和决策
- 物理交互任务
- 自动驾驶系统
