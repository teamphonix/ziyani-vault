const zodiacs = [
  {
    sign: "Aries",
    name: "Ignition",
    fragrance: "Blood Orange & Ginger",
    essence: "Aries is the spark of action, courage, and self-starting fire.",
    definition: "In Ziyani, Aries represents the moment energy becomes movement. It is bold, clean, and decisive: the part of a person that stops waiting and begins.",
    tags: ["Action", "Courage", "Momentum"],
    imagery: "Ram, spark, flame path, first light, red-orange motion."
  },
  {
    sign: "Taurus",
    name: "Foundation",
    fragrance: "Vanilla Sandalwood",
    essence: "Taurus is steadiness, sensual comfort, patience, and embodied value.",
    definition: "In Ziyani, Taurus represents the calm strength of knowing what matters. It grounds the room and reminds the body that peace can be luxurious.",
    tags: ["Grounding", "Worth", "Comfort"],
    imagery: "Bull, earth texture, botanical luxury, soft stone, warm gold."
  },
  {
    sign: "Gemini",
    name: "Air Current",
    fragrance: "Eucalyptus Mint & White Birch",
    essence: "Gemini is movement of thought, language, curiosity, and social electricity.",
    definition: "In Ziyani, Gemini represents the living mind. It clears stale air, opens conversation, and invites new ideas to move freely.",
    tags: ["Clarity", "Voice", "Curiosity"],
    imagery: "Twins, wind lines, airy symbols, mirrored shapes, silver green."
  },
  {
    sign: "Cancer",
    name: "Sanctuary",
    fragrance: "Coconut Milk & White Musk",
    essence: "Cancer is emotional shelter, memory, nurture, and sacred home.",
    definition: "In Ziyani, Cancer represents the inner room where softness becomes strength. It helps people feel held, protected, and emotionally honest.",
    tags: ["Nurture", "Home", "Protection"],
    imagery: "Crab, moon water, shell, pearl glow, soft blue-white."
  },
  {
    sign: "Leo",
    name: "Solar Flame",
    fragrance: "Amber Honey",
    essence: "Leo is presence, warmth, confidence, generosity, and creative radiance.",
    definition: "In Ziyani, Leo represents the courage to be seen without shrinking. It brings gold into the atmosphere and lets the heart take up space.",
    tags: ["Radiance", "Heart", "Confidence"],
    imagery: "Lion, sun, crown rays, honey glow, theatrical gold."
  },
  {
    sign: "Virgo",
    name: "Clarity",
    fragrance: "Lavender Sage & Clean Woods",
    essence: "Virgo is refinement, service, clean order, healing, and quiet mastery.",
    definition: "In Ziyani, Virgo represents the peace that comes when life is tended to with care. It clears the noise and brings the system back into alignment.",
    tags: ["Refinement", "Care", "Order"],
    imagery: "Maiden, herbs, clean geometry, soft green, cream, and slate."
  },
  {
    sign: "Libra",
    name: "Divine Balance",
    fragrance: "Rose & Bergamot",
    essence: "Libra is beauty, fairness, relationship, emotional balance, and graceful presence.",
    definition: "In Ziyani, Libra is a harmonic energy state. It is the part of a person that knows when to soften, listen, restore balance, and bring beauty into the room without forcing it.",
    tags: ["Harmony", "Beauty", "Grace"],
    imagery: "Scales, constellation, rose light, elegant curves, balanced symmetry."
  },
  {
    sign: "Scorpio",
    name: "Dark Intention",
    fragrance: "Smoked Vanilla & Patchouli",
    essence: "Scorpio is depth, privacy, transformation, desire, and emotional power.",
    definition: "In Ziyani, Scorpio represents the hidden truth beneath the surface. It is intimate, intense, and honest enough to transform what others avoid.",
    tags: ["Depth", "Power", "Transformation"],
    imagery: "Scorpion, shadow florals, smoke, black plum, obsidian glow."
  },
  {
    sign: "Sagittarius",
    name: "Open Horizon",
    fragrance: "Palo Santo & Bright Citrus",
    essence: "Sagittarius is freedom, faith, exploration, truth, and forward motion.",
    definition: "In Ziyani, Sagittarius is freedom with purpose. It opens the road, clears the spirit, and reminds the person that growth is a direction, not a destination.",
    tags: ["Freedom", "Truth", "Expansion"],
    imagery: "Arrow, archer, horizon line, fire path, constellation trail."
  },
  {
    sign: "Capricorn",
    name: "Legacy",
    fragrance: "Cedarwood & Vetiver",
    essence: "Capricorn is structure, devotion, patience, ambition, and earned authority.",
    definition: "In Ziyani, Capricorn represents the long build. It is the energy of discipline, respect, and creating something that can stand after the moment passes.",
    tags: ["Discipline", "Legacy", "Authority"],
    imagery: "Sea goat, mountain, cedar grain, stone, deep green and bronze."
  },
  {
    sign: "Aquarius",
    name: "Future Current",
    fragrance: "Ozone Mint & Crystal Moss",
    essence: "Aquarius is vision, innovation, difference, community, and future-minded clarity.",
    definition: "In Ziyani, Aquarius represents the signal from ahead. It clears the field for original thought and gives people permission to belong without becoming ordinary.",
    tags: ["Vision", "Originality", "Future"],
    imagery: "Water bearer, current lines, crystal, electric blue, silver air."
  },
  {
    sign: "Pisces",
    name: "Tide of Being",
    fragrance: "Sea Salt & Lotus",
    essence: "Pisces is dream, compassion, surrender, imagination, and spiritual softness.",
    definition: "In Ziyani, Pisces represents the place where feeling becomes wisdom. It is oceanic, gentle, and intuitive without losing its center.",
    tags: ["Dream", "Compassion", "Surrender"],
    imagery: "Fish, tide, lotus, moonlit water, soft violet and sea glass."
  }
];

const angels = [
  { number: "111", name: "The Initiator", fragrance: "White Amber Citrus", meaning: "New beginnings, clean direction, and the first brave move.", tags: ["Start", "Focus", "Direction"] },
  { number: "222", name: "The Harmonizer", fragrance: "White Tea + Sheer Musk", meaning: "Balance, trust, relationship, and emotional steadiness.", tags: ["Peace", "Trust", "Union"] },
  { number: "333", name: "The Creator", fragrance: "Pink Grapefruit + Clear Woods", meaning: "Expression, creativity, joy, and inspired movement.", tags: ["Create", "Voice", "Joy"] },
  { number: "444", name: "The Stabilizer", fragrance: "Sandalwood + Vetiver", meaning: "Foundation, protection, boundaries, and grounded support.", tags: ["Root", "Protect", "Build"] },
  { number: "555", name: "The Shift", fragrance: "Fresh Air + Salted Woods", meaning: "Change, release, movement, and willingness to evolve.", tags: ["Change", "Release", "Flow"] },
  { number: "666", name: "The Embodiment", fragrance: "Cashmere Musk + Creamy Tonka", meaning: "Presence, body, care, beauty, and returning to self.", tags: ["Body", "Care", "Presence"] },
  { number: "777", name: "The Intuitive", fragrance: "Luminous Jasmine + Clear Resin", meaning: "Inner knowing, spiritual clarity, and quiet guidance.", tags: ["Intuition", "Wisdom", "Clarity"] },
  { number: "888", name: "The Magnet", fragrance: "Golden Vanilla + Warm Resin", meaning: "Abundance, confidence, value, and magnetic attraction.", tags: ["Abundance", "Value", "Power"] },
  { number: "999", name: "The Completion", fragrance: "Clean Linen + Mineral Air", meaning: "Closure, release, integration, and readiness for the next path.", tags: ["Closure", "Clear", "Complete"] }
];

