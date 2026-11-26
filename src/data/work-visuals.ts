export const capabilityDescriptions: Record<string, string> = {
  "supply-chain": "Supplier continuity, operating processes and quality handoffs.",
  "procurement": "Sourcing strategy, supplier qualification, cost models and financial recovery.",
  "project-management": "Requirements, workstreams and coordination across teams and partners.",
  "product": "Hardware and digital product definition, from research to scope.",
  "people-management": "Team design, cross-functional leadership and operating routines."
};

interface CaseVisual {
  title: string;
  columns: string[];
  rows: string[][];
  caption: string;
}

export const caseVisuals: Record<string, CaseVisual> = {
  "footprint-asia": {
    "title": "Team structure and handoffs",
    "columns": [
      "Procurement",
      "Project management",
      "Quality"
    ],
    "rows": [
      [
        "4 staff",
        "3 staff",
        "1 specialist"
      ],
      [
        "Supplier terms and sourcing",
        "Project milestones and follow-up",
        "Quality checks and issue tracking"
      ]
    ],
    "caption": "Shared procedures and reporting connected the three functions."
  },
  "dell-cost-reduction": {
    "title": "Three value-engineering levers",
    "columns": [
      "Initiative",
      "Cost lever",
      "Reported initiative value"
    ],
    "rows": [
      [
        "Steel thinning",
        "Reduce material per component",
        "US$1.3M"
      ],
      [
        "Cable optimization",
        "Revise component specification",
        "US$0.3M"
      ],
      [
        "IC reclamation",
        "Recover value from existing components",
        "US$1.9M"
      ]
    ],
    "caption": "Illustrative initiatives within the broader program. The reported 2016 program result was US$7.83M."
  },
  "dell-supplier-billing-accuracy": {
    "title": "How the two Dell results differ",
    "columns": [
      "Project",
      "What was addressed",
      "Reported result"
    ],
    "rows": [
      [
        "Supplier Billing Accuracy",
        "Overpayments to a manufacturing partner",
        "US$4M recovered"
      ],
      [
        "2016 value engineering",
        "Cost of desktop components",
        "US$7.83M in cost savings"
      ]
    ],
    "caption": "The recovery and cost-saving figures describe distinct work."
  },
  "delta-supplier-strategy": {
    "title": "What influenced cable order allocation",
    "columns": [
      "Assessment factor",
      "Why it mattered for allocation"
    ],
    "rows": [
      [
        "Technology and qualification",
        "A unique qualified part could limit the alternatives."
      ],
      [
        "Responsiveness and stock buffer",
        "Flexibility mattered when orders needed to be pulled in."
      ],
      [
        "Delivery reliability",
        "Quantity and timing helped determine whether to shift share."
      ]
    ],
    "caption": "Reconstructed from the cable strategy discussion. Supplier names and shares are omitted."
  },
  "delta-carton-cost-analysis": {
    "title": "Carton quotation checks",
    "columns": [
      "Check",
      "Input",
      "Decision supported"
    ],
    "rows": [
      [
        "Build comparable cost",
        "Dimensions, material and paper price per unit area",
        "Separate specification and paper-price effects."
      ],
      [
        "Cross-check quote",
        "Comparable items of similar size",
        "Assess whether the requested adjustment was reasonable."
      ]
    ],
    "caption": "Reconstructed from the workbook. No supplier quote or unit price is shown."
  },
  "venus-product-definition": {
    "title": "Three interaction paths",
    "columns": [
      "Local motion",
      "Voice",
      "Cloud conversation"
    ],
    "rows": [
      [
        "Device-side motion requirements",
        "Voice interaction requirements",
        "Remote dialogue requirements"
      ],
      [
        "Noise",
        "Synchronization",
        "Latency"
      ]
    ],
    "caption": "Examples of design criteria across the system, rather than measured prototype results."
  },
  "sk-supplier-qualification": {
    "title": "What the pre-audit workbook covered",
    "columns": [
      "Commercial and logistics",
      "Manufacturing and quality",
      "Development"
    ],
    "rows": [
      [
        "Terms and supply readiness",
        "Production capability and quality system",
        "Ability to support development"
      ]
    ],
    "caption": "Reconstructed from sourcing pre-audit workbook sections. Candidate names and scores are omitted."
  },
  "bcci-ai-partnership": {
    "title": "Coordinated workstreams",
    "columns": [
      "Workstream",
      "Output"
    ],
    "rows": [
      [
        "Institutional partnership",
        "Strategic memorandum"
      ],
      [
        "Service definition",
        "Technical specifications derived from service needs"
      ],
      [
        "Technology suppliers",
        "Hardware, cloud and software vendor workstreams"
      ],
      [
        "Joint R&D",
        "Research-center coordination and talent acquisition"
      ]
    ],
    "caption": "Outputs and responsibilities during the initiative, which was later discontinued."
  },
  "intelove-product-development": {
    "title": "Product concept and team responsibilities",
    "columns": [
      "Physical device",
      "Immersive content",
      "Founder’s remit"
    ],
    "rows": [
      [
        "Physical interaction",
        "Digital experience",
        "Coordinate the team and investor relationships"
      ]
    ],
    "caption": "Concept diagram based on the work described in the CV."
  },
  "zebra-procurement-team": {
    "title": "What the operating model covered",
    "columns": [
      "Team remit",
      "Commercial reach",
      "Quality follow-up"
    ],
    "rows": [
      [
        "8 people across procurement",
        "Agreements covered 80% of spend",
        "Quality procedures and claims tracking"
      ]
    ],
    "caption": "Contract coverage is a share of spend. The separately reported 2017 savings were RMB 720,000."
  }
};

