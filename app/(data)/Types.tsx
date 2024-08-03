interface Feature {
  text: string;
  disabled?: boolean;
}

interface PricePlan {
  name: string;
  price: number;
  features: (string | Feature)[];
  popular: boolean;
  buttonText: string;
}

export const pricePlans: PricePlan[] = [
  {
    name: "Basic",
    price: 0,
    features: [
      "10,000 Words/Month",
      "50+ Tamplate Content",
      "Unlimited Download & Copy",
      "1 Month of History",
      { text: "Add Custum Tamplate", disabled: true },
      { text: "Access Premium templates", disabled: true },
    ],
    popular: false,
    buttonText: "Free",
  },
  {
    name: "Pro",
    price: 100,
    features: [
      "10,00,000 Words/Month",
      "50+ Tamplate Content",
      "Unlimited Download & Copy",
      "1 Year of History",
      { text: "Add Custum Tamplate", disabled: false },
      { text: "Access Premium templates", disabled: false },
    ],
    popular: true,
    buttonText: "Get Pro",
  },
];
