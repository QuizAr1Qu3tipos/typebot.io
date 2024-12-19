import { Button } from "@/components/Button";
import { MoreInfoTooltip } from "@/components/MoreInfoTooltip";
import {
  chatsLimits,
  prices,
  seatsLimits,
} from "@typebot.io/billing/constants";
import { formatPrice } from "@typebot.io/billing/helpers/formatPrice";
import {
  PerkListItem,
  PlanNamePill,
  PricingCardFooter,
  PricingCardRoot,
} from "./components/pricing-card";
import { chatsTooltip } from "./constants";

export const StarterPlanCard = ({
  children,
}: { children?: React.ReactNode }) => (
  <PricingCardRoot>
    <PlanNamePill className="bg-orange-8 absolute top-0 flex flex-col">
      Starter
    </PlanNamePill>
    <div className="flex flex-col gap-10 items-center">
      <h2>
        {formatPrice(prices.STARTER)}
        <span className="text-lg">/month</span>
      </h2>
      {children}
    </div>
    <PricingCardFooter>
      <Button variant="ctaSecondary" size="lg">
        Subscribe now
      </Button>
    </PricingCardFooter>
  </PricingCardRoot>
);

export const StarterPlanPerksList = () => (
  <ul className="flex flex-col gap-3">
    <PerkListItem>All free plan features and...</PerkListItem>
    <PerkListItem>
      <span>
        <span className="font-bold">{seatsLimits.STARTER} seats</span> included
      </span>
    </PerkListItem>
    <PerkListItem>
      <div className="flex flex-col gap-1">
        <span className="inline-flex gap-1">
          <span className="font-bold">
            {new Intl.NumberFormat().format(chatsLimits.STARTER)} chats
          </span>
          /months
          <MoreInfoTooltip>{chatsTooltip}</MoreInfoTooltip>
        </span>
        <span className="text-xs text-gray-11">Extra chats: $10 per 500</span>
      </div>
    </PerkListItem>
    <PerkListItem>Native integration</PerkListItem>
    <PerkListItem>Branding removed</PerkListItem>
    <PerkListItem>Collectfiles from users</PerkListItem>
    <PerkListItem>Create folders</PerkListItem>
    <PerkListItem>Direct priority support</PerkListItem>
  </ul>
);