const libraCopy = {
  "111": { title: "Clear Harmony", attributes: ["Clarity", "Graceful Beginnings", "Aligned Choices"], copy: "Libra brings grace, fairness, and aesthetic clarity. With 111, this refined energy becomes purposeful initiation rather than hesitation." },
  "222": { title: "Quiet Balance", attributes: ["Peace", "Emotional Steadiness", "Relational Ease"], copy: "Libra seeks balance, and 222 embodies it. This candle supports peace in relationships, steady emotions, and effortless alignment." },
  "333": { title: "Creative Grace", attributes: ["Expression", "Beauty", "Playful Refinement"], copy: "Libra is beauty in motion, and 333 is joyful expression. This pairing encourages creative collaboration and confident style." },
  "444": { title: "Steady Elegance", attributes: ["Grounded Poise", "Boundaries", "Calm Authority"], copy: "Libra leads with charm, and 444 anchors that charm in quiet strength. This candle supports boundaries and composed confidence." },
  "555": { title: "Fluid Balance", attributes: ["Open Flow", "Gentle Change", "Social Ease"], copy: "Libra values harmony, and 555 invites fluid change. Burn this when you are ready to evolve relationships and move forward with balance." },
  "666": { title: "Embodied Grace", attributes: ["Warm Presence", "Self-Care", "Gentle Sensuality"], copy: "Libra lives in beauty, and 666 brings presence into the body. This candle supports slowing down and inhabiting elegance from within." },
  "777": { title: "Intuitive Harmony", attributes: ["Inner Knowing", "Subtle Clarity", "Spiritual Calm"], copy: "Libra sees many perspectives, and 777 reveals the core truth. This candle supports trusting intuition in relationships." },
  "888": { title: "Radiant Poise", attributes: ["Confidence", "Magnetism", "Social Power"], copy: "Libra attracts naturally, and 888 amplifies that magnetism. Burn this when you want to feel valued and confidently present." },
  "999": { title: "Refined Release", attributes: ["Letting Go", "Closure", "Emotional Clarity"], copy: "Libra harmonizes, and 999 completes. This candle supports graceful endings, emotional release, and moving forward with a balanced heart." }
};

const sagittariusCopy = {
  "111": { title: "Brave Opening", attributes: ["Courage", "Fresh Start", "Direction"], copy: "Sagittarius brings movement, truth, and the desire to see what waits beyond the known. With 111, that energy becomes a clean first step." },
  "222": { title: "Open Trust", attributes: ["Faith", "Ease", "Shared Motion"], copy: "Sagittarius moves by faith, and 222 softens that motion into trust. This candle supports ease and emotional openness." },
  "333": { title: "Wild Expression", attributes: ["Joy", "Voice", "Creative Fire"], copy: "Sagittarius carries a fire that wants to speak, laugh, explore, and create. With 333, that fire becomes expressive joy." },
  "444": { title: "Rooted Freedom", attributes: ["Discipline", "Grounding", "Inner Compass"], copy: "Sagittarius wants freedom, but 444 gives it structure. This candle supports the kind of freedom that comes from knowing where you stand." },
  "555": { title: "Expansive Shift", attributes: ["Movement", "Release", "New Territory"], copy: "Sagittarius already leans toward the horizon; 555 opens the road wider. Burn this when change is calling and you are ready to move." },
  "666": { title: "Present Adventure", attributes: ["Embodiment", "Warmth", "Lived Joy"], copy: "Sagittarius looks outward, while 666 brings the energy back into the body. Adventure is also how fully you inhabit now." },
  "777": { title: "Guided Horizon", attributes: ["Intuition", "Wisdom", "Clear Vision"], copy: "Sagittarius seeks meaning; 777 refines that search into inner guidance. This candle supports trusting the signs toward your higher path." },
  "888": { title: "Abundant Aim", attributes: ["Confidence", "Momentum", "Magnetic Growth"], copy: "Sagittarius carries momentum, and 888 turns that motion toward abundance. This candle supports growth, opportunity, and aiming higher." },
  "999": { title: "Completed Journey", attributes: ["Closure", "Integration", "Higher Path"], copy: "Sagittarius understands that every road teaches something. With 999, the open horizon becomes completion and release." }
};

const designAssets = {
  Libra: {
    brief: "Libra is the reference line. The visuals use cosmic movement, gold type, balance, constellation language, and the color system tied to each angel number.",
    items: [
      { number: "111", title: "Clear Harmony", src: "./assets/libra/libra-111-final.jpg", status: "final" },
      { number: "222", title: "Quiet Balance", src: "./assets/libra/libra-222-semifinal.jpg", status: "semi-final" },
      { number: "333", title: "Creative Grace", src: "./assets/libra/libra-333-final.jpg", status: "final" },
      { number: "444", title: "Steady Elegance", src: "", status: "asset needed" },
      { number: "555", title: "Fluid Balance", src: "./assets/libra/libra-555-final.jpg", status: "final" },
      { number: "666", title: "Embodied Grace", src: "./assets/libra/libra-666-final.jpg", status: "final" },
      { number: "777", title: "Intuitive Harmony", src: "./assets/libra/libra-777-final.jpg", status: "final" },
      { number: "888", title: "Radiant Poise", src: "./assets/libra/libra-888-final.jpg", status: "final" },
      { number: "999", title: "Refined Release", src: "./assets/libra/libra-999-final.jpg", status: "final" }
    ]
  }
};

const zodiacCharacters = {
  Aries: "./assets/characters/aries.png", Taurus: "./assets/characters/taurus.png",
  Gemini: "./assets/characters/gemini.png", Cancer: "./assets/characters/cancer.png",
  Leo: "./assets/characters/leo.png", Virgo: "./assets/characters/virgo.png",
  Libra: "./assets/characters/libra.png", Scorpio: "./assets/characters/scorpio.png",
  Sagittarius: "./assets/characters/sagittarius.png", Capricorn: "./assets/characters/capricorn.png",
  Aquarius: "./assets/characters/aquarius.png", Pisces: "./assets/characters/pisces.png"
};

const packagingFaces = [
  { face: "Front", purpose: "Primary identity", content: "Logo, character artwork, zodiac, angel number, approved blend name" },
  { face: "Left Side", purpose: "Quick emotional signal", content: "Three approved theme words" },
  { face: "Right Side", purpose: "Meaning", content: "Expanded meaning of the three words and what the pairing symbolizes" },
  { face: "Back", purpose: "Reflection", content: "Short reflection, Ziyani brand message, and optional website or QR code" },
  { face: "Top", purpose: "Shelf recognition", content: "Zodiac symbol or approved crest" },
  { face: "Bottom", purpose: "Compliance", content: "Net weight, burn warning, maker/distributor details, batch or SKU fields, and other required legal copy" }
];

const startupPlan = [
  ["Week 1", "Set up the production space, choose one vessel, one wax path, and one tracking system."],
  ["Week 2", "Make unscented tests, then small Libra base tests. Learn wick placement and clean pouring."],
  ["Week 3", "Test Libra with 111, 444, and 888 accents. Compare cold throw, hot throw, melt pool, and soot."],
  ["Week 4", "Create three camera-ready samples and practice the 30-second Ziyani explanation."]
];

