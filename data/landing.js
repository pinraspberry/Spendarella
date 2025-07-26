import {
  HeartHandshake,
  Coins,
  Sparkle,
  Star,
  FileEdit,
  PiggyBank,
  WandSparkles,
  CalendarCheck2,
  LayoutGrid,
  BadgePercent,
  TrendingUp,
} from "lucide-react";

// Spendarella Stats Data
export const statsData = [
  {
    value: "75K+",
    label: "Confident Users",
    icon: <HeartHandshake className="h-8 w-8 text-pink-500" />,
  },
  {
    value: "$500M+",
    label: "Personal Expenses Tracked",
    icon: <Coins className="h-8 w-8 text-rose-400" />,
  },
  {
    value: "4.95/5",
    label: "User Happiness Score",
    icon: <Star className="h-8 w-8 text-yellow-400" />,
  },
  {
    value: "99.99%",
    label: "System Uptime",
    icon: <Sparkle className="h-8 w-8 text-lilac-500" />,
  },
];

export const featuresData = [
  {
    icon: <WandSparkles className="h-8 w-8 text-rose-400" />,
    title: "Auto-Categorized Transactions",
    description:
      "Let Spendarella magically sort your expenses using smart learning algorithms.",
  },
  {
    icon: <CalendarCheck2 className="h-8 w-8 text-pink-500" />,
    title: "Recurring Templates",
    description:
      "Save time with customizable templates for monthly bills, subscriptions, and more.",
  },
  {
    icon: <LayoutGrid className="h-8 w-8 text-lilac-500" />,
    title: "Tidy & Togglable Splits",
    description:
      "Split expenses across categories and toggle views to keep your wallet organized.",
  },
  {
    icon: <PiggyBank className="h-8 w-8 text-yellow-500" />,
    title: "Goal-Based Saving",
    description:
      "Track progress toward travel, fashion, and future-you savings goals.",
  },
  {
    icon: <BadgePercent className="h-8 w-8 text-rose-500" />,
    title: "Spending Limits",
    description:
      "Get gentle nudges when you’re close to overspending on shopping, dining, or self-care.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-pink-600" />,
    title: "Aesthetic Insights",
    description:
      "Visualize your financial glow-up with stylish, easy-to-read graphs and predictions.",
  },
];

export const howItWorksData = [
  {
    icon: <Sparkle className="h-8 w-8 text-rose-400" />,
    title: "1. Sign Up With Style",
    description:
      "Create your Spendarella account in minutes and set your first budgeting vibe.",
  },
  {
    icon: <FileEdit className="h-8 w-8 text-lilac-500" />,
    title: "2. Add Your Transactions",
    description:
      "Manually enter or auto-import expenses. Organize by category, split, or goal.",
  },
  {
    icon: <PiggyBank className="h-8 w-8 text-yellow-500" />,
    title: "3. Track, Save & Slay",
    description:
      "Get real-time feedback, insights, and stay on track with your aesthetic money goals.",
  },
];

export const testimonialsData = [
  {
    name: "Liya Sharma",
    role: "Lifestyle Blogger",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "Spendarella is my financial fairy godmother. My budget finally matches my vibe, and saving feels fun, not stressful.",
  },
  {
    name: "Aanya Patel",
    role: "Student & Creator",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    quote:
      "I used to hate spreadsheets. Now, I love tracking my spending because Spendarella makes it feel like journaling with flair.",
  },
  {
    name: "Maya Verma",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
    quote:
      "Everything from the UI to insights is gorgeous and useful. The graphs actually make me excited to check my finances.",
  },
];
