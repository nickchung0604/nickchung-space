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
      "US$7.83 million is the reported 2016 program result. The three initiatives illustrate the work behind the program and are not additional to that total."
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
      "The proposal set target segments and priority scenarios and included requirements for device updates and estimates for after-sales costs. The milestone was a product definition."
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
      "The deck distinguished shares to retain from shares to move. The output was a recommendation by category, with allocation percentages kept private."
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
      "The workbook recorded whether the adjustment was reasonable and pointed to the supporting comparables. The deliverable was the price review and its basis."
    ]
  ],
  "dell-supplier-billing-accuracy": [
    [
      "Scope of the project",
      "The recovery concerned supplier invoices and payments. It is a different measure from the 2016 procurement cost reduction reported in the value-engineering case."
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
      "Use separate sections for manufacturing capability, quality systems and development. Summarize the findings before making a qualification decision."
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
    "title": "Supply Chain Operations",
    "slugs": [
      "footprint-asia",
      "delta-supplier-strategy",
      "sk-supplier-qualification",
      "zebra-procurement-team"
    ]
  },
  {
    "id": "procurement",
    "title": "Strategic Sourcing & Procurement",
    "slugs": [
      "dell-cost-reduction",
      "dell-supplier-billing-accuracy",
      "delta-supplier-strategy",
      "delta-carton-cost-analysis",
      "sk-supplier-qualification",
      "zebra-procurement-team"
    ]
  },
  {
    "id": "project-management",
    "title": "Project Management",
    "slugs": [
      "bcci-ai-partnership",
      "venus-product-definition",
      "footprint-asia"
    ]
  },
  {
    "id": "product",
    "title": "Product Development",
    "slugs": [
      "venus-product-definition",
      "intelove-product-development"
    ]
  },
  {
    "id": "people-management",
    "title": "People Management",
    "slugs": [
      "footprint-asia",
      "zebra-procurement-team",
      "intelove-product-development"
    ]
  }
];