const candleBasics = [
  {
    title: "Standard Build",
    summary: "The locked formula for one candle size.",
    details: [
      "Pick one jar size first. Do not test multiple jar sizes while learning.",
      "Pick one wax path first: soy, coconut soy, or a candle wax blend.",
      "Choose a wick system that matches the jar diameter: single wick, double wick, or sample kit.",
      "Choose a fragrance load target, usually measured as a percentage of wax weight.",
      "Measure label space before printing. A good design still fails if it wraps badly on the vessel."
    ],
    drill: "Write the exact vessel, wax, wick, fragrance load, and label size before making a batch."
  },
  {
    title: "Wax",
    summary: "The candle body that holds fragrance and controls burn behavior.",
    details: [
      "Soy wax is beginner friendly but can frost, sink, or need longer cure time.",
      "Paraffin throws scent strongly but may not fit the natural/luxury positioning Jocelyn wants.",
      "Coconut soy blends can feel premium but cost more.",
      "Every wax has its own melt temperature, fragrance temperature, pour temperature, cure time, and wick needs."
    ],
    drill: "Choose one wax and test it until Jocelyn understands it before changing to another wax."
  },
  {
    title: "Wicks",
    summary: "The engine of the candle.",
    details: [
      "A wick that is too small causes tunneling and weak scent throw.",
      "A wick that is too large can create soot, high flame, overheated jars, and unsafe burn behavior.",
      "Wick size depends on jar diameter, wax type, fragrance load, dye, and additives.",
      "Use wick stickers or hot glue, then center the wick with a wick bar before pouring."
    ],
    drill: "Burn test at least two wick sizes in the same jar and wax before choosing one."
  },
  {
    title: "Fragrance Load",
    summary: "How much oil goes into the wax.",
    details: [
      "Fragrance load is measured by weight, not drops or guesses.",
      "If a candle uses 300g wax and 8 percent fragrance load, oil is 24g.",
      "Too little oil can make the candle weak. Too much oil can sweat, burn poorly, or become unsafe.",
      "Base + accent testing must be measured so Ziyani can repeat the same scent later."
    ],
    drill: "Write down exact grams for base oil and accent oil every time."
  },
  {
    title: "Cold Throw and Hot Throw",
    summary: "How scent performs before and during burning.",
    details: [
      "Cold throw is scent strength when the candle is not lit.",
      "Hot throw is scent strength while the candle is burning.",
      "A fragrance can smell strong in the bottle but weak in wax.",
      "Hot throw should be tested after cure time, not immediately after pouring."
    ],
    drill: "Rate cold throw and hot throw separately from 1 to 5 in each batch record."
  },
  {
    title: "Burn Testing",
    summary: "The proof that a candle is safe and sellable.",
    details: [
      "Burn the candle in sessions and record what happens.",
      "Watch flame height, melt pool, tunneling, soot, mushrooming wick, jar heat, and scent throw.",
      "A proper melt pool should develop without overheating the jar.",
      "Never sell an untested candle just because it looks good."
    ],
    drill: "Test each promising formula across multiple burns before calling it approved."
  },
  {
    title: "Batch Records",
    summary: "The memory of the candle business.",
    details: [
      "Record wax grams, fragrance grams, base/accent ratio, melt temperature, fragrance temperature, pour temperature, vessel, wick, cure date, and notes.",
      "Without records, Jocelyn cannot repeat a good candle or fix a bad one.",
      "Each Ziyani combination should eventually have a formula record."
    ],
    drill: "No batch gets poured without a batch record."
  },
  {
    title: "Safety and Labels",
    summary: "The non-negotiable customer protection layer.",
    details: [
      "Use candle-safe fragrance oils with supplier guidance, IFRA, or SDS documentation when available.",
      "Every candle needs a warning label.",
      "Keep candles away from drafts, pets, children, curtains, and unattended spaces.",
      "Use clean tools, heat-safe surfaces, gloves when needed, and keep a fire extinguisher nearby."
    ],
    drill: "Warning labels are part of the product, not an optional sticker."
  }
];

const starterKit = [
  { category: "Wax", target: "$60-$180", buy: "5-10 lb of one beginner wax or blend", why: "Enough for repeated testing without locking into bulk inventory.", notes: "Start with one wax only. Changing wax changes everything else." },
  { category: "Fragrance Oils", target: "$100-$300", buy: "Rose & Bergamot plus 3-9 angel accent oils in small sizes", why: "Libra is the proof line. Small bottles let her test before bulk buying.", notes: "Prioritize candle-safe oils with usage guidance." },
  { category: "Vessels and Lids", target: "$60-$180", buy: "One jar style in a small test quantity", why: "One vessel creates clean testing and label sizing.", notes: "Do not buy several jar styles yet." },
  { category: "Wick Sample Kit", target: "$40-$120", buy: "Wicks matched to the vessel diameter, wick stickers, and wick bars", why: "Wick testing decides safety, melt pool, soot, and scent throw.", notes: "Buy a sample range, not one random wick size." },
  { category: "Scale", target: "$20-$45", buy: "Digital gram scale", why: "Wax and oil must be measured by weight.", notes: "Drops and eyeballing are not production." },
  { category: "Thermometer", target: "$15-$35", buy: "Digital thermometer or temp probe", why: "Temperature affects fragrance binding, tops, adhesion, and consistency.", notes: "Track melt, fragrance, and pour temperatures." },
  { category: "Pouring Setup", target: "$50-$140", buy: "Pouring pitcher plus double boiler setup or small wax melter", why: "Controls heat and makes pouring repeatable.", notes: "Start simple; upgrade after repeatable tests." },
  { category: "Heat Gun", target: "$20-$45", buy: "Small heat gun", why: "Helps fix rough tops and warm jars when needed.", notes: "Use carefully. Heat can also create new problems." },
  { category: "Labels", target: "$40-$150", buy: "Test front labels, warning labels, and maybe sample boxes", why: "The label must fit the actual vessel and stay readable.", notes: "Print tests before ordering a large run." },
  { category: "Safety and Cleaning", target: "$25-$100", buy: "Fire extinguisher, gloves, alcohol, towels, storage bins, heat-safe mat", why: "Candle making is hot wax, fragrance oil, glass, and flame.", notes: "This is mandatory, not extra." },
  { category: "Learning", target: "$0-$100", buy: "Courses, videos, maker channels, notebook, printed batch sheets", why: "Skill is the first product.", notes: "Study before scaling." }
];

const starterBuyFirst = [
  ["Testing kit", "One wax, one vessel, wick sample kit, scale, thermometer, pitcher, and warning labels."],
  ["Libra proof oils", "Rose & Bergamot plus 111, 444, and 888 accents first. Then expand to all nine accents after tests make sense."],
  ["Batch system", "Notebook, spreadsheet, or printed sheets where every pour gets recorded."]
];

const starterWaitList = [
  ["All 108 candles", "Do not buy materials for the full product universe until the proof line is stable."],
  ["Multiple vessel styles", "Changing vessel size forces new wick tests and label sizing."],
  ["Bulk fragrance oils", "A scent that smells good in the bottle can fail in wax."],
  ["Professional packaging run", "Boxes and premium packaging come after the vessel, label, and formula are approved."]
];

const studyFiles = [
  { title: "Brand Operating System", type: "Local file", url: "./study-files/brand-operating-system.md", note: "Core Ziyani concept, roles, product system, and design rules." },
  { title: "Jocelyn Starter Package", type: "Local file", url: "./study-files/jocelyn-starter-package.md", note: "30-day path and first $500-$1,000 spending logic." },
  { title: "Label Content System", type: "Local file", url: "./study-files/label-content-system.md", note: "Libra reference line, Sagittarius draft, and website/app product data model." },
  { title: "Godly Or Demonic?", type: "Local file", url: "./study-files/godly-or-demonic.md", note: "Faith-centered answer for concerns about angel numbers." },
  { title: "Candle Terms and Process", type: "Local file", url: "./study-files/candle-terms-and-process.md", note: "Beginner candle-making vocabulary and testing process." },
  { title: "Ziyani Google Drive Folder", type: "Source folder", url: "https://drive.google.com/drive/folders/13oYx1yWPjxb0gDC_ivKP3GPeUYp0pVAp", note: "Original assets, docs, labels, and brand source material." }
];

const studyFileCache = new Map();

const resources = [
  { title: "Candle making video 1", type: "Video", url: "https://www.youtube.com/watch?v=tAUu-zn8nXo", note: "Beginner-friendly video from the resource list." },
  { title: "Yanely Amadiz", type: "Channel", url: "https://www.youtube.com/@YanelyAmadiz", note: "Follow for candle business and maker learning." },
  { title: "Ultimate Guide to Start A Candle Business in 2025", type: "Video", url: "https://www.youtube.com/watch?v=ILWtZBQjN_0", note: "Deep-dive candle business training with Black Tie Barn." },
  { title: "Black Tie Barn", type: "Channel", url: "https://www.youtube.com/@BlackTieBarn", note: "Candle business education, testing, and maker strategy." },
  { title: "Candle making video 3", type: "Video", url: "https://www.youtube.com/watch?v=zBcOeiJCRmM", note: "Additional training video from the Ziyani list." },
  { title: "Baroque Candle Co.", type: "Channel", url: "https://www.youtube.com/@baroquecandleco", note: "Follow for candle making, product, and brand presentation ideas." }
];

const suppliers = [
  "CandleScience", "Wholesale Supplies Plus", "Bulk Apothecary", "The Candle Makers Store",
  "Nature's Garden", "Bramble Berry", "Indigo Fragrance Co.", "Fillmore Container",
  "Aztec Candle & Soap Supply", "Candlewic"
];

