"use client";

import { useState } from "react";
import styles from "./index.module.scss";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";
import { Word, WordCloud, WordCloudProps } from "@isoterik/react-word-cloud";

const words: Word[] = [
  // ===== 岗位 / 角色 =====
  { text: "游戏开发工程师", value: 400 },
  { text: "前端开发工程师", value: 300 },
  { text: "全栈工程师", value: 200 },
  { text: "游戏培训讲师", value: 120 },
  { text: "技术负责人", value: 150 },

  // ===== 编程语言 =====
  { text: "TypeScript", value: 400 },
  { text: "JavaScript", value: 400 },
  { text: "C++", value: 220 },
  { text: "Rust", value: 220 },
  { text: "Go", value: 220 },
  { text: "Java", value: 180 },
  { text: "Lua", value: 150 },

  // ===== 前端 / 客户端技术 =====
  { text: "Vue", value: 320 },
  { text: "React", value: 300 },
  { text: "Flutter", value: 180 },
  { text: "Three.js", value: 260 },
  { text: "WebGL", value: 220 },
  { text: "Canvas", value: 200 },
  { text: "ECharts", value: 180 },

  // ===== 游戏 / 引擎 =====
  { text: "Cocos2d-x", value: 240 },
  { text: "Unity", value: 200 },
  { text: "游戏UI系统", value: 260 },
  { text: "玩法开发", value: 220 },
  { text: "数值系统", value: 180 },
  { text: "关卡系统", value: 160 },

  // ===== 后端 / 系统能力 =====
  { text: "WebSocket", value: 240 },
  { text: "HTTP API", value: 200 },
  { text: "MySQL", value: 200 },

  // ===== 工程化 & 架构 =====
  { text: "工程化", value: 260 },
  { text: "组件化", value: 240 },
  { text: "模块化设计", value: 220 },
  { text: "性能优化", value: 240 },
  { text: "架构设计", value: 220 },
  { text: "代码规范", value: 180 },

  // ===== 工具 & 平台 =====
  { text: "Docker", value: 180 },
  { text: "Nginx", value: 160 },
  { text: "Linux", value: 160 },
  { text: "Git", value: 200 },

  // ===== 公司 / 经历 =====
  { text: "华益天信", value: 120 },
  { text: "爱贝睿", value: 160 },
  { text: "Mobile Now", value: 160 },
  { text: "先汇智能", value: 160 },

  // ===== 行业 / 业务 =====
  { text: "智能仓储", value: 240 },
  { text: "物流系统", value: 220 },
  { text: "工业中后台", value: 200 },
  { text: "教育科技", value: 180 },
  { text: "游戏化设计", value: 180 },
  { text: "数字大屏", value: 220 },
  { text: "实时监控系统", value: 200 },

  // ===== 系统 / 平台 =====
  { text: "WMS", value: 200 },
  { text: "WCS", value: 200 },
  { text: "RCS", value: 180 },
  { text: "WES", value: 180 },
  { text: "CMS系统", value: 160 },
  { text: "中后台系统", value: 220 },
  { text: "多系统集成", value: 200 },
  { text: "多端适配", value: 180 },

  // ===== 交互 / 可视化 =====
  { text: "数据可视化", value: 240 },
  { text: "复杂交互", value: 220 },
  { text: "实时数据", value: 200 },
  { text: "状态管理", value: 200 },
  { text: "动画系统", value: 180 },

  // ===== 方法论 =====
  { text: "工程思维", value: 200 },
  { text: "工具化", value: 180 },
  { text: "系统抽象", value: 180 },
];

