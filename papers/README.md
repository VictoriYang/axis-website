# Papers 分类索引

## 📊 数据来源类型

### 遥操作 (Teleoperation)
| 论文 | 公司/机构 | 摘要 |
|------|----------|------|
| [data/teleoperation/pi05.md](./data/teleoperation/pi05.md) | Physical Intelligence | VLA + 开放世界泛化，异构数据联合训练 |

### umi (第一人称视角)
| 论文 | 公司/机构 | 摘要 |
|------|----------|------|
| [data/umi/sunday-act1.md](./data/umi/sunday-act1.md) | Sunday Robotics | Skill Capture Glove + Skill Transform，手套方案 |
| [data/umi/generalist-gen0.md](./data/umi/generalist-gen0.md) | Generalist AI | 270K 小时数据，scaling laws，Harmonic Reasoning |

### Human Video (纯视频)
| 论文 | 公司/机构 | 摘要 |
|------|----------|------|
| [data/human-video/egoscale.md](./data/human-video/egoscale.md) | NVIDIA | 20K+ 小时第一人称视频，涌现迁移能力 |
| [data/human-video/pi-human-to-robot.md](./data/human-video/pi-human-to-robot.md) | Physical Intelligence | VLAs 中人类到机器人迁移的涌现 |

### 合成数据 (Synthetic)
| 论文 | 公司/机构 | 摘要 |
|------|----------|------|
| [data/synthetic/nuin-synthetic.md](./data/synthetic/nuin-synthetic.md) | 诺因智能 | 合成数据路线，诺因创始人访谈 |
| [data/synthetic/cosmos-transfer.md](./data/synthetic/cosmos-transfer.md) | NVIDIA | 条件世界生成，Sim2Real |

---

## 🏗️ 模型架构

| 论文 | 特点 |
|------|------|
| [architecture/lingbot-va.md](./architecture/lingbot-va.md) | 视频世界建模 + MoT 架构，自回归扩散框架 |
| [architecture/internvla-a1.md](./architecture/internvla-a1.md) | 统一理解/生成/动作，三专家 MoT，692M frames 预训练 |

---

## 🎯 技术对标 (Benchmark)

| 工作 | 特点 |
|------|------|
| [benchmark/figure-helix02.md](./benchmark/figure-helix02.md) | Figure Helix 02，客厅整理，端到端全身控制 |

---

## 📁 文件结构

```
papers/
├── README.md
├── data/
│   ├── teleoperation/
│   │   └── pi05.md
│   ├── umi/
│   │   ├── sunday-act1.md
│   │   └── generalist-gen0.md
│   ├── human-video/
│   │   ├── egoscale.md
│   │   ├── egoscale.pdf
│   │   └── pi-human-to-robot.md
│   └── synthetic/
│       ├── nuin-synthetic.md
│       └── cosmos-transfer.md
├── benchmark/
│   └── figure-helix02.md
└── architecture/
    ├── lingbot-va.md
    └── internvla-a1.md
```
