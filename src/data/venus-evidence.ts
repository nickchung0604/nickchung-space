export const venusEvidence = {
  "research": [
    "2026-05-20",
    "Co-creation questionnaire",
    "共創問卷",
    "共创问卷",
    "The questionnaire began with experience and current behaviors, then separated reactions to the proposed experience from willingness to pay. A follow-up asked respondents who valued lower latency what maximum price band they would accept. That was a conditional question, not a sales forecast.",
    "問卷先問既有使用經驗與行為，再把對新體驗的反應和付費意願分開。認同低延遲的受訪者才會被追問最高能接受的價格區間。這是條件題，不能直接當作銷量預測。",
    "问卷先问已有使用经验和行为，再把对新体验的反应与付费意愿分开。认可低延迟的受访者才会被追问最高可接受的价格区间。这是条件题，不能直接作为销量预测。"
  ],
  "scope": [
    "2026-05-22 → 2026-06-03",
    "Project charter and concept revision",
    "立項書與概念定義改版",
    "立项书与概念定义改版",
    "The first question was whether voice, gaze and basic movement could form one coherent interaction. The May charter included a smart head, a damped body, sound localization and a 0.5 m proximity sensor. By June 3 the concept had narrowed to an independent head, with local voice as the primary input and an IMU as a supporting signal. The revision dropped sound localization and extensive torso wiring. I narrowed the build to the functions needed to test the interaction: local voice, a supporting IMU and fixed gaze directions based on posture. This avoided committing to sound localization or extensive torso wiring before the interaction worked. The engineering review focused on response latency, audio–motion synchronization and motor audibility against a roughly 40 dB quiet-room reference. Those were design criteria, with no measured pass result in this document.",
    "第一輪要先回答：語音、視線與基本動作能否構成連貫互動？5 月立項書把智慧頭部、阻尼身體、聲源定位及 0.5 公尺近距感測都列入方案。6 月 3 日收斂到獨立頭部，以本地語音為主、IMU 為輔，取消聲源定位和大範圍軀幹布線，改用隨姿態選擇的固定注視方向。我先保留能驗證互動的語音、IMU 和固定注視方向，暫緩聲源定位與軀幹布線。交給研發驗證的是反應延遲、聲音與動作同步，以及在約 40 dB 的安靜環境下能否察覺馬達聲。這些是設計條件，文件沒有記錄實測通過。",
    "第一轮要先回答：语音、视线和基本动作能否构成连贯交互？5 月立项书把智能头部、阻尼身体、声源定位和 0.5 米近距感应纳入方案。6 月 3 日收敛到独立头部，以本地语音为主、IMU 为辅，取消声源定位和大范围躯干布线，改用随姿态选择的固定注视方向。我先保留能验证交互的语音、IMU 和固定注视方向，暂缓声源定位与躯干布线。交给研发验证的是响应延迟、声音与动作同步，以及在约 40 dB 的安静环境中能否听见电机声。这些是设计条件，文件没有记录实测通过。"
  ],
  "metrics": [
    "2026-06-18",
    "Scenario and success-metric review",
    "情境與成功指標會議",
    "场景与成功指标会议",
    "The meeting mapped four core scenarios from start to finish. It added a temporary mute control, a full shutdown path and explicit voice confirmation for sensitive mode changes. To make interruption observable, we proposed counting interruptions and tracking recovery, usage frequency and revisits. P0 meant required; P1 meant valuable but lower priority. The expression module had 12 identified factors at this point, with the final expression set still open.",
    "會議把起始至結束拆成四個核心情境，加入暫時靜音、完全關機，以及敏感模式切換前的明確語音確認。把「不中斷」拆成中斷次數、恢復效率、使用頻率與回訪。P0 是必要需求，P1 是加分項；表情模組當時已列出 12 個影響因素，表情種類和數量仍待確認。",
    "会议将开始到结束拆成四个核心场景，加入临时静音、彻底关机和切换敏感模式前的明确语音确认。把不中断体验拆成中断次数、恢复效率、使用频率和回访。P0 是必要需求，P1 是加分项；表情模块当时列出了 12 个影响因素，表情的种类和数量仍待确认。"
  ],
  "research-update": [
    "2026-07-01",
    "Research findings and requirement revision",
    "使用者研究與需求修訂",
    "用户调研与需求修订",
    "The July note added an end-of-session scenario and called out weight reduction as a product requirement. It recorded an interaction proposal from a participant: use voice to indicate intent and use voice again to confirm the switch. That proposal became a candidate requirement, with the participant identity omitted here.",
    "7 月筆記將互動結束後的情境納入需求，也把減重列為產品議題。一位參與者提出先以語音表達切換意圖，再以語音確認的做法，列為待驗證的互動需求。",
    "7 月笔记将互动结束后的场景纳入需求，也把减重列为产品议题。一位参与者提出先用语音表达切换意图，再用语音确认，列为待验证的交互需求。"
  ],
  "updates": [
    "Design specification",
    "Device update experience",
    "裝置更新體驗規格",
    "设备更新体验规范",
    "The spec walked through unboxing and Wi-Fi setup, account registration, age eligibility and daily use. It distinguished internal version names from user-visible wording, called for an official download source and limited status messaging to what the user needed to know.",
    "規格依序寫開箱配網、帳號註冊、年齡資格與日常使用，另列內部版本名稱和畫面用語的對照。下載來源限定官方，連線畫面只顯示使用者需要知道的狀態。",
    "规范依次写明开箱配网、账号注册、年龄资格与日常使用，并分别定义内部版本名称和用户界面措辞。下载来源限定官方，连接状态只显示用户需要知道的信息。"
  ],
  "service": [
    "Model",
    "After-sales cost model",
    "售後財務試算",
    "售后财务测算",
    "The model used RMB 60,000 per unit. A 5–7% proposed reserve equals RMB 3,000–4,200 per unit. At the midpoint of 6% and an assumed first-year hardware failure rate of 15%, the reserve allocates RMB 24,000 per expected failure. It compared return-to-center logistics with on-site repair, with labor, spare parts and protective transport as cost drivers. These were planning assumptions, not operating results.",
    "試算以單台人民幣 6 萬元為基準，建議提撥 5%–7%，即每台 3,000–4,200 元。若取 6% 並假設首年硬體故障率為 15%，則每台預期故障機可分攤 24,000 元。比較到府換修與寄回維修中心，成本包括人工、備件與專用運輸。這些是規劃假設。",
    "测算以单台人民币 6 万元为基准，建议预留 5%–7%，即每台 3,000–4,200 元。按 6% 和假设的首年硬件故障率 15% 计算，每台预期故障机对应 24,000 元预算。模型比较上门换修与寄回维修中心，成本包括人工、备件与专用运输。这些是规划假设。"
  ]
};
export const venusEvidenceIds = Object.keys(venusEvidence) as (keyof typeof venusEvidence)[];
