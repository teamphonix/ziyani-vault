const fs = require("fs");
const vm = require("vm");

const file = "product-catalog.js";
const inputFile = process.env.ZIYANI_COPY_SOURCE || file;
const source = fs.readFileSync(inputFile, "utf8");
const context = {};
vm.createContext(context);
vm.runInContext(`${source}\n;globalThis.catalog = productCatalog;`, context);

const signs = {
  Aries: {
    first: "a spark at the edge of motion",
    practice: "the breath between impulse and action",
    result: "fire that has learned its direction",
    pause: "Let the flame slow the rush long enough",
    image: "the first brave step"
  },
  Taurus: {
    first: "a seed pressed into trustworthy soil",
    practice: "the patient tending that turns roots into strength",
    result: "a garden sturdy enough to keep blooming",
    pause: "Let the steady glow make room",
    image: "the ground beneath your next step"
  },
  Gemini: {
    first: "an open window where a new thought enters",
    practice: "the clear breath that gives scattered ideas a voice",
    result: "a message able to travel without losing its truth",
    pause: "Let the room become quiet enough",
    image: "the truest sentence within the noise"
  },
  Cancer: {
    first: "a tide returning gently to its own shore",
    practice: "the shelter that lets a tender heart stay open",
    result: "a home within yourself that feeling cannot wash away",
    pause: "Let the soft light gather around you",
    image: "the place your spirit can safely return to"
  },
  Leo: {
    first: "sunlight gathering at the center of the heart",
    practice: "the warmth that shines without asking for applause",
    result: "a radiance generous enough to illuminate others",
    pause: "Let the glow soften the need to perform",
    image: "the light God placed in you"
  },
  Virgo: {
    first: "a clean line drawn through confusion",
    practice: "devoted hands tending what matters one detail at a time",
    result: "a quiet order in which purpose can breathe",
    pause: "Let the measured light clear a little space",
    image: "the next faithful detail"
  },
  Libra: {
    first: "a scale settling after the weight has been named",
    practice: "the graceful bridge between truth and tenderness",
    result: "a balance that does not require you to disappear",
    pause: "Let the balanced flame hold the room still",
    image: "the honest center between two choices"
  },
  Scorpio: {
    first: "an ember glowing beneath deep water",
    practice: "the courage to enter what is hidden without becoming lost there",
    result: "a self renewed by what it was willing to release",
    pause: "Let the low flame meet you beneath the surface",
    image: "the truth ready to survive transformation"
  },
  Sagittarius: {
    first: "an arrow lifted toward an unwritten horizon",
    practice: "the inner compass that keeps freedom from becoming escape",
    result: "an open road joined to a worthy purpose",
    pause: "Let the bright flame widen the horizon",
    image: "the direction behind your desire to move"
  },
  Capricorn: {
    first: "a sure foothold cut into the mountain",
    practice: "the steady climb that gives ambition a soul",
    result: "a summit built to become shelter for more than one life",
    pause: "Let the grounded light steady your footing",
    image: "the work worthy of your endurance"
  },
  Aquarius: {
    first: "a clear signal arriving from beyond the familiar",
    practice: "the current that carries vision into useful form",
    result: "a future spacious enough for others to belong",
    pause: "Let the electric stillness interrupt the familiar",
    image: "the possibility asking to be made useful"
  },
  Pisces: {
    first: "a dream rising like moonlight through water",
    practice: "the gentle boundary that lets compassion remain whole",
    result: "a shore where feeling becomes wisdom instead of weight",
    pause: "Let the quiet tide settle around you",
    image: "the wisdom moving beneath the feeling"
  }
};