const classroomPoints = [
  ["Ziyani model", "12 zodiac base fragrances combine with 9 angel-number accents to create 108 alignment candles."],
  ["Light your alignment", "The candle is a prompt for atmosphere, reflection, intention, and embodied energy."],
  ["Faith position", "Numbers do not hold power. God does. The numbers are reflection prompts, not objects of worship."],
  ["Design system", "Angel number controls the color world. Zodiac controls the symbol, image, and story world."],
  ["Maker discipline", "Jocelyn should test wax, wick, vessel, fragrance load, cure time, and burn performance before selling."]
];

const weeklyFocus = [
  ["Brand language", "Practice saying what Ziyani is in one sentence: zodiac base plus angel-number accent, made to help people light their alignment."],
  ["Candle safety", "Memorize warning labels, melt pool behavior, wick testing, hot throw, cold throw, and proper cure time."],
  ["Libra proof line", "Use Libra as the test line for formula, label sizing, photography, customer explanation, and packaging feel."],
  ["Faith clarity", "Be ready to explain that Ziyani honors God and uses numbers only as moments to pause, reflect, and pray."]
];

const academyLevels = [
  {
    level: "Level 1",
    title: "Candle Foundations",
    goal: "Understand the basic language and workflow before pouring anything serious.",
    learn: ["Wax types", "Wicks", "Fragrance load", "Cold throw", "Hot throw", "Cure time", "Warning labels"],
    prove: ["Explain each term in plain language", "Set up clean/hot/cure zones", "Create a blank batch record"]
  },
  {
    level: "Level 2",
    title: "Controlled Pouring",
    goal: "Learn how wax behaves and how to make repeatable candles.",
    learn: ["Melting", "Temperature tracking", "Wick centering", "Pouring", "Surface fixes", "Curing"],
    prove: ["Pour unscented control candles", "Record every temperature", "Compare finished tops after cooling"]
  },
  {
    level: "Level 3",
    title: "Scent Formulation",
    goal: "Understand how Ziyani's base + accent system performs in wax.",
    learn: ["Base fragrance", "Accent fragrance", "Oil ratios", "Fragrance performance", "Scent story"],
    prove: ["Test Libra base", "Test Libra 111, 444, and 888", "Rate cold throw and hot throw separately"]
  },
  {
    level: "Level 4",
    title: "Burn Testing and Quality Control",
    goal: "Know whether a candle is safe, consistent, and sellable.",
    learn: ["Melt pool", "Tunneling", "Soot", "Jar heat", "Wick mushrooming", "Burn logs"],
    prove: ["Complete burn tests over multiple sessions", "Reject failed formulas", "Approve one repeatable Libra formula"]
  },
  {
    level: "Level 5",
    title: "Brand, Presentation, and Launch",
    goal: "Speak the brand clearly and present the product like a founder.",
    learn: ["Light your alignment", "Godly/Demonic response", "Label meaning", "Customer education", "Product photography"],
    prove: ["Explain Ziyani in 30 seconds", "Explain one zodiac and one angel number", "Present three finished sample candles"]
  }
];

const masteryStandards = [
  ["No guessing", "Every candle test needs weights, temperatures, vessel, wick, fragrance load, cure date, and burn notes."],
  ["No selling untested candles", "A candle is not a product until it passes burn testing and safety review."],
  ["One variable at a time", "Change only one major variable per test so she knows what caused the result."],
  ["Founder language", "She must be able to explain the product, the faith position, and the scent purpose without reading from a script."],
  ["Repeatability", "If she cannot remake the candle, it is not ready for the line."]
];

const practiceRhythm = [
  ["Monday", "Study one lesson and write the definitions in her own words."],
  ["Tuesday", "Watch one video or read one study file, then write three takeaways."],
  ["Wednesday", "Pour or plan one controlled test batch."],
  ["Thursday", "Review batch notes, scent notes, label fit, and burn test observations."],
  ["Friday", "Take the weekly 20-question quiz and identify weak spots."],
  ["Weekend", "Practice the sales explanation and photograph any approved samples."]
];

const quizBank = [
  { q: "What does the zodiac sign represent in the Ziyani product system?", choices: ["The base fragrance and identity energy", "The jar size", "The weekly discount", "The shipping method"], answer: 0 },
  { q: "What does the angel number represent in the Ziyani product system?", choices: ["The accent fragrance and intention energy", "The candle weight", "The wax supplier", "The label printer"], answer: 0 },
  { q: "How many total Ziyani candle combinations come from 12 zodiacs and 9 angel numbers?", choices: ["21", "48", "108", "144"], answer: 2 },
  { q: "What is Ziyani's core phrase?", choices: ["Burn the night", "Light your alignment", "Follow the flame", "Find your sign"], answer: 1 },
  { q: "Which zodiac is the first proof line in the current vault?", choices: ["Leo", "Sagittarius", "Libra", "Pisces"], answer: 2 },
  { q: "What is Libra's base fragrance?", choices: ["Rose & Bergamot", "Amber Honey", "Sea Salt & Lotus", "Cedarwood & Vetiver"], answer: 0 },
  { q: "What is Sagittarius called in the current Ziyani system?", choices: ["Solar Flame", "Open Horizon", "Dark Intention", "Future Current"], answer: 1 },
  { q: "Which angel number is called The Initiator?", choices: ["111", "333", "777", "999"], answer: 0 },
  { q: "Which angel number is called The Stabilizer?", choices: ["222", "444", "666", "888"], answer: 1 },
  { q: "Which angel number is called The Completion?", choices: ["111", "555", "777", "999"], answer: 3 },
  { q: "In the design system, what should stay consistent across zodiacs?", choices: ["Angel-number color schemes", "Every zodiac image", "Every label title", "Every fragrance name"], answer: 0 },
  { q: "What changes from zodiac to zodiac in the design system?", choices: ["The zodiac imagery and story", "The brand spelling", "The password", "The number meanings disappear"], answer: 0 },
  { q: "What should Jocelyn test before selling candles?", choices: ["Wax, wick, vessel, fragrance load, cure time, and burn performance", "Only the label color", "Only the scent in the bottle", "Only the name of the candle"], answer: 0 },
  { q: "What does cold throw mean?", choices: ["Scent strength before the candle is burned", "The temperature of the wax", "How cold the jar gets", "How fast the candle ships"], answer: 0 },
  { q: "What does hot throw mean?", choices: ["Scent strength while the candle is burning", "A candle that overheats in storage", "How quickly wax melts in the pot", "A label printing method"], answer: 0 },
  { q: "Why should Jocelyn avoid changing wax, wick, vessel, and fragrance load all at once?", choices: ["She will not know what caused the result", "It makes labels smaller", "It changes the brand spelling", "It stops the music"], answer: 0 },
  { q: "What is a melt pool?", choices: ["The liquid wax area created while the candle burns", "A supplier list", "A design folder", "A type of label"], answer: 0 },
  { q: "What is tunneling?", choices: ["When the candle burns down the center and leaves wax on the sides", "When a candle smells too strong cold", "When a label wraps perfectly", "When a jar is too small for a logo"], answer: 0 },
  { q: "Why are batch records important?", choices: ["They make testing repeatable", "They replace burn testing", "They are only for taxes", "They choose the zodiac"], answer: 0 },
  { q: "What should be included in a batch record?", choices: ["Wax grams, fragrance grams, temperatures, wick size, cure date, and burn notes", "Only the candle name", "Only customer comments", "Only the label image"], answer: 0 },
  { q: "What does Ziyani teach about angel numbers and power?", choices: ["Numbers do not have power; God does", "Numbers replace prayer", "Numbers control outcomes", "Numbers should be worshiped"], answer: 0 },
  { q: "How should Jocelyn answer concerns that angel numbers are demonic?", choices: ["They are prompts to pause, reflect, pray, and seek God", "They are stronger than scripture", "They are spirits", "They are magic commands"], answer: 0 },
  { q: "What does Ziyani explicitly not teach?", choices: ["Divination, worship of numbers, spirit communication, or replacing God", "Candle safety", "Brand clarity", "Product testing"], answer: 0 },
  { q: "What is the role of fragrance in Ziyani?", choices: ["A sensory expression of identity meeting intention", "Only a decoration", "A random oil mix", "A shipping category"], answer: 0 },
  { q: "What should be Jocelyn's first job?", choices: ["Become strong with candle-making fundamentals", "Launch all 108 candles immediately", "Buy bulk inventory first", "Skip burn testing"], answer: 0 },
  { q: "What is the safest early product strategy?", choices: ["Test a few Libra combinations first", "Sell every zodiac at once", "Change all variables every batch", "Skip labels until launch"], answer: 0 },
  { q: "Which supplier type should fragrance oils come from?", choices: ["Candle-safe suppliers with IFRA/SDS and candle usage guidance", "Any perfume oil seller", "Food flavoring suppliers", "Unlabeled marketplace oils"], answer: 0 },
  { q: "What is cure time?", choices: ["Resting time after pouring so wax and fragrance bind before testing or selling", "Time spent designing a logo", "A shipping delay", "A social media schedule"], answer: 0 },
  { q: "What is the purpose of warning labels?", choices: ["Customer safety and responsible candle use", "Decoration only", "Replacing the front label", "Choosing the scent"], answer: 0 },
  { q: "What should the storefront vision image represent in the vault?", choices: ["Motivation for what Ziyani can become", "A finished lease agreement", "A current inventory count", "A required first purchase"], answer: 0 },
  { q: "Which candle pairing phrase belongs to Libra 444?", choices: ["Steady Elegance", "Brave Opening", "Future Signal", "Sacred Anchor"], answer: 0 },
  { q: "Which candle pairing phrase belongs to Libra 888?", choices: ["Radiant Poise", "Quiet Balance", "Wild Expression", "Gentle Goodbye"], answer: 0 },
  { q: "What does 555 represent in the angel-number accent system?", choices: ["Change, release, movement, and willingness to evolve", "Completion only", "Grounding only", "Relationship only"], answer: 0 },
  { q: "What does 888 represent in the angel-number accent system?", choices: ["Abundance, confidence, value, and magnetic attraction", "Closure", "Fresh start", "Protection only"], answer: 0 },
  { q: "What does 222 represent in the angel-number accent system?", choices: ["Balance, trust, relationship, and emotional steadiness", "Only money", "Only endings", "Only fire"], answer: 0 },
  { q: "What is the best way to explain Ziyani quickly?", choices: ["Your zodiac is the base scent, your angel number is the accent, together they help you light your alignment", "It is only astrology", "It is only numerology", "It is only room spray"], answer: 0 },
  { q: "What should Jocelyn do with the first $500-$1,000?", choices: ["Invest in learning, testing, tools, and repeatability", "Buy all possible inventory", "Spend it all on ads", "Order every jar style"], answer: 0 },
  { q: "What should the label cards communicate?", choices: ["Image, pairing title, fragrances, and three attributes", "Only price", "Only wax weight", "Only supplier names"], answer: 0 },
  { q: "What is The Harmonizer's accent fragrance?", choices: ["White Tea + Sheer Musk", "Golden Vanilla + Warm Resin", "Fresh Air + Salted Woods", "White Amber Citrus"], answer: 0 },
  { q: "What is The Magnet's accent fragrance?", choices: ["Golden Vanilla + Warm Resin", "Clean Linen + Mineral Air", "Luminous Jasmine + Clear Resin", "Sandalwood + Vetiver"], answer: 0 }
];

