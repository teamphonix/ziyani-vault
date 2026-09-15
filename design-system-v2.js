/* Ziyani Vault — Sprint 1 Design System v2
   Customer-facing product identity is defined by zodiac + angel-number pairing.
   Fragrance ingredients remain internal and are intentionally omitted here.
*/

const avatarFiles = {
  Aries: "./assets/characters/aries-master-avatar.png",
  Taurus: "./assets/characters/taurus-master-avatar.png",
  Gemini: "./assets/characters/gemini-master-avatar.png",
  Cancer: "./assets/characters/cancer-master-avatar.png",
  Leo: "./assets/characters/leo-master-avatar.png",
  Virgo: "./assets/characters/virgo-master-avatar.png",
  Libra: "./assets/characters/libra-master-avatar.png",
  Scorpio: "./assets/characters/scorpio-master-avatar.png",
  Sagittarius: "./assets/characters/sagittarius-master-avatar.png",
  Capricorn: "./assets/characters/capricorn-master-avatar.png",
  Aquarius: "./assets/characters/aquarius-master-avatar.png",
  Pisces: "./assets/characters/pisces-master-avatar.png"
};

const avatarIdentity = {
  Aries: "Ram-inspired celestial character reference",
  Taurus: "Bull-inspired celestial character reference",
  Gemini: "Twin celestial character reference",
  Cancer: "Human upper body with crab lower body",
  Leo: "Regal lion-inspired character with two lion tails",
  Virgo: "Maiden-inspired celestial character reference",
  Libra: "Celestial character always shown with her balance scale",
  Scorpio: "Human upper body with an attached scorpion tail",
  Sagittarius: "Centaur archer with celestial bow",
  Capricorn: "Horned mountain-inspired celestial character",
  Aquarius: "Water-bearer celestial character with signature vessel",
  Pisces: "Oceanic twin-fish inspired celestial character"
};

function pairingDefinition(sign, number) {
  const zodiac = getZodiac(sign);
  const angel = getAngel(number);
  const combo = getCombo(sign, number);
  return {
    sign,
    number,
    blendName: combo.title,
    definition: combo.copy,
    words: combo.attributes,
    zodiacName: zodiac.name,
    angelName: angel.name
  };
}

function sprintComboCard(sign, number) {
  const pair = pairingDefinition(sign, number);
  return `
    <article class="card combo-card sprint-combo" data-number="${number}">
      <p class="eyebrow">${pair.sign} · ${pair.number}</p>
      <h4>${pair.blendName}</h4>
      <p>${pair.definition}</p>
      <div class="attributes">${pair.words.join(" · ")}</div>
    </article>
  `;
}

// Replace the customer-facing combination card so ingredients are no longer shown.
comboCard = sprintComboCard;

function sprintRenderZodiac() {
  const sign = document.querySelector("#zodiac-select").value;
  const zodiac = getZodiac(sign);
  const cards = angels.map((angel) => sprintComboCard(sign, angel.number)).join("");
  document.querySelector("#zodiac-detail").innerHTML = `
    <div class="detail-header">
      <article class="definition-card">
        <p class="eyebrow">${zodiac.sign}</p>
        <h3>${zodiac.name}</h3>
        <p>${zodiac.definition}</p>
        ${tags(zodiac.tags)}
      </article>
      <article class="panel">
        <h3>Identity Direction</h3>
        <p>${zodiac.imagery}</p>
        <p><strong>Customer-facing rule:</strong> sell the meaning of the pairing, not a list of fragrance ingredients.</p>
      </article>
    </div>
    <div class="card-grid">${cards}</div>
  `;
}

function sprintRenderAngel() {
  const number = document.querySelector("#angel-select").value;
  const angel = getAngel(number);
  const cards = zodiacs.map((zodiac) => sprintComboCard(zodiac.sign, number)).join("");
  document.querySelector("#angel-detail").innerHTML = `
    <div class="detail-header">
      <article class="definition-card">
        <p class="eyebrow">${number}</p>
        <h3>${angel.name}</h3>
        <p>${angel.meaning}</p>
        ${tags(angel.tags)}
      </article>
      <article class="panel">
        <h3>How It Functions</h3>
        <p>The angel number changes how the zodiac identity is expressed. That combined definition becomes the candle's customer-facing identity.</p>
      </article>
    </div>
    <div class="card-grid">${cards}</div>
  `;
}

function sprintRenderCombinations(showAll = false) {
  const sign = document.querySelector("#combo-zodiac-select").value;
  const number = document.querySelector("#combo-angel-select").value;
  const html = showAll
    ? angels.map((angel) => sprintComboCard(sign, angel.number)).join("")
    : sprintComboCard(sign, number);
  document.querySelector("#combo-detail").innerHTML = `<div class="card-grid">${html}</div>`;
}

renderCombinations = sprintRenderCombinations;