const numbers = {
  111: {
    movement: "the beginning God may be opening",
    response: "choose one honest first step",
    reflection: (s, w) => `Where may God be opening a new door through ${s.image}, and what would it mean to meet it with ${w[0]}, ${w[1]}, and ${w[2]}?`
  },
  222: {
    movement: "the harmony God may be nurturing within your relationships and choices",
    response: "move without forcing what needs time to come together",
    reflection: (s, w) => `What would become more whole if you let God lead you toward ${w[0]}, ${w[1]}, and ${w[2]} instead of rushing the outcome?`
  },
  333: {
    movement: "the God-given expression waiting for room to breathe",
    response: "offer your voice without shrinking its joy",
    reflection: (s, w) => `What has God placed within you that wants honest expression, and how could ${w[0]}, ${w[1]}, and ${w[2]} give it a living form?`
  },
  444: {
    movement: "the foundation God may be strengthening beneath you",
    response: "build slowly enough for your values to remain inside the structure",
    reflection: (s, w) => `Where is God asking you to build with greater care, and which choice would turn ${w[0]}, ${w[1]}, and ${w[2]} into a foundation you can trust?`
  },
  555: {
    movement: "the change God may be asking you to notice rather than resist",
    response: "release what has ended and travel lighter",
    reflection: (s, w) => `What change becomes less frightening when viewed through ${s.image}, and how might God use ${w[0]}, ${w[1]}, and ${w[2]} to move you forward?`
  },
  666: {
    movement: "the return to presence, responsibility, and the life in front of you",
    response: "come back into your body and care for what God has entrusted to you",
    reflection: (s, w) => `Where have you drifted away from the present, and how might ${w[0]}, ${w[1]}, and ${w[2]} help you honor what God has placed in your care today?`
  },
  777: {
    movement: "the deeper discernment that becomes audible in stillness",
    response: "listen beneath fear and let discernment outlast uncertainty",
    reflection: (s, w) => `When the noise settles, what truth may God be bringing into focus through ${w[0]}, ${w[1]}, and ${w[2]}?`
  },
  888: {
    movement: "the call to steward worth, influence, and opportunity with integrity",
    response: "receive with gratitude and let what grows through you serve beyond you",
    reflection: (s, w) => `What has God trusted you to carry well, and how can ${w[0]}, ${w[1]}, and ${w[2]} turn increase into responsible stewardship?`
  },
  999: {
    movement: "the ending God may be using to clear sacred room for what follows",
    response: "bless what is complete, release it, and remain open to renewal",
    reflection: (s, w) => `What are you being invited to finish with grace, and how could ${w[0]}, ${w[1]}, and ${w[2]} help you release it into God's hands?`
  }
};

const firstForms = [
  (w, s, n, t) => `${w} is ${s.first}. Within ${t}, this quality gives shape to ${n.movement} before doubt can crowd the threshold.`,
  (w, s, n, t) => `At the entrance of ${t} stands ${w}: ${s.first}, alive to ${n.movement}.`,
  (w, s, n, t) => `${t} begins with ${w}, not as pressure, but as ${s.first} meeting ${n.movement}.`,
  (w, s, n, t) => `Here, ${w} feels like ${s.first}. Through ${t}, it helps you recognize ${n.movement} while it is still quiet.`,
  (w, s, n, t) => `${w} opens ${t} with the energy of ${s.first}, making space for ${n.movement}.`,
  (w, s, n, t) => `The first movement of ${t} is ${w}—${s.first} turned toward ${n.movement}.`,
  (w, s, n, t) => `In ${t}, ${w} arrives as ${s.first}. The particular work of ${w} is to meet ${n.movement} with awareness rather than hurry.`,
  (w, s, n, t) => `${w} carries the opening note of ${t}: ${s.first}, ready to recognize ${n.movement}.`,
  (w, s, n, t) => `Before anything changes, notice ${w} within ${t}. It is ${s.first} beside ${n.movement}.`
];

const secondForms = [
  (w, s, n, t) => `${w} becomes ${s.practice}. In ${t}, it is how you ${n.response} without abandoning your center.`,
  (w, s, n, t) => `${w} is the practice between insight and response—${s.practice}, teaching you, within ${t}, to ${n.response}.`,
  (w, s, n, t) => `Through ${w}, ${s.practice} becomes a daily choice. ${t} keeps the invitation clear: ${n.response}.`,
  (w, s, n, t) => `${w} holds the middle ground. Inside ${t}, ${s.practice} lets you ${n.response} with attention and honesty.`,
  (w, s, n, t) => `The work of ${w} is quiet but active: ${s.practice}. From the center of ${t}, you can ${n.response}.`,
  (w, s, n, t) => `${w} turns ${t} inward. It is ${s.practice}, giving you enough steadiness to ${n.response}.`,
  (w, s, n, t) => `To practice ${w} is to trust ${s.practice}. Within ${t}, that means finding the courage to ${n.response}.`,
  (w, s, n, t) => `${w} gives ${t} its human rhythm—${s.practice}, repeated until you can ${n.response}.`,
  (w, s, n, t) => `At the heart of ${t}, ${w} feels like ${s.practice}. Practicing ${w} makes it possible to ${n.response}.`
];

