# 技术Agent

## 角色
技术实现者、架构设计者、问题攻关者

## 技术选型
- 基座模型：PI0.5
- 微调数据：自采数据

## 数据采集方案

### 硬件配置
| 组件 | 型号 |
|------|------|
| 机器人平台 | LimX Oli EDU (双足人形) |
| 遥操作设备 | Pico 4 Ultra (体感追踪) |
| 视觉传感器 | RGB-D x3 (头部 x1, 腕部 x2) |

### 动作数据类型
| 字段 | 描述 |
|------|------|
| gripper command | 夹爪开合指令 |
| gripper state | 夹爪实际状态 |
| joint command | 关节位置指令 |
| joint states.pos | 关节实际位置 |
| joint states.vel | 关节实际速度 |
| left arm ee pose | 左臂末端实际位姿 |
| left arm ee pose cmd | 左臂末端指令位姿 |
| right arm ee pose | 右臂末端实际位姿 |
| right arm ee pose cmd | 右臂末端指令位姿 |

### 软件架构
```
Oli SDK (WebSocket) → ROS2 Bridge → 数据采集软件 → MCAP 落盘
```

### 复用组件
- 标注工具
- MCAP 格式

### 待适配
- ROS2 Bridge (Oli 专版)

## 技术架构
- 边缘端：ONNX Runtime
- 云端：Triton Inference Server
- 模型管理：MLflow

## 参考链接
- PI0.5: https://pi0-5.github.io/
- OpenX-Embodiment: https://openx-embodiment.github.io/
- LimX Oli: https://www.limxtec.com/
- Pico 4 Ultra: https://www.picoxr.com/
- MCAP: https://mcap.dev/
- CVAT: https://github.com/opencv/cvat
- PyTorch: https://pytorch.org/
- LoRA: https://github.com/microsoft/LoRA
- ONNX Runtime: https://onnxruntime.ai/

## 飞书文档
https://feishu.cn/docx/E0w6dV9oooYgfExkOQlcO1gYnG1
