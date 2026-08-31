/**
 * Offizielle Nährstoff-Referenzwerte (NRV nach EU 1169/2011 & D-A-CH Referenzwerte für Erwachsene/Männer)
 * sowie EFSA (European Food Safety Authority) & BfR (Bundesinstitut für Risikobewertung) Tolerable Upper Intake Levels (UL)
 */

export const NUTRIENT_CATEGORIES = {
  VITAMINS_FAT: { id: 'vitamins_fat', name: 'Fettlösliche Vitamine', icon: '☀️' },
  VITAMINS_WATER: { id: 'vitamins_water', name: 'Wasserlösliche Vitamine', icon: '💧' },
  MINERALS: { id: 'minerals', name: 'Mengenelemente', icon: '⛰️' },
  TRACE_ELEMENTS: { id: 'trace_elements', name: 'Spurenelemente', icon: '🔬' },
  FATTY_ACIDS: { id: 'fatty_acids', name: 'Fettsäuren (Omega-3 & 6)', icon: '🥑' },
  AMINO_ACIDS: { id: 'amino_acids', name: 'Aminosäuren & Carninutrients', icon: '⚡' },
  OTHER: { id: 'other', name: 'Pflanzenstoffe & Sonstiges', icon: '🌿' }
};

export const NUTRIENT_DEFINITIONS = {
  // Fettlösliche Vitamine
  'vit_a': {
    name: 'Vitamin A (Retinol / Beta-Carotin)',
    shortName: 'Vitamin A',
    category: 'vitamins_fat',
    unit: 'µg',
    nrv: 800,
    dach: 850, // Männer
    ul: 3000, // EFSA Upper Limit für vorgeformtes Retinol
    optimalRange: [600, 1500],
    description: 'Essenziell für Sehkraft, Immunsystem, Zellspezialisierung und gesunde Haut.',
    tip: 'Fettlöslich: Immer zusammen mit einer fetthaltigen Mahlzeit einnehmen.',
    warningAt: 3000
  },
  'vit_d3': {
    name: 'Vitamin D3 (Cholecalciferol)',
    shortName: 'Vitamin D3',
    category: 'vitamins_fat',
    unit: 'µg',
    nrv: 5, // EU-Mindestwert (200 IE)
    dach: 20, // 800 IE (bei fehlender Eigensynthese)
    ul: 100, // 4.000 IE (EFSA Höchstgrenze für sichere Langzeiteinnahme)
    optimalRange: [25, 75], // 1.000 - 3.000 IE als gängige Supplementierungsdosis
    unitConversion: { ie: 0.025 }, // 1 IE = 0.025 µg (40 IE = 1 µg)
    description: 'Reguliert den Calcium- und Phosphatstoffwechsel, Knochendichte, Muskelfunktion und das Immunsystem.',
    tip: 'Fettlöslich: Am besten morgens/mittags mit gesunden Fetten einnehmen. Wirkt synergetisch mit Vitamin K2 und Magnesium.',
    warningAt: 100
  },
  'vit_e': {
    name: 'Vitamin E (Tocopherol)',
    shortName: 'Vitamin E',
    category: 'vitamins_fat',
    unit: 'mg',
    nrv: 12,
    dach: 14,
    ul: 300, // EFSA
    optimalRange: [12, 50],
    description: 'Starkes fettlösliches Antioxidans, schützt Zellmembranen vor oxidativem Stress.',
    tip: 'Mit einer Mahlzeit einnehmen.',
    warningAt: 300
  },
  'vit_k2': {
    name: 'Vitamin K2 (Menachinon MK-7)',
    shortName: 'Vitamin K2',
    category: 'vitamins_fat',
    unit: 'µg',
    nrv: 75,
    dach: 70,
    ul: null, // EFSA hat kein UL festgelegt, gilt als sehr sicher
    optimalRange: [50, 200],
    description: 'Aktiviert Proteine wie Osteocalcin und MGP, leitet Calcium in die Knochen statt in die Gefäße.',
    tip: 'Wichtiger Partner von Vitamin D3.',
    warningAt: null
  },

  // Wasserlösliche Vitamine
  'vit_b1': {
    name: 'Vitamin B1 (Thiamin)',
    shortName: 'Vitamin B1',
    category: 'vitamins_water',
    unit: 'mg',
    nrv: 1.1,
    dach: 1.2,
    ul: null,
    optimalRange: [1.1, 10],
    description: 'Wichtig für den Kohlenhydrat- und Energiestoffwechsel sowie das Nervensystem.',
    tip: 'Wasserlöslich: Überschuss wird über den Urin ausgeschieden.',
    warningAt: 50
  },
  'vit_b2': {
    name: 'Vitamin B2 (Riboflavin / R-5-P)',
    shortName: 'Vitamin B2',
    category: 'vitamins_water',
    unit: 'mg',
    nrv: 1.4,
    dach: 1.4,
    ul: null,
    optimalRange: [1.4, 15],
    description: 'Zentral für Zellatmung, Energieproduktion, Eisenstoffwechsel und Hautgesundheit. Verfärbt Urin harmlos neongelb.',
    tip: 'Wasserlöslich.',
    warningAt: 50
  },
  'vit_b3': {
    name: 'Vitamin B3 (Niacin / Nicotinamid)',
    shortName: 'Niacin (B3)',
    category: 'vitamins_water',
    unit: 'mg',
    nrv: 16,
    dach: 16,
    ul: 900, // als Nicotinamid (EFSA)
    optimalRange: [15, 50],
    description: 'Coenzym in über 200 Stoffwechselprozessen, DNA-Reparatur und Cholesterinstoffwechsel.',
    tip: 'In Multinährstoffen meist als magenschonendes Nicotinamid enthalten.',
    warningAt: 500
  },
  'vit_b5': {
    name: 'Vitamin B5 (Pantothensäure)',
    shortName: 'Pantothensäure (B5)',
    category: 'vitamins_water',
    unit: 'mg',
    nrv: 6,
    dach: 6,
    ul: null,
    optimalRange: [5, 50],
    description: 'Baustein von Coenzym A, entscheidend für den Fett-, Protein- und Kohlenhydratstoffwechsel sowie Neurotransmitter.',
    tip: 'Wasserlöslich.',
    warningAt: 200
  },
  'vit_b6': {
    name: 'Vitamin B6 (Pyridoxal-5-Phosphat / P-5-P)',
    shortName: 'Vitamin B6',
    category: 'vitamins_water',
    unit: 'mg',
    nrv: 1.4,
    dach: 1.6,
    ul: 12, // EFSA 2023 Update auf 12 mg gesenkt
    optimalRange: [1.4, 10],
    description: 'Wichtig für Aminosäurestoffwechsel, Hämoglobinbildung, Homocysteinabbau und Nervenfunktion.',
    tip: 'Aktivierte Form P-5-P ist bioaktiver. Dauerhafte Dosen > 12 mg sollten vermieden werden.',
    warningAt: 12
  },
  'vit_b7': {
    name: 'Vitamin B7 (Biotin)',
    shortName: 'Biotin (B7)',
    category: 'vitamins_water',
    unit: 'µg',
    nrv: 50,
    dach: 40,
    ul: null,
    optimalRange: [40, 500],
    description: 'Unterstützt den Fettsäure- und Glucose-Stoffwechsel sowie Erhalt von Haaren, Haut und Nägeln.',
    tip: 'Sehr hohe Dosen können Schilddrüsen-Laborbluttests verfälschen.',
    warningAt: 2500
  },
  'vit_b9': {
    name: 'Vitamin B9 (Folat / L-Methylfolat)',
    shortName: 'Folat (B9)',
    category: 'vitamins_water',
    unit: 'µg',
    nrv: 200,
    dach: 300,
    ul: 1000, // EFSA UL für Folsäure
    optimalRange: [200, 600],
    description: 'Unerlässlich für Zellteilung, Blutbildung und Homocystein-Stoffwechsel.',
    tip: 'L-Methylfolat (Quatrefolic) ist auch bei MTHFR-Genpolymorphismus direkt verwertbar.',
    warningAt: 1000
  },
  'vit_b12': {
    name: 'Vitamin B12 (Cobalamin / Methyl- & Adenosylcobalamin)',
    shortName: 'Vitamin B12',
    category: 'vitamins_water',
    unit: 'µg',
    nrv: 2.5,
    dach: 4.0,
    ul: null, // EFSA: Kein toxisches Limit bekannt
    optimalRange: [10, 250],
    description: 'Schlüsselvitamin für Nervensystem, Blutbildung, Zellteilung und DNA-Synthese. Bei pflanzlicher Ernährung obligatorisch.',
    tip: 'Kann zu jeder Tageszeit eingenommen werden. Hohe Dosen sind unbedenklich.',
    warningAt: 1000
  },
  'vit_c': {
    name: 'Vitamin C (Ascorbinsäure)',
    shortName: 'Vitamin C',
    category: 'vitamins_water',
    unit: 'mg',
    nrv: 80,
    dach: 110,
    ul: 2000, // US IOM Upper Limit (EFSA hat keinen numerischen UL festgelegt)
    optimalRange: [80, 500],
    description: 'Antioxidans, Kollagensynthese, Immunsystem, verbessert die Eisenaufnahme im Darm.',
    tip: 'Ideal zusammen mit Eisen eintragen.',
    warningAt: 1000
  },

  // Mengenelemente
  'calcium': {
    name: 'Calcium',
    shortName: 'Calcium',
    category: 'minerals',
    unit: 'mg',
    nrv: 800,
    dach: 1000,
    ul: 2500, // EFSA
    optimalRange: [120, 800],
    description: 'Hauptbestandteil von Knochen und Zähnen, Reizweiterleitung der Nerven und Muskelkontraktion.',
    tip: 'Konkurriert mit Zink und Eisen um dieselben Transporter – nicht zeitgleich mit hohen Dosen Eisen einnehmen.',
    warningAt: 1500
  },
  'magnesium': {
    name: 'Magnesium',
    shortName: 'Magnesium',
    category: 'minerals',
    unit: 'mg',
    nrv: 375,
    dach: 350,
    ul: 250, // BfR Empfehlung für isolierte NEMs
    optimalRange: [200, 400],
    description: 'Beteiligt an über 300 enzymatischen Reaktionen, Muskelentspannung, Energiestoffwechsel und Schlaf.',
    tip: 'Optimal abends vor dem Schlafen (z. B. als Bisglycinat).',
    warningAt: 400
  },
  'kalium': {
    name: 'Kalium',
    shortName: 'Kalium',
    category: 'minerals',
    unit: 'mg',
    nrv: 2000,
    dach: 4000,
    ul: null,
    optimalRange: [300, 1000],
    description: 'Wichtig für Elektrolythaushalt, Blutdruckregulation und Muskel-/Herzfunktion.',
    tip: 'Wird vorrangig über Ernährung (Obst/Gemüse) gedeckt.',
    warningAt: 2000
  },

  // Spurenelemente
  'eisen': {
    name: 'Eisen (z.B. Eisen-Bisglycinat)',
    shortName: 'Eisen',
    category: 'trace_elements',
    unit: 'mg',
    nrv: 14,
    dach: 10, // Männer (Frauen 15-16 mg)
    ul: 45, // US IOM Upper Limit (EFSA hat keinen numerischen UL festgelegt)
    optimalRange: [6, 15],
    description: 'Sauerstofftransport im Blut (Hämoglobin), Energiestoffwechsel und kognitive Funktion.',
    tip: 'Eisenaufnahme wird durch Vitamin C gesteigert. Kaffee, schwarzer Tee und Calcium hemmen die Aufnahme.',
    warningAt: 20
  },
  'zink': {
    name: 'Zink (z.B. Zink-Bisglycinat / -Picolinat)',
    shortName: 'Zink',
    category: 'trace_elements',
    unit: 'mg',
    nrv: 10,
    dach: 14, // Männer (DGE)
    ul: 25, // EFSA Tolerable Upper Limit
    optimalRange: [10, 25],
    description: 'Essenziell für Testosteronstoffwechsel, Immunsystem, Proteinsynthese, Zellteilung und Wundheilung.',
    tip: 'Nicht auf komplett nüchternen Magen einnehmen, um Übelkeit zu vermeiden. Nicht mit hohen Dosen Eisen/Kupfer zeitgleich.',
    warningAt: 25
  },
  'jod': {
    name: 'Jod (Kaliumjodid)',
    shortName: 'Jod',
    category: 'trace_elements',
    unit: 'µg',
    nrv: 150,
    dach: 200, // DGE / D-A-CH
    ul: 600, // EFSA
    optimalRange: [100, 200],
    description: 'Zentral für Schilddrüsenhormone (T3, T4), Energiestoffwechsel und kognitive Funktion.',
    tip: 'Essentiell bei jodarmem Speisesalz oder veganer Ernährung ohne Meeresalgen.',
    warningAt: 500
  },
  'selen': {
    name: 'Selen (Selenmethionin / Natriumselenit)',
    shortName: 'Selen',
    category: 'trace_elements',
    unit: 'µg',
    nrv: 55,
    dach: 70, // DGE
    ul: 255, // EFSA 2023 Update
    optimalRange: [50, 100],
    description: 'Bestandteil antioxidativer Enzyme (Glutathionperoxidase), wichtig für Schilddrüse, Spermienbildung und Immunsystem.',
    tip: 'Böden in Mitteleuropa sind selenarm. Auf Upper Limit achten (Überdosierung vermeiden!).',
    warningAt: 255
  },
  'kupfer': {
    name: 'Kupfer',
    shortName: 'Kupfer',
    category: 'trace_elements',
    unit: 'mg',
    nrv: 1.0,
    dach: 1.0,
    ul: 5.0, // EFSA 2023 Update
    optimalRange: [0.5, 2.0],
    description: 'Eisenstoffwechsel, Bindegewebe, Nervensystem und Schutz vor oxidativem Stress.',
    tip: 'Hält die Balance zu Zink aufrecht (hohe Zinkdosen verdrängen Kupfer).',
    warningAt: 5.0
  },
  'mangan': {
    name: 'Mangan',
    shortName: 'Mangan',
    category: 'trace_elements',
    unit: 'mg',
    nrv: 2.0,
    dach: 2.0,
    ul: 11.0, // US IOM Upper Limit (EFSA hat keinen numerischen UL festgelegt)
    optimalRange: [1.0, 3.0],
    description: 'Knorpel- und Bindegewebsaufbau, Enzymaktivierung.',
    tip: 'Meist schon durch pflanzliche Nahrung gut gedeckt.',
    warningAt: 8.0
  },
  'chrom': {
    name: 'Chrom (Chrompicolinat)',
    shortName: 'Chrom',
    category: 'trace_elements',
    unit: 'µg',
    nrv: 40,
    dach: 30, // DGE
    ul: 250, // Orientierungs-Sicherheitswert (WHO / BfR / UK EVM; EFSA hat keinen numerischen UL für trivalentes Chrom)
    optimalRange: [20, 100],
    description: 'Stabilisiert Blutzuckerspiegel und unterstützt den Makronährstoff-Stoffwechsel.',
    tip: 'Chrompicolinat weist die höchste Bioverfügbarkeit auf.',
    warningAt: 250
  },
  'molybdaen': {
    name: 'Molybdän (Natriummolybdat)',
    shortName: 'Molybdän',
    category: 'trace_elements',
    unit: 'µg',
    nrv: 50,
    dach: 50,
    ul: 600, // EFSA
    optimalRange: [25, 100],
    description: 'Kofaktor für Enzyme zum Abbau schwefelhaltiger Aminosäuren und Harnsäure.',
    tip: 'Seltener Mangel, aber wichtiger Co-Faktor.',
    warningAt: 600
  },

  // Fettsäuren
  'omega3_total': {
    name: 'Omega-3 Fettsäuren Gesamt',
    shortName: 'Omega-3 Gesamt',
    category: 'fatty_acids',
    unit: 'mg',
    nrv: null,
    dach: 1500,
    ul: 5000,
    optimalRange: [1000, 3000],
    description: 'Essenzielle Fettsäuren für Herz, Gehirn, Augen und Entzündungsregulation.',
    tip: 'Mit fettiger Mahlzeit einnehmen.',
    warningAt: 5000
  },
  'epa': {
    name: 'EPA (Eicosapentaensäure)',
    shortName: 'EPA',
    category: 'fatty_acids',
    unit: 'mg',
    nrv: null,
    dach: 250,
    ul: 3000,
    optimalRange: [250, 1500],
    description: 'Vorläufer entzündungshemmender Eikosanoide, Herz-Kreislauf-Schutz.',
    tip: 'Aus Algenöl (vegan) oder Fischöl.',
    warningAt: 3000
  },
  'dha': {
    name: 'DHA (Docosahexaensäure)',
    shortName: 'DHA',
    category: 'fatty_acids',
    unit: 'mg',
    nrv: null,
    dach: 250,
    ul: 3000,
    optimalRange: [250, 1000],
    description: 'Hauptstrukturbestandteil von Gehirn- und Netzhaut-Zellmembranen.',
    tip: 'Unterstützt kognitive Leistungsfähigkeit und Sehvermögen.',
    warningAt: 3000
  },
  'ara': {
    name: 'ARA (Arachidonsäure)',
    shortName: 'ARA (Omega-6)',
    category: 'fatty_acids',
    unit: 'mg',
    nrv: null,
    dach: null,
    ul: 1000,
    optimalRange: [50, 300],
    description: 'Essenzielle Omega-6-Fettsäure für Muskel- und Gehirnfunktion.',
    tip: 'Z.B. aus Pilzfermentation (Mortierella alpina).',
    warningAt: 1000
  },

  // Aminosäuren & Carninutrients
  'creatine': {
    name: 'Kreatin Monohydrat (Creapure®)',
    shortName: 'Kreatin',
    category: 'amino_acids',
    unit: 'g',
    nrv: null,
    dach: 3.0,
    ul: null,
    optimalRange: [3.0, 5.0],
    description: 'Erhöht die körperliche Leistung bei Schnellkrafttraining, unterstützt ATP-Resynthese im Gehirn und Muskeln.',
    tip: 'Täglich 3-5 g mit ausreichend Wasser, Zeitpunkt flexibel.',
    warningAt: 10
  },
  'carnitine': {
    name: 'L-Carnitin / Acetyl-L-Carnitin',
    shortName: 'L-Carnitin',
    category: 'amino_acids',
    unit: 'mg',
    nrv: null,
    dach: null,
    ul: 3000, // Observed Safe Level (OSL) aus Humanstudien / CRN (EFSA hat keinen Nährstoff-UL)
    optimalRange: [500, 2000],
    description: 'Transportiert langkettige Fettsäuren in die Mitochondrien zur Energiegewinnung.',
    tip: 'ALCAR passiert die Blut-Hirn-Schranke.',
    warningAt: 3000
  },
  'taurine': {
    name: 'Taurin',
    shortName: 'Taurin',
    category: 'amino_acids',
    unit: 'mg',
    nrv: null,
    dach: null,
    ul: 3000, // EFSA NOAEL / Observed Safe Level (3.000 mg/Tag)
    optimalRange: [500, 2000],
    description: 'Unterstützt Osmoregulation, Gallensäurekonjugation, Herzfunktion und Muskelleistung.',
    tip: 'Gut kombinierbar mit Elektrolyten.',
    warningAt: 3000
  },
  'carnosine': {
    name: 'L-Carnosin / Beta-Alanin',
    shortName: 'Carnosin / Beta-Alanin',
    category: 'amino_acids',
    unit: 'mg',
    nrv: null,
    dach: null,
    ul: null,
    optimalRange: [500, 3000],
    description: 'Dipeptid und zellulärer Säurepuffer im Muskelgewebe gegen Laktatanhäufung.',
    tip: 'Beta-Alanin kann leichtes, harmloses Kribbeln verursachen.',
    warningAt: null
  },
  'protein': {
    name: 'Protein / Aminosäuren',
    shortName: 'Protein',
    category: 'amino_acids',
    unit: 'g',
    nrv: 50,
    dach: 60, // 0.8 - 2.0 g/kg Körpergewicht
    ul: null,
    optimalRange: [20, 60],
    description: 'Baustoff für Muskelmasse, Organe, Hormone und Enzyme.',
    tip: 'Über den Tag verteilt zuführen.',
    warningAt: null
  },
  'cholin': {
    name: 'Cholin (Cholinbitartrat / Phosphatidylcholin)',
    shortName: 'Cholin',
    category: 'amino_acids',
    unit: 'mg',
    nrv: null,
    dach: 400, // EFSA Adequate Intake (400 mg für Erwachsene)
    ul: 3500, // US IOM Upper Limit (EFSA hat keinen separaten UL festgelegt)
    optimalRange: [400, 1000],
    description: 'Essenzieller Nährstoff für die Bildung des Neurotransmitters Acetylcholin (Gedächtnis & Fokus), den Fettstoffwechsel und den Erhalt einer normalen Leberfunktion.',
    tip: 'Ideal morgens oder mittags zu einer Mahlzeit einnehmen. Wirkt im Verbund mit B12 und Folat im Methylierungszyklus.',
    warningAt: 3500
  },

  // Pflanzenstoffe & Sonstiges
  'ashwagandha': {
    name: 'Ashwagandha Extrakt (Withanolide)',
    shortName: 'Ashwagandha',
    category: 'other',
    unit: 'mg',
    nrv: null,
    dach: null,
    ul: 1000,
    optimalRange: [300, 600],
    description: 'Adaptogen zur Unterstützung bei physischem und mentalem Stress und für besseren Schlaf.',
    tip: 'Am besten abends oder nachmittags einnehmen. Nach 2-3 Monaten eine kurze Pause einlegen.',
    warningAt: 1200
  },
  'hyaluron': {
    name: 'Hyaluronsäure',
    shortName: 'Hyaluronsäure',
    category: 'other',
    unit: 'mg',
    nrv: null,
    dach: null,
    ul: null,
    optimalRange: [100, 300],
    description: 'Bindet Feuchtigkeit in Bindegewebe, Gelenkknorpeln und Haut.',
    tip: 'Mit ausreichend Flüssigkeit einnehmen.',
    warningAt: 500
  },
  'coq10': {
    name: 'Coenzym Q10 (Ubiquinol)',
    shortName: 'Coenzym Q10',
    category: 'other',
    unit: 'mg',
    nrv: null,
    dach: null,
    ul: 300, // Observed Safe Level (OSL nach Hathcock & Shao; kein gesetzlicher EFSA UL)
    optimalRange: [50, 200],
    description: 'Elektronentransporter in den Mitochondrien zur ATP-Gewinnung und starkes Antioxidans.',
    tip: 'Fettlöslich: Zu einer Mahlzeit einnehmen.',
    warningAt: 300
  }
};