const thirdForms = [
  (w, s, n, t) => `${w} is the horizon of ${t}: ${s.result}. Carry ${w} as a question about how God may want this particular moment lived.`,
  (w, s, n, t) => `The promise inside ${t} is ${w}—${s.result}, offered back to God through the way you choose to live.`,
  (w, s, n, t) => `${w} completes the arc of ${t}. It is ${s.result}, the outward evidence of a life listening for God's direction.`,
  (w, s, n, t) => `When ${t} settles, ${w} remains: ${s.result}. Let ${w} shape your response, not predict your outcome.`,
  (w, s, n, t) => `${w} is where ${t} lands—${s.result}. ${w} becomes meaningful through faithful choices, not through the candle itself.`,
  (w, s, n, t) => `At its deepest, ${t} reaches toward ${w}: ${s.result}, lived with humility before God.`,
  (w, s, n, t) => `${w} gathers ${t} into ${s.result}. What follows depends on how honestly you carry ${w} into this part of your life.`,
  (w, s, n, t) => `The final note of ${t} is ${w}, felt as ${s.result}. Here, ${w} is less a destination than a way of walking with God.`,
  (w, s, n, t) => `${w} closes the circle of ${t}: ${s.result}. Hold ${w} gently, then listen for the next right response.`
];

const closeForms = [
  (s, n, t) => `${s.pause} to notice ${n.movement}; let ${t} leave you ready to ${n.response}.`,
  (s, n, t) => `${s.pause} so ${s.image} can meet ${n.movement}; let the stillness of ${t} help you ${n.response}.`,
  (s, n, t) => `Use the stillness around ${t} to consider ${n.movement}. The invitation within ${t} is simple: ${n.response}.`,
  (s, n, t) => `${s.pause} and listen for ${n.movement}. Let your answer to ${t} be lived: ${n.response}.`,
  (s, n, t) => `The scent of ${t} marks the pause, nothing more. Within ${t}, attend to ${n.movement} and ${n.response}.`,
  (s, n, t) => `${t} is not a prediction; it is a place to become still with ${n.movement} and decide how to ${n.response}.`,
  (s, n, t) => `${s.pause} before choosing what comes next. Through ${t}, ask where ${n.movement} is present, then ${n.response}.`,
  (s, n, t) => `Let the moment held by ${t} remain unhurried: recognize ${n.movement}, and when clarity comes, ${n.response}.`,
  (s, n, t) => `${s.pause} while you consider ${n.movement}. Leave the stillness of ${t} ready to ${n.response}.`
];

const genericStarts = [
  "At its heart, this reflection gathers",
  "The emotional center here is",
  "This pairing holds space for",
  "The invitation woven through this pairing is",
  "The moment turns toward",
  "Its inner landscape is shaped by",
  "This reflection draws together",
  "The pairing makes room for",
  "The central movement is"
];

function stripOldFormula(text, index) {
  return text
    .replace(/\s*Lighting it marks a moment to pause, reflect, and listen for how God may be calling these qualities forward in you now\./g, "")
    .replace(/This pairing centers/gi, genericStarts[index % genericStarts.length])
    .replace(/This pairing calls attention to/gi, genericStarts[(index + 3) % genericStarts.length])
    .replace(/Light this candle as a reminder to pause when/gi, "This reflection is for the moment when")
    .trim();
}

let recordIndex = 0;
for (const [sign, combinations] of Object.entries(context.catalog)) {
  const signVoice = signs[sign];
  for (const [number, entry] of Object.entries(combinations)) {
    const numberVoice = numbers[number];
    const words = entry.threeWords;
    const title = entry.title.replace(/\s+/g, " ").trim();
    const formIndex = Number(number) / 111 - 1;
    const base = stripOldFormula(entry.definition, recordIndex);
    const close = closeForms[(formIndex + Object.keys(signs).indexOf(sign)) % closeForms.length](signVoice, numberVoice, title);

    entry.definition = `${base} ${close}`;
    entry.wordMeanings = {
      [words[0]]: firstForms[formIndex](words[0], signVoice, numberVoice, title),
      [words[1]]: secondForms[(formIndex + 3) % secondForms.length](words[1], signVoice, numberVoice, title),
      [words[2]]: thirdForms[(formIndex + 6) % thirdForms.length](words[2], signVoice, numberVoice, title)
    };
    entry.expandedMeaning = words.map((word) => `${word}: ${entry.wordMeanings[word]}`).join(" ");
    entry.reflection = numberVoice.reflection(signVoice, words);
    entry.websiteCopy = entry.definition;
    entry.packagingCopy = entry.definition;
    entry.socialCopy = entry.definition;
    entry.copyVersion = "poetic-v1";
    recordIndex += 1;
  }
}

fs.writeFileSync(file, `/* Canonical Ziyani product system. Public copy excludes fragrance formulas. */\nconst productCatalog = ${JSON.stringify(context.catalog, null, 2)};\n`);
