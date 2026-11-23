// Market snapshot content. One entry per competitor; refresh quarterly and update `captured`.
// Everything here is taken from the competitor's public site, so quote them rather than paraphrasing.
const competitorInfo = {
  "Housecall Pro": {
    captured: "2026-09-29",
    position: {
      take: "Housecall Pro positions itself as the AI-powered all-in-one for small home-service businesses. The pitch to the owner is that it fills your calendar with leads, gets you paid without chasing, and builds your reputation, so you can grow without more admin.",
      why: [
        "Headline is \"Everything to run and grow your business\", so it claims breadth first.",
        "AI is in the subheadline (\"built from 100M+ jobs\") and in the add-ons (CSR AI), so it is the differentiator they lead with.",
        "Themes centre on filling the calendar and collecting money: \"Your calendar fills itself\", \"Every payment collected, no chasing\".",
        "Sells reputation (\"Build trust\") as a pillar, which the others don't.",
        "Pricing is self-serve with a 14-day trial and a $59 entry plan, aimed at owner-operators and small crews.",
        "Closest to Jobber. Same lifecycle claim, but leans harder on AI and payments where Jobber leans on marketing and sales."
      ]
    },
    headline: "Everything to run and grow your business",
    subheadline: "Powered by AI built from 100M+ jobs. Grow revenue, save time, and build a winning reputation.",
    themes: ["Manage jobs", "Capture leads", "Get paid", "Build trust"],
    proof: "★ 4.3 on G2 (208 reviews)",
    pricing: {
      model: "Per plan, monthly or annual",
      from: "$59/mo",
      tiers: "Basic $59 (1 user) · Essentials $149 (5 users) · Max $299 (8 users), billed annually",
      trial: "14-day free trial, no card"
    },
    sources: [
      ["Homepage", "https://www.housecallpro.com/"],
      ["Pricing", "https://www.housecallpro.com/pricing/"]
    ]
  },
  "Jobber": {
    captured: "2026-09-29",
    position: {
      take: "Jobber positions itself as the tool that helps a small service business grow. The pitch to the owner is that it covers everything from getting found to getting paid in one place, so you win more jobs, spend less time on admin and earn more.",
      why: [
        "Headline \"Run a stronger service business\" is about the owner's business getting stronger, not about features or a trade.",
        "Subheadline claims the full lifecycle: \"From first quote to final payment… from one powerful platform.\"",
        "Two of four themes are about winning work (\"Help the right customers find you\", \"Close more jobs\"), so it leans on marketing and sales more than the others.",
        "Proof points sell outcomes: \"12 hours+ saved per week\", \"44% revenue growth in first year\".",
        "Positions as trade-agnostic: 50+ industries, 100,000+ businesses.",
        "Low entry price ($21/mo on promotion), per-plan tiers and a self-serve trial point to small teams.",
        "Versus Service Titan: growth, not operations and cash flow. Versus Field Pulse: outcomes, not support and customization."
      ]
    },
    headline: "Run a stronger service business",
    subheadline: "From first quote to final payment, Jobber keeps your work, team, and revenue moving forward from one powerful platform.",
    themes: ["Help the right customers find you", "Close more jobs with less back-and-forth", "Less busywork, more billables", "Increase revenue while you grow"],
    proof: "★ 4.6 on G2 (530 reviews)",
    pricing: {
      model: "Per plan, monthly or annual",
      from: "$21/mo",
      tiers: "Core $21 · Connect $70 · Grow $105 · Plus $280 (5 users); annual prepaid, first-year promo pricing",
      trial: "14-day free trial, no card"
    },
    sources: [
      ["Homepage", "https://getjobber.com/"],
      ["Pricing", "https://getjobber.com/pricing/"]
    ]
  },
  "Field Pulse": {
    captured: "2026-09-29",
    position: {
      take: "FieldPulse positions itself as a partner, not just software, for growing service teams whose work has gotten messy. The pitch is that it shapes the software around how you already run jobs and backs you with real people and top-rated support, so growth becomes predictable.",
      why: [
        "Headline \"Turn Chaos into Predictable Growth\" speaks to a team with process problems, not a solo operator starting out.",
        "Subheadline says FieldPulse \"partners with\" businesses, so the relationship is part of the product.",
        "Three of four themes are about fit and service: \"Run your business your way\", \"Backed by people\", \"#1 rated customer support\".",
        "Proof is review-site awards (G2 and Capterra badges), which suits a challenger building trust.",
        "No public pricing, no trial, seat-based contracts and a demo-first funnel point to a sales-led, mid-sized team buyer.",
        "Versus Jobber and Housecall Pro: less about automation and AI, more about customization and support. Versus Service Titan: similar sales motion, at a smaller scale and with no enterprise claim."
      ]
    },
    headline: "Turn Chaos into Predictable Growth",
    subheadline: "FieldPulse partners with growing field service businesses to turn chaos into predictable growth with clear processes and tailored workflows.",
    themes: ["Built to adapt. Simple to run. Backed by people.", "Run your business your way", "A clear path for every job stage", "#1 rated customer support"],
    proof: "★ 4.7 on G2 (374 reviews)",
    pricing: {
      model: "Seat-based, custom quote",
      from: "Contact sales",
      tiers: "No public tiers or prices",
      trial: "Free demo, no trial"
    },
    sources: [
      ["Homepage", "https://www.fieldpulse.com/"],
      ["Pricing", "https://www.fieldpulse.com/pricing"]
    ]
  },
  "Service Titan": {
    captured: "2026-09-29",
    position: {
      take: "Service Titan positions itself as the leading platform for larger trades businesses, residential and commercial. The pitch to the owner is about money: use it and the business earns more per job, technician and customer, with better cash flow and fewer late payments.",
      why: [
        "Headline \"AI software for commercial and residential trades\" leads with category and AI, and names commercial work, which the others don't.",
        "Subheadline is a leadership claim: \"The #1 software for commercial and residential trades.\"",
        "Themes are financial and operational: \"Improve your bottom line\", \"Optimize cash flow\", \"Workforce productivity and safety\".",
        "Proof is customer performance (+16% revenue, +9% revenue per technician), which speaks to an owner running a P&L.",
        "Per-technician pricing, three named tiers and a demo-only funnel point to a large sales-led buyer.",
        "\"Larger\" is our inference from pricing and the commercial-work angle. The page never says \"enterprise\".",
        "Sits above the other three on scale and complexity. Not competing on ease or price."
      ]
    },
    headline: "AI software for commercial and residential trades",
    subheadline: "The #1 software for commercial and residential trades",
    themes: ["Improve your bottom line", "Optimize cash flow", "Increase workforce productivity and safety", "Maximize lifetime customer value"],
    proof: "★ 4.4 on G2 (375 reviews)",
    pricing: {
      model: "Per technician, custom quote",
      from: "Contact sales",
      tiers: "Starter · Essentials · The Works (no public prices)",
      trial: "Free demo, no trial"
    },
    sources: [
      ["Homepage", "https://www.servicetitan.com/"],
      ["Pricing", "https://www.servicetitan.com/pricing"]
    ]
  },
  "Workiz": {
    captured: "2026-09-29",
    position: {
      take: "Workiz positions itself as an AI growth engine for home service businesses. The pitch to the owner is that it handles the calls, fills the board, sends the invoices and collects the payments, so your team can just do the work.",
      why: [
        "Headline \"AI growth engine for home service businesses\" leads with AI and growth, and names home service as the category.",
        "Subheadline splits the job: \"Your team handles the work. Workiz handles the calls…\". Communication is the core of the pitch.",
        "AI is branded and spread across the product (\"Genius AI Answering\", \"Genius Scheduling\", \"Genius Marketing\"), so it is a pillar, not an add-on.",
        "Themes follow the job from first call to payment: lead capture, scheduling, dispatching, estimates, payments.",
        "Lead capture comes first (\"AI answers every call, so no lead slips through\"), which none of the other four lead with.",
        "Proof is scale: \"120K+ home service pros in US and Canada\", across 50+ industries. No rating or review count on the homepage.",
        "Three tiers (Standard, Pro, Ultimate) run from \"growing teams\" to \"multi-location larger team & franchises\", but there are no public prices, so the buyer is likely quoted by sales. A 7-day trial with no card is offered.",
        "Closest to Housecall Pro on AI and lead capture. Less about reputation, and priced through sales rather than self-serve."
      ]
    },
    headline: "AI growth engine for home service businesses",
    subheadline: "Your team handles the work. Workiz handles the calls, fills the board, sends the invoices, and collects the payments. AI and communication, built in at every step.",
    themes: ["AI answers every call, so no lead slips through", "Fill every tech's day in minutes", "The right tech on every job, automatically", "Quote good-better-best on-site, win bigger tickets", "Get paid on the spot, any way your customer pays"],
    proof: "★ 4.5 on G2 (244 reviews)",
    pricing: {
      model: "Per plan, request pricing",
      from: "Request pricing",
      tiers: "Standard (growing teams) · Pro (mid size team) · Ultimate (multi-location larger team & franchises); no public prices",
      trial: "7-day free trial, no card"
    },
    sources: [
      ["Homepage", "https://www.workiz.com/"],
      ["Pricing", "https://www.workiz.com/pricing/"]
    ]
  }
};
