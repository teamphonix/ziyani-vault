const fs = require("fs");
const vm = require("vm");

const file = "product-catalog.js";
const source = fs.readFileSync(file, "utf8");
const context = {};
vm.createContext(context);
vm.runInContext(`${source}\n;globalThis.catalog = productCatalog;`, context);

const themes = {
  Aries: {
    111: ["Initiative", "Self-Trust", "Breakthrough"], 222: ["Patience", "Cooperation", "Composure"],
    333: ["Expression", "Playfulness", "Boldness"], 444: ["Discipline", "Stability", "Fortitude"],
    555: ["Liberation", "Adaptability", "Momentum"], 666: ["Presence", "Desire", "Self-Mastery"],
    777: ["Instinct", "Discernment", "Conviction"], 888: ["Leadership", "Worth", "Influence"],
    999: ["Closure", "Release", "Renewal"]
  },
  Taurus: {
    111: ["Intention", "Readiness", "Growth"], 222: ["Security", "Reciprocity", "Ease"],
    333: ["Craft", "Pleasure", "Expression"], 444: ["Foundation", "Boundaries", "Endurance"],
    555: ["Flexibility", "Release", "Expansion"], 666: ["Embodiment", "Nourishment", "Sensuality"],
    777: ["Wisdom", "Stillness", "Trust"], 888: ["Value", "Receiving", "Prosperity"],
    999: ["Acceptance", "Simplicity", "Peace"]
  },
  Gemini: {
    111: ["Focus", "Decision", "Direction"], 222: ["Listening", "Dialogue", "Understanding"],
    333: ["Curiosity", "Voice", "Invention"], 444: ["Structure", "Concentration", "Follow-Through"],
    555: ["Perspective", "Movement", "Discovery"], 666: ["Breath", "Presence", "Integration"],
    777: ["Perception", "Insight", "Truth"], 888: ["Articulation", "Authority", "Impact"],
    999: ["Resolution", "Clarity", "Spaciousness"]
  },
  Cancer: {
    111: ["Tenderness", "Courage", "Beginning"], 222: ["Safety", "Attunement", "Belonging"],
    333: ["Imagination", "Warmth", "Openness"], 444: ["Protection", "Boundaries", "Security"],
    555: ["Flow", "Adaptation", "Emotional-Freedom"], 666: ["Nurture", "Rest", "Wholeness"],
    777: ["Sensitivity", "Intuition", "Knowing"], 888: ["Self-Worth", "Care", "Magnetism"],
    999: ["Forgiveness", "Release", "Healing"]
  },
  Leo: {
    111: ["Radiance", "Courage", "Emergence"], 222: ["Generosity", "Partnership", "Grace"],
    333: ["Creativity", "Joy", "Visibility"], 444: ["Loyalty", "Integrity", "Strength"],
    555: ["Freedom", "Reinvention", "Adventure"], 666: ["Vitality", "Pleasure", "Authenticity"],
    777: ["Heart-Wisdom", "Intuition", "Purpose"], 888: ["Sovereignty", "Confidence", "Recognition"],
    999: ["Humility", "Completion", "Legacy"]
  },
  Virgo: {
    111: ["Clarity", "Intention", "Reset"], 222: ["Balance", "Patience", "Harmony"],
    333: ["Ingenuity", "Precision", "Expression"], 444: ["Order", "Devotion", "Reliability"],
    555: ["Release", "Adjustment", "Renewal"], 666: ["Care", "Ritual", "Wellbeing"],
    777: ["Discernment", "Observation", "Wisdom"], 888: ["Mastery", "Service", "Abundance"],
    999: ["Completion", "Purification", "Peace"]
  },
  Libra: {
    111: ["Clarity", "Choice", "Alignment"], 222: ["Peace", "Trust", "Partnership"],
    333: ["Beauty", "Expression", "Connection"], 444: ["Poise", "Boundaries", "Stability"],
    555: ["Flexibility", "Change", "Equilibrium"], 666: ["Grace", "Presence", "Self-Love"],
    777: ["Perspective", "Intuition", "Truth"], 888: ["Magnetism", "Confidence", "Reciprocity"],
    999: ["Closure", "Forgiveness", "Balance"]
  },
  Scorpio: {
    111: ["Resolve", "Transformation", "Emergence"], 222: ["Vulnerability", "Trust", "Intimacy"],
    333: ["Intensity", "Creation", "Revelation"], 444: ["Protection", "Resilience", "Power"],
    555: ["Surrender", "Metamorphosis", "Freedom"], 666: ["Desire", "Embodiment", "Ownership"],
    777: ["Depth", "Intuition", "Truth"], 888: ["Magnetism", "Authority", "Regeneration"],
    999: ["Release", "Integration", "Rebirth"]
  },
  Sagittarius: {
    111: ["Courage", "Direction", "Departure"], 222: ["Faith", "Trust", "Companionship"],
    333: ["Joy", "Truth", "Expression"], 444: ["Discipline", "Purpose", "Freedom"],
    555: ["Adventure", "Change", "Expansion"], 666: ["Presence", "Wonder", "Experience"],
    777: ["Wisdom", "Vision", "Guidance"], 888: ["Optimism", "Momentum", "Opportunity"],
    999: ["Integration", "Completion", "Horizon"]
  },
  Capricorn: {
    111: ["Ambition", "Commitment", "Ascent"], 222: ["Patience", "Alliance", "Stability"],
    333: ["Craftsmanship", "Expression", "Authority"], 444: ["Discipline", "Foundation", "Legacy"],
    555: ["Strategy", "Adaptation", "Progress"], 666: ["Presence", "Responsibility", "Balance"],
    777: ["Foresight", "Discernment", "Purpose"], 888: ["Achievement", "Influence", "Prosperity"],
    999: ["Fulfillment", "Release", "Inheritance"]
  },
  Aquarius: {
    111: ["Originality", "Initiative", "Possibility"], 222: ["Community", "Cooperation", "Belonging"],
    333: ["Innovation", "Expression", "Liberation"], 444: ["Vision", "Structure", "Stewardship"],
    555: ["Disruption", "Change", "Evolution"], 666: ["Individuality", "Presence", "Acceptance"],
    777: ["Insight", "Intuition", "Foresight"], 888: ["Influence", "Abundance", "Progress"],
    999: ["Detachment", "Completion", "Future"]
  },
  Pisces: {
    111: ["Clarity", "Imagination", "Beginning"], 222: ["Softness", "Trust", "Harmony"],
    333: ["Inspiration", "Expression", "Wonder"], 444: ["Grounding", "Boundaries", "Safety"],
    555: ["Flow", "Release", "Expansion"], 666: ["Compassion", "Embodiment", "Restoration"],
    777: ["Intuition", "Surrender", "Revelation"], 888: ["Empathy", "Worth", "Magnetism"],
    999: ["Healing", "Closure", "Transcendence"]
  }
};