function avatarBlock(sign) {
  const zodiac = getZodiac(sign);
  const src = avatarFiles[sign];
  return `
    <article class="character-master-card">
      <div class="character-avatar-frame">
        <img src="${src}" alt="${sign} master avatar" onerror="this.hidden=true; this.nextElementSibling.hidden=false;" />
        <div class="avatar-pending" hidden>
          <span>MASTER AVATAR</span>
          <strong>${sign}</strong>
          <small>Awaiting approved image file</small>
          <code>${src.replace("./", "")}</code>
        </div>
      </div>
      <div class="character-copy">
        <p class="eyebrow">Character Library · ${sign}</p>
        <h3>${zodiac.name}</h3>
        <p>${avatarIdentity[sign]}</p>
        <p>${zodiac.definition}</p>
        ${tags(zodiac.tags)}
        <div class="asset-rule">
          <strong>Master-reference rule</strong>
          <p>Future labels, still images, and videos should preserve this approved character's anatomy, face, silhouette, signature object, and core wardrobe identity.</p>
        </div>
      </div>
    </article>
  `;
}

function packagingGuide() {
  return `
    <details class="packaging-guide" open>
      <summary>
        <span class="eyebrow">Working Standard</span>
        <strong>Label & Box Making Guide</strong>
      </summary>
      <div class="package-face-grid">
        <article><span>Front</span><strong>Hero Identity</strong><p>Ziyani logo, zodiac/avatar artwork, zodiac name, angel number, blend name. Keep the composition restrained and luxury-led.</p></article>
        <article><span>Side A</span><strong>Three Words</strong><p>Feature the three approved words that define the zodiac + angel-number pairing. No fragrance ingredient list.</p></article>
        <article><span>Side B</span><strong>Expanded Meaning</strong><p>Expand the three words into concise emotional language explaining what the candle symbolizes and how the two energies work together.</p></article>
        <article><span>Back</span><strong>Pairing Reflection</strong><p>A short reflection centered on the approved combination definition, followed by “Light Your Alignment.”</p></article>
        <article><span>Top</span><strong>Recognition Mark</strong><p>Zodiac glyph or crest plus angel number. Keep this minimal and immediately recognizable.</p></article>
        <article><span>Bottom</span><strong>Production & Safety</strong><p>Net weight, burn/safety information, required business information, batch or production details as applicable.</p></article>
      </div>
      <div class="production-rule">
        <strong>Production rule</strong>
        <p>AI generates artwork assets only. Logos, typography, numbers, blend names, definitions, and legal copy stay editable and are added separately so all 108 packages remain consistent.</p>
      </div>
    </details>
  `;
}

function designPlaceholder(sign, number) {
  const pair = pairingDefinition(sign, number);
  return `
    <article class="design-slot" data-number="${number}">
      <div class="design-slot-art">
        <span>DESIGN PLACEHOLDER</span>
        <strong>${number}</strong>
        <small>${sign}</small>
      </div>
      <div class="design-slot-copy">
        <p class="eyebrow">${sign} + ${number}</p>
        <h4>${pair.blendName}</h4>
        <p>${pair.definition}</p>
        <div class="theme-word-row">${pair.words.map((word) => `<span>${word}</span>`).join("")}</div>
        <div class="future-assets"><span>Box art</span><span>Label art</span><span>Campaign art</span></div>
      </div>
    </article>
  `;
}

function renderSprintOneDesigns() {
  const sign = document.querySelector("#design-select").value;
  const zodiac = getZodiac(sign);
  document.querySelector("#design-detail").innerHTML = `
    <section class="design-system-intro">
      <p class="eyebrow">Ziyani Design System · Sprint 1</p>
      <h3>Character-first packaging built from editable layers.</h3>
      <p>The avatar anchors each zodiac. The nine pairing cards below are the design queue for ${sign}; each one inherits its approved blend name, definition, and three defining words from the Vault.</p>
    </section>
    ${packagingGuide()}
    ${avatarBlock(sign)}
    <section class="pairing-design-section">
      <div class="section-heading-row">
        <div>
          <p class="eyebrow">${sign} · ${zodiac.name}</p>
          <h3>Nine Pairing Designs</h3>
        </div>
        <span class="status-pill">0 / 9 final artwork</span>
      </div>
      <div class="design-slot-grid">
        ${angels.map((angel) => designPlaceholder(sign, angel.number)).join("")}
      </div>
    </section>
  `;
}