const milestones = [
  "Choose final vessel size and label dimensions.",
  "Pick wax type and wick testing kit.",
  "Make first unscented control batch.",
  "Make Libra base test batch.",
  "Test Libra 111, 444, and 888.",
  "Finish burn logs for at least three candles.",
  "Approve Libra label print size on actual vessel.",
  "Photograph three sample candles.",
  "Practice the Ziyani pitch until it sounds natural.",
  "Approve next zodiac design direction."
];

const loginCredentials = {
  name: "Jocelyn",
  password: "Ziyani1010!"
};

const titles = {
  Aries: ["Fresh Spark", "Brave Union", "Expressive Fire", "Built Courage", "Clean Break", "Embodied Flame", "Inner Signal", "Magnetic Action", "Completed Start"],
  Taurus: ["Grounded Start", "Soft Stability", "Sensual Craft", "Rooted Worth", "Open Ground", "Body Luxury", "Quiet Knowing", "Abundant Value", "Peaceful Release"],
  Gemini: ["Clear Signal", "Balanced Voice", "Bright Expression", "Structured Thought", "Fresh Current", "Present Mind", "Intuitive Message", "Magnetic Voice", "Clean Closure"],
  Cancer: ["Tender Beginning", "Sacred Ease", "Creative Shelter", "Protected Heart", "Emotional Shift", "Nurtured Body", "Inner Tide", "Magnetic Care", "Gentle Goodbye"],
  Leo: ["Radiant Start", "Golden Union", "Creative Crown", "Steady Flame", "Open Spotlight", "Embodied Glow", "Heart Wisdom", "Magnetic Shine", "Noble Release"],
  Virgo: ["Clean Beginning", "Ordered Peace", "Refined Expression", "Sacred Structure", "Fresh Reset", "Embodied Care", "Precise Knowing", "Valued Mastery", "Clean Completion"],
  Scorpio: ["Focused Beginning", "Deep Trust", "Shadow Art", "Protected Power", "Transforming Current", "Embodied Desire", "Hidden Truth", "Magnetic Depth", "Sacred Ending"],
  Capricorn: ["Purposeful Start", "Steady Alliance", "Crafted Authority", "Legacy Root", "Strategic Shift", "Embodied Discipline", "Long Vision", "Magnetic Status", "Earned Completion"],
  Aquarius: ["Future Signal", "Aligned Community", "Original Voice", "Structured Vision", "Electric Shift", "Embodied Difference", "Clear Download", "Magnetic Future", "Released Pattern"],
  Pisces: ["Dream Opening", "Soft Trust", "Inspired Tide", "Sacred Anchor", "Fluid Change", "Embodied Dream", "Mystic Clarity", "Magnetic Compassion", "Peaceful Surrender"]
};

function getZodiac(sign) {
  return zodiacs.find((item) => item.sign === sign);
}

function getAngel(number) {
  return angels.find((item) => item.number === number);
}

function getCombo(sign, number) {
  const zodiac = getZodiac(sign);
  const angel = getAngel(number);
  const source = productCatalog?.[sign]?.[number];
  const approvedAttributes = sign === "Libra"
    ? libraCopy[number].attributes
    : sign === "Sagittarius"
      ? sagittariusCopy[number].attributes
      : [zodiac.tags[0], angel.tags[0], zodiac.tags[1]];
  return {
    title: source?.title || `${zodiac.name} ${angel.name}`,
    attributes: approvedAttributes,
    copy: source?.definition || `${zodiac.sign} brings ${zodiac.tags.join(", ").toLowerCase()} into the room. Paired with ${number}, it becomes a candle for ${angel.meaning.toLowerCase()}`,
    status: source?.status || "working"
  };
}

function setView(view) {
  document.querySelectorAll(".view").forEach((section) => section.classList.remove("active"));
  document.querySelector(`#view-${view}`).classList.add("active");
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  const titlesByView = {
    startup: ["Jocelyn's hub", "Startup Command Center"],
    starter: ["Founder buying plan", "Startup Kit"],
    zodiac: ["Zodiac base fragrances", "Zodiac Definitions"],
    angel: ["Accent fragrances", "Angel Numbers"],
    combinations: ["108-product matrix", "Pairing Definitions"],
    designs: ["Visual system", "Design Library"],
    candles: ["Maker training", "Candles 101"],
    milestones: ["Execution tracker", "Milestones and Checklist"],
    classroom: ["Weekly learning", "Classroom"],
    academy: ["Expert training path", "Ziyani Academy"],
    about: ["Brand doctrine", "About Ziyani"]
  };
  document.querySelector("#section-kicker").textContent = titlesByView[view][0];
  document.querySelector("#section-title").textContent = titlesByView[view][1];
}

function fillSelect(select, items, getValue, getLabel) {
  select.innerHTML = items.map((item) => `<option value="${getValue(item)}">${getLabel(item)}</option>`).join("");
}

