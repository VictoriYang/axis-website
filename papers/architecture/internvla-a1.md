# InternVLA-A1: Unifying Understanding, Generation and Action

https://arxiv.org/abs/2601.02456

作者: Junhao Cai, Jiafei Cao, et al. (Shanghai AI Lab)

---

## 核心观点

- 现有 VLA 基于 MLLM，擅长语义理解但缺乏物理世界动态推理能力
- World Models (视频预测) 缺乏语义 grounding，且受预测误差影响脆弱
- **解决方案**：统一理解、生成与动作

## 技术特点

### 架构：统一 Mixture-of-Transformers

协调三个专家：
1. **场景理解** - 语义理解
2. **视觉前瞻生成** - 世界建模/视频预测
3. **动作执行** - 机器人控制

通过**统一掩码自注意力机制**无缝交互

### 预训练数据 (692M frames)

- 真实机器人数据
- 合成仿真数据
- 人类视频

混合训练策略：利用合成数据多样性 + 最小化 sim-to-real gap

### 模型规模

- 基于 InternVL3 和 Qwen3-VL
- 2B 和 3B 参数规模

## 实验结果

- 12 个真实机器人任务 + 仿真基准
- 相比 π0.5：
  - 静态操作任务 +4.4%
  - RoboTwin 2.0 仿真 +2.6%
  - 动态操作任务 +26.7%

## 主页

https://internrobotics.github.io/internvla-a1.github.io/
