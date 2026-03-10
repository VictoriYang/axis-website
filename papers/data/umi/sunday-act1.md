# Sunday Robotics - ACT-1: A Robot Foundation Model Trained on Zero Robot Data

https://www.sunday.ai/journal/no-robot-data

---

## 核心观点

**数据是机器人发展的瓶颈**

- 遥操作有规模化困局：没有机器人无法获取数据，没有数据无法训练机器人
- 关键洞察：解决 "embodiment mismatch"（本体形态不匹配）问题

## Skill Capture Glove

- 让人类佩戴手套直接采集手部动作数据
- 手套与机器人手几何形状和传感器布局完全一致
- 消除数据转换gap

## Skill Transform

- 将手套采集的原始数据（运动学和视觉）对齐到机器人
- 去除人类特有细节
- 90% 成功率将人类数据转换为机器人数据

## ACT-1 成果

- Table-to-Dishwasher：33个独特动作、68个总操作、21个不同物体、130英尺导航
- 零样本泛化到新家庭（Airbnb部署）
- 高难度任务：叠袜子、萃取浓缩咖啡

## 关键数字

- 90% 数据转换成功率
- 33 unique / 68 total dexterous interactions
- 21 different objects
- 130 ft navigation