function tags(items) {
  return `<div class="tag-list">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function renderMarkdownTable(rows) {
  const parsed = rows
    .filter((row) => !/^\|\s*-/.test(row))
    .map((row) => row.split("|").slice(1, -1).map((cell) => inlineMarkdown(cell.trim())));
  if (!parsed.length) return "";
  const [head, ...body] = parsed;
  return `
    <div class="study-table-wrap">
      <table>
        <thead><tr>${head.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead>
        <tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function renderStudyMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let list = [];
  let code = [];
  let table = [];
  let inCode = false;

  const flushList = () => {
    if (!list.length) return;
    html.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
    list = [];
  };

  const flushCode = () => {
    if (!code.length) return;
    html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
    code = [];
  };

  const flushTable = () => {
    if (!table.length) return;
    html.push(renderMarkdownTable(table));
    table = [];
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      flushList();
      flushTable();
      if (inCode) {
        flushCode();
        inCode = false;
      } else {
        inCode = true;
      }
      return;
    }

    if (inCode) {
      code.push(line);
      return;
    }

    if (/^\|.+\|$/.test(trimmed)) {
      flushList();
      table.push(trimmed);
      return;
    }

    flushTable();

    if (!trimmed) {
      flushList();
      return;
    }

    if (trimmed.startsWith("# ")) {
      flushList();
      html.push(`<h2>${inlineMarkdown(trimmed.slice(2))}</h2>`);
      return;
    }

    if (trimmed.startsWith("## ")) {
      flushList();
      html.push(`<h3>${inlineMarkdown(trimmed.slice(3))}</h3>`);
      return;
    }

    if (trimmed.startsWith("### ")) {
      flushList();
      html.push(`<h4>${inlineMarkdown(trimmed.slice(4))}</h4>`);
      return;
    }

    if (trimmed.startsWith("> ")) {
      flushList();
      html.push(`<blockquote>${inlineMarkdown(trimmed.slice(2))}</blockquote>`);
      return;
    }

    if (/^- /.test(trimmed)) {
      list.push(trimmed.replace(/^- /, ""));
      return;
    }

    if (/^\d+\. /.test(trimmed)) {
      list.push(trimmed.replace(/^\d+\. /, ""));
      return;
    }

    flushList();
    html.push(`<p>${inlineMarkdown(trimmed)}</p>`);
  });

  flushList();
  flushTable();
  flushCode();
  return html.join("");
}

function closeStudyFile() {
  const modal = document.querySelector("#study-modal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("study-open");
}

async function openStudyFile(index) {
  const item = studyFiles[index];
  if (!item || !item.url.endsWith(".md")) return;
  const modal = document.querySelector("#study-modal");
  const title = document.querySelector("#study-reader-title");
  const body = document.querySelector("#study-reader-body");
  title.textContent = item.title;
  body.innerHTML = `<div class="study-loading">Loading ${escapeHtml(item.title)}...</div>`;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("study-open");

  try {
    if (!studyFileCache.has(item.url)) {
      const response = await fetch(item.url);
      if (!response.ok) throw new Error("Study file unavailable");
      studyFileCache.set(item.url, await response.text());
    }
    body.innerHTML = renderStudyMarkdown(studyFileCache.get(item.url));
  } catch {
    body.innerHTML = `
      <div class="study-error">
        <strong>This study file could not load.</strong>
        <p>Refresh the vault and try again. If it still does not open, the file path needs to be checked.</p>
      </div>
    `;
  }
}

function comboCard(sign, number) {
  const zodiac = getZodiac(sign);
  const angel = getAngel(number);
  const combo = getCombo(sign, number);
  return `
    <article class="card combo-card" data-number="${number}">
      <h4>${zodiac.name} | ${number} | ${combo.title}</h4>
      <div class="fragrance-line">${zodiac.sign} × ${number}</div>
      <p>${combo.copy}</p>
      <div class="attributes">${combo.attributes.join(" | ")}</div>
    </article>
  `;
}

function renderZodiac() {
  const sign = document.querySelector("#zodiac-select").value;
  const zodiac = getZodiac(sign);
  const cards = angels.map((angel) => comboCard(sign, angel.number)).join("");
  document.querySelector("#zodiac-detail").innerHTML = `
    <div class="detail-header">
      <article class="definition-card">
        <p class="eyebrow">${zodiac.sign} - ${zodiac.name}</p>
        <h3>${zodiac.fragrance}</h3>
        <p>${zodiac.definition}</p>
        ${tags(zodiac.tags)}
      </article>
      <article class="panel">
        <h3>Design Direction</h3>
        <p>${zodiac.imagery}</p>
      </article>
    </div>
    <div class="card-grid">${cards}</div>
  `;
}

function renderAngel() {
  const number = document.querySelector("#angel-select").value;
  const angel = getAngel(number);
  const cards = zodiacs.map((zodiac) => comboCard(zodiac.sign, number)).join("");
  document.querySelector("#angel-detail").innerHTML = `
    <div class="detail-header">
      <article class="definition-card">
        <p class="eyebrow">${number} - ${angel.name}</p>
        <h3>${angel.fragrance}</h3>
        <p>${angel.meaning}</p>
        ${tags(angel.tags)}
      </article>
      <article class="panel">
        <h3>How To Use It</h3>
        <p>The angel number shifts the zodiac base into the current energy the customer wants to embody.</p>
      </article>
    </div>
    <div class="card-grid">${cards}</div>
  `;
}

function renderCombinations(showAll = false) {
  const sign = document.querySelector("#combo-zodiac-select").value;
  const number = document.querySelector("#combo-angel-select").value;
  const html = showAll ? angels.map((angel) => comboCard(sign, angel.number)).join("") : comboCard(sign, number);
  document.querySelector("#combo-detail").innerHTML = `<div class="card-grid">${html}</div>`;
}

function renderDesigns() {
  const sign = document.querySelector("#design-select").value;
  const zodiac = getZodiac(sign);
  const avatar = zodiacCharacters[sign];
  const brief = `${zodiac.sign} artwork is the locked character reference for future label, box, image, and video development. Preserve the character's defining silhouette, palette, symbols, and material language. Design imagery: ${zodiac.imagery}`;
  document.querySelector("#design-detail").innerHTML = `
    <div class="design-layout">
      <article class="panel character-profile">
        <img class="character-reference" src="${avatar}" alt="${zodiac.sign} approved character reference" />
        <div>
        <p class="eyebrow">${zodiac.sign} - ${zodiac.name}</p>
        <h3>Approved Character Reference</h3>
        <p>${brief}</p>
        <div class="status-pill">Master reference</div>
        </div>
      </article>
      <div class="card-grid">
        ${angels.map((angel) => {
          const combo = getCombo(sign, angel.number);
          return `
          <article class="card design-card">
            <div class="placeholder-art"><strong>${zodiac.sign} ${angel.number}</strong><span>Character artwork</span><span>Box design</span><span>Label design</span></div>
            <div class="design-card-body">
              <p class="eyebrow">${angel.number} · ${angel.name}</p>
              <h4>${combo.title}</h4>
              <p>${combo.copy}</p>
              <div class="attributes">${combo.attributes.join(" | ")}</div>
              <div class="fragrance-line">Copy status: ${combo.status} · Design status: not started</div>
            </div>
          </article>`;
        }).join("")}
      </div>
    </div>
  `;
}

function renderDesignSystemGuides() {
  document.querySelector("#design-panel-label-guide").innerHTML = `
    <div class="guide-grid">
      <article class="panel"><p class="eyebrow">Core rule</p><h3>Definition-first packaging</h3><p>Public packaging communicates the zodiac, angel number, blend name, combination definition, three theme words, expanded meaning, and reflection. Fragrance ingredients and oil notes remain internal.</p></article>
      <article class="panel"><p class="eyebrow">Production rule</p><h3>Keep every word editable</h3><p>AI creates artwork only. Logos, names, numbers, definitions, legal copy, and typography must be placed as separate editable layers in the final design file.</p></article>
    </div>
    <div class="face-grid">${packagingFaces.map((item) => `<article class="card face-card"><p class="eyebrow">${item.face}</p><h4>${item.purpose}</h4><p>${item.content}</p></article>`).join("")}</div>
    <article class="panel"><h3>Preflight checklist</h3><ul class="check-list"><li>Confirm the approved master entry before designing.</li><li>Use the locked character reference; do not regenerate character identity.</li><li>Place all text and logos as editable vector or type layers.</li><li>Keep copy inside the printer's safe area and extend artwork through bleed.</li><li>Proof spelling, number, zodiac, blend name, three words, legal copy, barcode/SKU, and net weight.</li><li>Export a print PDF and retain the editable source file.</li></ul></article>`;
  document.querySelector("#design-panel-box-layout").innerHTML = `
    <article class="panel"><p class="eyebrow">Master dieline workflow</p><h3>One printer-approved template, six independently designed faces</h3><p>Do not build final packaging until the exact box dimensions and printer dieline are confirmed. Keep cut, fold, bleed, safe-area, and glue-flap guides on locked non-printing layers.</p></article>
    <div class="box-face-map">${packagingFaces.map((item, index) => `<article class="box-face"><span>${String(index + 1).padStart(2, "0")}</span><strong>${item.face}</strong><p>${item.content}</p></article>`).join("")}</div>
    <article class="panel"><h3>Required source package</h3><p>Editable dieline file · linked artwork · fonts or outlined production copy · logo vectors · character master · color specifications · approved copy sheet · print PDF · proof approval record.</p></article>`;
  document.querySelector("#design-panel-standards").innerHTML = `
    <div class="standards-grid">
      <article class="panel"><h3>Typography</h3><p>Maintain one approved display family, one readable supporting family, and a fixed hierarchy. Never bake type into AI artwork.</p></article>
      <article class="panel"><h3>Logo Usage</h3><p>Use only approved logo files. Preserve clear space, proportions, contrast, and minimum size. Never ask an image model to redraw the logo.</p></article>
      <article class="panel"><h3>Color</h3><p>Character palettes may vary by zodiac. Angel-number color cues must remain consistent across all twelve signs. Record production colors after physical proofing.</p></article>
      <article class="panel"><h3>Print Specifications</h3><p>Use the printer's exact dieline, bleed, safe area, color profile, resolution, substrate, finish, and barcode requirements.</p></article>
    </div>
    <article class="panel"><h3>Asset structure</h3><div class="asset-tree"><span>Characters / 12 approved masters</span><span>Box Templates / printer dielines</span><span>Backgrounds / approved art only</span><span>Logos / vector and transparent exports</span><span>Zodiac Symbols / consistent icon set</span><span>Typography / licenses and hierarchy</span><span>Decorative Elements / reusable motifs</span><span>Labels / editable source + proofs</span><span>Packaging / editable source + print PDFs</span></div></article>`;
}

function setupDesignTabs() {
  document.querySelectorAll(".design-tab").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll(".design-tab").forEach((item) => item.classList.toggle("active", item === button));
    document.querySelectorAll(".design-panel").forEach((panel) => panel.classList.toggle("active", panel.id === `design-panel-${button.dataset.designPanel}`));
  }));
}

