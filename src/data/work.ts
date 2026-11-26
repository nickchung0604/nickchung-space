import ses from "./cases/ses-malaysia-delivery.json";
import dell_supplier_billing_accuracy from "./cases/dell-supplier-billing-accuracy.json";
import sk_supplier_qualification from "./cases/sk-supplier-qualification.json";
import bcci_ai_partnership from "./cases/bcci-ai-partnership.json";
import intelove_product_development from "./cases/intelove-product-development.json";
import zebra_procurement_team from "./cases/zebra-procurement-team.json";
import footprint from "./cases/footprint-asia.json";
import dell from "./cases/dell-cost-reduction.json";
import venus from "./cases/venus-product-definition.json";

import deltaSuppliers from "./cases/delta-supplier-strategy.json";
import deltaCarton from "./cases/delta-carton-cost-analysis.json";

export const featuredWork = [venus, deltaSuppliers, footprint];
export const work = [footprint, dell, venus, deltaSuppliers, deltaCarton, dell_supplier_billing_accuracy, sk_supplier_qualification, bcci_ai_partnership, intelove_product_development, zebra_procurement_team, ses];
export const workCopy = {
  title: "Selected Work",
  description: "Explore projects by capability or by when I did the work.",
  byCapability: "By capability", byDate: "By date",
  context: "Business context", decisions: "My role and decisions", outcome: "Outcome", evidence: "Work samples",
  contact: "Contact for CV", view: "View selected work", back: "All selected work",
};
