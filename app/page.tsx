import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
// import { features, pricingTiers } from "@/app/data/landingData";
import {features, pricingTiers} from "./data/landingData";

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }} className="min-h-screen bg-[#0f0f1a] text-white flex flex-col">

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">

          <div style={{ paddingLeft: 6, paddingRight: 6, paddingTop: 4, paddingBottom: 4, marginTop: 12, marginBottom: 8 }} className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Welcome to the future</span>
          </div>

          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            NexusAI
          </h1>

          <p style={{ marginBottom: 12 }} className="text-gray-400 text-xl mb-10">
            Experience next-gen AI conversations in one platform
          </p>

          <div style={{ marginBottom: 24 }} className="flex justify-center gap-4 flex-wrap">
            <Link
              style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6 }}
              href="/chat"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              Start Chat
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6 }}
              className="px-6 py-3 border border-gray-600 rounded-lg hover:border-blue-500">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6">
        <div style={{ marginLeft: 8, marginRight: 8 }} className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                style={{ padding: 12, cursor: "pointer" }}
                key={i}
                className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500"
              >
                <Icon className="w-6 h-6 mb-4 text-blue-400" />
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRICING */}
      <section style={{ marginTop: 18, marginLeft: 8, marginRight: 8 }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, i) => (
            <div
              style={{ padding: 8 }}
              key={i}
              className={`p-6 rounded-xl border ${tier.highlighted
                ? "border-blue-500 bg-blue-500/10"
                : "border-gray-800"
                }`}
            >
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {tier.description}
              </p>

              <div className="text-3xl font-bold mb-6">
                {tier.price}{" "}
                <span className="text-sm text-gray-400">
                  {tier.period}
                </span>
              </div>

              <button style={{marginTop:4,marginBottom:8,paddingLeft:4,paddingRight:4,paddingTop:4,paddingBottom:4,cursor:"pointer"}} className="w-full mb-6 py-2 bg-blue-600 rounded-lg">
                {tier.cta}
              </button>

              <ul className="space-y-2 text-sm">
                {tier.features.map((f, idx) => (
                  <li style={{marginTop:8}} key={idx} className="flex gap-2 items-center">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ marginTop: 8 }} className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to start?
        </h2>
        <Link
          style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, marginTop: 8, marginBottom: 8 }}
          href="/chat"
          className="inline-block px-6 py-3 bg-blue-600 rounded-lg"
        >
          Get Started
        </Link>
      </section>

      {/* FOOTER */}
      <footer style={{ marginBottom: 58, paddingTop: 8 }} className="mt-auto border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
        © 2026 NexusAI
      </footer>
    </div>
  )
}