const Work = () => {
  const data = [
    {
      year: "2012-2015",
      desc: `
## 游戏开发工程师  
### 2011.12 – 2014.04｜华益天信（北京）

参与多款单机手游项目开发，负责游戏 UI 系统、核心玩法模块及开发工具建设，配合策划完成需求落地与版本迭代。

---

### 项目一：《斗破苍穹》单机手游
**角色：** 游戏客户端开发工程师    
**技术栈：** Java（Android / Java）

- 负责游戏 **UI 界面系统开发与维护**，包括主界面、角色养成、背包、技能等核心功能模块,参与部分 **玩法逻辑开发**，根据策划文档实现角色属性计算、技能触发与状态表现  
- 配合美术完成 UI 资源接入、适配与性能优化，处理多分辨率与不同机型兼容问题,对 UI 层代码进行模块化拆分，提升代码可读性与复用性，降低后续版本迭代成本  
- 参与版本联调与问题定位，快速修复线上 BUG，保障版本稳定性  

---

### 项目二：《天天噜啊噜》单机手游  
**角色：** 游戏客户端开发工程师  
**技术栈：** Cocos2d-x（C++）

- 基于 Cocos2d-x 引擎完成 **游戏 UI 系统与部分玩法功能开发**  
- 负责战斗界面、关卡界面等模块的交互逻辑实现，优化动画与操作反馈体验,参与 **游戏脚本工具开发**，为策划提供配置化脚本能力，提升玩法调试与内容迭代效率  
- 封装常用 UI 组件与工具函数，减少重复开发工作，提高团队整体开发效率,协助策划进行玩法验证与数值调优，快速响应需求变更  
`,
    },
    {
      year: "2015-2016",
      desc: `
## 游戏开发讲师 & 游戏开发工程师  
### 2014.05 – 2015.03｜翡翠教育（北京）
### 2015.04 – 2015.10｜天宇兴邦（北京）

在翡翠教育期间负责 **Cocos2d-x 游戏开发培训课程研发与授课**，在天宇兴邦参与实际商业项目开发，兼顾 **教学沉淀与工程实践**。

---

### 项目一：《C++基础教程》《Cocos2d-x 游戏实战案例》  
**角色：** 游戏开发讲师 / 课程研发  
**技术栈：** C++、Cocos2d-x、Lua

- 负责 **C++ 基础到游戏开发的课程体系设计**，覆盖语言基础、引擎结构、渲染流程与常用模块，设计并实现多个 **Cocos2d-x 实战教学案例**，帮助学员从零完成完整游戏 Demo  
- 讲解游戏 UI 系统、事件系统、动画系统等核心模块，强化学员工程化开发思维，将商业项目中的开发经验抽象为教学内容，提高课程实用性与可落地性  

---

### 项目二：《手势消除塔防》  
**角色：** 游戏客户端开发工程师  
**技术栈：** Cocos2d-x（C++

- 基于 Cocos2d-x 引擎完成 **游戏核心系统主程开发** ，负责 **战斗系统设计与实现**，包括单位行为、攻击判定、技能触发与状态管理  
- 设计并实现 **关卡脚本工具**，支持关卡配置化与快速调试，降低策划与程序协作成本，封装通用逻辑模块，提升代码复用性，支持后续内容扩展，配合策划进行玩法验证与数值调优，推动版本迭代  
      `,
    },
    {
      year: "2016-2017",
      desc: `
## 在日本流浪、体验生活
### 圆梦之旅，感受异国风味
      `,
    },
    {
      year: "2017-2021",
      desc: `
## 游戏开发工程师 & 前端开发工程师  
### 2017.08 – 2021.03｜安人心智（北京）

在公司负责多款 **亲子互动游戏与在线教育产品** 的研发工作，覆盖游戏客户端、Web 前端及小程序等形态，参与从需求落地到系统迭代的完整开发流程。

---

### 项目一：《说英语的小狐狸》  
**角色：** 游戏客户端开发工程师  
**技术栈：** Cocos2d-x（C++）

- 基于 Cocos2d-x 引擎完成 **游戏核心系统主程开发**，负责整体游戏架构与主要功能模块实现，结合 **摄像头识别与语音识别技术**，实现实体场景中单词识别与儿童发音识别，并驱动关卡交互与反馈机制  
- 设计并实现 **关卡脚本工具**，支持关卡内容配置化、快速调试与扩展，显著提升关卡制作效率，配合策划与教研团队进行玩法验证与体验优化，持续迭代产品版本  

---

### 项目二：《开智学堂》  
**角色：** 前端开发工程师  
**技术栈：** React + TypeScript

- 参与 **综合在线授课平台** 的前端系统研发，负责核心页面与业务模块开发，基于 React 与 TypeScript 构建可维护的前端架构，提升代码稳定性与可读性  
- 实现课程展示、学习流程与交互逻辑，保障多端使用体验一致性，配合后端完成接口联调与功能落地，支持产品快速迭代  

---

### 项目三：《写匠》  
**角色：** 前端开发工程师  
**技术栈：** React + TypeScript

- 负责 **在线卡片式写作平台** 的前端研发，参与整体功能设计与实现，通过对文章内容进行结构化分析，提取 **词组、发音、语法讲解等多种写作要素**，辅助写作训练  
- 实现多页面协同编辑、内容预览、金句配置等核心功能，优化复杂交互场景下的状态管理与用户体验，提升产品可用性  

---

### 项目四：《在线评估系统》  
**角色：** 前端开发工程师  
**技术栈：** Taro（TypeScript）

- 基于 Taro 框架完成 **在线评估系统** 的前端开发，覆盖 UI 展示与业务逻辑实现，按照产品与教研方案实现评估流程、题目展示与结果反馈  
- 适配多端运行环境，保障系统稳定性与一致性    
      `,
    },
    {
      year: "2021-2023",
      desc: `
## 前端开发工程师  
### 2021.08 – 2023.02｜Mobile Now（湖南·长沙）

公司与多家国际知名品牌合作，参与多款 **品牌官网、小程序及活动系统** 的前端研发，负责需求落地、系统实现与交付质量保障。

---

### 项目一：《轩尼诗甄选会员》  
**角色：** 前端开发工程师  
**技术栈：** 微信小程序（TypeScript）

- 依据客户需求文档完成 **会员制小程序前端系统开发**，实现会员体系、活动系统、签到与抽奖等核心业务模块  
- 参与页面结构与组件拆分设计，提升代码复用性与可维护性，配合后端与产品团队完成接口联调与版本迭代，保障项目按期交付，优化交互流程与用户体验，满足品牌级产品规范要求  

---

### 项目二：《DFS 全球门户网站》  
**角色：** 前端开发工程师  
**技术栈：** Vue（TypeScript）

- 参与 **全球门户网站前端系统开发**，支持多地区、多语言内容展示  
- 对接 Contentful CMS，实现内容配置化与动态渲染，设计并实现多组件组合能力，支持 **定制化页面快速生成**，保证在不同终端与浏览器环境下的兼容性与稳定性，配合设计与客户团队完成多轮交付与验收  
- 迭代更新网站，通过脚本实现一份代码，多站点部署，优化网站，支持WCAG无障碍阅读功能

      `,
    },
    {
      year: "2023-今天",
      desc: `
## 前端开发工程师  
### 2023.08 – 至今｜先汇智能（湖南·长沙）  

公司专注于物流规划、产品设计与软件系统研发，负责公司 **智能仓储与物流相关中后台系统** 的前端研发工作，参与多个核心业务系统的建设与迭代。

---

### 项目一：《电子播种墙系统》  
**角色：** 前端开发工程师  
**技术栈：** Vue（TypeScript）

- 负责 **社区电商网点与门店数据汇总平台** 的前端系统研发，根据业务需求设计并实现 **数字大屏与数据管理模块**，支持实时数据展示与运营分析  
- 参与页面结构与组件抽象，提升系统可扩展性与维护性，配合后端完成接口联调，保障数据准确性与系统稳定性  

---

### 项目二：《WMS 仓储管理系统》  
**角色：** 前端开发工程师  
**技术栈：** Vue（TypeScript）/ UniApp（TypeScript）

- 参与 **仓储管理系统（WMS）** 的前端架构与功能开发，实现出入库、库存管理、基础数据配置等核心业务模块  
- 同时支持 Web 管理后台与移动端应用，提升仓库作业灵活性，配合业务人员持续优化操作流程与使用体验  

---

### 项目三：《WCS 仓储控制系统》  
**角色：** 前端开发工程师  
**技术栈：** Vue（TypeScript）/ UniApp（TypeScript）

- 参与 **仓储控制系统（WCS）** 的前端开发，面向播种、输送等仓储设备，实现设备状态监控、任务展示与异常信息反馈等功能模块  
- 处理高频状态更新与复杂业务交互，保障系统实时性与稳定性，与后端及现场实施人员协作，支持系统落地与调试  

---

### 项目四：《RCS 机器人控制系统》  
**角色：** 前端开发工程师  
**技术栈：** Vue（TypeScript）

- 负责 **无人叉车 / 机器人调度与监控系统** 的前端管理后台开发，实现设备运行状态、任务调度与监控界面展示  
- 优化复杂设备数据的可视化表达，提升运维与调度效率，支持多设备并行管理与异常处理  

---

### 项目五：《WES 仓储综合管理系统》  
**角色：** 前端开发工程师  
**技术栈：** Vue（TypeScript）

- 参与 **仓储执行系统（WES）** 的前端研发，整合 WMS、WCS、RCS 等多个子系统，实现多仓切换、统一视图与跨系统数据展示  
- 通过系统整合降低多系统操作成本，提升整体业务协同效率，推动前端侧的模块复用与工程化规范建设  
      `,
    },
  ];

  const [hoverInDotIndex, setHoverInDotIndex] = useState<number>(-1);

  const renderInfo = () => {
    if (hoverInDotIndex === -1) {
      return null;
    }
    const item = data[hoverInDotIndex];
    return (
      <>
        <div className="markdown-body">
          <Markdown rehypePlugins={[remarkGfm]}>{item.desc}</Markdown>
        </div>
      </>
    );
  };

  const rotationWeights: number[] = [0, 0, 90, 270];
  const resolveRotate: WordCloudProps["rotate"] = () => {
    return rotationWeights[Math.floor(Math.random() * rotationWeights.length)];
  };
  const renderWordCloud = () => {
    return (
      <div className={styles["info-word-cloud"]}>
        <WordCloud
          words={words}
          width={700}
          height={200}
          fill={"white"}
          transition="all .3s ease"
          timeInterval={1}
          rotate={resolveRotate}
          random={Math.random}
        />
      </div>
    );
  };

  return (
    <>
      <div className={styles["timeline-container"]}>
        <div className={styles["line"]}></div>
        <div className={styles["dot-container"]}>
          {data.map((item, index) => (
            <div key={index} className={styles["dot-wrapper"]}>
              <div
                className={styles["dot"]}
                onMouseEnter={() => setHoverInDotIndex(index)}
              ></div>
              <span className={styles["year"]}>{item.year}</span>
            </div>
          ))}
        </div>
        {renderWordCloud()}
        <div className={styles["info-background"]}>
          <div className={styles["info-container"]}>{renderInfo()}</div>
        </div>
      </div>
    </>
  );
};

export default Work;
