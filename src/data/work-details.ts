export const workDetails: Record<string, [string, string][]> = {
  "footprint-asia": [
    [
      "Team design",
      "The eight-person team comprised four procurement staff, three project managers and one quality specialist. My remit covered all three functions and their handoffs."
    ],
    [
      "Operating processes",
      "I introduced a shared knowledge system and documented departmental procedures. Automated cross-department reporting brought supplier, project and quality information together."
    ],
    [
      "How to read the results",
      "The 300 million units are cumulative export volume during the period. US$300,000 is average annual procurement savings. The measures capture scale and cost performance respectively."
    ]
  ],
  "dell-cost-reduction": [
    [
      "Scope",
      "The work covered direct materials across more than 20 desktop platforms, with responsibility for over US$220 million in annual spend."
    ],
    [
      "Different routes to savings",
      "Thinner steel addressed material consumption, cable optimization addressed the component specification, and semiconductor reclamation recovered value from existing components."
    ],
    [
      "Reporting the result",
      "US$7.83 million and 4.99% are reported for the 2016 program. US$220M+ describes the wider managed portfolio. The materials used here do not identify the eligible spend or whether the savings were realized or annualized."
    ]
  ],
  "venus-product-definition": [
    [
      "Research inputs",
      "User interviews and co-creation surveys captured interaction needs. Channel research in Japan added a commercial perspective to the definition work."
    ],
    [
      "Architecture and acceptance criteria",
      "I separated local motion, voice and cloud conversation into distinct requirements. Latency, synchronization and noise were explicit evaluation criteria."
    ],
    [
      "First-generation scope",
      "The proposal set target segments and priority scenarios and included requirements for device updates and estimates for after-sales costs. The milestone reached was product definition: scope, priority scenarios, engineering requirements and after-sales planning. The materials here do not establish a completed pilot or commercial launch."
    ]
  ],
  "delta-supplier-strategy": [
    [
      "What was compared",
      "I evaluated cables, printed wiring boards and sheet metal group by group. The TQRDC comparison covered technology, quality, responsiveness, delivery and cost."
    ],
    [
      "A trade-off from the strategy deck",
      "In cables, the recommendation balanced unique qualified parts and technology support with responsiveness, stock buffering and delivery performance."
    ],
    [
      "From assessment to allocation",
      "For cables, the deck proposed keeping shares for vendors with unique qualified parts or specialized support, while shifting a portion toward vendors that performed better on responsiveness and stock buffering. That was an allocation recommendation, with no claimed implementation result."
    ]
  ],
  "delta-carton-cost-analysis": [
    [
      "Inputs",
      "The workbook used the carton specification and a paper-price input normalized to a unit of area. The calculation and the supplier quote were kept distinct."
    ],
    [
      "Comparison",
      "I compared the resulting unit prices for similar dimensions. This provided a second check on the reasonableness of the proposed adjustment."
    ],
    [
      "Documented decision",
      "The workbook separated the original price, initial quote, price confirmed after three rounds of negotiation, and model benchmark. Three items finished below the benchmark, while one remained above it. Its conclusion also considered comparable supplier prices and the volume of the items."
    ]
  ],
  "dell-supplier-billing-accuracy": [
    [
      "Scope of the project",
      "The US$4M figure is a recovery of past overpayments. The records used here establish the recovered amount and recognition; they do not establish the exception rules, recovery schedule, or future control design."
    ],
    [
      "Recognition",
      "Dell recognized the SBA project with a Winning Together award. The Greater China President Award was a separate team award."
    ]
  ],
  "sk-supplier-qualification": [
    [
      "Commercial screen",
      "Review commercial terms alongside logistics and development capacity so candidate comparisons account for supply readiness."
    ],
    [
      "Site assessment",
      "The pre-audit workbook has separate sections for manufacturing capability, quality systems and development. My remit included quote analysis, volume consolidation and negotiations, and screening two to three backup suppliers per category. The annual 20% (KRW 10 billion) figure is the reported sourcing result."
    ]
  ],
  "bcci-ai-partnership": [
    [
      "Stakeholder alignment",
      "The memorandum and specifications addressed different needs: the memorandum captured the institutional partnership, while the specifications described what the service needed from the technology."
    ],
    [
      "Supplier coordination",
      "Hardware, cloud and software were treated as distinct supplier workstreams. The work also included coordinating talent acquisition for the joint R&D center."
    ]
  ],
  "intelove-product-development": [
    [
      "Product scope",
      "The concept paired a physical device with an immersive digital experience. Both components had to be considered in defining what the product delivered."
    ],
    [
      "Founder’s remit",
      "My remit covered building and managing the cross-functional team and handling investor relationships while the product concept was developed."
    ]
  ],
  "zebra-procurement-team": [
    [
      "Commercial coverage",
      "The 80% figure refers to spend covered by supplier agreements. It describes the reach of the agreements, independently of the savings figure."
    ],
    [
      "Operating routines",
      "The work combined supplier-tier definitions, documented quality control procedures and a database for claims so the team could manage purchasing and quality issues in parallel."
    ]
  ]
};

export const capabilities = [
  {
    "id": "supply-chain",
    "title": "Supply Chain & Procurement",
    "skillIndex": 0,
    "slugs": [
      "footprint-asia",
      "dell-cost-reduction",
      "dell-supplier-billing-accuracy",
      "delta-supplier-strategy",
      "delta-carton-cost-analysis",
      "sk-supplier-qualification",
      "zebra-procurement-team"
    ]
  },
  {
    "id": "people-management",
    "title": "Management & Leadership",
    "skillIndex": 1,
    "slugs": [
      "footprint-asia",
      "zebra-procurement-team",
      "ses-malaysia-delivery",
      "bcci-ai-partnership",
      "intelove-product-development"
    ]
  },
  {
    "id": "product",
    "title": "AI & Technology",
    "skillIndex": 2,
    "slugs": [
      "venus-product-definition",
      "bcci-ai-partnership",
      "intelove-product-development"
    ]
  }
];

export const legacyCapabilities = [
  { id: "procurement", target: "supply-chain" },
  { id: "project-management", target: "people-management" },
];