function renderStaticLists() {
  document.querySelector("#startup-plan").innerHTML = startupPlan.map(([label, text]) => `<div class="timeline-item"><strong>${label}</strong><p>${text}</p></div>`).join("");
  document.querySelector("#candles-basics").innerHTML = candleBasics.map((lesson, index) => `
    <details class="lesson-card" ${index === 0 ? "open" : ""}>
      <summary>
        <strong>${lesson.title}</strong>
        <span>${lesson.summary}</span>
      </summary>
      <ul>
        ${lesson.details.map((detail) => `<li>${detail}</li>`).join("")}
      </ul>
      <p><strong>Practice:</strong> ${lesson.drill}</p>
    </details>
  `).join("");
  document.querySelector("#learning-links").innerHTML = resources.map((item) => `<div class="resource-card"><strong>${item.type}: ${item.title}</strong><p>${item.note}</p><a href="${item.url}" target="_blank" rel="noreferrer">Open resource</a></div>`).join("");
  document.querySelector("#supplier-list").innerHTML = suppliers.map((name) => `<div class="supplier-card"><strong>${name}</strong><p>Research candle-safe oils, waxes, vessels, labels, or packaging.</p></div>`).join("");
  document.querySelector("#milestone-list").innerHTML = milestones.map((text, index) => checkItem(`milestone-${index}`, text, "milestones")).join("");
  document.querySelector("#classroom-points").innerHTML = classroomPoints.map(([label, text]) => `<div class="study-point"><strong>${label}</strong><p>${text}</p></div>`).join("");
  document.querySelector("#weekly-focus").innerHTML = weeklyFocus.map(([label, text]) => `<div class="study-point"><strong>${label}</strong><p>${text}</p></div>`).join("");
  document.querySelector("#study-file-links").innerHTML = studyFiles.map((item, index) => `
    <div class="resource-card">
      <strong>${item.type}: ${item.title}</strong>
      <p>${item.note}</p>
      ${item.url.endsWith(".md")
        ? `<button class="text-link study-file-button" type="button" data-study-index="${index}">Open study file</button>`
        : `<a href="${item.url}" target="_blank" rel="noreferrer">Open source folder</a>`}
    </div>
  `).join("");
  document.querySelector("#starter-kit-list").innerHTML = starterKit.map((item) => `
    <article class="kit-card">
      <div>
        <span>${item.target}</span>
        <h4>${item.category}</h4>
      </div>
      <p><strong>Buy:</strong> ${item.buy}</p>
      <p><strong>Why:</strong> ${item.why}</p>
      <p><strong>Note:</strong> ${item.notes}</p>
    </article>
  `).join("");
  document.querySelector("#starter-buy-first").innerHTML = starterBuyFirst.map(([label, text]) => `<div class="study-point"><strong>${label}</strong><p>${text}</p></div>`).join("");
  document.querySelector("#starter-wait-list").innerHTML = starterWaitList.map(([label, text]) => `<div class="study-point"><strong>${label}</strong><p>${text}</p></div>`).join("");
  document.querySelector("#academy-levels").innerHTML = academyLevels.map((item) => `
    <article class="academy-card">
      <span>${item.level}</span>
      <h4>${item.title}</h4>
      <p>${item.goal}</p>
      <div class="academy-columns">
        <div>
          <strong>Learn</strong>
          <ul>${item.learn.map((line) => `<li>${line}</li>`).join("")}</ul>
        </div>
        <div>
          <strong>Prove</strong>
          <ul>${item.prove.map((line) => `<li>${line}</li>`).join("")}</ul>
        </div>
      </div>
    </article>
  `).join("");
  document.querySelector("#mastery-standards").innerHTML = masteryStandards.map(([label, text]) => `<div class="study-point"><strong>${label}</strong><p>${text}</p></div>`).join("");
  document.querySelector("#practice-rhythm").innerHTML = practiceRhythm.map(([label, text]) => `<div class="study-point"><strong>${label}</strong><p>${text}</p></div>`).join("");
}

