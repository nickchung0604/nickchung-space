export const featuredEvidence: Record<string, Record<string, [string,string,string,string,string,string,string[][]]>> = {
  "delta-supplier-strategy": {
    "cable": [
      "Cable allocation — April, Q2 policy, annual target",
      "線材分配：4 月實績、第二季政策、年度目標",
      "线缆分配：4 月实际、第二季度政策、年度目标",
      "One supplier had 33% in April, 31% under the Q2 policy and a 20% annual target. Two other suppliers moved from 21% and 1% in April to targets of 30% and 8%, respectively. The deck recommended shifting volume toward better pull-in and buffer stock support while retaining access to unique qualified parts.",
      "一家供應商 4 月占 33%，第二季政策為 31%，年度目標降至 20%。另兩家由 21% 和 1% 提高至年度目標 30% 和 8%。簡報建議把部分訂單移給能提前交貨和提供緩衝庫存的供應商，同時保留特殊合格料件的來源。",
      "一家供应商 4 月占 33%，第二季度政策为 31%，年度目标降至 20%。另外两家由 21% 和 1% 提高至年度目标 30% 和 8%。简报建议将部分订单转给能提前交货和提供缓冲库存的供应商，同时保留特殊合格零件的来源。",
      [
        [
          "A",
          "41%",
          "40%",
          "40%"
        ],
        [
          "B",
          "33%",
          "31%",
          "20%"
        ],
        [
          "C",
          "21%",
          "22%",
          "30%"
        ],
        [
          "D",
          "1%",
          "5%",
          "8%"
        ],
        [
          "E",
          "3%",
          "2%",
          "2%"
        ]
      ]
    ],
    "pwb": [
      "Double-sided PWB — qualifications versus delivery",
      "雙面印刷電路板：認證、成本與交貨",
      "双面印刷电路板：认证、成本与交付",
      "The assessment recognized existing approved business and separated that constraint from responsiveness, cost reduction and delivery risk. Two suppliers had delivery or lead-time concerns. The policy set their annual shares at 3% and 5%, even though the latter was described as cost-efficient. April actuals and targets differ because the target represents a planned allocation.",
      "評估先看既有認證與可承接的生意，再分開看回應、降本及交貨風險。兩家有交期問題，年度份額目標分別是 3% 與 5%，其中一家雖有成本優勢，仍維持較低配置。4 月實績與年度目標分欄呈現。",
      "评估先看已有认证和可承接的业务，再分别看响应、降本和交付风险。两家存在交期问题，年度份额目标分别为 3% 和 5%，其中一家虽有成本优势，仍维持较低分配。4 月实际与年度目标分别列示。",
      [
        [
          "A",
          "31%",
          "30%",
          "20%"
        ],
        [
          "B",
          "48%",
          "44%",
          "45%"
        ],
        [
          "C",
          "7%",
          "3%",
          "3%"
        ],
        [
          "D",
          "5%",
          "3%",
          "3%"
        ],
        [
          "E",
          "9%",
          "15%",
          "24%"
        ],
        [
          "F",
          "7%",
          "5%",
          "5%"
        ]
      ]
    ],
    "sheet-metal": [
      "Sheet metal — reduce concentration within qualification limits",
      "鈑金：在認證限制下調整集中度",
      "钣金：在认证限制下调整集中度",
      "The incumbent had 98% of April orders and was the only qualified supplier for a customer’s items. The proposed annual target reduced its share to 84%, with another supplier targeted at 10%. The figures are recommendations from the deck, not post-implementation results. The original table reports rounded monthly shares.",
      "主要供應商拿到 4 月 98% 的訂單，且是某客戶料件的唯一認證來源。策略將其年度目標調到 84%，並將另一家的目標提高到 10%。這是簡報中的分配建議，月占比沿用原表四捨五入數值。",
      "主要供应商拿到 4 月 98% 的订单，且是某客户零件的唯一认证来源。策略将其年度目标调至 84%，并将另一家的目标提高到 10%。这是简报中的分配建议，月占比沿用原表四舍五入数值。",
      [
        [
          "A",
          "98%",
          "92%",
          "84%"
        ],
        [
          "B",
          "2%",
          "4%",
          "4%"
        ],
        [
          "C",
          "0%",
          "2%",
          "10%"
        ],
        [
          "D",
          "0%",
          "2%",
          "2%"
        ]
      ]
    ]
  },
  "footprint-asia": {
    "shipment-plan": [
      "Shipment plan — keep demand and actuals separate",
      "出貨計畫：區分客戶需求與工廠實績",
      "出货计划：区分客户需求与工厂实际",
      "The PM filled the marked fields. MRP represented the customer's requested ship quantity and date; Pick up represented the factory's actual shipped quantity and date. The production plan referenced the MRP baseline and was organized by factory, with all of a factory’s products grouped together.",
      "專案管理負責填寫標記欄位。MRP 記客戶要求的出貨數量與日期，Pick up 記工廠實際出貨數量與日期。生產計畫連回 MRP，按工廠編排，同一家工廠的不同產品列在一起。",
      "项目管理负责填写标记字段。MRP 记录客户要求的出货数量和日期，Pick up 记录工厂实际发货数量和日期。生产计划关联 MRP，按工厂编排，同一工厂的不同产品放在一起。",
      []
    ],
    "production-plan": [
      "Daily production entries for molded fiber",
      "紙漿模塑的每日生產回報",
      "纸浆模塑的每日生产填报",
      "The workbook procedure separated molding, air drying and hot pressing into daily production quantities. The air-drying entry explicitly called for factoring weather into drying days. That made it possible to see whether a shipment gap came from missed molding volume or unfinished downstream stages.",
      "流程筆記分開填寫每日成型、風乾及熱壓數量，並要求估算風乾天數時納入天氣。這樣檢視出貨缺口時，可以往回查是前段成型不足，還是有產品卡在後續製程。",
      "流程笔记分开填报每天的成型、风干和热压数量，并要求估算风干天数时计入天气。发现出货缺口时，可以往回查是前段成型不足，还是产品卡在后续工序。",
      []
    ],
    "handoffs": [
      "Operations reporting proposal — ownership and notifications",
      "營運報表方案：欄位責任與通知",
      "运营报表方案：字段责任与通知",
      "The Feishu requirements asked for suppliers to update shipments and see only their own records, a consolidated status and shipment plan, RFQ progress, and a cost-reduction dashboard feeding a summary. The proposed quality handoff used planned shipments to trigger reminders and attach inspection videos and shipment reports. These are documented design requirements; this note does not establish which features went live.",
      "飛書需求筆記提出讓供應商自行更新出貨、只能看到自己的記錄，並彙整出貨與 RFQ 進度，讓降本看板回填摘要。品質交接則規劃由出貨計畫觸發提醒，並附上檢驗影片與出貨報告。這份是功能需求，尚無法單靠此筆記判定每項功能是否已上線。",
      "飞书需求笔记提出让供应商更新出货、只查看自己的记录，并汇总出货和 RFQ 进度，让降本看板自动汇总。质量交接拟由出货计划触发提醒，并附检验视频和出货报告。这是功能需求，单凭该笔记无法判定每项功能是否上线。",
      []
    ],
    "rfq-records": [
      "Procurement SOP documents identified in the backup",
      "備份中的採購 SOP 文件清單",
      "备份中的采购 SOP 文件清单",
      "The files identified include a main procurement procedure (August 31, 2022), an RFx package template (August 9, 2022), and an RFQ shortlist and quotation scorecard (April 13, 2023). These backup entries are online-only placeholders. The filenames establish the artifacts and dates; their worksheets could not be read from the backup.",
      "備份列有 2022 年 8 月 31 日採購主流程、8 月 9 日 RFx 文件包範本，以及 2023 年 4 月 13 日的 RFQ 入圍名單範本和報價評分表。這些檔案目前是雲端預留項目，已核對檔名與日期，還無法讀取表內內容。",
      "备份列有 2022 年 8 月 31 日采购主流程、8 月 9 日 RFx 文件包模板，以及 2023 年 4 月 13 日的 RFQ 入围名单模板和报价评分表。这些文件目前是云端占位项，已核对文件名和日期，还无法读取表内内容。",
      []
    ]
  }
};
featuredEvidence["ses-malaysia-delivery"] = {
  "order": [
    "July 2 sales record — balance and handoff",
    "7 月 2 日銷售紀錄：尾款與交接",
    "7 月 2 日销售记录：尾款与交接",
    "The record reports balance paid for 20 units, with finance confirmation pending. It assigns marketing-data updates to Nick and technical colleagues, local project updates to the regional team, and white-paper, installation and shipment follow-up to technical operations.",
    "紀錄寫明 20 套尾款已付、財務確認中。我與技術同事負責更新行銷數據；當地團隊更新馬來西亞進度；技術端另跟進白皮書、安裝與出貨。",
    "记录写明 20 套尾款已付、财务确认中。我和技术同事负责更新营销数据；当地团队更新马来西亚进度；技术侧另跟进白皮书、安装与发货。",
    []
  ],
  "demo": [
    "July 11 demo meeting — prototype, test plan and target date",
    "7 月 11 日演示會議：原型、測試與目標日期",
    "7 月 11 日演示会议：原型、测试与目标日期",
    "The team planned to reuse a prototype shown on May 21 in Shenzhen and prepare a simplified commercial demo by the end of July for an August presentation. Local compatibility was under evaluation and testing was planned first.",
    "團隊計畫沿用 5 月 21 日深圳演示的原型，於 7 月底準備簡易商用演示，供 8 月展示。當地相容性仍在評估，規劃先跑測試環境。",
    "团队计划沿用 5 月 21 日深圳演示的原型，7 月底准备简版商用演示，供 8 月展示。当地兼容性仍在评估，计划先跑测试环境。",
    []
  ],
  "event": [
    "Malaysia summit and market coordination",
    "馬來西亞峰會與市場對接",
    "马来西亚峰会与市场对接",
    "The CV records Malaysia summit partnership, keynote and booth activities. The regional sales plan records sample requests and channel follow-up. The material reviewed does not tie the 20-unit order to a specific booth lead or establish final installation acceptance.",
    "履歷記載在馬來西亞峰會的合作、主題演講及攤位活動；區域銷售筆記有申請樣品和通路跟進。現有資料尚不能把 20 套訂單指向特定攤位客戶，也不能確認最終安裝驗收。",
    "简历记载马来西亚峰会合作、主题演讲和展位活动；区域销售笔记记录申请样品及渠道跟进。现有材料无法把 20 套订单对应到某个展位客户，也无法确认最终安装验收。",
    []
  ]
};
export const featuredDocumentRoutes = Object.entries(featuredEvidence).flatMap(([slug, documents]) => Object.keys(documents).map(id => ({ slug, id })));
export const featuredLabels: Record<string,string[]> = {
  "venus-product-definition": [
    "AI Product Development",
    "AI 產品開發",
    "AI 产品开发"
  ],
  "delta-supplier-strategy": [
    "Procurement & Supplier Strategy",
    "採購與供應商策略",
    "采购与供应商战略"
  ],
  "footprint-asia": [
    "Management & Operations",
    "管理與營運",
    "管理与运营"
  ]
};
