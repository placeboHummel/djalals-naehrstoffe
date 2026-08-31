/**
 * Deine tägliche Nährstoff- & Supplement-Übersicht
 */

export const MY_SUPPLEMENTS = [
  {
    id: 'watson-male-essentials',
    name: 'Male Essentials',
    shortName: 'Watson',
    brand: 'Watson Nutrition',
    dosage: '1 Kapsel täglich',
    timing: 'Morgens zum Frühstück',
    icon: '☀️',
    badge: '21 Nährstoffe',
    image: 'assets/images/watson-male-essentials.png'
  },
  {
    id: 'watson-collasyn',
    name: 'CollaSyn®',
    shortName: 'CollaSyn',
    brand: 'Watson Nutrition',
    dosage: '1 Stick täglich (4,3 g Pulver)',
    timing: 'Morgens / Im Shake',
    icon: '✨',
    badge: '4.000 mg Glycin + Hyaluron',
    image: 'assets/images/watson-collasyn.png'
  },
  {
    id: 'vitamoment-d3-k2',
    name: 'Vitamin D3 + K2',
    shortName: 'VitaMoment',
    brand: 'VitaMoment',
    dosage: '1 Kapsel täglich',
    timing: 'Morgens mit Fettquelle',
    icon: '☀️',
    badge: '5.000 IE D3 + 200 µg K2',
    image: 'assets/images/vitamoment-d3-k2.png'
  },
  {
    id: 'vitamoment-vitamin-c',
    name: 'Vitamin C (gepuffert)',
    shortName: 'VitaMoment',
    brand: 'VitaMoment',
    dosage: '1 Kapsel täglich',
    timing: 'Morgens / Mittags',
    icon: '🍊',
    badge: '500 mg Vitamin C',
    image: 'assets/images/vitamoment-vitamin-c.png'
  },
  {
    id: 'zinzino-balanceoil',
    name: 'BalanceOil+ (Omega-3)',
    shortName: 'Zinzino',
    brand: 'Zinzino',
    dosage: '10 ml täglich (flüssig)',
    timing: 'Morgens / Mittags zum Essen',
    icon: '🐟',
    badge: '2.065 mg Omega-3',
    image: 'assets/images/zinzino-balanceoil.png'
  },
  {
    id: 'true-nature-cholin',
    name: 'Cholin Bitartrat',
    shortName: 'True Nature',
    brand: 'True Nature',
    dosage: '3 Kapseln täglich (1.125 mg)',
    timing: 'Morgens / Mittags',
    icon: '🧠',
    badge: '450 mg Cholin',
    image: 'assets/images/true-nature-cholin.png'
  },
  {
    id: 'sports-health-magnesium',
    name: 'Magnesium Bisglycinat',
    shortName: 'Sports & Health',
    brand: 'Sports & Health',
    dosage: '3 Kapseln täglich',
    timing: 'Abends vor dem Schlafen',
    icon: '🌙',
    badge: '400 mg Magnesium',
    image: 'assets/images/sports-health-magnesium.png'
  },
  {
    id: 'gloryfeel-creatine',
    name: 'Kreatin Creapure®',
    shortName: 'Gloryfeel',
    brand: 'Gloryfeel',
    dosage: '1 Messlöffel täglich (3,4 g)',
    timing: 'Morgens / Nach dem Training',
    icon: '⚡',
    badge: '3.000 mg Creapure®',
    image: 'assets/images/gloryfeel-creatine.png'
  }
];

