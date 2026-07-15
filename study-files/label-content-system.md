# Ziyani Label Content System

*Created: 2026-05-08*

## Label Formula

Every candle should be generated from the same content structure:

```text
ZIYANI
{ZODIAC} | {ANGEL_NUMBER}
{PAIRING_TITLE}

{ZODIAC_BASE_FRAGRANCE}
+ {ANGEL_NUMBER_ACCENT_FRAGRANCE}
{ATTRIBUTE_1} | {ATTRIBUTE_2} | {ATTRIBUTE_3}
```

## Libra Reference Line

Libra is the first finished line and should be used as the standard for tone and structure.

| Pairing | Title | Attributes |
| --- | --- | --- |
| Libra \| 111 | Clear Harmony | Clarity | Graceful Beginnings | Aligned Choices |
| Libra \| 222 | Quiet Balance | Peace | Emotional Steadiness | Relational Ease |
| Libra \| 333 | Creative Grace | Expression | Beauty | Playful Refinement |
| Libra \| 444 | Steady Elegance | Grounded Poise | Boundaries | Calm Authority |
| Libra \| 555 | Fluid Balance | Open Flow | Gentle Change | Social Ease |
| Libra \| 666 | Embodied Grace | Warm Presence | Self-Care | Gentle Sensuality |
| Libra \| 777 | Intuitive Harmony | Inner Knowing | Subtle Clarity | Spiritual Calm |
| Libra \| 888 | Radiant Poise | Confidence | Magnetism | Social Power |
| Libra \| 999 | Refined Release | Letting Go | Closure | Emotional Clarity |

## Next Zodiac: Sagittarius Draft

Sagittarius base:

```text
Sagittarius - Open Horizon
Palo Santo & Bright Citrus
```

Sagittarius energy should feel free, expansive, honest, adventurous, optimistic, and forward-moving. It should not feel careless or chaotic. The brand version of Sagittarius is freedom with purpose.

| Pairing | Draft Title | Draft Attributes |
| --- | --- | --- |
| Sagittarius \| 111 | Brave Opening | Courage | Fresh Start | Direction |
| Sagittarius \| 222 | Open Trust | Faith | Ease | Shared Motion |
| Sagittarius \| 333 | Wild Expression | Joy | Voice | Creative Fire |
| Sagittarius \| 444 | Rooted Freedom | Discipline | Grounding | Inner Compass |
| Sagittarius \| 555 | Expansive Shift | Movement | Release | New Territory |
| Sagittarius \| 666 | Present Adventure | Embodiment | Warmth | Lived Joy |
| Sagittarius \| 777 | Guided Horizon | Intuition | Wisdom | Clear Vision |
| Sagittarius \| 888 | Abundant Aim | Confidence | Momentum | Magnetic Growth |
| Sagittarius \| 999 | Completed Journey | Closure | Integration | Higher Path |

## Sagittarius Package Copy Drafts

### Open Horizon | 111 | Brave Opening

Palo Santo & Bright Citrus + White Amber Citrus

Sagittarius brings movement, truth, and the desire to see what waits beyond the known. With 111, that energy becomes a clean first step. Bright citrus sharpens the open, sacred warmth of Palo Santo, creating a candle for courage, direction, and saying yes to the next chapter.

### Open Horizon | 222 | Open Trust

Palo Santo & Bright Citrus + White Tea Sheer Musk

Sagittarius moves by faith, and 222 softens that motion into trust. The tea-musk accent smooths the bright, expansive base into something calm and receptive. This candle supports ease, emotional openness, and moving forward without needing to control every mile.

### Open Horizon | 333 | Wild Expression

Palo Santo & Bright Citrus + Pink Grapefruit Clear Woods

Sagittarius carries a fire that wants to speak, laugh, explore, and create. With 333, that fire becomes expressive joy. Grapefruit and clear woods lift the base into a bright, playful atmosphere for honest voice, creative movement, and bold self-expression.

### Open Horizon | 444 | Rooted Freedom

Palo Santo & Bright Citrus + Sandalwood Vetiver

Sagittarius wants freedom, but 444 gives it structure. Sandalwood and vetiver anchor the bright base, turning motion into direction. This candle supports discipline, grounding, and the kind of freedom that comes from knowing where you stand.

### Open Horizon | 555 | Expansive Shift

Palo Santo & Bright Citrus + Fresh Air Salted Woods

Sagittarius already leans toward the horizon; 555 opens the road wider. Fresh air and salted woods create a breezy lift that makes the base feel spacious and alive. Burn this when change is calling and you are ready to move with it.

### Open Horizon | 666 | Present Adventure

Palo Santo & Bright Citrus + Cashmere Musk Creamy Tonka

Sagittarius looks outward, while 666 brings the energy back into the body. Cashmere musk and tonka warm the bright base, creating a candle for presence, sensual comfort, and remembering that adventure is not only out there. It is also how fully you inhabit now.

### Open Horizon | 777 | Guided Horizon

Palo Santo & Bright Citrus + Luminous Jasmine Clear Resin

Sagittarius seeks meaning; 777 refines that search into inner guidance. Jasmine and clear resin brighten the base with a calm spiritual clarity. This candle supports intuition, wisdom, and trusting the signs that point toward your higher path.

### Open Horizon | 888 | Abundant Aim

Palo Santo & Bright Citrus + Golden Vanilla Warm Resin

Sagittarius carries momentum, and 888 turns that motion toward abundance. Golden vanilla and warm resin add depth and attraction to the bright base, creating a confident, magnetic candle for growth, opportunity, and aiming higher.

### Open Horizon | 999 | Completed Journey

Palo Santo & Bright Citrus + Clean Linen Mineral Air

Sagittarius understands that every road teaches something. With 999, the open horizon becomes a point of completion and release. Clean linen and mineral air clear the base into spacious perspective, supporting closure, integration, and readiness for the next path.

## Color and Imagery Rule

Use the same angel-number color system established by Libra:

- 111 color scheme stays 111 across every zodiac.
- 222 color scheme stays 222 across every zodiac.
- 333 color scheme stays 333 across every zodiac.
- Continue this through 999.

Only zodiac imagery changes. For Sagittarius, explore archer, arrow, constellation, centaur abstraction, fire-path, horizon, or bow imagery.

## Data Model For Website/App

Each product can become a structured record:

```json
{
  "zodiac": "Sagittarius",
  "zodiacName": "Open Horizon",
  "zodiacFragrance": "Palo Santo & Bright Citrus",
  "angelNumber": "111",
  "angelName": "The Initiator",
  "angelFragrance": "White Amber Citrus",
  "pairingTitle": "Brave Opening",
  "attributes": ["Courage", "Fresh Start", "Direction"],
  "shortDescription": "Sagittarius brings movement, truth, and the desire to see what waits beyond the known...",
  "colorSystem": "111",
  "imagery": "Sagittarius"
}
```


