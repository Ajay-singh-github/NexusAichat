import {
    MessageSquare,
    Zap,
    Brain,
    Lock,
    BarChart3,
    Smartphone,
} from "lucide-react";

export const features = [
    {
        icon: MessageSquare,
        title: "Advanced Chat Interface",
        description: "Seamless conversation experience with multiple AI models",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Optimized for speed with instant response times",
        gradient: "from-yellow-500 to-orange-500",
    },
    {
        icon: Brain,
        title: "AI Powered",
        description: "Access to GPT-4, Claude 3, Gemini, and more models",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: Lock,
        title: "Secure & Private",
        description: "Your conversations are encrypted and never shared",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: "Track your usage and AI model performance",
        gradient: "from-indigo-500 to-blue-500",
    },
    {
        icon: Smartphone,
        title: "Mobile Responsive",
        description: "Works perfectly on all devices and screen sizes",
        gradient: "from-teal-500 to-cyan-500",
    },
];

export const pricingTiers = [
    {
        name: "Starter",
        price: "$9",
        period: "/month",
        description: "Perfect for individuals",
        features: [
            "10,000 tokens/month",
            "Access to GPT-3.5 & Claude 2",
            "1 API Key",
            "Email support",
        ],
        cta: "Get Started",
        highlighted: false,
    },
    {
        name: "Professional",
        price: "$29",
        period: "/month",
        description: "Best for professionals",
        features: [
            "100,000 tokens/month",
            "Access to all models including GPT-4",
            "5 API Keys",
            "Priority support",
            "Advanced analytics",
        ],
        cta: "Start Free Trial",
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For large organizations",
        features: [
            "Unlimited tokens",
            "All models + custom integration",
            "Unlimited API Keys",
            "24/7 support",
        ],
        cta: "Contact Sales",
        highlighted: false,
    },
];