function installSprintOneDesignSystem() {
  const designSelect = document.querySelector("#design-select");
  const cleanDesignSelect = designSelect.cloneNode(true);
  designSelect.replaceWith(cleanDesignSelect);
  cleanDesignSelect.addEventListener("change", renderSprintOneDesigns);

  const zodiacSelect = document.querySelector("#zodiac-select");
  const cleanZodiacSelect = zodiacSelect.cloneNode(true);
  zodiacSelect.replaceWith(cleanZodiacSelect);
  cleanZodiacSelect.addEventListener("change", sprintRenderZodiac);

  const angelSelect = document.querySelector("#angel-select");
  const cleanAngelSelect = angelSelect.cloneNode(true);
  angelSelect.replaceWith(cleanAngelSelect);
  cleanAngelSelect.addEventListener("change", sprintRenderAngel);

  const style = document.createElement("style");
  style.textContent = `
    .design-system-intro{margin-bottom:18px;padding:28px;border:1px solid rgba(216,182,100,.3);background:linear-gradient(135deg,rgba(31,21,39,.98),rgba(15,12,18,.96));border-radius:10px}.design-system-intro h3{margin:4px 0 10px;font-family:Georgia,serif;font-size:clamp(28px,4vw,46px);font-weight:500}.design-system-intro p:last-child{max-width:900px;color:#d9cbc0;line-height:1.65}.packaging-guide{margin-bottom:18px;border:1px solid var(--line);background:var(--panel);border-radius:10px;overflow:hidden}.packaging-guide summary{display:grid;gap:6px;padding:20px;cursor:pointer}.packaging-guide summary strong{font-family:Georgia,serif;font-size:28px;font-weight:500}.package-face-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;padding:0 20px 20px}.package-face-grid article{padding:16px;border-radius:8px;background:rgba(255,250,242,.95);color:#251b18}.package-face-grid span{display:block;margin-bottom:5px;color:#835c24;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.08em}.package-face-grid strong{display:block;margin-bottom:7px}.package-face-grid p{margin:0;color:#554844;line-height:1.55}.production-rule{margin:0 20px 20px;padding:16px;border-left:4px solid var(--gold);background:rgba(216,182,100,.08)}.production-rule p{margin:6px 0 0}.character-master-card{display:grid;grid-template-columns:minmax(260px,420px) minmax(0,1fr);gap:22px;margin-bottom:22px;padding:20px;border:1px solid var(--line);background:var(--panel);border-radius:10px}.character-avatar-frame{min-height:460px;border-radius:8px;overflow:hidden;background:linear-gradient(155deg,#211829,#0d0a0e);border:1px solid rgba(216,182,100,.24)}.character-avatar-frame img{width:100%;height:100%;min-height:460px;display:block;object-fit:contain;background:#151116}.avatar-pending{height:100%;min-height:460px;display:grid;place-items:center;align-content:center;gap:8px;padding:24px;text-align:center;color:#f4e8d4}.avatar-pending span{color:var(--gold);font-size:11px;font-weight:900;letter-spacing:.16em}.avatar-pending strong{font-family:Georgia,serif;font-size:42px;font-weight:500}.avatar-pending small{color:#cbbcaf}.avatar-pending code{margin-top:10px;padding:7px 9px;border-radius:5px;background:rgba(255,255,255,.08);font-size:11px}.character-copy{align-self:center}.character-copy h3{margin:4px 0 12px;font-family:Georgia,serif;font-size:42px;font-weight:500}.character-copy>p{max-width:760px;line-height:1.65}.asset-rule{margin-top:20px;padding:16px;border:1px solid rgba(184,117,255,.25);border-radius:8px;background:rgba(184,117,255,.07)}.asset-rule p{margin:6px 0 0;color:var(--muted);line-height:1.6}.pairing-design-section{margin-top:20px}.section-heading-row{display:flex;justify-content:space-between;gap:16px;align-items:end;margin-bottom:14px}.section-heading-row h3{margin:3px 0 0;font-family:Georgia,serif;font-size:34px;font-weight:500}.design-slot-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.design-slot{overflow:hidden;border:1px solid var(--line);border-radius:9px;background:var(--panel)}.design-slot-art{aspect-ratio:4/3;display:grid;place-items:center;align-content:center;gap:4px;background:radial-gradient(circle at 50% 20%,rgba(184,117,255,.16),transparent 45%),#171218;color:#f6ead9}.design-slot-art span{font-size:10px;font-weight:900;letter-spacing:.14em;color:var(--gold)}.design-slot-art strong{font-family:Georgia,serif;font-size:46px;font-weight:500}.design-slot-art small{color:#cbbcaf}.design-slot-copy{padding:16px}.design-slot-copy h4{margin:3px 0 8px;font-size:20px}.design-slot-copy>p:not(.eyebrow){min-height:84px;color:var(--muted);line-height:1.5}.theme-word-row,.future-assets{display:flex;flex-wrap:wrap;gap:6px}.theme-word-row span{padding:6px 8px;border-radius:999px;background:#efe4d5;color:#493826;font-size:11px;font-weight:800}.future-assets{margin-top:14px;padding-top:12px;border-top:1px solid var(--line)}.future-assets span{color:var(--muted);font-size:11px;text-transform:uppercase;letter-spacing:.05em}.sprint-combo .attributes{font-size:13px}.sprint-combo p{line-height:1.55}@media(max-width:1000px){.package-face-grid,.design-slot-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.character-master-card{grid-template-columns:1fr}}@media(max-width:620px){.package-face-grid,.design-slot-grid{grid-template-columns:1fr}.section-heading-row{align-items:start;flex-direction:column}.character-avatar-frame,.character-avatar-frame img,.avatar-pending{min-height:360px}}
  `;
  document.head.appendChild(style);

  sprintRenderZodiac();
  sprintRenderAngel();
  sprintRenderCombinations(false);
  renderSprintOneDesigns();
}

installSprintOneDesignSystem();
