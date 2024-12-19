import { Button } from "@/components/Button";
import { chatsLimits } from "@typebot.io/billing/constants";
import {
  PerkListItem,
  PlanNamePill,
  PricingCardFooter,
  PricingCardRoot,
} from "./components/pricing-card";

export const FreePlanCard = () => (
  <PricingCardRoot>
    <PlanNamePill className="bg-gray-12 absolute top-0">Personal</PlanNamePill>
    <div className="flex flex-col gap-10 items-center">
      <h2>Free</h2>
      <ul className="flex flex-col gap-3">
        <PerkListItem>Unlimited typebots</PerkListItem>
        <PerkListItem>
          <span>
            <span className="font-bold">
              {new Intl.NumberFormat().format(chatsLimits.FREE)} chats
            </span>
            /months
          </span>
        </PerkListItem>
        <PerkListItem>Native integrations</PerkListItem>
        <PerkListItem>Webhooks</PerkListItem>
        <PerkListItem>Custom Javascript & CSS</PerkListItem>
        <PerkListItem>Community support & Docs</PerkListItem>
      </ul>
    </div>

    <PricingCardFooter>
      <Button variant="ctaSecondary" size="lg">
        Get started
      </Button>
    </PricingCardFooter>
  </PricingCardRoot>
);
