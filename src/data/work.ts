import footprint from "./cases/footprint-asia.json";
import dell from "./cases/dell-cost-reduction.json";
import venus from "./cases/venus-product-definition.json";

import deltaSuppliers from "./cases/delta-supplier-strategy.json";
import deltaCarton from "./cases/delta-carton-cost-analysis.json";

export const featuredWork = [footprint, dell, venus];
export const work = [...featuredWork, deltaSuppliers, deltaCarton];
export const workCopy = {
  title: "Selected Work",
  description: "Explore projects by capability or by when I did the work.",
  byCapability: "By capability", byDate: "By date",
  context: "Business context", decisions: "My role and decisions", outcome: "Outcome", evidence: "Work samples",
  contact: "Contact for CV", view: "View selected work", back: "All selected work",
};