export const NUTRIENTS_SUMMARY = [
  // --- VITAMINE ---
  {
    id: 'vit-d3',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin D3',
    extra: 'Cholecalciferol (5.000 IE VitaMoment + 2.000 IE Watson + 667 IE Zinzino)',
    amount: '7.667 IE',
    rawAmount: 7667,
    unit: 'IE',
    ref: '800 IE (D-A-CH)',
    percent: 958,
    sourceBrand: 'VitaMoment + Watson + Zinzino',
    supplementIds: ['watson-male-essentials', 'vitamoment-d3-k2', 'zinzino-balanceoil'],
    sources: [
      { supplementId: 'vitamoment-d3-k2', amount: '5.000 IE', note: '1 Kapsel täglich' },
      { supplementId: 'watson-male-essentials', amount: '2.000 IE', note: '1 Kapsel täglich' },
      { supplementId: 'zinzino-balanceoil', amount: '667 IE', note: '10 ml flüssig' }
    ]
  },
  {
    id: 'vit-k2',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin K2',
    extra: 'Menachinon-7 (MK-7 all-trans)',
    amount: '270 µg',
    rawAmount: 270,
    unit: 'µg',
    ref: '70 µg (D-A-CH)',
    percent: 386,
    sourceBrand: 'VitaMoment + Watson',
    supplementIds: ['watson-male-essentials', 'vitamoment-d3-k2'],
    sources: [
      { supplementId: 'vitamoment-d3-k2', amount: '200 µg', note: 'MK-7 all-trans (1 Kapsel)' },
      { supplementId: 'watson-male-essentials', amount: '70 µg', note: 'MK-7 all-trans (1 Kapsel)' }
    ]
  },
  {
    id: 'vit-c',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin C',
    extra: 'L-Ascorbinsäure & Calciumascorbat',
    amount: '580 mg',
    rawAmount: 580,
    unit: 'mg',
    ref: '110 mg (D-A-CH)',
    percent: 527,
    sourceBrand: 'VitaMoment + Watson',
    supplementIds: ['vitamoment-vitamin-c', 'watson-collasyn'],
    sources: [
      { supplementId: 'vitamoment-vitamin-c', amount: '500 mg', note: 'Gepuffertes Vitamin C (1 Kapsel)' },
      { supplementId: 'watson-collasyn', amount: '80 mg', note: 'Calcium-L-Ascorbat (1 Stick)' }
    ]
  },
  {
    id: 'vit-b12',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B12',
    extra: 'Methyl- & Adenosylcobalamin',
    amount: '50 µg',
    rawAmount: 50,
    unit: 'µg',
    ref: '4.0 µg (D-A-CH)',
    percent: 1250,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '50 µg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'vit-a',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin A',
    extra: 'Retinylacetat',
    amount: '600 µg',
    rawAmount: 600,
    unit: 'µg',
    ref: '850 µg (D-A-CH)',
    percent: 71,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '600 µg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'vit-e',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin E',
    extra: 'D-Alpha-Tocopherol',
    amount: '14 mg',
    rawAmount: 14,
    unit: 'mg',
    ref: '14 mg (D-A-CH)',
    percent: 100,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '14 mg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'vit-b1',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B1',
    extra: 'Thiaminhydrochlorid',
    amount: '1.6 mg',
    rawAmount: 1.6,
    unit: 'mg',
    ref: '1.2 mg (D-A-CH)',
    percent: 133,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '1.6 mg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'vit-b2',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B2',
    extra: 'Riboflavin-5-Phosphat (aktiv)',
    amount: '1.6 mg',
    rawAmount: 1.6,
    unit: 'mg',
    ref: '1.4 mg (D-A-CH)',
    percent: 114,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '1.6 mg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'vit-b3',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B3 (Niacin)',
    extra: 'Nicotinamid (Flush-frei)',
    amount: '15 mg',
    rawAmount: 15,
    unit: 'mg',
    ref: '16 mg (D-A-CH)',
    percent: 94,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '15 mg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'vit-b5',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B5 (Pantothensäure)',
    extra: 'Calcium-D-Pantothenat',
    amount: '5.0 mg',
    rawAmount: 5.0,
    unit: 'mg',
    ref: '6.0 mg (D-A-CH)',
    percent: 83,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '5.0 mg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'vit-b6',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B6',
    extra: 'Pyridoxal-5-Phosphat (P-5-P aktiv)',
    amount: '1.6 mg',
    rawAmount: 1.6,
    unit: 'mg',
    ref: '1.6 mg (D-A-CH)',
    percent: 100,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '1.6 mg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'vit-b7',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B7 (Biotin)',
    extra: 'D-Biotin',
    amount: '40 µg',
    rawAmount: 40,
    unit: 'µg',
    ref: '40 µg (D-A-CH)',
    percent: 100,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '40 µg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'vit-b9',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B9 (Folat)',
    extra: 'Quatrefolic® (5-MTHF aktiv)',
    amount: '200 µg',
    rawAmount: 200,
    unit: 'µg',
    ref: '300 µg (D-A-CH)',
    percent: 67,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '200 µg', note: '1 Kapsel täglich' }
    ]
  },

  // --- MINERALSTOFFE & SPURENELEMENTE ---
  {
    id: 'magnesium',
    category: 'minerals',
    categoryName: 'Mineralstoffe & Spurenelemente',
    name: 'Magnesium',
    extra: 'Magnesium-Bisglycinat (Chelat)',
    amount: '400 mg',
    rawAmount: 400,
    unit: 'mg',
    ref: '350 mg (D-A-CH)',
    percent: 114,
    sourceBrand: 'Sports & Health',
    supplementIds: ['sports-health-magnesium'],
    sources: [
      { supplementId: 'sports-health-magnesium', amount: '400 mg', note: '3 Kapseln täglich' }
    ]
  },
  {
    id: 'zink',
    category: 'minerals',
    categoryName: 'Mineralstoffe & Spurenelemente',
    name: 'Zink',
    extra: 'Zink-Bisglycinat',
    amount: '10 mg',
    rawAmount: 10,
    unit: 'mg',
    ref: '14 mg (D-A-CH)',
    percent: 71,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '10 mg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'eisen',
    category: 'minerals',
    categoryName: 'Mineralstoffe & Spurenelemente',
    name: 'Eisen',
    extra: 'Ferrochel® Eisen-Bisglycinat',
    amount: '6.0 mg',
    rawAmount: 6.0,
    unit: 'mg',
    ref: '10 mg (D-A-CH)',
    percent: 60,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '6.0 mg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'selen',
    category: 'minerals',
    categoryName: 'Mineralstoffe & Spurenelemente',
    name: 'Selen',
    extra: 'Selenmethionin & Natriumselenit',
    amount: '70 µg',
    rawAmount: 70,
    unit: 'µg',
    ref: '70 µg (D-A-CH)',
    percent: 100,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '70 µg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'jod',
    category: 'minerals',
    categoryName: 'Mineralstoffe & Spurenelemente',
    name: 'Jod',
    extra: 'Kaliumjodid',
    amount: '150 µg',
    rawAmount: 150,
    unit: 'µg',
    ref: '200 µg (D-A-CH)',
    percent: 75,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '150 µg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'calcium',
    category: 'minerals',
    categoryName: 'Mineralstoffe & Spurenelemente',
    name: 'Calcium',
    extra: 'Calcium-Bisglycinat',
    amount: '120 mg',
    rawAmount: 120,
    unit: 'mg',
    ref: '1.000 mg (D-A-CH)',
    percent: 12,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '120 mg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'kupfer',
    category: 'minerals',
    categoryName: 'Mineralstoffe & Spurenelemente',
    name: 'Kupfer',
    extra: 'Kupfer-Bisglycinat',
    amount: '0.5 mg',
    rawAmount: 0.5,
    unit: 'mg',
    ref: '1.0 mg (D-A-CH)',
    percent: 50,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '0.5 mg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'mangan',
    category: 'minerals',
    categoryName: 'Mineralstoffe & Spurenelemente',
    name: 'Mangan',
    extra: 'Mangan-Bisglycinat',
    amount: '1.0 mg',
    rawAmount: 1.0,
    unit: 'mg',
    ref: '2.0 mg (D-A-CH)',
    percent: 50,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '1.0 mg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'chrom',
    category: 'minerals',
    categoryName: 'Mineralstoffe & Spurenelemente',
    name: 'Chrom',
    extra: 'Chrompicolinat',
    amount: '20 µg',
    rawAmount: 20,
    unit: 'µg',
    ref: '30 µg (D-A-CH)',
    percent: 67,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '20 µg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'molybdaen',
    category: 'minerals',
    categoryName: 'Mineralstoffe & Spurenelemente',
    name: 'Molybdän',
    extra: 'Natriummolybdat',
    amount: '25 µg',
    rawAmount: 25,
    unit: 'µg',
    ref: '50 µg (D-A-CH)',
    percent: 50,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-male-essentials'],
    sources: [
      { supplementId: 'watson-male-essentials', amount: '25 µg', note: '1 Kapsel täglich' }
    ]
  },
  {
    id: 'bor',
    category: 'minerals',
    categoryName: 'Mineralstoffe & Spurenelemente',
    name: 'Bor',
    extra: 'Natriumborat / Bor-Fruchtchelat',
    amount: '0 mg',
    rawAmount: 0,
    unit: 'mg',
    ref: '3.0 mg (Hormon- & Knochenstoffwechsel)',
    percent: 0,
    sourceBrand: 'Offen / 0 mg',
    supplementIds: [],
    sources: []
  },

  // --- AMINOSÄUREN, OMEGA-3 & PERFORMANCE ---
  {
    id: 'omega-3',
    category: 'special',
    categoryName: 'Aminosäuren, Omega-3 & Performance',
    name: 'Omega-3 (EPA & DHA)',
    extra: '1.069 mg EPA + 569 mg DHA + 427 mg DPA',
    amount: '2.065 mg',
    rawAmount: 2065,
    unit: 'mg',
    ref: '250 mg (EFSA Mindestbedarf)',
    percent: 826,
    sourceBrand: 'Zinzino',
    supplementIds: ['zinzino-balanceoil'],
    sources: [
      { supplementId: 'zinzino-balanceoil', amount: '2.065 mg', note: 'Wildfischöl (10 ml flüssig)' }
    ]
  },
  {
    id: 'glycin',
    category: 'special',
    categoryName: 'Aminosäuren, Omega-3 & Performance',
    name: 'Glycin',
    extra: 'Diamond® reines L-Glycin',
    amount: '4.000 mg',
    rawAmount: 4000,
    unit: 'mg',
    ref: '3.000 mg (Optimale Tagesdosis)',
    percent: 133,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-collasyn'],
    sources: [
      { supplementId: 'watson-collasyn', amount: '4.000 mg', note: 'Kollagen-Aminosäure (1 Stick)' }
    ]
  },
  {
    id: 'hyaluron',
    category: 'special',
    categoryName: 'Aminosäuren, Omega-3 & Performance',
    name: 'Hyaluronsäure',
    extra: 'HAPLEX®Plus Natriumhyaluronat',
    amount: '200 mg',
    rawAmount: 200,
    unit: 'mg',
    ref: '100 mg (Studien-Referenzwert)',
    percent: 200,
    sourceBrand: 'Watson Nutrition',
    supplementIds: ['watson-collasyn'],
    sources: [
      { supplementId: 'watson-collasyn', amount: '200 mg', note: '1 Stick täglich' }
    ]
  },
  {
    id: 'creatine',
    category: 'special',
    categoryName: 'Aminosäuren, Omega-3 & Performance',
    name: 'Kreatin (Creapure®)',
    extra: '100% Creapure® (Alzchem)',
    amount: '3.000 mg',
    rawAmount: 3000,
    unit: 'mg',
    ref: '3.000 mg (EFSA Wirksamkeit)',
    percent: 100,
    sourceBrand: 'Gloryfeel',
    supplementIds: ['gloryfeel-creatine'],
    sources: [
      { supplementId: 'gloryfeel-creatine', amount: '3.000 mg', note: '1 Messlöffel täglich (3,4 g)' }
    ]
  },
  {
    id: 'cholin',
    category: 'special',
    categoryName: 'Aminosäuren, Omega-3 & Performance',
    name: 'Cholin',
    extra: 'Cholinbitartrat (reines Cholin)',
    amount: '450 mg',
    rawAmount: 450,
    unit: 'mg',
    ref: '400 mg (EFSA AI)',
    percent: 113,
    sourceBrand: 'True Nature',
    supplementIds: ['true-nature-cholin'],
    sources: [
      { supplementId: 'true-nature-cholin', amount: '450 mg', note: 'Aus 1.125 mg Cholinbitartrat (3 Kapseln)' }
    ]
  },
  {
    id: 'polyphenols',
    category: 'special',
    categoryName: 'Aminosäuren, Omega-3 & Performance',
    name: 'Oliven-Polyphenole',
    extra: 'Oleocanthal & Hydroxytyrosol',
    amount: '2.9 mg',
    rawAmount: 2.9,
    unit: 'mg',
    ref: '5.0 mg (EFSA Health Claim)',
    percent: 58,
    sourceBrand: 'Zinzino',
    supplementIds: ['zinzino-balanceoil'],
    sources: [
      { supplementId: 'zinzino-balanceoil', amount: '2.9 mg', note: 'Vorzeitig geerntetes Olivenöl (10 ml)' }
    ]
  },
  {
    id: 'carnitine',
    category: 'special',
    categoryName: 'Aminosäuren, Omega-3 & Performance',
    name: 'L-Carnitin',
    extra: 'L-Carnitin-Tartrat / Acetyl-L-Carnitin',
    amount: '0 mg',
    rawAmount: 0,
    unit: 'mg',
    ref: '500 mg (Bedarfsempfehlung)',
    percent: 0,
    sourceBrand: 'Offen / 0 mg',
    supplementIds: [],
    sources: []
  },
  {
    id: 'taurine',
    category: 'special',
    categoryName: 'Aminosäuren, Omega-3 & Performance',
    name: 'Taurin',
    extra: '2-Aminoethansulfonsäure',
    amount: '0 mg',
    rawAmount: 0,
    unit: 'mg',
    ref: '500 mg (Bedarfsempfehlung)',
    percent: 0,
    sourceBrand: 'Offen / 0 mg',
    supplementIds: [],
    sources: []
  },
  {
    id: 'carnosine',
    category: 'special',
    categoryName: 'Aminosäuren, Omega-3 & Performance',
    name: 'Carnosin / Beta-Alanin',
    extra: 'L-Carnosin / Beta-Alanin',
    amount: '0 mg',
    rawAmount: 0,
    unit: 'mg',
    ref: '1.500 mg (Bedarfsempfehlung)',
    percent: 0,
    sourceBrand: 'Offen / 0 mg',
    supplementIds: [],
    sources: []
  },
  {
    id: 'coq10',
    category: 'special',
    categoryName: 'Aminosäuren, Omega-3 & Performance',
    name: 'Coenzym Q10 (Ubiquinol)',
    extra: 'Ubiquinol (aktive reduzierte Form)',
    amount: '0 mg',
    rawAmount: 0,
    unit: 'mg',
    ref: '100 mg (Mitochondrien-Bedarf)',
    percent: 0,
    sourceBrand: 'Offen / 0 mg',
    supplementIds: [],
    sources: []
  },
  {
    id: 'nac',
    category: 'special',
    categoryName: 'Aminosäuren, Omega-3 & Performance',
    name: 'N-Acetylcystein (NAC)',
    extra: 'N-Acetyl-L-Cystein',
    amount: '0 mg',
    rawAmount: 0,
    unit: 'mg',
    ref: '600 mg (Glutathion-Synthese)',
    percent: 0,
    sourceBrand: 'Offen / 0 mg',
    supplementIds: [],
    sources: []
  },
  {
    id: 'astaxanthin',
    category: 'special',
    categoryName: 'Aminosäuren, Omega-3 & Performance',
    name: 'Astaxanthin',
    extra: 'AstaPure® (Haematococcus pluvialis)',
    amount: '0 mg',
    rawAmount: 0,
    unit: 'mg',
    ref: '4.0 mg (Studien-Tagesdosis)',
    percent: 0,
    sourceBrand: 'Offen / 0 mg',
    supplementIds: [],
    sources: []
  },
  {
    id: 'ala',
    category: 'special',
    categoryName: 'Aminosäuren, Omega-3 & Performance',
    name: 'Alpha-Liponsäure (R-ALA)',
    extra: 'R-Alpha-Liponsäure (natürliche R-Form)',
    amount: '0 mg',
    rawAmount: 0,
    unit: 'mg',
    ref: '200 mg (Antioxidativer Bedarf)',
    percent: 0,
    sourceBrand: 'Offen / 0 mg',
    supplementIds: [],
    sources: []
  },
  {
    id: 'prolin',
    category: 'special',
    categoryName: 'Aminosäuren, Omega-3 & Performance',
    name: 'L-Prolin (Kollagen-Baustein)',
    extra: 'L-Prolin (Kollagen-Aminosäure)',
    amount: '0 mg',
    rawAmount: 0,
    unit: 'mg',
    ref: '500 mg (Kollagen-Synthese)',
    percent: 0,
    sourceBrand: 'Offen / 0 mg',
    supplementIds: [],
    sources: []
  },
  {
    id: 'ps',
    category: 'special',
    categoryName: 'Aminosäuren, Omega-3 & Performance',
    name: 'Phosphatidylserin',
    extra: 'Phosphatidylserin (Sonnenblumenlecithin)',
    amount: '0 mg',
    rawAmount: 0,
    unit: 'mg',
    ref: '100 mg (Kognition & Membranen)',
    percent: 0,
    sourceBrand: 'Offen / 0 mg',
    supplementIds: [],
    sources: []
  }
];
