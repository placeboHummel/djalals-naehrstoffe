/**
 * Vordefinierte Supplement-Presets inkl. Watson Male Essentials
 */

export const SUPPLEMENT_PRESETS = [
  {
    id: 'watson-male-essentials',
    name: 'Male Essentials',
    brand: 'Watson Nutrition',
    url: 'https://watsonnutrition.de/products/male-essentials',
    form: 'Kapseln',
    servingSize: '1 Kapsel täglich',
    timeOfDay: 'morning', // morning, noon, evening, workout
    withFood: true,
    notes: 'Veganer Multinährstoff für eine pflanzenbasierte Ernährung zur einfachen Deckung der wichtigsten 21 Mikronährstoffe.',
    active: true,
    servingsPerDay: 1,
    nutrients: {
      'vit_a': 600,       // 600 µg
      'vit_d3': 50,       // 50 µg (2.000 IE)
      'vit_e': 14,        // 14 mg
      'vit_k2': 70,       // 70 µg (K2VITAL® DELTA)
      'vit_b1': 1.6,      // 1.6 mg
      'vit_b2': 1.6,      // 1.6 mg (Riboflavin-5-Phosphat)
      'vit_b3': 15,       // 15 mg (Nicotinamid)
      'vit_b5': 5.0,      // 5.0 mg
      'vit_b6': 1.6,      // 1.6 mg (Pyridoxal-5-Phosphat)
      'vit_b7': 40,       // 40 µg (Biotin)
      'vit_b9': 200,      // 200 µg (Quatrefolic® Folat)
      'vit_b12': 50,      // 50 µg (Methyl- & Adenosylcobalamin)
      'calcium': 120,     // 120 mg (Calcium-Bisglycinat)
      'eisen': 6.0,       // 6.0 mg (Ferrochel® Eisen-Bisglycinat)
      'zink': 10.0,       // 10.0 mg (Zink-Bisglycinat)
      'jod': 150,         // 150 µg (Kaliumjodid)
      'selen': 70,        // 70 µg (Selenmethionin & Natriumselenit)
      'kupfer': 0.5,      // 0.5 mg (Kupfer-Bisglycinat)
      'mangan': 1.0,      // 1.0 mg (Mangan-Bisglycinat)
      'chrom': 20,        // 20 µg (Chrompicolinat)
      'molybdaen': 25     // 25 µg (Natriummolybdat)
    }
  },
  {
    id: 'true-nature-cholin',
    name: 'Cholin Kapseln (Cholinbitartrat)',
    brand: 'True Nature',
    url: '',
    form: 'Kapseln',
    servingSize: '3 Kapseln täglich',
    timeOfDay: 'morning',
    withFood: true,
    notes: 'Pflanzliches Cholinbitartrat (1.125 mg Cholinbitartrat liefert 450 mg elementares Cholin pro 3 Kapseln Tagesdosis) zur Unterstützung von Leber, Fettstoffwechsel und Acetylcholin-Bildung.',
    active: true,
    servingsPerDay: 1,
    nutrients: {
      'cholin': 450       // 450 mg reines Cholin (aus 1.125 mg Cholinbitartrat)
    }
  },
  {
    id: 'watson-omega-3-6',
    name: 'Omega 3 & 6 Kapseln',
    brand: 'Watson Nutrition',
    url: 'https://watsonnutrition.de/products/omega-epa-dha-ara-kapseln',
    form: 'Softgels',
    servingSize: '2 Kapseln täglich',
    timeOfDay: 'noon',
    withFood: true,
    notes: 'Veganes Algenöl mit EPA & DHA plus Arachidonsäure (ARA) aus Pilzfermentation.',
    active: false,
    servingsPerDay: 1,
    nutrients: {
      'omega3_total': 600,
      'epa': 150,
      'dha': 300,
      'ara': 150,
      'vit_e': 5
    }
  },
  {
    id: 'watson-creatine',
    name: 'Kreatin Pulver (Creapure®)',
    brand: 'Watson Nutrition',
    url: 'https://watsonnutrition.de/products/kreatin',
    form: 'Pulver',
    servingSize: '3.4 g (1 Messlöffel)',
    timeOfDay: 'morning',
    withFood: false,
    notes: '100% reines Creapure® Kreatinmonohydrat, Made in Germany.',
    active: false,
    servingsPerDay: 1,
    nutrients: {
      'creatine': 3.0 // 3.0 g reines Kreatin
    }
  },
  {
    id: 'sports-health-magnesium-bisglycinat',
    name: 'Magnesium Bisglycinat',
    brand: 'Sports & Health',
    url: '',
    form: 'Kapseln',
    servingSize: '3 Kapseln täglich',
    timeOfDay: 'evening',
    withFood: false,
    notes: 'Hochwertiges, magenschonendes Magnesium-Bisglycinat (400 mg elementares Magnesium pro 3 Kapseln Tagesdosis). Ideal am Abend für Muskelfunktion, ZNS-Entspannung und tiefen Schlaf.',
    active: true,
    servingsPerDay: 1,
    nutrients: {
      'magnesium': 400 // 400 mg elementares Magnesium (107% NRV / 114% D-A-CH)
    }
  },
  {
    id: 'preset-vit-d3-k2-drops',
    name: 'Vitamin D3 (5000 IE) + K2 Tropfen',
    brand: 'Hochdosiert (Depot / Tropfen)',
    url: '',
    form: 'Tropfen',
    servingSize: '1 Tropfen (alle 5 Tage oder täglich nach Bedarf)',
    timeOfDay: 'morning',
    withFood: true,
    notes: 'Flüssiges Cholecalciferol mit all-trans MK-7 in MCT-Öl.',
    active: false,
    servingsPerDay: 1,
    nutrients: {
      'vit_d3': 125, // 5.000 IE = 125 µg
      'vit_k2': 100  // 100 µg
    }
  },
  {
    id: 'preset-ashwagandha',
    name: 'Ashwagandha KSM-66® Extrakt',
    brand: 'Standard Premium Extrakt',
    url: '',
    form: 'Kapseln',
    servingSize: '1 Kapsel (500 mg)',
    timeOfDay: 'evening',
    withFood: true,
    notes: 'Vollspektrum-Wurzelextrakt mit 5% Withanoliden für Stressresilienz.',
    active: false,
    servingsPerDay: 1,
    nutrients: {
      'ashwagandha': 500
    }
  },
  {
    id: 'preset-zinc-picolinat',
    name: 'Zink Picolinat (15 mg)',
    brand: 'Standard',
    url: '',
    form: 'Kapsel',
    servingSize: '1 Kapsel',
    timeOfDay: 'noon',
    withFood: true,
    notes: 'Zusätzliche Zinkquelle bei hoher körperlicher Belastung oder Erkältungszeit.',
    active: false,
    servingsPerDay: 1,
    nutrients: {
      'zink': 15,
      'kupfer': 0.5
    }
  },
  {
    id: 'preset-vegan-protein',
    name: 'Veganes Protein Pulver',
    brand: 'Watson / Standard',
    url: '',
    form: 'Pulver',
    servingSize: '30 g Shake',
    timeOfDay: 'workout',
    withFood: false,
    notes: 'Vollwertiges pflanzliches Aminosäureprofil (Erbsen-, Reis-, Kürbiskernprotein).',
    active: false,
    servingsPerDay: 1,
    nutrients: {
      'protein': 24, // 24 g Protein
      'calcium': 40,
      'eisen': 2.5
    }
  },
  {
    id: 'watson-male-all-in-one',
    name: 'Male All In One',
    brand: 'Watson Nutrition',
    url: 'https://watsonnutrition.de/products/male-all-in-one',
    form: 'Kapseln + Pulver',
    servingSize: 'Tagesportion',
    timeOfDay: 'morning',
    withFood: true,
    notes: 'Male Essentials Grundversorgung plus Carninutrients (Kreatin, Taurin, Carnitin, Carnosin).',
    active: false,
    servingsPerDay: 1,
    nutrients: {
      'vit_a': 600,
      'vit_d3': 50,
      'vit_e': 14,
      'vit_k2': 70,
      'vit_b1': 1.6,
      'vit_b2': 1.6,
      'vit_b3': 15,
      'vit_b5': 5.0,
      'vit_b6': 1.6,
      'vit_b7': 40,
      'vit_b9': 200,
      'vit_b12': 50,
      'calcium': 120,
      'eisen': 6.0,
      'zink': 10.0,
      'jod': 150,
      'selen': 70,
      'kupfer': 0.5,
      'mangan': 1.0,
      'chrom': 20,
      'molybdaen': 25,
      'creatine': 3.0,
      'carnitine': 500,
      'taurine': 1000,
      'carnosine': 500
    }
  }
];