function seededRandom(seed) {
  let value = seed % 2147483647;
  if (value <= 0) value += 2147483646;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function seededShuffle(items, seed) {
  const result = [...items];
  const random = seededRandom(seed);
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function getFridayQuizSeed() {
  const today = new Date();
  const local = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const daysSinceFriday = (local.getDay() + 2) % 7;
  const friday = new Date(local);
  friday.setDate(local.getDate() - daysSinceFriday);
  const yyyy = friday.getFullYear();
  const mm = String(friday.getMonth() + 1).padStart(2, "0");
  const dd = String(friday.getDate()).padStart(2, "0");
  const key = `${yyyy}-${mm}-${dd}`;
  const seed = Number(`${yyyy}${mm}${dd}`);
  return { key, seed };
}

function getWeeklyQuestions() {
  const { key, seed } = getFridayQuizSeed();
  return {
    key,
    questions: seededShuffle(quizBank, seed).slice(0, 20).map((question, index) => {
      const choices = question.choices.map((choice, choiceIndex) => ({ choice, originalIndex: choiceIndex }));
      const shuffledChoices = seededShuffle(choices, seed + index + 17);
      return {
        ...question,
        choices: shuffledChoices.map((item) => item.choice),
        answer: shuffledChoices.findIndex((item) => item.originalIndex === question.answer)
      };
    })
  };
}

function renderQuiz() {
  const { key, questions } = getWeeklyQuestions();
  const saved = loadState(`ziyaniQuiz-${key}`, {});
  const quiz = document.querySelector("#weekly-quiz");
  document.querySelector("#quiz-week-label").textContent = `Quiz week started Friday ${key}. A new 20-question set appears every Friday.`;
  quiz.innerHTML = questions.map((question, questionIndex) => `
    <fieldset class="quiz-question" data-question="${questionIndex}">
      <legend>${questionIndex + 1}. ${question.q}</legend>
      ${question.choices.map((choice, choiceIndex) => `
        <label class="quiz-choice">
          <input type="radio" name="question-${questionIndex}" value="${choiceIndex}" ${String(saved[questionIndex]) === String(choiceIndex) ? "checked" : ""} />
          <span>${choice}</span>
        </label>
      `).join("")}
      <p class="quiz-feedback" aria-live="polite"></p>
    </fieldset>
  `).join("");
  updateQuizScore();
}

function updateQuizScore() {
  const { key, questions } = getWeeklyQuestions();
  const saved = loadState(`ziyaniQuiz-${key}`, {});
  let answered = 0;
  let correct = 0;

  document.querySelectorAll(".quiz-question").forEach((fieldset, index) => {
    const feedback = fieldset.querySelector(".quiz-feedback");
    const selected = saved[index];
    fieldset.classList.remove("correct", "incorrect");
    feedback.textContent = "";
    if (selected === undefined) return;
    answered += 1;
    if (Number(selected) === questions[index].answer) {
      correct += 1;
      fieldset.classList.add("correct");
      feedback.textContent = "Correct.";
    } else {
      fieldset.classList.add("incorrect");
      feedback.textContent = `Study this one. Correct answer: ${questions[index].choices[questions[index].answer]}`;
    }
  });

  document.querySelector("#quiz-score").textContent = `${correct}/20`;
  document.querySelector("#quiz-score").setAttribute("title", `${answered} answered`);
}

function bindQuiz() {
  const quiz = document.querySelector("#weekly-quiz");
  const reset = document.querySelector("#reset-weekly-quiz");
  quiz.addEventListener("change", (event) => {
    if (event.target.type !== "radio") return;
    const { key } = getFridayQuizSeed();
    const saved = loadState(`ziyaniQuiz-${key}`, {});
    const fieldset = event.target.closest(".quiz-question");
    saved[fieldset.dataset.question] = Number(event.target.value);
    saveState(`ziyaniQuiz-${key}`, saved);
    updateQuizScore();
  });

  reset.addEventListener("click", () => {
    const { key } = getFridayQuizSeed();
    localStorage.removeItem(`ziyaniQuiz-${key}`);
    renderQuiz();
  });
}

function bindStudyReader() {
  document.addEventListener("click", (event) => {
    const studyButton = event.target.closest(".study-file-button");
    if (studyButton) {
      openStudyFile(Number(studyButton.dataset.studyIndex));
      return;
    }

    if (event.target.closest("[data-close-study]")) {
      closeStudyFile();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeStudyFile();
  });
}

function checkItem(id, text, group, removable = false, done = false) {
  return `
    <label class="check-item ${done ? "done" : ""}" data-id="${id}" data-group="${group}">
      <input type="checkbox" ${done ? "checked" : ""} />
      <span>${text}</span>
      ${removable ? `<button class="delete-task" type="button" aria-label="Delete task">x</button>` : ""}
    </label>
  `;
}

function loadState(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function saveState(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function unlockVault() {
  document.body.classList.remove("locked");
  document.body.classList.add("unlocked");
  sessionStorage.setItem("ziyaniVaultUnlocked", "true");
}

async function playVaultAudio() {
  const audio = document.querySelector("#vault-audio");
  const toggle = document.querySelector("#music-toggle");
  if (!audio || !toggle) return;
  audio.loop = true;
  try {
    await audio.play();
    toggle.classList.add("playing");
    toggle.classList.remove("blocked");
    toggle.setAttribute("aria-label", "Pause music");
    document.querySelector("#music-icon").textContent = "Pause";
  } catch {
    toggle.classList.remove("playing");
    toggle.classList.add("blocked");
    toggle.setAttribute("aria-label", "Play music");
    document.querySelector("#music-icon").textContent = "Play";
  }
}

function pauseVaultAudio() {
  const audio = document.querySelector("#vault-audio");
  const toggle = document.querySelector("#music-toggle");
  if (!audio || !toggle) return;
  audio.pause();
  toggle.classList.remove("playing", "blocked");
  toggle.setAttribute("aria-label", "Play music");
  document.querySelector("#music-icon").textContent = "Play";
}

function bindLoginAndAudio() {
  const form = document.querySelector("#login-form");
  const error = document.querySelector("#login-error");
  const toggle = document.querySelector("#music-toggle");
  const audio = document.querySelector("#vault-audio");

  if (sessionStorage.getItem("ziyaniVaultUnlocked") === "true") {
    unlockVault();
    playVaultAudio();
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#login-name").value.trim();
    const password = document.querySelector("#login-password").value;

    if (name === loginCredentials.name && password === loginCredentials.password) {
      error.textContent = "";
      unlockVault();
      playVaultAudio();
      return;
    }

    error.textContent = "That login does not match the vault.";
  });

  toggle.addEventListener("click", () => {
    if (audio.paused) {
      playVaultAudio();
    } else {
      pauseVaultAudio();
    }
  });
}

function renderTasks() {
  const tasks = loadState("ziyaniTasks", []);
  document.querySelector("#custom-tasks").innerHTML = tasks.length
    ? tasks.map((task) => checkItem(task.id, task.text, "tasks", true, task.done)).join("")
    : `<div class="timeline-item"><strong>No custom tasks yet.</strong><p>Add what Jocelyn needs to buy, test, study, or finish.</p></div>`;
}

function bindChecklist() {
  document.addEventListener("change", (event) => {
    const row = event.target.closest(".check-item");
    if (!row) return;
    row.classList.toggle("done", event.target.checked);
    if (row.dataset.group === "tasks") {
      const tasks = loadState("ziyaniTasks", []);
      const task = tasks.find((item) => item.id === row.dataset.id);
      if (task) task.done = event.target.checked;
      saveState("ziyaniTasks", tasks);
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("delete-task")) return;
    const row = event.target.closest(".check-item");
    const tasks = loadState("ziyaniTasks", []).filter((item) => item.id !== row.dataset.id);
    saveState("ziyaniTasks", tasks);
    renderTasks();
  });

  document.querySelector("#task-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#task-input");
    const text = input.value.trim();
    if (!text) return;
    const tasks = loadState("ziyaniTasks", []);
    tasks.unshift({ id: `task-${Date.now()}`, text, done: false });
    saveState("ziyaniTasks", tasks);
    input.value = "";
    renderTasks();
  });
}

function init() {
  fillSelect(document.querySelector("#zodiac-select"), zodiacs, (item) => item.sign, (item) => `${item.sign} - ${item.name}`);
  fillSelect(document.querySelector("#angel-select"), angels, (item) => item.number, (item) => `${item.number} - ${item.name}`);
  fillSelect(document.querySelector("#combo-zodiac-select"), zodiacs, (item) => item.sign, (item) => `${item.sign} - ${item.name}`);
  fillSelect(document.querySelector("#combo-angel-select"), angels, (item) => item.number, (item) => `${item.number} - ${item.name}`);
  fillSelect(document.querySelector("#design-select"), zodiacs, (item) => item.sign, (item) => `${item.sign} designs`);
  document.querySelector("#design-select").value = "Leo";

  document.querySelectorAll(".nav-link").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
  document.querySelector("#zodiac-select").addEventListener("change", renderZodiac);
  document.querySelector("#angel-select").addEventListener("change", renderAngel);
  document.querySelector("#combo-zodiac-select").addEventListener("change", () => renderCombinations(false));
  document.querySelector("#combo-angel-select").addEventListener("change", () => renderCombinations(false));
  document.querySelector("#show-all-combos").addEventListener("click", () => renderCombinations(true));
  document.querySelector("#design-select").addEventListener("change", renderDesigns);
  renderDesignSystemGuides();
  setupDesignTabs();

  renderStaticLists();
  renderZodiac();
  renderAngel();
  renderCombinations(false);
  renderDesigns();
  renderQuiz();
  renderTasks();
  bindChecklist();
  bindQuiz();
  bindStudyReader();
  bindLoginAndAudio();
}

init();
