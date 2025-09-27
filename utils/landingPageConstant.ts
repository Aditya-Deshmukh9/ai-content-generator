import {
  Sparkles,
  Type,
  Youtube,
  Mail,
  Smile,
  Search,
  CheckCircle,
  Zap,
  Users,
  ArrowRight,
  Star,
  Play,
  MessageSquare,
  Wand2,
  Rocket,
  Brain,
  Target,
} from "lucide-react";

export const templates = [
  {
    icon: Brain,
    title: "AI Blog Posts",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smile,
    title: "Text to Emoji",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Youtube,
    title: "YouTube Magic",
    color: "from-red-500 to-pink-500",
  },
  { icon: Mail, title: "Email Wizardry", color: "from-blue-500 to-cyan-500" },
  {
    icon: Target,
    title: "SEO Optimizer",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Wand2,
    title: "Text Enhancer",
    color: "from-indigo-500 to-purple-500",
  },
];

export const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Generate premium content in under 3 seconds with our neural AI engine",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
  {
    icon: CheckCircle,
    title: "99.9% Accuracy",
    description:
      "AI-powered content that's indistinguishable from expert human writing",
    gradient: "from-green-400 via-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Infinitely Customizable",
    description:
      "Fine-tune every aspect to match your brand's unique voice and style",
    gradient: "from-blue-400 via-purple-500 to-pink-500",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "₹ 749",
    originalPrice: "₹ 1,499",
    features: [
      "5 AI Templates",
      "100 Generations",
      "24/7 Support",
      "Basic Analytics",
    ],
    popular: false,
    gradient: "from-slate-800 to-slate-900",
  },
  {
    name: "Pro",
    price: "₹ 1,499",
    originalPrice: "₹ 2,999",
    features: [
      "All Templates",
      "Unlimited Generations",
      "Priority Support",
      "Advanced Analytics",
      "API Access",
    ],
    popular: true,
    gradient: "from-purple-600 to-pink-600",
  },
  {
    name: "Enterprise",
    price: "Custom",
    originalPrice: "",
    features: [
      "Custom Templates",
      "White-label Solution",
      "Dedicated Manager",
      "Custom Integration",
      "SLA Guarantee",
    ],
    popular: false,
    gradient: "from-indigo-800 to-purple-900",
  },
];