const reflectionBuilders = [
  (t, w) => `As you pause with ${t}, what new beginning may God be placing before you, and how can ${w[0]}, ${w[1]}, and ${w[2]} help you respond with intention?`,
  (t, w) => `In this moment, where might God be calling you into deeper ${w[0]}, ${w[1]}, and ${w[2]} through the relationships and choices before you?`,
  (t, w) => `What God-given part of you is ready to be expressed through ${w[0]}, ${w[1]}, and ${w[2]}, and what action would give it room to grow?`,
  (t, w) => `Where might God be leading you to establish ${w[0]}, protect ${w[1]}, and grow into ${w[2]} in this season?`,
  (t, w) => `What change may God be asking you to notice, and how can ${w[0]}, ${w[1]}, and ${w[2]} help you move through it with trust?`,
  (t, w) => `Where is God inviting you to become more present to ${w[0]}, honor ${w[1]}, and practice ${w[2]} in your life today?`,
  (t, w) => `As you become still, what truth might God be bringing to your attention through ${w[0]}, ${w[1]}, and ${w[2]}?`,
  (t, w) => `How might God be calling you to steward ${w[0]}, receive ${w[1]} with gratitude, and express ${w[2]} with integrity?`,
  (t, w) => `What may God be helping you complete or release, and how can ${w[0]}, ${w[1]}, and ${w[2]} prepare you for what comes next?`
];

const faithAnchor = "Lighting it marks a moment to pause, reflect, and listen for how God may be calling these qualities forward in you now.";

function reframeDefinition(text) {
  const clean = text
    .replace(/Together, this candle inspires/gi, "Together, these themes center")
    .replace(/This candle inspires/gi, "This pairing calls attention to")
    .replace(/This candle is for/gi, "This pairing centers")
    .replace(/This candle supports/gi, "This pairing centers")
    .replace(/This candle encourages/gi, "This pairing calls attention to")
    .replace(/Burn this candle when/gi, "Light this candle as a reminder to pause when")
    .replace(/Burn this when/gi, "Light this candle as a reminder to pause when")
    .replace(/creating a candle for/gi, "framing a moment of reflection around")
    .replace(/creating a confident, magnetic candle for/gi, "framing a confident moment of reflection around")
    .replace(/attract what you deserve/gi, "recognize opportunities aligned with your growth")
    .replace(/attract aligned opportunities/gi, "recognize aligned opportunities")
    .replace(/attract lasting opportunity/gi, "recognize lasting opportunity")
    .replace(/attract opportunity/gi, "recognize opportunity")
    .trim();
  return clean.includes(faithAnchor) ? clean : `${clean} ${faithAnchor}`;
}

function sentences(text) {
  return text.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map((s) => s.trim()).filter(Boolean) || [];
}

for (const [sign, combinations] of Object.entries(context.catalog)) {
  for (const [number, entry] of Object.entries(combinations)) {
    const words = themes[sign][number];
    entry.definition = reframeDefinition(entry.definition);
    entry.websiteCopy = entry.definition;
    entry.packagingCopy = entry.definition;
    entry.socialCopy = entry.definition;

    const sourceSentences = sentences(entry.definition);
    const opening = sourceSentences[0] || entry.definition;
    const outcome = sourceSentences.at(-1) || entry.definition;
    const title = entry.title.replace(/\s+/g, " ").trim();

    entry.threeWords = words;
    entry.wordMeanings = {
      [words[0]]: `${words[0]} names the first quality held in ${title}. It reflects this truth: ${opening}`,
      [words[1]]: `${words[1]} names the active practice in this pairing. It invites a conscious way of moving, choosing, and responding while listening for God's direction.`,
      [words[2]]: `${words[2]} names the alignment to carry forward. It invites you to consider how God may be calling this quality forward in your life: ${outcome}`
    };
    entry.expandedMeaning = Object.values(entry.wordMeanings).join(" ");
    entry.reflection = reflectionBuilders[(Number(number) / 111) - 1](title, words);
  }
}

fs.writeFileSync(file, `/* Canonical Ziyani product system. Public copy excludes fragrance formulas. */\nconst productCatalog = ${JSON.stringify(context.catalog, null, 2)};\n`);
