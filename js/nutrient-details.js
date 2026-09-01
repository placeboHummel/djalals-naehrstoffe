/**
 * Wissenschaftliche Detail-Datenbank für alle 50 Nährstoffe
 * Fundierte biochemische Wirkmechanismen, evidenzbasierte Wirkprofile (EFSA-Claims, klinische RCTs, Hypothesen),
 * aufklappbare Praxisnutzen-Erklärungen in verständlicher, seriöser Sprache,
 * D-A-CH / DGE / EFSA Referenzwerte, spezifische Einordnung für 0% Fleisch & 0% Fisch sowie Einnahme-Synergien.
 */

export const NUTRIENT_DETAILS = {
  // =========================================================================
  // VITAMINE (13)
  // =========================================================================
  'vit-a': {
    id: 'vit-a',
    name: 'Vitamin A',
    scientificName: 'Retinol / Retinylacetat',
    categoryName: 'Vitamine',
    badge: '☀️ Fettlösliches Vitamin',
    summary: 'Essenziell für Sehkraft, Immunabwehr, Genexpression und Zellerneuerung von Haut und Schleimhäuten.',
    simpleBenefitDesc: 'Vitamin A (Retinol) ist ein essenzieller Mikronährstoff mit hormonähnlicher Signalwirkung. Als Retinal bildet es das funktionelle Zentrum des Sehpigments Rhodopsin in der Netzhaut, während Retinsäure über nukleäre Rezeptoren (RAR/RXR) die Transkription von über 500 Genen steuert, die für die Differenzierung von Epithelgeweben, Schleimhautbarrieren und T-Zellen verantwortlich sind.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Sehkraft):</strong> Essenzieller Kofaktor des Rhodopsins; sichert die Hell-Dunkel-Adaption und schützt die Hornhautepithelien.',
      '<strong>EFSA-bestätigt (Immunsystem):</strong> Steuert die Differenzierung von regulatorischen T-Zellen und stärkt die Barrierefunktion respiratorischer und gastrointestinaler Epithelien.',
      '<strong>EFSA-bestätigt (Haut & Schleimhäute):</strong> Reguliert die Proliferation der Keratinozyten zur physiologischen Regeneration von Haut und Schleimhäuten.'
    ],
    plainGermanExplanation: 'Vitamin A ist unverzichtbar für die Sehleistung bei Dämmerung sowie die Barrierefunktion von Haut und Schleimhäuten. Es unterstützt die Regeneration von Epithelgewebe im Atem- und Verdauungstrakt, wodurch das Eindringen von Krankheitserregern erschwert wird. Zudem steuert es die Zelldifferenzierung und stärkt die Immunabwehr.',
    biochemistry: 'Vitamin A dient als Retinal im Sehpigment Rhodopsin der Netzhaut für das Hell-Dunkel-Sehen. In Form von Retinsäure bindet es an nukleäre RAR/RXR-Rezeptoren und moduliert die Transkription von über 500 Genen, die Zellproliferation, Epithelregeneration und T-Zell-Differenzierung steuern.',
    plantBasedRelevance: 'Pflanzliche Nahrung liefert nur Provitamin A (Beta-Carotin), dessen enzymatische Spaltung durch BCMO1 genetisch stark variiert (bis zu 45% der Bevölkerung sind schlechte Konvertierer). Vorgeformtes Retinol im Stack sichert die zelluläre Versorgung unabhängig von genetischen Konversions-Engpässen direkt ab.',
    intakeAdvice: 'Fettlöslich: Immer zu einer Mahlzeit mit Fettquelle einnehmen. Zink ist als Kofaktor für das Transportprotein (Retinol-bindendes Protein, RBP) zwingend erforderlich.',
    safetyAndUL: 'EFSA Tolerable Upper Limit (UL): 3.000 µg/Tag. Die Zufuhr von 600 µg (71% DGE / D-A-CH für Männer) ist ideal balanciert und vermeidet jegliche Akkumulation in der Leber.',
    scientificReference: 'EFSA Journal 2015;13(3):4028 | D-A-CH Referenzwerte 2020'
  },
  'vit-d3': {
    id: 'vit-d3',
    name: 'Vitamin D3',
    scientificName: 'Cholecalciferol (7.667 IE / 191,7 µg)',
    categoryName: 'Vitamine',
    badge: '☀️ Steroidhormon-Präkursor',
    summary: 'Schlüsselhormon für Knochendichte, Calcium-Homöostase, Muskelleistung und angeborene sowie adaptive Immunfunktion.',
    simpleBenefitDesc: 'Vitamin D3 ist ein prohormoneller Steroid-Präkursor, der im Körper zu 1,25(OH)2D3 (Calcitriol) hydroxyliert wird. Calcitriol bindet an den nukleären Vitamin-D-Rezeptor (VDR), der in nahezu allen Körpergeweben exprimiert wird, und moduliert über 1.000 Gene zur Regulation der Calcium- und Phosphathomöostase, Myogenese, Zelldifferenzierung und antimikrobiellen Peptidsynthese.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Knochendichte & Calcium):</strong> Stimuliert die enterale Expression von Calcium-Transportern (TRPV6, Calbindin-D9k) zur Skelettmineralisierung.',
      '<strong>EFSA-bestätigt (Immunmodulation):</strong> Induziert die Synthese antimikrobieller Peptide (Cathelicidin / LL-37) und dämpft proinflammatorische Zytokinkaskaden.',
      '<strong>EFSA-bestätigt (Muskelfunktion):</strong> Unterstützt Muskelkraft und Faserquerschnitt via genomischer und membranständiger VDR-Signalwege in Myozyten.',
      '<strong>Klinische Evidenz (Stimmung & Neuroprotektion):</strong> Assoziations- und Interventionsstudien belegen eine Korrelation zwischen suffizienten 25(OH)D-Spiegeln (>40–60 ng/ml) und reduzierten saisonalen depressiven Episoden sowie optimierter neurokognitiver Vitalität.'
    ],
    plainGermanExplanation: 'Vitamin D3 steuert die Aufnahme von Calcium aus dem Darm und sichert die langfristige Stabilität der Knochendichte. Darüber hinaus beeinflusst es die Muskelkraft, unterstützt das Immunsystem bei der Abwehr von Infekten und trägt zur Minderung von saisonaler Abgeschlagenheit in den sonnenarmen Monaten bei.',
    biochemistry: 'Cholecalciferol wird in der Leber zu 25(OH)D und in den Nieren/Zellen zum aktiven Steroidhormon Calcitriol (1,25(OH)2D) hydroxyliert. Calcitriol bindet an den Vitamin-D-Rezeptor (VDR) in fast allen Geweben und reguliert über 1.000 Gene, u.a. antimikrobielle Peptide (Cathelicidin) und Calcium-Transportproteine.',
    plantBasedRelevance: 'Bei Verzicht auf fetten Seefisch (Lachs, Hering, Makrele) existiert in pflanzlichen Lebensmitteln praktisch keine nennenswerte Vitamin-D-Quelle. In mitteleuropäischen Breitengraden reicht die UV-B-Strahlung von Oktober bis April physikalisch nicht für eine Eigensynthese aus – Supplementierung ist obligatorisch.',
    intakeAdvice: 'Morgens oder mittags mit Fettquelle einnehmen. Zwingend synergistisch mit Vitamin K2 (Aktivierung von Osteocalcin & Matrix-Gla-Protein) und Magnesium (Kofaktor für die Hydroxylasen) kombinieren.',
    safetyAndUL: 'EFSA Upper Limit für die Allgemeinbevölkerung: 4.000 IE (100 µg)/Tag. In Kombination mit hoher K2-Gabe (270 µg) und Magnesium wird das Risiko einer Weichteilkalzifizierung physiologisch minimiert.',
    scientificReference: 'EFSA Journal 2012;10(7):2813 | D-A-CH Referenzwerte | Endocrine Society Clinical Guidelines'
  },
  'vit-e': {
    id: 'vit-e',
    name: 'Vitamin E',
    scientificName: 'D-Alpha-Tocopherol',
    categoryName: 'Vitamine',
    badge: '🛡️ Fettlösliches Antioxidans',
    summary: 'Primäres fettlösliches Antioxidans zum Schutz von Zellmembranen und mehrfach ungesättigten Fettsäuren vor Lipidperoxidation.',
    simpleBenefitDesc: 'D-Alpha-Tocopherol ist das wichtigste lipidlösliche Kettenabbruch-Antioxidans des menschlichen Organismus. Es lokalisiert sich direkt in der Lipiddoppelschicht zellulärer und mitochondrialer Membranen, fängt Peroxylradikale vor dem Angriff auf ungesättigte Fettsäuren ab und schützt so Gefäßendothelien, Erythrozyten und hochsensible Omega-3-Fettsäuren (EPA/DHA) vor oxidativer Zersetzung.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Zellulärer Radikalschutz):</strong> Schützt zelluläre Lipide, Proteine und DNA nachweislich vor oxidativer Zerstörung durch reaktive Sauerstoffspezies (ROS).',
      '<strong>Gefäß- & Membranintegrität:</strong> Verhindert die Lipidperoxidation in arteriellen Gefäßwänden und Erythrozytenmembranen.',
      '<strong>Biochemische Synergie mit Omega-3:</strong> Hohe Zufuhr mehrfach ungesättigter Fettsäuren (EPA/DHA) erhöht den physiologischen Vitamin-E-Bedarf; Tocopherol schützt das zugeführte Öl in-vivo vor Peroxidation.'
    ],
    plainGermanExplanation: 'Vitamin E fungiert als primäres fettlösliches Antioxidans, das Zellmembranen und ungesättigte Fettsäuren vor oxidativen Schäden schützt. Bei Zufuhr von Omega-3-Fettsäuren bewahrt es diese vor vorzeitiger Oxidation im Blutkreislauf und unterstützt den Erhalt gesunder Gefäßinnenwände.',
    biochemistry: 'Alpha-Tocopherol fängt freie Radikale (Peroxylradikale) in Lipiddoppelschichten ab, bevor diese ungesättigte Fettsäuren in Membranen oxidieren können. Das dabei entstehende Tocopheroxyl-Radikal wird im zellulären Redoxnetzwerk primär durch Vitamin C wieder in seine aktive Form regeneriert.',
    plantBasedRelevance: 'Bei hoher Zufuhr mehrfach ungesättigter Fettsäuren (z.B. 2.065 mg Omega-3 EPA/DHA) steigt der physiologische Vitamin-E-Bedarf der Zellmembranen signifikant an. Das im Stack enthaltene Vitamin E schützt die Omega-3-Fettsäuren direkt vor Oxidation.',
    intakeAdvice: 'Zu einer Mahlzeit einnehmen. Wirkt im antioxidativen Netzwerk optimal zusammen mit Vitamin C, Selen und Coenzym Q10.',
    safetyAndUL: 'EFSA Upper Limit: 300 mg/Tag. Mit 14 mg (100% DGE / D-A-CH für Männer) liegt die Einnahme im absolut sicheren physiologischen Optimalbereich.',
    scientificReference: 'EFSA Journal 2010;8(10):1816 | D-A-CH Referenzwerte'
  },
  'vit-k2': {
    id: 'vit-k2',
    name: 'Vitamin K2 (MK-7)',
    scientificName: 'Menachinon-7 (all-trans)',
    categoryName: 'Vitamine',
    badge: '🦴 Knochen- & Gefäßschutz',
    summary: 'Aktiviert Calcium-Bindungsproteine; lenkt Calcium zielgerichtet in die Knochenmatrix und schützt Arterien vor Verkalkung.',
    simpleBenefitDesc: 'Vitamin K2 (als Menachinon-7 in all-trans-Konfiguration) dient als unentbehrlicher Kofaktor der Gamma-Glutamylcarboxylase. Es überführt inaktive Vorläuferproteine (Gla-Proteine) durch Carboxylierung in ihre funktionelle Form: Osteocalcin bindet Calcium selektiv in der Knochenmatrix, während Matrix-Gla-Protein (MGP) als stärkster endogener Schutzfaktor die arterielle Mediaverkalkung und Plaque-Ablagerung hemmt.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Knochenerhalt):</strong> Aktiviert Osteocalcin, wodurch ionisiertes Calcium fest in das Knochenmineral Hydroxylapatit eingebaut wird.',
      '<strong>Klinische Evidenz (Gefäßelastizität & MGP):</strong> Große Humanstudien (u.a. Rotterdam-Studie, Knapen et al. 2015) belegen, dass aktives carboxyliertes MGP die Calciumablagerung in arteriellen Gefäßwänden signifikant hemmt und die arterielle Elastizität erhält.',
      '<strong>Pharmakokinetische Exzellenz:</strong> Die all-trans MK-7 Form besitzt eine Plasma-Halbwertszeit von ca. 72 Stunden (im Vergleich zu wenigen Stunden bei K1) und gewährleistet eine stabile extrahepatische Gewebesättigung.'
    ],
    plainGermanExplanation: 'Vitamin K2 aktiviert Proteine, die Calcium gezielt in die Knochenmatrix einbinden. Gleichzeitig hemmt es die Ablagerung von Calcium in den Gefäßwänden und schützt so vor arterieller Gefäßverkalkung.',
    biochemistry: 'K2 dient als Kofaktor der Gamma-Glutamylcarboxylase zur Carboxylierung von Osteocalcin (Knochenmineralisierung) und Matrix-Gla-Protein (MGP, stärkster endogener Inhibitor vaskulärer und Weichteilverkalkung). MK-7 besitzt im Vergleich zu K1 eine Halbwertszeit von über 72 Stunden im Blut.',
    plantBasedRelevance: 'Vitamin K2 kommt in relevanter Menge fast nur in tierischen Produkten (Geflügel, Eigelb, gereifter Käse) und japanischem Natto vor. Bei fleischfreier Ernährung und hoher Vitamin-D-Zufuhr ist mikrobiell fermentiertes MK-7 essenziell für die Gefäßgesundheit.',
    intakeAdvice: 'Fettlöslich: Immer zusammen mit Vitamin D3 und gesunden Fetten einnehmen. All-trans-Form garantiert höchste Bioverfügbarkeit.',
    safetyAndUL: 'EFSA hat kein toxisches Upper Limit festgelegt; K2 gilt auch in Dosen von mehreren 100 µg als physiologisch extrem sicher und induziert keine unkontrollierte Blutgerinnung.',
    scientificReference: 'EFSA Journal 2009;7(9):1228 | Thrombosis and Haemostasis 2012'
  },
  'vit-b1': {
    id: 'vit-b1',
    name: 'Vitamin B1',
    scientificName: 'Thiaminhydrochlorid',
    categoryName: 'Vitamine',
    badge: '⚡ Energiestoffwechsel & Nerven',
    summary: 'Schlüsselenzym für den Kohlenhydratabbau, die zelluläre ATP-Gewinnung und die Neurotransmittersynthese.',
    simpleBenefitDesc: 'Thiamin wird im Zytosol durch Thiaminpyrophosphokinase in seine biologisch aktive Form Thiaminpyrophosphat (TPP) überführt. TPP ist der geschwindigkeitsbestimmende Kofaktor der Pyruvat-Dehydrogenase und Alpha-Ketoglutarat-Dehydrogenase im Citratzyklus sowie der Transketolase im Pentosephosphatweg. Es ist für die neuronale und kardiomyotische Energiegewinnung aus Glukose unverzichtbar.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Energiestoffwechsel):</strong> Katalysiert den oxidativen Glukoseabbau zur Bereitstellung von ATP in Gehirn und Muskulatur.',
      '<strong>EFSA-bestätigt (Nervensystem & Psyche):</strong> Gewährleistet die Reizleitung entlang der Axone und unterstützt die Synthese des Neurotransmitters Acetylcholin.',
      '<strong>EFSA-bestätigt (Herzfunktion):</strong> Sichert die kontinuierliche Energiebereitstellung des Myokards bei aerober Belastung.'
    ],
    plainGermanExplanation: 'Vitamin B1 ist ein zentraler Kofaktor für den enzymatischen Abbau von Kohlenhydraten zur zellulären Energiegewinnung. Es gewährleistet die kontinuierliche Energieversorgung von Muskeln, Herz und Nervensystem.',
    biochemistry: 'Thiamindiphosphat (TDP/TPP) ist der unentbehrliche Kofaktor der Pyruvat-Dehydrogenase und Alpha-Ketoglutarat-Dehydrogenase im Citratzyklus sowie der Transketolase im Pentosephosphatweg (Synthese von NADPH und Ribose für DNA/RNA).',
    plantBasedRelevance: 'Obwohl in Vollkorn und Hülsenfrüchten vorhanden, hemmen pflanzliche Phytate und Gerbstoffe (Kaffee/Tee) die Bioverfügbarkeit. Die Zufuhr sichert die enzymatische Rate bei kohlenhydratreicher pflanzlicher Kost.',
    intakeAdvice: 'Wasserlöslich. Kann morgens oder zu jeder Mahlzeit eingenommen werden.',
    safetyAndUL: 'Kein EFSA Upper Limit; wasserlöslicher Überschuss wird rasch und sicher über die Nieren ausgeschieden.',
    scientificReference: 'EFSA Journal 2010;8(10):1755 | D-A-CH Referenzwerte'
  },
  'vit-b2': {
    id: 'vit-b2',
    name: 'Vitamin B2',
    scientificName: 'Riboflavin / Riboflavin-5-Phosphat (R-5-P)',
    categoryName: 'Vitamine',
    badge: '🔋 Zellatmung & B-Kofaktor',
    summary: 'Zentraler Bestandteil der Atmungskette (FMN/FAD), Fettsäureoxidation und Aktivierung anderer B-Vitamine.',
    simpleBenefitDesc: 'Riboflavin ist der strukturelle Baustein der Coenzyme Flavinmononukleotid (FMN) und Flavinadenindinukleotid (FAD). Diese fungieren als primäre Elektronenüberträger in den Komplexen I und II der mitochondrialen Atmungskette, treiben die mitochondriale Beta-Oxidation von Fettsäuren an und regenerieren über die Glutathionreduktase das zelluläre Master-Antioxidans Glutathion.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Energiebereitstellung & Ermüdung):</strong> Schafft die biochemische Grundlage der zellulären ATP-Synthese und mindert chronische Fatigue.',
      '<strong>EFSA-bestätigt (Zellschutz & Sehkraft):</strong> Schützt zelluläre Makromoleküle vor oxidativem Stress und erhält die Transparenz der Augenlinse.',
      '<strong>EFSA-bestätigt (Epithelien & Schleimhäute):</strong> Erhält intakte Hautstrukturen und beugt Cheilosis (Rhagaden an den Mundwinkeln) vor.',
      '<strong>Katalysator im B-Vitamin-Netzwerk:</strong> FAD ist zwingend nötig für die Aktivierung von Pyridoxin (B6) zu P-5-P und Folat (B9) zu aktiven Coenzymen.'
    ],
    plainGermanExplanation: 'Vitamin B2 ist essenziell für die mitochondriale Energiegewinnung aus Fetten, Kohlenhydraten und Proteinen. Es unterstützt den Erhalt gesunder Schleimhäute, schützt die Augen vor Ermüdung und regeneriert körpereigene Antioxidantien.',
    biochemistry: 'Riboflavin bildet die prosthetischen Gruppen FMN (Komplex I) und FAD (Komplex II der mitochondrialen Atmungskette). Zudem ist FAD notwendig für die Glutathionreduktase (Regeneration von Glutathion) und die Aktivierung von Pyridoxin (B6) und Folsäure.',
    plantBasedRelevance: 'Milchprodukte und Fleisch sind in der westlichen Mischkost die primären Riboflavinquellen. Bei fleischfreier Ernährung ist eine Supplementierung ein bewährter Schutz vor subklinischen Defiziten. Urin verfärbt sich harmlos leuchtend gelb.',
    intakeAdvice: 'Wasserlöslich. Zu jeder Tageszeit einnehmbar.',
    safetyAndUL: 'Kein EFSA Upper Limit (keine Toxizität bei oraler Aufnahme bekannt).',
    scientificReference: 'EFSA Journal 2010;8(10):1814 | D-A-CH Referenzwerte'
  },
  'vit-b3': {
    id: 'vit-b3',
    name: 'Vitamin B3',
    scientificName: 'Niacin / Nicotinamid',
    categoryName: 'Vitamine',
    badge: '🧬 DNA-Reparatur & NAD+',
    summary: 'Präkursor von NAD+/NADH – unverzichtbar für Zellatmung, ATP-Synthese, DNA-Reparatur und Sirtuin-Aktivität.',
    simpleBenefitDesc: 'Nicotinamid ist der direkte physiologische Präkursor der zellulären Coenzyme Nicotinamidadenindinukleotid (NAD+) und NADP+. NAD+ ist an über 400 enzymatischen Redoxreaktionen der Glykolyse, des Citratzyklus und der Atmungskette beteiligt und dient gleichzeitig als verbrauchtes Substrat für Poly(ADP-Ribose)-Polymerasen (PARP-1 zur DNA-Strangbruchreparatur) und Sirtuine (SIRT1–7 zur epigenetischen Langlebigkeitsregulation).',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Energiestoffwechsel & Nervensystem):</strong> Essentiell für den zellulären Citratzyklus, ATP-Produktion und neuronale Signalübertragung.',
      '<strong>EFSA-bestätigt (Haut & Schleimhäute):</strong> Unterstützt die epidermale Differenzierung und die Synthese von Sphingolipiden zur Barrierefunktion.',
      '<strong>Wissenschaftlicher Fokus (NAD+-Pool & DNA-Schutz):</strong> Sichert die Substratverfügbarkeit für PARP-1 zur genomischen Stabilität ohne gefäßerweiternden "Niacin-Flush".'
    ],
    plainGermanExplanation: 'Vitamin B3 liefert die Grundlage für das Coenzym NAD+, welches für zelluläre Reparaturprozesse, DNA-Integrität und den Energiestoffwechsel benötigt wird. Es unterstützt die kognitive Leistungsfähigkeit und die epidermale Barrierefunktion der Haut.',
    biochemistry: 'Nicotinamid wird in den zellulären NAD+/NADP+-Pool überführt. NAD+ treibt Hunderte von Redoxreaktionen im Citratzyklus an und dient als Substrat für PARP-Enzyme (Reparatur von DNA-Strangbrüchen) und Sirtuine (epigenetische Langlebigkeitsfaktoren).',
    plantBasedRelevance: 'Die Eigensynthese aus der Aminosäure L-Tryptophan ist mit einem Umwandlungsverhältnis von 60:1 extrem ineffizient. Nicotinamid liefert bioaktives NAD+ ohne gefäßerweiternden "Niacin-Flush".',
    intakeAdvice: 'Als Nicotinamid hervorragend magenverträglich und zu jeder Mahlzeit einsetzbar.',
    safetyAndUL: 'EFSA Upper Limit für Nicotinamid: 900 mg/Tag. Mit 15 mg (94% D-A-CH) liegt die Zufuhr im idealen Sicherheitskorridor.',
    scientificReference: 'EFSA Journal 2014;12(7):3759 | Cell Metabolism NAD+ Reviews'
  },
  'vit-b5': {
    id: 'vit-b5',
    name: 'Vitamin B5',
    scientificName: 'Calcium-D-Pantothenat',
    categoryName: 'Vitamine',
    badge: '⚙️ Coenzym A & Hormonsynthese',
    summary: 'Baustein von Coenzym A (CoA) – zentral für den Fett-, Kohlenhydrat- und Steroidhormon-Stoffwechsel.',
    simpleBenefitDesc: 'Pantothensäure bildet den essenziellen funktionellen Kern von Coenzym A (CoA) und der Phosphopantethein-Gruppe des Acyl-Carrier-Proteins (ACP). Acetyl-CoA stellt die universelle Schnittstelle des gesamten Makronährstoffabbaus dar und ist unentbehrlich für den Eintritt in den Citratzyklus, die Cholesterin- und Steroidhormonbiosynthese in den Nebennieren sowie die Bildung des Neurotransmitters Acetylcholin.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Geistige Leistungsfähigkeit):</strong> Fördert die kognitive Funktion und Konzentration über die Synthese von Acetylcholin.',
      '<strong>EFSA-bestätigt (Steroidhormone & Vitamin D):</strong> Ermöglicht die de-novo Synthese von Nebennierenhormonen (Cortisol, Aldosteron), Sexualsteroiden und Vitamin D.',
      '<strong>EFSA-bestätigt (Energiestoffwechsel & Müdigkeit):</strong> Reduziert Erschöpfung durch Gewährleistung des mitochondrialen Acetyl-CoA-Umsatzes.'
    ],
    plainGermanExplanation: 'Vitamin B5 ist der Baustein von Coenzym A, das für die Fettverbrennung, den Energiestoffwechsel und die Synthese von Steroidhormonen (wie Cortisol und Testosteron) sowie Neurotransmittern unverzichtbar ist.',
    biochemistry: 'Pantothensäure ist der funktionelle Kern von Coenzym A (CoA) und dem Acyl-Carrier-Protein (ACP). Acetyl-CoA ist die zentrale Drehscheibe des gesamten Intermediärstoffwechsels (Eintritt in den Citratzyklus, Synthese von Cholesterin, Neurotransmittern und Melatonin).',
    plantBasedRelevance: 'Unterstützt die zelluläre Energiegewinnung und die Nebennierenfunktion bei mentalem oder physischem Stress.',
    intakeAdvice: 'Wasserlöslich. Kann morgens oder tagsüber eingenommen werden.',
    safetyAndUL: 'Kein EFSA Upper Limit festgelegt (sehr hohe Toleranz).',
    scientificReference: 'EFSA Journal 2011;9(6):2209 | D-A-CH Referenzwerte'
  },
  'vit-b6': {
    id: 'vit-b6',
    name: 'Vitamin B6',
    scientificName: 'Pyridoxal-5-Phosphat (P-5-P)',
    categoryName: 'Vitamine',
    badge: '🧠 Neurotransmitter & Homocystein',
    summary: 'Kofaktor im Aminosäurestoffwechsel, Hämoglobinbildung, Homocysteinabbau und Neurotransmittersynthese.',
    simpleBenefitDesc: 'Pyridoxal-5-Phosphat (P-5-P) ist das biologisch aktive Coenzym für über 140 enzymatische Reaktionen, vor allem im Aminosäure- und Neurotransmitterstoffwechsel. Es steuert die Decarboxylierung von L-DOPA zu Dopamin, 5-HTP zu Serotonin, Glutamat zu GABA und Histidin zu Histamin und katalysiert den Transsulfurierungsweg zum Abbau des gefäßtoxischen Homocysteins.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Neurotransmitter & Psyche):</strong> Katalysiert die Synthese der Neurotransmitter Serotonin, Dopamin und GABA zur normalen Funktion des Nervensystems.',
      '<strong>EFSA-bestätigt (Homocystein-Clearance):</strong> Kofaktor der Cystathionin-Beta-Synthase zum enzymatischen Abbau von Homocystein zu Cystathionin.',
      '<strong>EFSA-bestätigt (Proteinstoffwechsel & Immunsystem):</strong> Steuert den Umsatz von Aminosäuren für die muskuläre Proteinsynthese und Antikörperbildung.',
      '<strong>Bioaktiver Vorteil (P-5-P):</strong> Liefert die direkt wirksame Coenzymform ohne Notwendigkeit hepatischer Phosphorylierungsenzyme.'
    ],
    plainGermanExplanation: 'Vitamin B6 ist unverzichtbar für den Proteinstoffwechsel und die Synthese zentraler Neurotransmitter wie Serotonin, Dopamin und GABA. Zudem unterstützt es den Abbau des gefäßschädigenden Stoffwechselzwischenprodukts Homocystein.',
    biochemistry: 'Pyridoxal-5-Phosphat (P-5-P) ist das aktive Coenzym für über 140 Enzyme. Es steuert Decarboxylierungen zur Bildung von Neurotransmittern (Serotonin, Dopamin, GABA) und die Cystathionin-Beta-Synthase zum enzymatischen Abbau des toxischen Homocysteins.',
    plantBasedRelevance: 'Pflanzliches B6 liegt oft als Pyridoxin-Glucosid vor, dessen Bioverfügbarkeit um bis zu 50% reduziert ist. Die direkte Gabe der aktiven Coenzymform P-5-P umgeht hepatische Aktivierungsschritte.',
    intakeAdvice: 'Aktivierte Form P-5-P ist direkt bioverfügbar. Mit 1.6 mg optimal dosiert.',
    safetyAndUL: 'EFSA senkte das Upper Limit 2023 auf 12 mg/Tag. Die Tagesdosis von 1.6 mg liegt weit unterhalb jeglicher neurotoxischer Schwellenwerte.',
    scientificReference: 'EFSA Journal 2023;21(5):8006 | D-A-CH Referenzwerte'
  },
  'vit-b7': {
    id: 'vit-b7',
    name: 'Vitamin B7 (Biotin)',
    scientificName: 'D-Biotin',
    categoryName: 'Vitamine',
    badge: '💇 Keratinstruktur & Carboxylasen',
    summary: 'Kofaktor für Carboxylasen im Fettsäure-, Glukose- und Aminosäurestoffwechsel; Erhalt von Haaren, Haut und Nägeln.',
    simpleBenefitDesc: 'D-Biotin fungiert als kovalent gebundene prosthetische Gruppe von vier multifunktionellen Carboxylasen: Pyruvat-Carboxylase (Gluconeogenese), Acetyl-CoA-Carboxylase (Fettsäuresynthese), Propionyl-CoA-Carboxylase und Methylcrotonyl-CoA-Carboxylase (Leucinabbau). Es ist zudem essenziell für die epigenetische Histon-Biotinylierung und die Keratin-Expression in Haarfollikeln und Nagelmatrix.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Haare & Haut):</strong> Stimuliert die Keratinbiosynthese und erhält normale Haar- und Hautstrukturen.',
      '<strong>EFSA-bestätigt (Makronährstoff-Verwertung):</strong> Ermöglicht biochemische Carboxylierungsreaktionen im Glukose-, Lipid- und Aminosäurestoffwechsel.',
      '<strong>EFSA-bestätigt (Nervensystem & Energiestoffwechsel):</strong> Sichert die neuronale Energiebereitstellung via intakter Gluconeogenese.',
      '<strong>Labordiagnostischer Hinweis:</strong> Physiologische Dosis (40 µg) vermeidet laboranalytische Interferenzen bei Streptavidin-Biotin-Immunoassays (z. B. TSH, Troponin).'
    ],
    plainGermanExplanation: 'Biotin aktiviert Enzyme des Fett-, Kohlenhydrat- und Eiweißstoffwechsels und fördert die körpereigene Bildung von Keratin, dem strukturellen Grundbaustein für kräftiges Haar, elastische Haut und stabile Nägel.',
    biochemistry: 'Biotin dient als prosthetische Gruppe von vier mitochondrialen Carboxylasen (z.B. Pyruvat-Carboxylase, Acetyl-CoA-Carboxylase). Es ermöglicht Carboxylierungsreaktionen zur Gluconeogenese und Fettsäuresynthese sowie die Keratinsynthese in Haarfollikeln.',
    plantBasedRelevance: 'Sichert den Energiestoffwechsel und die Geweberegeneration ab.',
    intakeAdvice: 'Wasserlöslich. Hohe Megadosen (>5.000 µg) können Laborbluttests (z.B. Schilddrüse) stören – die physiologische Dosis von 40 µg ist absolut laborkonform.',
    safetyAndUL: 'Kein EFSA Upper Limit (keine Toxizität bekannt).',
    scientificReference: 'EFSA Journal 2012;10(1):2470 | D-A-CH Referenzwerte'
  },
  'vit-b9': {
    id: 'vit-b9',
    name: 'Vitamin B9 (Folat)',
    scientificName: '5-MTHF (L-Methylfolat / Quatrefolic®)',
    categoryName: 'Vitamine',
    badge: '🧬 Zellteilung & Methylierung',
    summary: 'Unerlässlich für DNA/RNA-Synthese, Zellneubildung, Blutbildung und Remethylierung von Homocystein zu Methionin.',
    simpleBenefitDesc: '5-Methyltetrahydrofolat (5-MTHF) ist der biologisch aktive, universelle C1-Körper-Donor des zellulären Methylierungszyklus. Es überträgt Methylgruppen über die Methionin-Synthase auf Homocystein zur Bildung von Methionin und S-Adenosylmethionin (SAMe) und liefert unentbehrliche Kohlenstoffbausteine für die De-novo-Purin- und Thymidylat-Synthese (DNA-Replikation und Zellteilung).',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Zellteilung & Hämatopoese):</strong> Unverzichtbar für die fehlerfreie DNA-Replikation und die Bildung reifer Erythrozyten im Knochenmark.',
      '<strong>EFSA-bestätigt (Homocystein & Herz-Kreislauf):</strong> Senkt den kardiovaskulären Risikofaktor Homocystein durch kontinuierliche Remethylierung.',
      '<strong>EFSA-bestätigt (Psychische Funktion & Immunsystem):</strong> Beteiligt an der Synthese von Neurotransmittern und der klonalen Expansion von Lymphozyten.',
      '<strong>Pharmakogenetischer Vorteil (Quatrefolic®):</strong> Als reduziertes L-Methylfolat direkt zellulär bioverfügbar; umgeht den MTHFR-Polymorphismus (C677T), der synthetische Folsäure ineffizient macht.'
    ],
    plainGermanExplanation: 'Folat (in bioaktiver 5-MTHF-Form) ist essenziell für die DNA-Synthese, die Zellteilung und die Bildung roter Blutkörperchen. Im Verbund mit Vitamin B12 trägt es maßgeblich zur Senkung erhöhter Homocysteinspiegel bei.',
    biochemistry: '5-Methyltetrahydrofolat (5-MTHF) fungiert als universeller Methylgruppendonor im 1-Kohlenstoff-Stoffwechsel. Zusammen mit Vitamin B12 wandelt es Homocystein in Methionin um, das für die Bildung von S-Adenosylmethionin (SAMe, zellulärer Hauptmethylierer) benötigt wird.',
    plantBasedRelevance: 'Nahrungsfolate sind hitze- und lichtempfindlich. L-Methylfolat (Quatrefolic®) ist im Gegensatz zu synthetischer Folsäure direkt bioaktiv und umgeht den bei bis zu 40% der Bevölkerung vorliegenden MTHFR-Genpolymorphismus (C677T).',
    intakeAdvice: 'Optimal morgens mit Vitamin B12 und Vitamin B6 kombiniert.',
    safetyAndUL: 'EFSA Upper Limit für Folsäure: 1.000 µg/Tag. 200 µg 5-MTHF stellt eine sichere, hoch bioverfügbare Ergänzung dar.',
    scientificReference: 'EFSA Journal 2014;12(11):3893 | Molecular Nutrition & Food Research'
  },
  'vit-b12': {
    id: 'vit-b12',
    name: 'Vitamin B12',
    scientificName: 'Methylcobalamin & Adenosylcobalamin',
    categoryName: 'Vitamine',
    badge: '🌱 Essenziell bei fleischfreier Kost',
    summary: 'Absoluter Schlüsselnährstoff für Myelinscheiden, Nervensystem, Erythrozytenbildung und zelluläre DNA-Synthese.',
    simpleBenefitDesc: 'Cobalamin ist ein metallorganischer Kofaktor mit zentraler Doppelfunktion: Methylcobalamin steuert im Zytosol die Methionin-Synthase (DNA-Methylierung und Homocysteinabbau), während 5-Desoxyadenosylcobalamin in den Mitochondrien die Methylmalonyl-CoA-Mutase antreibt (Verwertung ungeradzahliger Fettsäuren und Verzweigtkettiger Aminosäuren). Ein Defizit führt zu irreversibler Demyelinisierung und funikulärer Myelose.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Nervensystem & Myelinschutz):</strong> Erhält die strukturelle Integrität der Myelinhüllen im zentralen und peripheren Nervensystem.',
      '<strong>EFSA-bestätigt (Erythrozytenbildung & Müdigkeit):</strong> Verhindert perniziöse/megaloblastäre Anämie und sichert die zelluläre Sauerstoffversorgung.',
      '<strong>EFSA-bestätigt (Homocystein-Stoffwechsel & DNA-Synthese):</strong> Arbeitet im Methylierungszyklus untrennbar mit 5-MTHF zusammen.',
      '<strong>Medizinische Notwendigkeit bei 0% Fleisch/Fisch:</strong> Da pflanzliche Nahrungsmittel keine bioaktiven Cobalamine enthalten, ist die Substitution physiologisch obligatorisch.'
    ],
    plainGermanExplanation: 'Vitamin B12 schützt die Myelinscheiden der Nervenbahnen, verhindert Blutarmut und ist essenziell für die Zellteilung. Da pflanzliche Lebensmittel kein bioverfügbares B12 enthalten, sichert die Supplementierung die geistige Leistungsfähigkeit und die Blutbildung bei fleischfreier Kost zuverlässig ab.',
    biochemistry: 'B12 ist Kofaktor für die Methionin-Synthase (Zytosol, DNA-Methylierung und Homocystein-Clearance) und die Methylmalonyl-CoA-Mutase (Mitochondrien, Abbau ungeradzahliger Fettsäuren und ATP-Gewinnung). Ein Mangel führt zur irreversiblen Demyelinisierung von Nervenfasern.',
    plantBasedRelevance: 'Kommt in bioverfügbarer Form in keinen Pflanzen vor. Für Nicht-Fleischesser und Nicht-Fischesser ist eine zuverlässige B12-Substitution überlebenswichtig. 50 µg täglich sichert auch bei eingeschränkter Intrinsic-Factor-Bindung eine ausreichende passive Diffusion im Darm.',
    intakeAdvice: 'Zu jeder Tageszeit einnehmbar. Bioaktive Methyl- und Adenosyl-Formen belasten den Körper im Gegensatz zu Cyanocobalamin nicht mit Cyanidgruppen.',
    safetyAndUL: 'EFSA: Kein toxisches Limit bekannt. Wasserlöslicher Überschuss wird problemlos ausgeschieden.',
    scientificReference: 'EFSA Journal 2015;13(7):4150 | American Journal of Clinical Nutrition'
  },
  'vit-c': {
    id: 'vit-c',
    name: 'Vitamin C',
    scientificName: 'Ascorbinsäure / Calciumascorbat (580 mg)',
    categoryName: 'Vitamine',
    badge: '🍊 Kollagensynthese & Eisen-Booster',
    summary: 'Starkes Antioxidans, Enzymkofaktor für die Kollagensynthese, Immunsystem und 3- bis 4-fache Steigerung der pflanzlichen Eisenaufnahme.',
    simpleBenefitDesc: 'L-Ascorbinsäure ist ein essenzieller Elektronendonor und reduzierender Kofaktor für Fe2+/2-Oxoglutarat-abhängige Dioxygenasen. Sie hält das Eisen in Prolyl-4-Hydroxylasen und Lysylhydroxylasen im reduzierten Fe2+-Zustand, was die Quervernetzung der Kollagen-Dreifachhelix ermöglicht, kurbelt die Carnitin- und Katecholaminbiosynthese an und reduziert enterals pflanzliches Nicht-Häm-Eisen zu bioverfügbarem Fe2+.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Kollagenbiosynthese):</strong> Unverzichtbar für die normale Kollagenbildung für Knochen, Knorpel, Blutgefäße, Haut und Zahnfleisch.',
      '<strong>EFSA-bestätigt (Eisenresorption):</strong> Steigert die enterale Resorption von Nicht-Häm-Eisen aus pflanzlichen Quellen nachweislich um das 3- bis 4-fache.',
      '<strong>EFSA-bestätigt (Immunabwehr bei Belastung):</strong> Erhält eine normale Immunfunktion während und nach intensiver körperlicher Betätigung.',
      '<strong>Redox-Netzwerk-Recycling:</strong> Regeneriert oxidierte Alpha-Tocopheroxyl-Radikale (Vitamin E) zurück in ihre aktive antioxidative Form.'
    ],
    plainGermanExplanation: 'Vitamin C fördert die körpereigene Kollagensynthese für Knorpel, Sehnen, Gefäße und Haut. Es unterstützt das Immunsystem unter körperlicher Belastung und vervielfacht die enterale Aufnahme von pflanzlichem Eisen aus der Nahrung.',
    biochemistry: 'Ascorbat hält das Eisen in Prolyl- und Lysylhydroxylasen im reduzierten Fe2+-Zustand, was für die Vernetzung der Kollagen-Dreifachhelix zwingend nötig ist. Zudem reduziert es dreiwertiges pflanzliches Nicht-Häm-Eisen (Fe3+) im Magen-Darm-Trakt zu bioverfügbarem Fe2+.',
    plantBasedRelevance: 'Da pflanzliches Eisen schlechter resorbiert wird als tierisches Häm-Eisen, ist Vitamin C der potenteste physiologische Hebel zur Maximierung der Eisenaufnahme aus Nahrung und Multinährstoffen.',
    intakeAdvice: 'Gepuffertes Calciumascorbat ist magenfreundlich. Ideal zusammen mit Mahlzeiten oder Eisen eintragen.',
    safetyAndUL: 'EFSA hat mangels Toxizität keinen numerischen Upper Limit (UL) festgelegt. Der etablierte US IOM (Institute of Medicine) Grenzwert liegt bei 2.000 mg/Tag. Mit 580 mg Gesamtzufuhr (527% DGE) absolut sicher und optimal im wirksamen Bereich.',
    scientificReference: 'EFSA Journal 2013;11(11):3418 | US IOM Dietary Reference Intakes | D-A-CH Referenzwerte'
  },

  // =========================================================================
  // MINERALSTOFFE & SPURENELEMENTE (11)
  // =========================================================================
  'calcium': {
    id: 'calcium',
    name: 'Calcium',
    scientificName: 'Calcium-Bisglycinat (120 mg) + Calciumcitrat (600 mg)',
    categoryName: 'Mineralstoffe & Spurenelemente',
    badge: '🦴 720 mg Knochendichte & Muskel',
    summary: 'Hauptmineral für Knochen- und Zahnmatrix, neuromuskuläre Reizübertragung, Blutgerinnung und Muskelkontraktion.',
    simpleBenefitDesc: 'Calcium ist das quantitativ dominierende Mengenelement des Körpers (ca. 1–1,2 kg im Erwachsenen). 99% liegen als Hydroxylapatit-Kristalle in Knochen und Zähnen gebunden vor. Das physiologisch hochregulierte freie zytosolische Calcium (Ca2+) fungiert als ubiquitärer Second Messenger für elektromechanische Muskelkontraktionen (Aktin-Myosin-Interaktion), synaptische Neurotransmitterausschüttung und die plasmatische Gerinnungskaskade.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Knochen- & Zahndichte):</strong> Erhält normale Knochen und Zähne durch Bereitstellung des mineralischen Gerüstmaterials.',
      '<strong>EFSA-bestätigt (Muskelfunktion & Signalübertragung):</strong> Essentiell für die elektromechanische Kopplung in Skelett-, Gefäß- und Herzmuskelzellen sowie die Neurotransmission.',
      '<strong>EFSA-bestätigt (Verdauungsenzyme):</strong> Kofaktor zur physiologischen Aktivierung von Pankreasenzymen im Dünndarm.',
      '<strong>Resorptions-Vorteil (Citrat & Bisglycinat):</strong> Organisches Calciumcitrat und -bisglycinat besitzen eine hervorragende, magensäureunabhängige Bioverfügbarkeit ohne Aufblähungen.'
    ],
    plainGermanExplanation: 'Calcium bildet das mineralische Gerüst für Knochen und Zähne. Im Blutkreislauf und Gewebe steuert es die neuromuskuläre Reizübertragung, jede Muskelkontraktion sowie die physiologische Blutgerinnung.',
    biochemistry: '99% des Calciums sind als Hydroxylapatit im Skelett gespeichert. Das ionisierte Calcium (Ca2+) im Zytosol steuert Muskelkontraktionen, Neurotransmitterausschüttung an Synapsen und Enzymaktivierungen.',
    plantBasedRelevance: 'Mit 2 Tabletten Warnke Calciumcitrat (600 mg) und Watson Male Essentials (120 mg) erreichst du 720 mg (72% des DGE / D-A-CH Tagesbedarfs von 1.000 mg). Organisches Calciumcitrat besitzt eine magensäureunabhängige, herausragende Resorption.',
    intakeAdvice: 'Über den Tag verteilen (z.B. 1 Tablette mittags, 1 Tablette abends zu den Mahlzeiten) und im Verbund mit Vitamin D3 & K2 für optimalen Knocheneinbau.',
    safetyAndUL: 'EFSA Upper Limit: 2.500 mg/Tag. Mit 720 mg liegst du im perfekten physiologischen Wohlfühlbereich.',
    scientificReference: 'EFSA Journal 2015;13(5):4101 | D-A-CH Referenzwerte 2020'
  },
  'magnesium': {
    id: 'magnesium',
    name: 'Magnesium',
    scientificName: 'Magnesiumbisglycinat (400 mg)',
    categoryName: 'Mineralstoffe & Spurenelemente',
    badge: '🌙 300+ Enzyme & Nervenruhe',
    summary: 'Aktiviert über 300 Enzyme, entspannt Muskulatur und Gefäße, reguliert den Schlaf und ist Kofaktor von Vitamin D3.',
    simpleBenefitDesc: 'Magnesium ist das wichtigste intrazelluläre zweiwertige Kation für den Energiestoffwechsel. Als bioaktiver Chelatkomplex (Mg-ATP) ist es zwingendes Substrat für alle ATP-verbrauchenden Enzyme (>300 Kinasen und Synthetasen). Im zentralen Nervensystem wirkt Magnesium als physiologischer Spannungsblocker am NMDA-Rezeptorkanal, hemmt exzitatorische Glutamat-Signalwege und senkt den vaskulären und neuromuskulären Tonus.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Muskelfunktion & Elektrolyte):</strong> Reguliert das Membranpotenzial und schützt vor Muskelkrämpfen, Faszikulationen und Verspannungen.',
      '<strong>EFSA-bestätigt (Nervensystem & Psyche):</strong> Dämpft sympathomimetische Stressreaktionen und unterstützt die Schlafqualität und neurologische Entspannung.',
      '<strong>EFSA-bestätigt (Energiestoffwechsel & Eiweißsynthese):</strong> Unverzichtbar für die mitochondriale ATP-Synthese und Translation von Proteinen.',
      '<strong>Biochemischer Kofaktor für Vitamin D3:</strong> Sämtliche Hydroxylierungs-Enzyme (CYP2R1, CYP27B1) sowie das Vitamin-D-Bindeprotein (DBP) sind zwingend magnesiumabhängig.'
    ],
    plainGermanExplanation: 'Magnesium reguliert die Reizübertragung zwischen Nerven und Muskeln und fördert die muskuläre Entspannung nach körperlicher Belastung. Es beugt Muskelkrämpfen vor, dämpft stressbedingte Übererregbarkeit des Nervensystems und unterstützt die Schlafqualität.',
    biochemistry: 'Magnesium ist zwingend an ATP gebunden (Mg-ATP-Komplex) und ermöglicht jede zelluläre Energieübertragung. Es wirkt als natürlicher NMDA-Rezeptor-Blocker im Gehirn beruhigend auf das Nervensystem und ist Kofaktor für alle Vitamin-D-aktivierenden Enzyme.',
    plantBasedRelevance: 'Die organische Chelat-Form Magnesiumbisglycinat besitzt eine exzellente Bioverfügbarkeit, passiert die Darmwand über Aminosäure-Transporter und schont die Verdauung (keine laxative Wirkung wie Magnesiumoxid).',
    intakeAdvice: 'Optimal abends vor dem Schlafen einnehmen (unterstützt parasympathische Aktivität und Schlafqualität).',
    safetyAndUL: 'BfR empfiehlt 250 mg aus isolierten Nahrungsergänzungsmitteln; bei hoch bioverfügbarem Bisglycinat sind 400 mg (114% DGE) für aktive Erwachsene hervorragend verträglich.',
    scientificReference: 'EFSA Journal 2015;13(7):4186 | Magnesium Research Journal'
  },
  'eisen': {
    id: 'eisen',
    name: 'Eisen',
    scientificName: 'Eisenbisglycinat (6.0 mg)',
    categoryName: 'Mineralstoffe & Spurenelemente',
    badge: '🩸 Sauerstofftransport & Hämoglobin',
    summary: 'Zentralatom des Hämoglobins und Myoglobins für den Sauerstofftransport; Kofaktor der mitochondrialen Atmungskette.',
    simpleBenefitDesc: 'Eisen ist das redox-aktive Zentralatom im Protoporphyrin-IX-Ring des Hämoglobins in Erythrozyten und des Myoglobins in Muskelzellen. Es ermöglicht die reversible Bindung und den Transport von molekularem Sauerstoff (O2) aus den Lungenalveolen in peripheres Gewebe und das Gehirn. Zudem bildet es essentielle Eisen-Schwefel-Zentren (Fe-S-Cluster) in den Komplexen I, II und III der mitochondrialen Atmungskette.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Sauerstofftransport & Erythrozyten):</strong> Erhält den normalen Hämoglobinspiegel und die aerobe Gewebeoxygenierung.',
      '<strong>EFSA-bestätigt (Kognitive Funktion & Energie):</strong> Verhindert subklinische Konzentrationsschwächen, Antriebslosigkeit und Erschöpfungszustände.',
      '<strong>EFSA-bestätigt (Immunsystem & Zellteilung):</strong> Kofaktor der Ribonukleotid-Reduktase zur DNA-Synthese proliferierender Abwehrzellen.',
      '<strong>Chelat-Resorption (Eisenbisglycinat):</strong> Weist eine 3- bis 4-fach höhere Bioverfügbarkeit als anorganische Eisensalze auf und verhindert oxidative Schleimhautreizungen im Darm.'
    ],
    plainGermanExplanation: 'Eisen bildet das funktionelle Zentrum des Hämoglobins für den Sauerstofftransport aus der Lunge in Muskel- und Organgewebe. Eine ausreichende Versorgung beugt Erschöpfung, Blässe und Konzentrationsstörungen vor.',
    biochemistry: 'Eisen ist essenzieller Bestandteil von Eisen-Schwefel-Clustern in den Komplexen I, II und III der mitochondrialen Atmungskette und des Häm-Rings zur Sauerstoffbindung in Erythrozyten.',
    plantBasedRelevance: 'Nicht-Fleischesser nehmen nur 3-wertiges Nicht-Häm-Eisen auf. Eisenbisglycinat ist cheliert, wird 3- bis 4-mal besser resorbiert als anorganische Eisensalze und verursacht keine Magen-Darm-Irritationen.',
    intakeAdvice: 'Gleichzeitige Zufuhr von Vitamin C maximiert die Aufnahme. Kaffee und schwarzer Tee sollten im Abstand von 1-2 Stunden getrunken werden.',
    safetyAndUL: 'EFSA hat keinen numerischen Upper Limit für Eisen festgelegt (Bewertung über Verträglichkeit). Der US IOM Grenzwert liegt bei 45 mg/Tag. 6.0 mg Eisenbisglycinat (60% DGE für Männer) ist die ideale physiologische Sicherheitsdosis ohne Überladungsrisiko.',
    scientificReference: 'EFSA Journal 2015;13(10):4254 | US IOM Iron Safety | Blood Journal'
  },
  'zink': {
    id: 'zink',
    name: 'Zink',
    scientificName: 'Zinkbisglycinat (10 mg)',
    categoryName: 'Mineralstoffe & Spurenelemente',
    badge: '🛡️ Testosteron & Immunsystem',
    summary: 'Katalytischer Kofaktor für >300 Enzyme, Zinkfinger-Proteine (DNA-Transkription), Wundheilung und Testosteronspiegel.',
    simpleBenefitDesc: 'Zink ist ein essenzielles Spurenelement mit katalytischer, struktureller und regulatorischer Funktion. Es bildet Zinkfinger-Motive in über 2.000 Transkriptionsfaktoren zur Steuerung der Genexpression, ist Kofaktor der DNA/RNA-Polymerasen und der antioxidativen Cu/Zn-Superoxiddismutase (SOD1). Bei Männern reguliert Zink die Aktivität der 17beta-HSD und Aromatase zur Aufrechterhaltung physiologischer Serum-Testosteronspiegel.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Testosteron & Fruchtbarkeit):</strong> Erhält normale Serum-Testosteronspiegel und unterstützt die physiologische Spermatogenese.',
      '<strong>EFSA-bestätigt (Immunabwehr & Zellteilung):</strong> Essenziell für die Reifung, Differenzierung und zytolytische Aktivität von T-Lymphozyten und NK-Zellen.',
      '<strong>EFSA-bestätigt (Haut, Haare & Wundheilung):</strong> Steuert die Zellerneuerung der Keratinozyten und fördert die Wundkontraktion.',
      '<strong>Phytat-Resistenz:</strong> Cheliertes Zinkbisglycinat umgeht die intestinale Unlöslichkeit durch pflanzliche Phytate in Hülsenfrüchten und Vollkorn.'
    ],
    plainGermanExplanation: 'Zink ist an über 300 enzymatischen Prozessen beteiligt, unterstützt die Aufrechterhaltung normaler Testosteronspiegel, stärkt die Immunabwehr und beschleunigt die Geweberegeneration und Wundheilung.',
    biochemistry: 'Zink stabilisiert die Tertiärstruktur von Zinkfinger-Transkriptionsfaktoren, ist Bestandteil der Superoxiddismutase (SOD1, Radikalschutz) und hemmt die Aromatase, was den Erhalt physiologischer Testosteronspiegel unterstützt.',
    plantBasedRelevance: 'Pflanzliche Ernährung enthält Phytate (in Getreide/Hülsenfrüchten), die Zink im Darm unlöslich binden. Cheliertes Zinkbisglycinat umgeht diese Phytat-Blockade weitgehend.',
    intakeAdvice: 'Nicht auf komplett nüchternen Magen einnehmen. Kupfer im Multinährstoff (0.5 mg) hält das Zink/Kupfer-Gleichgewicht intakt.',
    safetyAndUL: 'EFSA Tolerable Upper Limit: 25 mg/Tag. Mit 10 mg (71% DGE / D-A-CH für Männer) exakt auf eine sichere tägliche Zinkbasis abgestimmt.',
    scientificReference: 'EFSA Journal 2014;12(10):3844 | D-A-CH Referenzwerte'
  },
  'jod': {
    id: 'jod',
    name: 'Jod',
    scientificName: 'Kaliumjodid (150 µg)',
    categoryName: 'Mineralstoffe & Spurenelemente',
    badge: '🦋 Schilddrüsenhormone (T3/T4)',
    summary: 'Zwingender Baustein der Schilddrüsenhormone Thyroxin (T4) und Trijodthyronin (T3) für Grundumsatz und Thermogenese.',
    simpleBenefitDesc: 'Jodid ist das unersetzliche strukturelle Substrat für die Biosynthese der Schilddrüsenhormone Thyroxin (T4, mit 4 Jodatomen) und Trijodthyronin (T3, mit 3 Jodatomen) in den Thyreozyten. T3 bindet an nukleäre Schilddrüsenrezeptoren (TRalpha/TRbeta) und reguliert als primärer Schrittmacher den Grundumsatz, die mitochondriale Sauerstoffaufnahme, die kardiale Chronotropie und die neuronale Plastizität.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Schilddrüsenfunktion & Hormone):</strong> Schafft die Grundvoraussetzung zur Synthese von T4 und T3 zur Stoffwechselregulation.',
      '<strong>EFSA-bestätigt (Kognitive Funktion & Nervensystem):</strong> Unterstützt Aufmerksamkeit, Verarbeitungsgeschwindigkeit und kognitive Schärfe.',
      '<strong>EFSA-bestätigt (Energiestoffwechsel & Haut):</strong> Reguliert den basalen Energieumsatz und die physiologische Hydratation der Haut.',
      '<strong>Geografischer Ausgleich:</strong> Kompensiert die eiszeitbedingte Jodverarmung mitteleuropäischer Böden bei meeresfischfreier Kost.'
    ],
    plainGermanExplanation: 'Jod ist der unersetzliche Baustein der Schilddrüsenhormone T3 und T4, die den Grundumsatz, die Thermogenese und die Stoffwechselaktivität steuern. Es verhindert eine Unterfunktion der Schilddrüse und Antriebslosigkeit.',
    biochemistry: 'Jodid wird in den Thyreozyten über den Natrium-Jodid-Symporter (NIS) aufgenommen und durch Thyreoperoxidase (TPO) an Tyrosinreste im Thyreoglobulin gebunden, um T3 und T4 zu synthetisieren.',
    plantBasedRelevance: 'Ohne den Konsum von Meeresfisch oder jodiertem Speisesalz ist Mitteleuropa ein klassisches Jodmangelgebiet. Pflanzliche Böden sind jodarm. 150 µg sichert die euthyreote Schilddrüsenfunktion optimal ab.',
    intakeAdvice: 'Wirkt eng mit Selen zusammen (Selen wird für Dejodasen zur T4->T3 Aktivierung benötigt).',
    safetyAndUL: 'EFSA Upper Limit: 600 µg/Tag. 150 µg entspricht 75% der DGE / D-A-CH Empfehlung für Erwachsene (200 µg) und ist absolut sicher.',
    scientificReference: 'EFSA Journal 2014;12(7):3760 | D-A-CH Referenzwerte'
  },
  'selen': {
    id: 'selen',
    name: 'Selen',
    scientificName: 'L-Selenmethionin (70 µg)',
    categoryName: 'Mineralstoffe & Spurenelemente',
    badge: '🛡️ Glutathionperoxidase & Schilddrüse',
    summary: 'Baustein von Selenocystein in 25 Selenoproteinen (Glutathionperoxidase, Dejodinasen, Thioredoxinreduktase).',
    simpleBenefitDesc: 'Selen wird kotranslational als 21. proteinogene Aminosäure Selenocystein (Sec) über ein spezielles UGA-Codon in 25 humane Selenoproteine eingebaut. Es bildet das katalytische Redoxzentrum der Glutathionperoxidasen (GPx1–6 zur Entgiftung von H2O2 und Lipidhydroperoxiden), der Iodthyronin-Dejodinasen (DIO1/DIO2 zur Aktivierung von T4 zu T3) und der Thioredoxinreduktasen.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Schilddrüsen-Aktivierung):</strong> Essentieller Kofaktor der Dejodinasen zur Umwandlung des inaktiven T4 in stoffwechselaktives T3.',
      '<strong>EFSA-bestätigt (Zellulärer Radikalschutz):</strong> Neutralisiert zelltoxische Peroxide via Glutathionperoxidase und schützt Membranlipide.',
      '<strong>EFSA-bestätigt (Spermatogenese & Immunsystem):</strong> Strukturelles Element im Mitochondrienmantel der Spermatozoen zur Erhaltung der Motilität.',
      '<strong>Organische Form:</strong> L-Selenmethionin wird mit hoher Bioverfügbarkeit in den körpereigenen Proteinpool inkorporiert.'
    ],
    plainGermanExplanation: 'Selen ist das aktive Zentrum von Schutzproteinen wie der Glutathionperoxidase zur Neutralisation freier Radikale. Zudem ermöglicht es die enzymatische Umwandlung des Schilddrüsenhormons T4 in das aktive Hormon T3.',
    biochemistry: 'Selenocystein im katalytischen Zentrum der Glutathionperoxidase neutralisiert toxisches Wasserstoffperoxid und Lipidhydroperoxide. Iodthyronin-Dejodinasen aktivieren das Schilddrüsenhormon T4 in die stoffwechselaktive T3-Form.',
    plantBasedRelevance: 'Mitteleuropäische Böden sind eiszeitbedingt extrem selenarm, weshalb heimisches pflanzliches Getreide und Gemüse kaum Selen enthalten. Selenmethionin gleicht dieses Defizit verlässlich aus.',
    intakeAdvice: 'Organisches Selenmethionin wird mit hoher Quote in den Proteinpool inkorporiert.',
    safetyAndUL: 'EFSA Upper Limit: 255 µg/Tag. Mit 70 µg (100% DGE / D-A-CH) im optimalen Bereich.',
    scientificReference: 'EFSA Journal 2023;21(1):7704 | D-A-CH Referenzwerte'
  },
  'kupfer': {
    id: 'kupfer',
    name: 'Kupfer',
    scientificName: 'Kupferbisglycinat (0.5 mg)',
    categoryName: 'Mineralstoffe & Spurenelemente',
    badge: '🔬 Eisenverwertung & Kollagen',
    summary: 'Bestandteil von Ceruloplasmin (Eisenoxidation), Cytochrom-c-Oxidase (Atmungskette) und Lysyloxidase (Kollagenvernetzung).',
    simpleBenefitDesc: 'Kupfer ist ein redox-aktives Übergangsmetall, das als prosthetische Gruppe in essenziellen Metalloenzymen (Cuproenzymen) dient: Ceruloplasmin/Hephästin katalysieren die Oxidation von Fe2+ zu Fe3+ zur Beladung von Transferrin, Cytochrom-c-Oxidase bildet Komplex IV der mitochondrialen Atmungskette, und Lysyloxidase vernetzt kovalent Kollagen- und Elastinfasern im Bindegewebe.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Eisentransport im Körper):</strong> Notwendig für die Mobilisierung von zellulärem Speichereisen und dessen Bindung an Transferrin.',
      '<strong>EFSA-bestätigt (Bindegewebe & Gefäße):</strong> Katalysiert über Lysyloxidase die reißfeste Quervernetzung von Kollagen- und Elastinfibrillen.',
      '<strong>EFSA-bestätigt (Nervensystem & Energiestoffwechsel):</strong> Beteiligt an Komplex IV der Atmungskette und der Dopamin-Beta-Hydroxylase (Noradrenalinsynthese).',
      '<strong>Homöostatische Balance:</strong> Die Zufuhr von 0.5 mg Kupferbisglycinat schützt vor sekundärem Kupfermangel bei chronischer Zinkeinnahme.'
    ],
    plainGermanExplanation: 'Kupfer ermöglicht den geordneten Eisentransport im Blut, unterstützt die enzymatische Quervernetzung von Kollagen- und Elastinfasern im Bindegewebe und hält das Gleichgewicht bei regelmäßiger Zinkeinnahme aufrecht.',
    biochemistry: 'Kupfer ermöglicht über Ceruloplasmin die Bindung von Eisen an Transferrin und ist Bestandteil von Komplex IV der Atmungskette sowie der Superoxiddismutase (Cu/Zn-SOD).',
    plantBasedRelevance: 'Hohe Zinkgaben können die Kupferaufnahme hemmen (über intestinale Metallothionein-Induktion). Die Zufuhr von 0.5 mg Kupferbisglycinat sichert das physiologische 10:1 Zink-Kupfer-Verhältnis.',
    intakeAdvice: 'Organisches Bisglycinat verhindert Resorptionskonflikte.',
    safetyAndUL: 'EFSA Upper Limit: 5.0 mg/Tag. 0.5 mg (50% DGE) ist absolut sicher.',
    scientificReference: 'EFSA Journal 2015;13(4):4089 | D-A-CH Referenzwerte'
  },
  'mangan': {
    id: 'mangan',
    name: 'Mangan',
    scientificName: 'Mangangluconat (1.0 mg)',
    categoryName: 'Mineralstoffe & Spurenelemente',
    badge: '🦴 Knorpelaufbau & Mn-SOD',
    summary: 'Kofaktor für Glycosyltransferasen im Knorpel- und Bindegewebsaufbau sowie der mitochondrialen Mn-SOD.',
    simpleBenefitDesc: 'Mangan fungiert als enzymatischer Kofaktor für Glycosyltransferasen, die für die Biosynthese von Glykosaminoglykanen (Chondroitinsulfat) und Proteoglykanen in der Knorpel- und Knochenmatrix zwingend erforderlich sind. Darüber hinaus bildet Mangan das katalytische Zentrum der mitochondrialen Mangan-Superoxiddismutase (Mn-SOD / SOD2), dem primären Schutzschild gegen Superoxidradikale in den Zellkraftwerken.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Bindegewebsbildung):</strong> Unterstützt die Synthese von Proteoglykanen im Gelenkknorpel und Bindegewebe.',
      '<strong>EFSA-bestätigt (Knochenerhalt):</strong> Erhält normale Knochenstrukturen durch Beteiligung an der Knochenmineralisierung.',
      '<strong>EFSA-bestätigt (Zellschutz vor Oxidation):</strong> Zentrales Kation der Mn-SOD zur Neutralisation intramitochondrialer Sauerstoffradikale.',
      '<strong>Kollaborativer Nutzen:</strong> Ergänzt Glycin, Prolin, Hyaluron und Vitamin C im Gelenk- und Knorpelstoffwechsel.'
    ],
    plainGermanExplanation: 'Mangan aktiviert Enzyme für den Aufbau von Knorpel- und Bindegewebsstrukturen (Proteoglykane) und schützt als Kern der mitochondrialen Superoxiddismutase (Mn-SOD) die Zellkraftwerke vor oxidativem Stress.',
    biochemistry: 'Aktiviert Enzyme zur Proteoglykan- und Chondroitinsulfat-Synthese im Gelenkknorpel und bildet das Herzstück der mitochondrialen Mangan-Superoxiddismutase (Mn-SOD) zum Schutz vor Sauerstoffradikalen.',
    plantBasedRelevance: 'Unterstützt zusammen mit Glycin, Hyaluronsäure und Vitamin C die Gelenk- und Sehnenregeneration.',
    intakeAdvice: 'Zu einer Mahlzeit einnehmen.',
    safetyAndUL: 'EFSA hat mangels ausreichender Dosis-Wirkungs-Daten keinen numerischen UL festgelegt. Der etablierte US IOM Grenzwert liegt bei 11 mg/Tag. 1.0 mg (50% DGE / D-A-CH) liefert eine sichere Basisabsicherung.',
    scientificReference: 'EFSA Journal 2013;11(5):3419 | US IOM DRI Manganese | D-A-CH Referenzwerte'
  },
  'chrom': {
    id: 'chrom',
    name: 'Chrom',
    scientificName: 'Chrompicolinat (20 µg)',
    categoryName: 'Mineralstoffe & Spurenelemente',
    badge: '🩸 Insulinsensitivität & Glukose',
    summary: 'Bestandteil des Chromodulins – verstärkt die Signalwirkung von Insulin an Zellrezeptoren und stabilisiert den Blutzucker.',
    simpleBenefitDesc: 'Trivalentes Chrom (Cr3+) ist der essenzielle Bestandteil des niedermolekularen Chrom-bindenden Peptids Chromodulin (LMWCr). Bei Insulinbindung an den Insulinrezeptor bindet Chromodulin an die intrazelluläre Tyrosinkinase-Domäne des Rezeptors und amplifiziert dessen Autophosphorylierung. Dies verstärkt die nachgeschaltete IRS-1/PI3K/Akt-Signalkaskade und stimuliert die GLUT-4-Translokation zur Glukoseaufnahme in Myozyten.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Blutzuckerspiegel):</strong> Trägt zur Aufrechterhaltung eines normalen Blutzuckerspiegels über verbesserte Insulinwirkung bei.',
      '<strong>EFSA-bestätigt (Makronährstoff-Stoffwechsel):</strong> Unterstützt den physiologischen Umsatz von Kohlenhydraten, Lipiden und Proteinen.',
      '<strong>Klinische Evidenz (Insulinsensitivität & Cravings):</strong> Meta-Analysen zeigen eine signifikante Senkung von Nüchternglukose und HbA1c sowie eine Dämpfung postprandialer Heißhungerphasen bei suboptimaler Glukosetoleranz.',
      '<strong>Höchste Bioverfügbarkeit:</strong> Chrompicolinat weist unter allen Chromverbindungen die beste enterale Absorptionsrate auf.'
    ],
    plainGermanExplanation: 'Chrom verbessert die Empfindlichkeit der Körperzellen gegenüber Insulin. Dadurch wird Glukose nach Mahlzeiten effizienter in Muskelzellen transportiert, was zu stabileren Blutzuckerwerten führt und ausgeprägte Heißhungerphasen dämpfen kann.',
    biochemistry: 'Das Peptid Chromodulin bindet an die zytosolische Tyrosinkinase-Domäne des aktivierten Insulinrezeptors und vervielfacht dessen Signalübertragung, was die GLUT-4-Translokation zur Glukoseaufnahme in Muskelzellen fördert.',
    plantBasedRelevance: 'Chrompicolinat weist die höchste Bioverfügbarkeit aller Chromverbindungen auf und unterstützt den Kohlenhydratstoffwechsel bei pflanzlicher Ernährung.',
    intakeAdvice: 'Zu einer Mahlzeit einnehmen.',
    safetyAndUL: 'EFSA hat keinen numerischen UL für trivalentes Chrom aus Nahrung/NEM festgelegt (TDI: 300 µg/kg KG). Internationale Orientierungs- und Sicherheitswerte (WHO / BfR / UK EVM) liegen bei 250 µg/Tag. 20 µg (67% DGE / D-A-CH) ist optimal und absolut sicher.',
    scientificReference: 'EFSA Journal 2014;12(10):3845 | WHO / BfR Referenzwerte | Diabetes Care Journal'
  },
  'molybdaen': {
    id: 'molybdaen',
    name: 'Molybdän',
    scientificName: 'Natriummolybdat (25 µg)',
    categoryName: 'Mineralstoffe & Spurenelemente',
    badge: '🔬 Schwefel- & Purin-Clearing',
    summary: 'Kofaktor für Sulfitoxidase und Xanthinoxidase – essenziell für den Abbau schwefelhaltiger Aminosäuren und Harnsäure.',
    simpleBenefitDesc: 'Molybdän ist das funktionelle Metallzentrum des pterinbasierten Molybdän-Kofaktors (Moco). Moco ist unentbehrlich für drei Schlüsselenzyme: Sulfitoxidase (katalysiert den terminalen Schritt des Abbaus schwefelhaltiger Aminosäuren von zelltoxischem Sulfit zu Sulfat), Xanthinoxidase (reguliert den Harnsäurestoffwechsel beim Purinabbau) und Aldehydoxidase (Entgiftung von Xenobiotika).',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Schwefelaminosäure-Stoffwechsel):</strong> Gewährleistet die enzymatische Verwertung und Ausscheidung schwefelhaltiger Aminosäuren (Methionin/Cystein).',
      '<strong>Zelluläre Entgiftung von Sulfiten:</strong> Schützt vor Sulfit-Akkumulation aus endogenem Stoffwechsel und Nahrungskonservierungsstoffen.',
      '<strong>Sichere Basisabsicherung:</strong> Mit 25 µg (50% DGE) wird die physiologische Enzymauslastung optimal gewährleistet.'
    ],
    plainGermanExplanation: 'Molybdän ist der Kofaktor für Enzyme, die schwefelhaltige Aminosäuren und endogene Sulfite abbauen sowie die Harnsäureausscheidung im physiologischen Gleichgewicht halten.',
    biochemistry: 'Molybdän ist Bestandteil des Molybdän-Kofaktors (Moco), der in der Sulfitoxidase toxisches Sulfit in Sulfat überführt und in der Xanthinoxidase den Purinabbau reguliert.',
    plantBasedRelevance: 'Sichert die Entgiftung schwefelhaltiger Stoffwechselprodukte bei proteinreicher Kost ab.',
    intakeAdvice: 'Wasserlöslich, zu jeder Tageszeit.',
    safetyAndUL: 'EFSA Upper Limit: 600 µg/Tag. 25 µg (50% DGE / D-A-CH) ist völlig unbedenklich.',
    scientificReference: 'EFSA Journal 2013;11(10):3420 | D-A-CH Referenzwerte'
  },
  'bor': {
    id: 'bor',
    name: 'Bor',
    scientificName: 'Borat / Natriumborat (0 mg - Offen)',
    categoryName: 'Mineralstoffe & Spurenelemente',
    badge: '⚡ SHBG-Senkung & Freies Testosteron',
    summary: 'Essentieller Kofaktor zur Modulation von Steroidhormonen (senkt SHBG für mehr freies Testosteron) und Knochenstoffwechsel.',
    simpleBenefitDesc: 'Bor ist ein bioaktives Ultraspurenelement, das stabile Ester mit cis-Diol-Gruppen bildet und so enzymatische Signalwege sowie Membrantransporter reguliert. In Human-Interventionsstudien moduliert Bor die Konzentration von Sexualhormon-bindendem Globulin (SHBG), reguliert den 17beta-Estradiol- und Testosteronstoffwechsel und dämpft proinflammatorische Zytokine (TNF-alpha, IL-6).',
    benefitPoints: [
      '<strong>Klinische Studienlage (SHBG & Freies Testosteron):</strong> Mehrere Humanstudien (z. B. Naghii et al. 2011) zeigten nach kurzfristiger Gabe von 3–10 mg Bor eine signifikante Senkung von SHBG und einen Anstieg des freien, biologisch aktiven Testosterons (kein zugelassener EFSA-Claim, jedoch in der Sportendokrinologie etabliert).',
      '<strong>Knochen- & Mineralstoffretention:</strong> Verringert in Studien die renale Ausscheidung von Calcium und Magnesium über die Nieren und unterstützt die Knochenmatrix.',
      '<strong>Wissenschaftliche Einordnung:</strong> Gilt als hochinteressanter Kofaktor für Sportler und Knochendichte, ist behördlich jedoch als nicht-essenzielles Spurenelement klassifiziert.'
    ],
    plainGermanExplanation: 'Bor beeinflusst den Steroidhormonstoffwechsel, indem es das bindende Protein SHBG senken kann, wodurch der Anteil an freiem, biologisch aktivem Testosteron begünstigt wird. Zudem reduziert es die renale Ausscheidung von Calcium und Magnesium.',
    biochemistry: 'Bor senkt im Serum das Sexualhormon-bindende Globulin (SHBG), wodurch der Anteil an freiem, biologisch aktivem Testosteron signifikant ansteigt. Zudem reduziert es die renale Ausscheidung von Calcium und Magnesium.',
    plantBasedRelevance: 'Nicht im aktuellen Stack enthalten. Eine gezielte Ergänzung von 3.0 mg Bor kann bei sportlich aktiven Männern zur Hormonoptimierung und Knorpelstabilisierung sinnvoll sein.',
    intakeAdvice: 'Morgens zu einer Mahlzeit einnehmen. Zyklen von 6-8 Wochen mit 1-2 Wochen Pause sind in Studien gängige Praxis.',
    safetyAndUL: 'EFSA Upper Limit: 10 mg/Tag. Dosierungen von 3 bis 6 mg gelten als sicher und wirksam.',
    scientificReference: 'Journal of Trace Elements in Medicine and Biology 2011;25(4):216-224'
  },

  // =========================================================================
  // AMINOSÄUREN & PROTEIN (17)
  // =========================================================================
  'whey-protein': {
    id: 'whey-protein',
    name: 'Gesamtprotein (Whey)',
    scientificName: 'Ultrafiltriertes Molkenproteinkonzentrat (23,0 g)',
    categoryName: 'Aminosäuren & Protein',
    badge: '💪 Muskelaufbau & Regeneration',
    summary: 'Höchste biologische Wertigkeit (BW 104) aller Proteinquellen – vollständiges EAA-Profil für Proteinsynthese, Immunsystem und Zellerneuerung.',
    simpleBenefitDesc: 'Ultrafiltriertes Molkenprotein besitzt mit einem Protein Digestibility-Corrected Amino Acid Score (PDCAAS) von 1,0 und einer biologischen Wertigkeit von 104 das hochwertigste Aminosäureprofil aller Proteinquellen. Es liefert alle 9 essenziellen Aminosäuren (EAAs) in hoher Dichte, wird im Magen-Darm-Trakt rasch hydrolysiert und führt zu einer schnellen Hyperaminoazidämie im Blutplasma zur Auslösung der ribosomalen Muskelproteinsynthese.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Zunahme von Muskelmasse):</strong> Stimuliert nachweislich die muskuläre Hypertrophie im Rahmen progressiven Krafttrainings.',
      '<strong>EFSA-bestätigt (Erhalt von Muskelmasse):</strong> Schützt Muskelgewebe vor kataboler Proteolyse bei Kaloriendefiziten und Trainingsbelastung.',
      '<strong>EFSA-bestätigt (Erhaltung normaler Knochen):</strong> Liefert die notwendige Aminosäurematrix für das organische Knochengerüst (Kollagen-Typ-I).',
      '<strong>Klinischer Goldstandard:</strong> Schnelle Plasma-Anflutung und hohe Leucindichte zur maximalen Stimulation von mTORC1.'
    ],
    plainGermanExplanation: 'Molkeneiweiß liefert ein vollständiges Spektrum aller essenziellen Aminosäuren mit höchster biologischer Wertigkeit. Durch die rasche Aufnahme ins Blut stimuliert es die Muskelproteinsynthese unmittelbar nach dem Training und unterstützt den Substanzerhalt bei sportlicher Belastung.',
    biochemistry: 'Molkenprotein liefert alle 9 essenziellen Aminosäuren in optimalem Verhältnis. Es wird im Magen-Darm-Trakt rasch resorbiert und erzeugt einen schnellen Anstieg der Aminosäurespiegel im Blutplasma (Hyperaminoazidämie), was die muskuläre Proteinsynthese (MPS) via mTORC1 maximal anregt.',
    plantBasedRelevance: 'Bei fleisch- und fischfreier Ernährung sichert das Yummy Whey täglich 23 g hochwertigstes Volleiweiß mit exzellenter Verdaulichkeit und vollständigem Spektrum an essenziellen Aminosäuren ab.',
    intakeAdvice: '30 g Pulver in 200–300 ml Wasser oder Pflanzendrink einrühren, idealerweise direkt nach dem Training oder als proteinreiches Frühstück.',
    safetyAndUL: 'DGE/EFSA Empfehlung für aktive Erwachsene: 1,2–2,0 g Protein pro kg Körpergewicht täglich.',
    scientificReference: 'EFSA Journal 2010;8(10):1811 | Journal of the International Society of Sports Nutrition (JISSN)'
  },
  'bcaa-total': {
    id: 'bcaa-total',
    name: 'BCAAs Gesamt (Leucin, Isoleucin, Valin)',
    scientificName: 'Verzweigtkettige Aminosäuren (5.300 mg)',
    categoryName: 'Aminosäuren & Protein',
    badge: '⚡ Muskelerhalt & Anti-Katabolismus',
    summary: 'Verzweigtkettige Aminosäuren, die die Leberpassage umgehen und direkt im Skelettmuskel verstoffwechselt werden.',
    simpleBenefitDesc: 'Die verzweigtkettigen Aminosäuren (BCAAs: Leucin, Isoleucin, Valin) machen ca. 35% der essenziellen Aminosäuren im Muskelprotein aus. Sie besitzen eine aliphatische Seitenkette, umgehen die hepatische First-Pass-Clearance und werden direkt im Skelettmuskel durch die mitochondriale BCAA-Aminotransferase (BCAT) und den BCKDH-Komplex desaminiert, wo sie sowohl als Signalgeber als auch als anaplerotische Energiesubstrate dienen.',
    benefitPoints: [
      '<strong>Klinische Evidenz (Regeneration & Muskelschmerz):</strong> Meta-Analysen zeigen eine signifikante Dämpfung von trainingsinduzierten Muskelschäden (DOMS / Muskelkater) und eine beschleunigte Kraftrückkehr.',
      '<strong>Anti-kataboler Muskelschutz:</strong> Verhindert die Autophagie von kontraktilem Muskeleiweiß während erschöpfender Ausdauer- oder Kraftbelastungen.',
      '<strong>Wissenschaftliche Differenzierung:</strong> BCAAs entfalten ihr volles anaboles Potenzial optimal im Kontext eines intakten EAA-Gesamtprofils (wie im Molkenprotein).'
    ],
    plainGermanExplanation: 'Die verzweigtkettigen Aminosäuren (Leucin, Isoleucin, Valin) werden direkt im Muskelgewebe verstoffwechselt. Sie schützen bei intensiver Belastung vor Muskelabbau und mindern das Ausmaß trainingsbedingter Muskelschäden.',
    biochemistry: 'BCAAs machen ca. 35% der essenziellen Aminosäuren im Muskelprotein aus. Sie werden im Skelettmuskel durch die BCAA-Aminotransferase (BCAT) desaminiert und dienen sowohl als direkte Energiesubstrate bei Belastung als auch als molekulare Signale für die Proteinsynthese.',
    plantBasedRelevance: 'Mit 5,3 g BCAA pro Portion liefert das Yummy Whey die exakte physiologische Zieldosis, um Muskelabbau zu verhindern und die Regeneration optimal zu beschleunigen.',
    intakeAdvice: 'Nach dem Training oder am Vormittag zur Unterstützung der täglichen Muskelregeneration.',
    safetyAndUL: 'WHO und EFSA stufen eine Zufuhr von bis zu 20 g BCAA täglich als vollkommen sicher ein.',
    scientificReference: 'American Journal of Physiology | JISSN Position Stand: Protein and Exercise'
  },
  'leucin': {
    id: 'leucin',
    name: 'L-Leucin (BCAA / EAA)',
    scientificName: 'L-Leucin (2.600 mg)',
    categoryName: 'Aminosäuren & Protein',
    badge: '🔑 mTOR-Schalter & Muskelproteinsynthese',
    summary: 'Der stärkste physiologische Anabol-Trigger – aktiviert den mTOR-Komplex zur Initiierung der zellulären Muskelproteinsynthese.',
    simpleBenefitDesc: 'L-Leucin ist die potenteste anabole Signal-Aminosäure im menschlichen Stoffwechsel. Intrazellulär bindet freies Leucin an das Sensorprotein Sestrin2, wodurch die GATOR2-Hemmung aufgehoben und der mTORC1-Proteinkomplex (mechanistic Target of Rapamycin Complex 1) an die lysosomale Membran rekrutiert wird. Dies phosphoryliert p70S6K und 4E-BP1 und initiiert die ribosomale Translation neuer Muskelproteine.',
    benefitPoints: [
      '<strong>Klinisch belegter mTOR-Schalter:</strong> 2.500–3.000 mg Leucin pro Mahlzeit überschreiten die kritische "Leucin-Schwelle" zur maximalen Auslösung der Muskelproteinsynthese.',
      '<strong>Prävention anaboler Resistenz:</strong> Schützt vor alters- und trainingsbedingten Einbußen der Proteinsynthese-Sensitivität.',
      '<strong>Sportwissenschaftlicher Konsens:</strong> Gilt als der primäre Einzelschrittmacher für trainingsinduzierte Hypertrophie.'
    ],
    plainGermanExplanation: 'Leucin ist der primäre Signalgeber für den mTORC1-Komplex in der Skelettmuskulatur. Das Erreichen der erforderlichen Leucinschwelle (~2,5–3 g pro Portion) ist der entscheidende Impuls zur Initiierung der Muskelproteinsynthese.',
    biochemistry: 'Leucin bindet intrazellulär an Sestrin2, wodurch die GATOR2-Hemmung aufgehoben und der mTORC1-Proteinkomplex an die Lysosomenmembran rekrutiert wird. Dies phosphoryliert p70S6K und 4E-BP1 und startet die Translation neuer Proteine ("Leucin-Trigger"-Hypothese).',
    plantBasedRelevance: 'Pflanzliche Proteinquellen enthalten oft weniger Leucin (6–8%) als Molkenprotein (11–12%). Die 2.600 mg Leucin aus dem Yummy Whey überschreiten die kritische Reizschwelle von ~2,5 g Leucin pro Mahlzeit ideal.',
    intakeAdvice: 'In der 30 g Shake-Portion enthalten. Ideal mit etwas Kohlenhydraten zur Insulin-Synergie.',
    safetyAndUL: 'Tolerable Upper Intake Level: Bis zu 500 mg/kg Körpergewicht (ca. 35 g/Tag) sind toxikologisch sicher.',
    scientificReference: 'The Journal of Physiology | Cell Metabolism 2016 (Sestrin2-mTORC1 Pathway)'
  },
  'isoleucin': {
    id: 'isoleucin',
    name: 'L-Isoleucin (BCAA / EAA)',
    scientificName: 'L-Isoleucin (1.400 mg)',
    categoryName: 'Aminosäuren & Protein',
    badge: '🔋 Glukoseaufnahme & Hämoglobin',
    summary: 'Fördert die nicht-insulinabhängige Glukoseaufnahme in Muskelzellen und unterstützt die Hämoglobinsynthese.',
    simpleBenefitDesc: 'L-Isoleucin stimuliert über phosphatidylinositol-3-kinase- (PI3K) und AMPK-abhängige Signalwege die Translokation von GLUT4- und GLUT1-Transportern in die Plasmamembran von Skelettmuskelzellen. Dadurch wird die periphere Glukoseaufnahme in kontraktilen Myozyten unabhängig von Insulin gesteigert, was die Glykogenresynthese und muskuläre Ausdauerleistung optimiert.',
    benefitPoints: [
      '<strong>Glukosetransport in Myozyten:</strong> Steigert die muskuläre Glukoseaufnahme während und nach Belastungsphasen.',
      '<strong>Glykogenspeicherung & Ausdauer:</strong> Beschleunigt das Wiederauffüllen intramuskulärer Glykogenspeicher.',
      '<strong>Hämoglobinsynthese:</strong> Dient als essenzielles Substrat für die Erythropoese und Sauerstofftransportkapazität.'
    ],
    plainGermanExplanation: 'Isoleucin unterstützt die Glukoseaufnahme in die Muskelzellen während und nach körperlicher Belastung. Es fördert das rasche Wiederauffüllen der intramuskulären Glykogenspeicher und die Ausdauerleistung.',
    biochemistry: 'Isoleucin stimuliert über PI3K-unabhängige Wege die Translokation von GLUT4-Glukosetransportern in Skelettmuskelzellen und optimiert so die muskuläre Glykogenspeicherung während und nach Belastungen.',
    plantBasedRelevance: 'Essenzielle Aminosäure (WHO-Bedarf ~20 mg/kg). Die 1.400 mg im Shake decken 100% des Tagesbedarfs eigenständig ab.',
    intakeAdvice: 'Bestandteil des natürlichen Molkeproteins.',
    safetyAndUL: 'Sehr hohes Sicherheitsprofil als natürliche Nahrungskomponente.',
    scientificReference: 'Biochemical and Biophysical Research Communications | WHO Technical Report 935'
  },
  'valin': {
    id: 'valin',
    name: 'L-Valin (BCAA / EAA)',
    scientificName: 'L-Valin (1.300 mg)',
    categoryName: 'Aminosäuren & Protein',
    badge: '🧠 Neurotransmitter-Balance & Muskel',
    summary: 'Unterstützt Muskelregeneration, Stickstoffbalance und konkurriert mit Tryptophan um den Transport ins Gehirn gegen zentrale Ermüdung.',
    simpleBenefitDesc: 'L-Valin ist eine essenzielle glucogene verzweigtkettige Aminosäure. An der Blut-Hirn-Schranke konkurriert Valin mit aromatischen Aminosäuren (insbesondere L-Tryptophan) um den L-Typ-Aminosäuretransporter 1 (LAT1). Durch die Aufrechterhaltung eines hohen BCAA/Tryptophan-Verhältnisses wird ein übermäßiger zerebraler Tryptophan-Einstrom und die vorzeitige 5-HT-vermittelte zentrale Erschöpfung bei Ausdauerbelastungen gedämpft.',
    benefitPoints: [
      '<strong>Dämpfung zentraler Ermüdung:</strong> Moduliert die zerebrale Tryptophanaufnahme und zögert mentale Erschöpfung bei langen Belastungen heraus.',
      '<strong>Gewebe- & Muskelreparatur:</strong> Dient als Baustein struktureller Muskelproteine und sichert eine positive Stickstoffbilanz.',
      '<strong>Glucogenes Energiesubstrat:</strong> Kann bei Kohlenhydratmangel über Succinyl-CoA in den Citratzyklus eingeschleust werden.'
    ],
    plainGermanExplanation: 'Valin konkurriert an der Blut-Hirn-Schranke mit Tryptophan und mindert dadurch vorzeitige zentrale Ermüdungsprozesse bei langen physischen und mentalen Anstrengungen.',
    biochemistry: 'Valin konkurriert am L-Typ-Aminosäuretransporter (LAT1) an der Blut-Hirn-Schranke mit Tryptophan. Dadurch wird ein übermäßiger Tryptophan-Einstrom und vorzeitige Serotonin-vermittelte Ermüdung bei mentaler oder physischer Belastung gedämpft.',
    plantBasedRelevance: 'Essenzielle Aminosäure für Gewebereparatur und kognitive Leistungsfähigkeit.',
    intakeAdvice: 'Bestandteil des täglichen Shakes.',
    safetyAndUL: 'Uneingeschränkt sicher im physiologischen Aminosäureprofil.',
    scientificReference: 'WHO/FAO/UNU Expert Consultation on Protein and Amino Acid Requirements'
  },
  'glutamin': {
    id: 'glutamin',
    name: 'L-Glutamin & Glutaminsäure',
    scientificName: 'L-Glutamin / L-Glutaminsäure (4.100 mg)',
    categoryName: 'Aminosäuren & Protein',
    badge: '🛡️ Darmbarriere (Tight Junctions) & Immunsystem',
    summary: 'Hauptenergielieferant für Darm-Enterozyten und Immunzellen – schützt vor Leaky-Gut und fördert die Erholung.',
    simpleBenefitDesc: 'L-Glutamin ist die quantitativ bedeutendste freie Aminosäure im menschlichen Blutplasma. Es dient den rasch proliferierenden Enterozyten des Dünndarmepithels sowie aktivierten Lymphozyten und Makrophagen als primäres Energiesubstrat (Glutaminolyse). Glutamin induziert die Expression der Tight-Junction-Proteine Claudin-1, Occludin und ZO-1 und bewahrt die Schleimhautbarriere vor hyperpermeablen Zuständen (Leaky-Gut-Syndrom).',
    benefitPoints: [
      '<strong>Klinische Evidenz (Darmbarriere & Tight Junctions):</strong> Dichtet die intestinale Schleimhaut ab und hemmt die Translokation proinflammatorischer Endotoxine (LPS).',
      '<strong>Treibstoff für das Immunsystem:</strong> Essenziell für die klonale Expansion und Zytokinproduktion von T-Zellen und Makrophagen unter metabolischem Stress.',
      '<strong>Muskuläre Regeneration:</strong> Unterstützt den zellulären Flüssigkeitszustand (Zellvoluminisierung) und die Wiederauffüllung des Aminosäurepools nach Training.',
      '<strong>Wissenschaftliche Differenzierung:</strong> Bei gesunden Personen ohne Extremtraumata primär mukoprotektiv und regenerationsfördernd.'
    ],
    plainGermanExplanation: 'Glutamin dient den Zellen des Dünndarmepithels und des Immunsystems als primäre Energiequelle. Es stärkt die Integrität der intestinalen Barriere (Tight Junctions) und fördert die Erholung nach intensiver Trainingsbelastung.',
    biochemistry: 'Glutamin dient den schnell teilenden Enterozyten des Dünndarms als primäre Energiequelle (Glutaminolyse). Es reguliert die Expression von Claudin-1 und Occludin, wodurch die Tight Junctions der Darmbarriere abgedichtet und mikrobielle Translokationen verhindert werden.',
    plantBasedRelevance: 'Mit 4,1 g Glutamin/Glutaminsäure pro Shake erhält dein Verdauungstrakt maximale Unterstützung für eine intakte Darmmukosa und starke Immunantwort.',
    intakeAdvice: 'Optimal im Protein-Shake nach dem Training oder morgens auf nüchternen Magen.',
    safetyAndUL: 'Studien zeigen selbst bei 20–30 g Glutamin/Tag keinerlei toxische Effekte. 4,1 g ist die perfekte Erhaltungsdosis.',
    scientificReference: 'Lancet | Clinical Nutrition Journal | American Journal of Clinical Nutrition'
  },
  'lysin': {
    id: 'lysin',
    name: 'L-Lysin (EAA)',
    scientificName: 'L-Lysin (2.200 mg)',
    categoryName: 'Aminosäuren & Protein',
    badge: '🧬 Kollagenvernetzung & Carnitin-Präkursor',
    summary: 'Unverzichtbar für die Kollagenvernetzung, Calciumresorption und endogene Synthese von L-Carnitin.',
    simpleBenefitDesc: 'L-Lysin ist eine essenzielle basische Aminosäure. In Polypeptidketten von Kollagen wird Lysin durch Lysylhydroxylasen zu Hydroxylysin modifiziert, welches kovalente intermolekulare Aldolkondensationen und Quervernetzungen (Pyridinolin) ausbildet. Zudem ist Trimethyllysin das obligate Substrat für die de-novo Synthese von L-Carnitin in Leber und Nieren.',
    benefitPoints: [
      '<strong>Kollagen- & Knochenmatrixstabilität:</strong> Essentiell für die mechanische Festigkeit von Sehnen, Bändern, Knorpel und Knochen.',
      '<strong>Endogene Carnitinsynthese:</strong> Liefert das Stickstoff- und Kohlenstoffgerüst zur körpereigenen Bildung von L-Carnitin.',
      '<strong>Klinische Evidenz (Antivirale Herpes-Inhibition):</strong> Antagonisiert zelluläre Arginin-Transporter und hemmt in Studien die Reaktivierung von Herpes-simplex-Viren.'
    ],
    plainGermanExplanation: 'Lysin ist für die Quervernetzung von Kollagenfasern in Sehnen, Knorpel und Knochen verantwortlich. Zudem dient es als Ausgangssubstanz für die körpereigene Synthese von L-Carnitin.',
    biochemistry: 'Lysin wird in Kollagensträngen zu Hydroxylysin modifiziert, welches kovalente Quervernetzungen bildet. Zudem ist Trimethyllysin der biochemische Ausgangsstoff für die körpereigene Biosynthese von L-Carnitin in Leber und Nieren.',
    plantBasedRelevance: 'In vielen Getreidesorten ist Lysin die am stärksten limitierende Aminosäure. Die 2.200 mg im Shake gleichen dieses Profil für Nicht-Fleischesser perfekt aus.',
    intakeAdvice: 'Teil des täglichen Yummy Whey Shakes.',
    safetyAndUL: 'WHO-Referenz (~30 mg/kg = 2.100 mg). Mit 2.200 mg zu 105% optimal versorgt.',
    scientificReference: 'WHO Technical Report Series 935 | Journal of Nutrition'
  },
  'threonin': {
    id: 'threonin',
    name: 'L-Threonin (EAA)',
    scientificName: 'L-Threonin (1.600 mg)',
    categoryName: 'Aminosäuren & Protein',
    badge: '🛡️ Schleimhaut-Mucine & Immunglobuline',
    summary: 'Zentraler Baustein für gastrointestinale Schutzschleime (Mucine), Elastin und Antikörper.',
    simpleBenefitDesc: 'L-Threonin ist eine essenzielle hydroxygruppenhaltige Aminosäure. Sie ist die quantitativ dominierende Aminosäure in den tandem-repetitiven Domänen von Mucin-Glykoproteinen (insb. Mucin-2 im Kolon), wo ihre Hydroxylgruppe als O-Glykosylierungsstelle für schützende Oligosaccharidketten dient. Darüber hinaus ist Threonin struktureller Baustein von Elastinfasern und sezernierten Immunglobulinen (sIgA).',
    benefitPoints: [
      '<strong>Mucosale Barriereintegrität:</strong> Bis zu 60% des enteralen Threonins fließen direkt in die Biosynthese der gastrointestinalen Schutzschleimschicht.',
      '<strong>Elastizität von Knorpel & Gefäßen:</strong> Zentraler Baustein elastischer Bindegewebsstrukturen.',
      '<strong>Antikörperbildung:</strong> Unterstützt die Synthese von Immunglobulinen zur Schleimhautimmunität.'
    ],
    plainGermanExplanation: 'Threonin ist Hauptbestandteil der Mucingebilde, die als Schutzschleim die Magen- und Darmwand auskleiden, und unterstützt die Synthese von Antikörpern sowie elastischem Bindegewebe.',
    biochemistry: 'Bis zu 60% des aufgenommenen Threonins werden im Magen-Darm-Trakt direkt zur Synthese von Mucin-Glykoproteinen genutzt, die die Schleimhaut vor Magensäure, Enzymen und Pathogenen schützen.',
    plantBasedRelevance: 'Essenzielle Aminosäure für gesunde Schleimhäute und Knorpelgewebe.',
    intakeAdvice: 'Bestandteil des täglichen Shakes.',
    safetyAndUL: 'WHO-Referenzwert: 1.050 mg/Tag. Mit 1.600 mg (152%) hervorragend abgedeckt.',
    scientificReference: 'Amino Acids Journal | American Journal of Physiology Gastrointestinal'
  },
  'tryptophan': {
    id: 'tryptophan',
    name: 'L-Tryptophan (EAA)',
    scientificName: 'L-Tryptophan (400 mg)',
    categoryName: 'Aminosäuren & Protein',
    badge: '🌙 Serotonin- & Melatonin-Synthese',
    summary: 'Physiologischer Vorläufer des "Glückshormons" Serotonin und des Schlafhormons Melatonin.',
    simpleBenefitDesc: 'L-Tryptophan ist die aromatische essenzielle Vorläuferaminosäure für die zerebrale Biosynthese von Serotonin (5-Hydroxytryptamin) und Melatonin (N-Acetyl-5-methoxytryptamin) sowie für den hepatischen Kynureninweg zur De-novo-Synthese von Nicotinsäure/NAD+. Die Tryptophan-Hydroxylase (TPH2) im Hirnstamm steuert über die Serotoninfreisetzung Stimmung, Impulskontrolle, Schmerzwahrnehmung und Schlafarchitektur.',
    benefitPoints: [
      '<strong>Serotonin- & Melatonin-Synthese:</strong> Geschwindigkeitsbestimmendes Substrat für den zirkadianen Schlaf-Wach-Rhythmus und die affektive Stabilität.',
      '<strong>Klinische Evidenz (Schlafqualität & Latenz):</strong> Interventionsstudien belegen eine signifikante Verkürzung der Einschlaflatenz und Vertiefung des Slow-Wave-Sleep (Tiefschlaf).',
      '<strong>Dämpfung von Stress & Heißhunger:</strong> Unterstützt die serotonerge Sättigungsregulation und emotionale Belastbarkeit.'
    ],
    plainGermanExplanation: 'Tryptophan ist die Vorstufe des Neurotransmitters Serotonin (Stimmungsregulation und emotionale Balance) und des Schlafhormons Melatonin, das das Einschlafen und die Schlafqualität steuert.',
    biochemistry: 'Tryptophan wird durch die Tryptophan-Hydroxylase (TPH) zu 5-HTP und anschließend zu Serotonin umgewandelt. In der Zirbeldrüse (Epiphyse) entsteht daraus nachts Melatonin zur Steuerung des zirkadianen Rhythmus.',
    plantBasedRelevance: 'Wichtige Aminosäure für Stimmung, Stresstoleranz und Schlafqualität.',
    intakeAdvice: 'Molkenprotein ist von Natur aus besonders reich an bioverfügbarem L-Tryptophan.',
    safetyAndUL: 'WHO-Bedarf (~4 mg/kg = 280 mg). 400 mg (143%) decken den Bedarf vollständig.',
    scientificReference: 'Neuroscience & Biobehavioral Reviews | EFSA Journal'
  },
  'arginin': {
    id: 'arginin',
    name: 'L-Arginin',
    scientificName: 'L-Arginin (600 mg)',
    categoryName: 'Aminosäuren & Protein',
    badge: '🩸 Stickstoffmonoxid (NO) & Gefäßweite',
    summary: 'Einziger Vorläufer für das gefäßerweiternde Signalmolekül Stickstoffmonoxid (NO) und wichtig für den Harnstoffzyklus.',
    simpleBenefitDesc: 'L-Arginin ist das alleinige Substrat der endothelialen Stickstoffmonoxid-Synthase (eNOS) zur Synthese des parakrinen Botenstoffs Stickstoffmonoxid (NO). NO diffundiert in vaskuläre glatte Muskelzellen, aktiviert die lösliche Guanylatcyclase (sGC) und führt über cGMP zur Vasodilatation. Zudem ist Arginin intermediärer Bestandteil des hepatischen Harnstoffzyklus zur Entgiftung von Ammoniak.',
    benefitPoints: [
      '<strong>Endotheliale Vasodilatation & Mikrozirkulation:</strong> Weitet arterielle Gefäße, senkt den peripheren Gefäßwiderstand und verbessert den intramuskulären Blutfluss.',
      '<strong>Harnstoffzyklus & Ammoniak-Clearance:</strong> Schützt vor toxischer Ammoniak-Akkumulation aus intensivem Proteinstoffwechsel.',
      '<strong>Wissenschaftliche Einordnung:</strong> Dient im Proteinkontext der physiologischen Gefäßgrundversorgung; isolierte Megadosen unterliegen hepatischer Arginase.'
    ],
    plainGermanExplanation: 'Arginin ist das alleinige Substrat für die Bildung von Stickstoffmonoxid (NO) in den Gefäßwänden. NO bewirkt eine Entspannung der glatten Gefäßmuskulatur, verbessert die Durchblutung und unterstützt die Sauerstoff- und Nährstoffversorgung der Muskulatur.',
    biochemistry: 'Die endotheliale Stickstoffmonoxid-Synthase (eNOS) wandelt L-Arginin in NO und L-Citrullin um. NO diffundiert in glatte Gefäßmuskelzellen, aktiviert die Guanylatcyclase und führt zur Gefäßerweiterung (Vasodilation), was Blutdruck und Durchblutung verbessert.',
    plantBasedRelevance: 'Unterstützt die Mikrozirkulation und den ammoniakentgiftenden Harnstoffzyklus der Leber.',
    intakeAdvice: 'Teil des täglichen Yummy Whey Shakes.',
    safetyAndUL: 'Sehr hohes physiologisches Sicherheitsprofil.',
    scientificReference: 'Circulation Research | European Heart Journal'
  },
  'methionin-cystein': {
    id: 'methionin-cystein',
    name: 'Methionin & Cystein (Schwefel-Aminosäuren)',
    scientificName: 'L-Methionin (500 mg) + L-Cystein (500 mg)',
    categoryName: 'Aminosäuren & Protein',
    badge: '🛡️ Glutathion, Keratin & Methylierung',
    summary: 'Schwefelhaltige Aminosäuren für die Glutathion-Synthese, Keratinstruktur (Haare/Nägel) und universelle Methylgruppen (SAMe).',
    simpleBenefitDesc: 'L-Methionin und L-Cystein sind die beiden proteinogenen Schwefelaminosäuren. Methionin wird durch Methionin-Adenosyltransferase zu S-Adenosylmethionin (SAMe), dem universellen Methylgruppendonor für DNA-, RNA-, Histon- und Phospholipid-Methylierungen, umgewandelt. Cystein liefert die Thiolgruppe (-SH) für die zelluläre Synthese des Master-Antioxidans Glutathion (GSH) und bildet stabilisierende Disulfidbrücken im Haarkeratin.',
    benefitPoints: [
      '<strong>Glutathionsynthese & Redox-Status:</strong> Cystein ist das geschwindigkeitsbestimmende Substrat für intrazelluläres GSH zum Schutz vor oxidativem Stress.',
      '<strong>Keratinstruktur (Haare & Nägel):</strong> Disulfidbrücken zwischen Cysteinresten verleihen Keratinfasern mechanische Festigkeit und Elastizität.',
      '<strong>Epigenetische Methylierung (SAMe):</strong> Steuert DNA-Methylierungsmuster und die Phosphatidylcholin-Synthese.'
    ],
    plainGermanExplanation: 'Diese schwefelhaltigen Aminosäuren bilden Disulfidbrücken für die Festigkeit von Keratinstrukturen (Haare, Nägel, Haut) und liefern die notwendigen Bausteine für das intrazelluläre Master-Antioxidans Glutathion.',
    biochemistry: 'Methionin wird zu S-Adenosylmethionin (SAMe), dem wichtigsten Methylgruppen-Donator für DNA-Methylierung, Phospholipide und Neurotransmitter. Cystein liefert die Thiolgruppe (-SH) für das intrazelluläre Antioxidans Glutathion.',
    plantBasedRelevance: 'In rein pflanzlichen Hülsenfrüchten oft limitierend; Molkenprotein liefert ein ideales Verhältnis beider Schwefelaminosäuren.',
    intakeAdvice: 'Bestandteil des Yummy Whey Shakes.',
    safetyAndUL: 'WHO-Referenzwert: 1.050 mg/Tag. Mit 1.000 mg (95%) optimal versorgt.',
    scientificReference: 'Journal of Biological Chemistry | Annual Review of Nutrition'
  },
  'glycin': {
    id: 'glycin',
    name: 'Glycin',
    scientificName: 'L-Glycin (5.000 mg Nutri+ / 450 mg Whey)',
    categoryName: 'Aminosäuren & Protein',
    badge: '✨ Kollagen-Hauptbaustein & Schlaf',
    summary: 'Jede dritte Aminosäure in Kollagen ist Glycin; zudem Neurotransmitter, Glutathion-Baustein und Schlafoptimierer.',
    simpleBenefitDesc: 'Glycin (Aminoessigsäure) ist die kleinste proteinogene Aminosäure ohne chirales Zentrum. Sie besetzt jede dritte Position im charakteristischen Gly-X-Y-Tripeptid-Wiederholungsmotiv von Kollagen, da nur ihr kompaktes Wasserstoffatom in den Kern der eng gewundenen Tripelhelix passt. Im zentralen Nervensystem wirkt Glycin als inhibitorischer Neurotransmitter an strychninsensitiven Glycinrezeptoren und stimuliert die periphere Vasodilatation zur Thermoregulation im Schlaf.',
    benefitPoints: [
      '<strong>Kollagensynthese & Knorpelmatrix:</strong> Überbrückt das endogene Biosynthesedefizit des Körpers (~3–4 g/Tag) zur Erhaltung von Sehnen, Faszien und Knorpel.',
      '<strong>Klinische Evidenz (Schlafarchitektur):</strong> RCTs (z. B. Yamadera et al., Inagawa et al.) belegen, dass 3 g Glycin vor dem Schlafen die Tiefschlafphasen (N3/Slow-Wave-Sleep) vertieft und die subjektive Schläfrigkeit am Folgetag signifikant senkt.',
      '<strong>Glutathion & Phase-II-Entgiftung:</strong> Essentieller Baustein des Tripeptids Glutathion (Glu-Cys-Gly) und Konjugationspartner für Xenobiotika in der Leber.'
    ],
    plainGermanExplanation: 'Glycin ist der mengenmäßig dominierende Baustein in Kollagen und Bindegewebe. Vor dem Schlafen eingenommen, wirkt es hemmend auf das zentrale Nervensystem, senkt die Körperkerntemperatur und fördert erholsame Tiefschlafphasen.',
    biochemistry: 'Glycin ist die kleinste Aminosäure und unverzichtbar für die enge Dreifachhelix-Windung von Kollagen (Gly-X-Y-Sequenz). Es bildet zusammen mit Glutamin und Cystein das Master-Antioxidans Glutathion und wirkt an Glycin-Rezeptoren im ZNS hemmend (beruhigend).',
    plantBasedRelevance: 'Kollagenreiches Bindegewebe, Gelatine und Knochenbrühe fehlen bei fleisch- und fischfreier Kost völlig. Der Körper hat ein endogenes Glycin-Defizit von ca. 3-4 g/Tag. Nutri+ deckt dies mit 5.000 mg reinem L-Glycin vollständig pflanzlich ab.',
    intakeAdvice: 'Morgens im Shake oder abends vor dem Schlafen (senkt die Körperkerntemperatur und fördert den Tiefschlaf).',
    safetyAndUL: 'Sehr hohe physiologische Sicherheit; Dosen bis zu 15 g/Tag zeigen in Studien keinerlei Toxizität.',
    scientificReference: 'Amino Acids Journal 2018;50(12):1653 | Sleep and Biological Rhythms'
  },
  'prolin': {
    id: 'prolin',
    name: 'L-Prolin (Kollagen-Baustein)',
    scientificName: 'L-Prolin (1.400 mg aus Yummy Whey)',
    categoryName: 'Aminosäuren & Protein',
    badge: '✨ Kollagen-Tripelhelix & Sehnen',
    summary: 'Essentieller Baustein neben Glycin für die Bildung von Hydroxyprolin und die Stabilität der Kollagen-Dreifachhelix.',
    simpleBenefitDesc: 'L-Prolin ist eine zyklische Iminosäure mit einem starren Pyrrolidinring. Im endoplasmatischen Retikulum wird Prolin durch die Vitamin-C-abhängige Prolyl-4-Hydroxylase posttranslational zu (2S,4R)-4-Hydroxyprolin hydroxyliert. Die Hydroxylgruppen bilden intramolekulare Wasserstoffbrückennetzwerke aus, die die thermische Denaturierungstemperatur von Kollagen auf über 40 °C anheben und Bändern und Sehnen extreme Zugfestigkeit verleihen.',
    benefitPoints: [
      '<strong>Biomechanische Kollagenstabilität:</strong> Ermöglicht die starre Helixkonformation und verhindert vorzeitige Denaturierung des Bindegewebes.',
      '<strong>Sehnen- & Knorpelregeneration:</strong> Dient als Primärbaustein für die Reparatur mikroskopischer Mikrotraumata nach sportlicher Belastung.',
      '<strong>Synergistisches Kollagennetzwerk:</strong> Ergänzt die 5.000 mg Glycin aus Nutri+ und Vitamin C zu einer vollständigen biochemischen Kollagenmatrix.'
    ],
    plainGermanExplanation: 'Prolin wird posttranslational zu Hydroxyprolin umgewandelt, welches die Kollagen-Dreifachhelix thermisch und mechanisch stabilisiert. Es ist essenziell für die Belastbarkeit von Sehnen, Bändern und Gelenkknorpel.',
    biochemistry: 'Prolin wird durch die Vitamin-C-abhängige Prolylhydroxylase zu 4-Hydroxyprolin umgewandelt. Hydroxyprolin-Reste bilden intramolekulare Wasserstoffbrückenbindungen aus, die dem Kollagen in Bändern, Sehnen und Knorpel seine extreme Reißfestigkeit verleihen.',
    plantBasedRelevance: 'Mit 30g Yummy Whey nimmst du täglich 1.400 mg reines L-Prolin auf, was im Verbund mit den 5.000 mg Glycin aus Nutri+ und Vitamin C die körpereigene Kollagenbiosynthese optimal versorgt.',
    intakeAdvice: 'Gemeinsam mit Glycin (Nutri+) und Vitamin C morgens oder nach dem Training einnehmen.',
    safetyAndUL: 'Natürliche Proteinkomponente mit uneingeschränkter physiologischer Sicherheit.',
    scientificReference: 'Journal of Biological Chemistry | Matrix Biology | EFSA'
  },
  'carnitine': {
    id: 'carnitine',
    name: 'Acetyl-L-Carnitin (ALCAR)',
    scientificName: 'Acetyl-L-Carnitin (500 mg aus GEN / 3.000 mg pro 6 Kapseln)',
    categoryName: 'Aminosäuren & Protein',
    badge: '🔥 Mitochondriale Fettverbrennung & ZNS',
    summary: 'Bedingt essentielle Aminosäurenverbindung in acetylierter Form – überwindet die Blut-Hirn-Schranke und transportiert Fettsäuren in die Mitochondrien.',
    simpleBenefitDesc: 'Acetyl-L-Carnitin (ALCAR) ist der acetylierte Ester des L-Carnitins. Es fungiert als essenzieller Kofaktor der Carnitin-Palmitoyl-Transferasen (CPT-1 und CPT-2) zum Transport aktivierter langkettiger Fettsäuren (Acyl-CoA) über die innere Mitochondrienmembran zur Beta-Oxidation. Aufgrund seiner erhöhten Lipophilie überwindet ALCAR im Gegensatz zu freiem L-Carnitin die Blut-Hirn-Schranke und liefert Acetylgruppen zur Synthese von Acetylcholin im ZNS.',
    benefitPoints: [
      '<strong>Mitochondriale Beta-Oxidation:</strong> Ermöglicht das Einschleusen von Fettsäuren zur aeroben ATP-Generierung in Herz und Skelettmuskulatur.',
      '<strong>Klinische Evidenz (Neuroprotektion & Kognition):</strong> Humanstudien zeigen positive Effekte auf mentale Wachheit, Verringerung kognitiver Erschöpfung und axonale Nervenregeneration.',
      '<strong>Carninährstoff-Relevanz:</strong> Da 95% des Carnitins in der Mischkost aus rotem Fleisch stammen, schließt ALCAR bei fleischfreier Kost eine fundamentale Versorgungslücke.'
    ],
    plainGermanExplanation: 'Acetyl-L-Carnitin (ALCAR) schleust langkettige Fettsäuren in die Mitochondrien zur oxidativen Energiegewinnung ein. In acetylierter Form überwindet es die Blut-Hirn-Schranke und unterstützt neuronale Prozesse sowie geistige Wachheit.',
    biochemistry: 'Acetyl-L-Carnitin liefert Acetylgruppen für die Synthese des zentralen Neurotransmitters Acetylcholin und schleust langkettige Fettsäuren über die Carnitin-Palmitoyl-Transferase (CPT-1) in die Mitochondrienmatrix zur Beta-Oxidation (ATP-Generierung).',
    plantBasedRelevance: '95% des Carnitins stammen in der Standardernährung aus rotem Fleisch. Für Nicht-Fleischesser liefert 1 Kapsel GEN ALCAR täglich 500 mg hoch bioverfügbares Carnitin (bei Bedarf flexibel auf 2 Kapseln = 1.000 mg oder bis zur vollen Tagesdosis von 6 Kapseln = 3.000 mg steigerbar).',
    intakeAdvice: 'Morgens vor dem Frühstück oder ca. 30–45 Minuten vor dem Training mit Wasser einnehmen.',
    safetyAndUL: 'Für L-Carnitin existiert kein gesetzlicher EFSA Upper Limit. Das in Humanstudien und toxikologischen Reviews etablierte Observed Safe Level (OSL nach Hathcock & Shao / CRN) liegt bei 2.000–3.000 mg/Tag. 500 mg ALCAR ist physiologisch sicher und flexibel dosierbar.',
    scientificReference: 'Regulatory Toxicology and Pharmacology (Hathcock & Shao) | American Journal of Clinical Nutrition'
  },
  'taurine': {
    id: 'taurine',
    name: 'Taurin',
    scientificName: '2-Aminoethansulfonsäure (2.000 mg in ProFuel Taurin)',
    categoryName: 'Aminosäuren & Protein',
    badge: '❤️ Kardiometabolismus & Zellschutz',
    summary: 'Bedingt essentielle Aminosulfonsäure – reguliert zellulären osmotischen Druck, Gallensäurenkonjugation und Kardiomyozyten.',
    simpleBenefitDesc: 'Taurin (2-Aminoethansulfonsäure) ist eine zelluläre Aminosulfonsäure mit ubiquitärer Verteilung in erregbaren Geweben (Herz, Gehirn, Skelettmuskel, Netzhaut). Es reguliert als organischer Osmolyt das zelluläre Volumen, moduliert spannungsabhängige Calciumkanäle (L-Typ) und den sarkoplasmatischen Ryanodin-Rezeptor in Kardiomyozyten, konjugiert toxische Gallensäuren zu Taurocholsäure und ist als 5-Taurinomethyluridin für die mitochondriale tRNA-Translation unverzichtbar.',
    benefitPoints: [
      '<strong>Kardiometabolische Funktion:</strong> Moduliert intrazelluläre Calciumtransienten im Myokard, stabilisiert den Herzrhythmus und unterstützt die Gefäßelastizität.',
      '<strong>Muskelleistung & Krampffreiheit:</strong> Verhindert osmotische Dehydratation und schützt Muskelzellen vor elektrolytbedingten Kontraktionsstörungen.',
      '<strong>Präklinische Langlebigkeits-Evidenz:</strong> Bahnbrechende Studien (Science 2023, Singh et al.) identifizieren Taurinmangel als Treiber des Alterns; Supplementierung steigerte Gesundheit und Lebensspanne im Tiermodell signifikant (Human-RCTs laufen).'
    ],
    plainGermanExplanation: 'Taurin reguliert den osmotischen Druck und den Calciumhaushalt in Herz- und Muskelzellen, stabilisiert Zellmembranen und unterstützt die Konjugation von Gallensäuren. Aktuelle Studien heben seine Rolle im mitochondrialen Funktionserhalt hervor.',
    biochemistry: 'Taurin moduliert zelluläre Calciumströme im Herzmuskel, bindet an GABA-A-Rezeptoren im Gehirn, konjugiert Gallensäuren (Taurocholsäure zur Fettverdauung) und schützt Mitochondrien vor oxidativem Stress.',
    plantBasedRelevance: 'Taurin kommt in pflanzlichen Lebensmitteln nicht vor (Gehalt = 0 mg). Vegetarier und Veganer weisen signifikant niedrigere Plasma- und Urin-Taurinspiegel auf. Mit 2.000 mg aus ProFuel Taurin deckst du diesen Carninährstoff zu 100% vegan ab.',
    intakeAdvice: '2 Kapseln täglich (2.000 mg) morgens oder vor dem Training mit etwas Wasser einnehmen.',
    safetyAndUL: 'EFSA bestätigte in Sicherheitsgutachten einen No-Observed-Adverse-Effect-Level (NOAEL) von 1.000 mg/kg KG/Tag; eine Zufuhr von bis zu 3.000 mg (3 g)/Tag gilt als wissenschaftlich absolut sicher. Mit 2.000 mg erreichst du die ideale therapeutische Zieldosis.',
    scientificReference: 'EFSA Journal 2009;935:1-31 | Science 2023;380(6649):eabn9257'
  },
  'carnosine': {
    id: 'carnosine',
    name: 'Carnosin / Beta-Alanin',
    scientificName: 'Beta-Alanyl-L-Histidin (0 mg - Offen)',
    categoryName: 'Aminosäuren & Protein',
    badge: '🛡️ Protonenpuffer & Anti-Glykation',
    summary: 'Intrazelluläres Dipeptid – puffert H+-Ionen bei intensiver Muskelarbeit und schützt Proteine vor Verzuckerung (AGEs).',
    simpleBenefitDesc: 'L-Carnosin (Beta-Alanyl-L-Histidin) ist ein endogenes Dipeptid, das in hoher Konzentration in glykolytischen Typ-II-Muskelfasern und im Zerebrum angereichert ist. Mit dem pKa-Wert seines Imidazolrings (6,83) fungiert es als physiologischer intramuskulärer Protonenpuffer gegen die Azidose bei anaerobem Laktatabbau. Im Gehirn wirkt Carnosin als Anti-Glykations-Agens, indem es mit toxischen Dicarbonylen reagiert und die Bildung fortgeschrittener Glykationsendprodukte (AGEs) hemmt.',
    benefitPoints: [
      '<strong>Klinisch belegte Pufferkapazität:</strong> Erhöht die intramuskuläre Pufferkapazität und steigert die anaerobe Arbeitskapazität bei hochintensiven Belastungen (1–4 Min.).',
      '<strong>Anti-Glykation & Neuroprotektion:</strong> Fängt reaktive Aldehyde ab und schützt neuronale Proteine vor AGE-Vernetzung und Karamelisierung.',
      '<strong>Carninährstoff-Status:</strong> Kommt ausschließlich in tierischem Muskelgewebe vor; Nicht-Fleischesser weisen nachweislich ca. 50% niedrigere Muskelkarnosinspeicher auf.'
    ],
    plainGermanExplanation: 'Carnosin puffert Wasserstoffionen (H+) im Zytosol der Muskelfasern ab und verzögert die muskuläre Übersäuerung bei hochintensiver anaerober Arbeit. Zudem schützt es Proteine im Gehirn vor oxidativer Schädigung und Glykation.',
    biochemistry: 'Carnosin besitzt einen pKa-Wert von 6.83 und ist der stärkste physiologische Säurepuffer im Zytosol von Typ-II-Muskelfasern gegen Laktat-induzierten Leistungsabfall. Zudem cheliert es Übergangsmetalle und hemmt die Glykation von Proteinen im Gehirn.',
    plantBasedRelevance: 'Kommt ausschließlich in tierischem Muskelgewebe vor. Nicht-Fleischesser haben nachweislich ca. 50% weniger Carnosin in den Muskeln. Durch Gabe von Beta-Alanin oder L-Carnosin kann der Speicher wieder aufgefüllt werden.',
    intakeAdvice: 'Beta-Alanin (1.500-3.000 mg/Tag) teilt man am besten auf 2 Dosen auf, um harmloses Kribbeln (Parästhesie) zu vermeiden.',
    safetyAndUL: 'Sehr hohes Sicherheitsprofil in internationalen Sportstudien.',
    scientificReference: 'Amino Acids Journal 2012;43(1):5-12 | ISSN Position Stand'
  },
  'nac': {
    id: 'nac',
    name: 'N-Acetylcystein (NAC)',
    scientificName: 'N-Acetyl-L-Cystein (0 mg - Offen)',
    categoryName: 'Aminosäuren & Protein',
    badge: '🛡️ Glutathion-Booster & Entgiftung',
    summary: 'Geschwindigkeitsbestimmender Vorläufer für Glutathion – das wichtigste körpereigene intrazelluläre Entgiftungsmolekül.',
    simpleBenefitDesc: 'N-Acetyl-L-Cystein (NAC) ist das N-acetylierte Derivat der Aminosäure L-Cystein mit erhöhter Membranpermeabilität und Stabilität. Es liefert bioverfügbares L-Cystein für die Glutamat-Cystein-Ligase (GCL), den geschwindigkeitsbestimmenden Schritt der zellulären De-novo-Synthese von Glutathion (GSH). GSH ist das dominante intrazelluläre Thiol-Antioxidans und unverzichtbares Substrat für Phase-II-Glutathion-S-Transferasen zur hepatischen Entgiftung.',
    benefitPoints: [
      '<strong>Klinisch etablierter Glutathion-Booster:</strong> Erhöht den intrazellulären GSH-Spiegel in Hepatozyten, Pneumozyten und Immunzellen zur Neutralisation von ROS.',
      '<strong>Hepatische Phase-II-Entgiftung:</strong> Unterstützt die enzymatische Konjugation und renale Elimination von Xenobiotika, Toxinen und Medikamentenmetaboliten.',
      '<strong>Pneumologische Mukolyse:</strong> Spaltet Disulfidbrücken in sauren Mucin-Glykoproteinen der Atemwege und wirkt antientzündlich im Bronchialtrakt.'
    ],
    plainGermanExplanation: 'N-Acetylcystein liefert bioverfügbares L-Cystein für den geschwindigkeitsbestimmenden Schritt der zellulären Glutathionsynthese. Es unterstützt die hepatische Entgiftung und wirkt mukolytisch auf die Atemwege.',
    biochemistry: 'NAC liefert bioverfügbares L-Cystein für die Glutamat-Cystein-Ligase, den limitierenden Schritt der zellulären Glutathionsynthese (GSH). GSH neutralisiert freie Radikale, entgiftet Xenobiotika in der Leber (Phase II) und schützt Lunge und Nieren.',
    plantBasedRelevance: 'Fleisch liefert hohe Dosen schwefelhaltiger Aminosäuren (Methionin/Cystein). Bei fleischfreier Kost ist Cystein oft der limitierende Faktor für die maximale Glutathionbildung.',
    intakeAdvice: '600 mg täglich, ideal morgens mit Wasser oder Vitamin C.',
    safetyAndUL: 'Sehr gut erforschter Arznei- und Nährstoff mit exzellentem Sicherheitsprofil bei 600-1.200 mg/Tag.',
    scientificReference: 'Redox Biology 2020 | Antioxidants & Redox Signaling'
  },

  // =========================================================================
  // OMEGA-3 & VITALSTOFFE (9)
  // =========================================================================
  'omega-3': {
    id: 'omega-3',
    name: 'Omega-3 (EPA & DHA)',
    scientificName: 'BalanceOil+ (1.069 mg EPA + 569 mg DHA + 427 mg DPA)',
    categoryName: 'Omega-3 & Vitalstoffe',
    badge: '🧠 Zellmembranen & Entzündungsbremse',
    summary: 'Essenzielle marine Fettsäuren für Gehirnstruktur, Netzhaut, Herzfunktion und Vorläufer entzündungsauflösender Resolvine.',
    simpleBenefitDesc: 'Eicosapentaensäure (EPA, 20:5n-3) und Docosahexaensäure (DHA, 22:6n-3) sind langkettige mehrfach ungesättigte marine Omega-3-Fettsäuren. Sie werden kompetitiv in Phospholipide aller Zellmembranen eingebaut, erhöhen die Membranfluidität und verdrängen proinflammatorische Arachidonsäure. Aus EPA und DHA entstehen enzymatisch über Lipoxygenasen spezialisierte pro-resolvierende Mediatoren (SPMs: Resolvine der E- und D-Serie, Protectine, Maresine), die Entzündungsprozesse aktiv auflösen.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Kardiovaskuläre Funktion):</strong> 250 mg EPA/DHA täglich tragen zu einer normalen Herzfunktion bei (Zinzino liefert potente 2.065 mg Gesamtfettsäuren).',
      '<strong>EFSA-bestätigt (Gehirnstruktur & Sehkraft):</strong> DHA ist das dominante Strukturfett der zerebralen Großhirnrinde und der Fovea centralis in der Netzhaut.',
      '<strong>Klinische Evidenz (Entzündungsauflösung):</strong> Optimiert das zelluläre AA/EPA-Verhältnis und senkt systemische vaskuläre Entzündungsmarker (hs-CRP, IL-6).'
    ],
    plainGermanExplanation: 'Die langkettigen Omega-3-Fettsäuren EPA und DHA werden in Zellmembranen eingebaut, verbessern deren Fließeigenschaften und dienen als Vorstufen entzündungsauflösender Botenstoffe (Resolvine). DHA bildet einen Hauptbestandteil des Gehirns und der Netzhaut, während EPA die kardiovaskuläre Gesundheit und Gefäßelastizität unterstützt.',
    biochemistry: 'EPA und DHA werden in Phospholipide aller Zellmembranen eingebaut, erhöhen deren Fluidität und verdrängen Arachidonsäure. Aus EPA entstehen entzündungshemmende Eicosanoide (Serie-3-Prostaglandine) und spezialisierte pro-resolvierende Mediatoren (SPMs: Resolvine, Protectine).',
    plantBasedRelevance: 'Pflanzliches ALA (aus Leinöl/Walnüssen) wird im Körper nur zu <5% in EPA und <0.5% in DHA umgewandelt. Zinzino BalanceOil+ liefert vorgeformtes EPA/DHA kombiniert mit Oliven-Polyphenolen, die die Fettsäuren vor Oxidation im Blut schützen.',
    intakeAdvice: '10 ml flüssig zu einer Hauptmahlzeit einnehmen. Synergie mit fettlöslichen Vitaminen (D3, E, K2).',
    safetyAndUL: 'EFSA stuft eine Zufuhr von bis zu 5.000 mg (5 g) EPA+DHA pro Tag als absolut sicher für Erwachsene ein. 2.065 mg ist eine hochpotente Dosis.',
    scientificReference: 'EFSA Journal 2012;10(7):2815 | Circulation Journal 2019'
  },
  'creatine': {
    id: 'creatine',
    name: 'Kreatin',
    scientificName: 'Kreatin-Monohydrat (Creapure® 3.000 mg)',
    categoryName: 'Omega-3 & Vitalstoffe',
    badge: '⚡ ATP-Resynthese & Gehirnleistung',
    summary: 'Phosphatkreatin-Speicher für sofortige ATP-Bereitstellung bei Schnellkraft, Muskelarbeit und neuronaler Kognition.',
    simpleBenefitDesc: 'Kreatin (N-Amidinosarcosin) wird im Zytosol durch die Kreatinkinase zu Phosphokreatin (PCr) phosphoryliert. Bei zellulärem Energiemangel dient Phosphokreatin als hochenergetischer Phosphatgruppendonor zur anaeroben, alaktaziden Resynthese von ATP aus ADP in Millisekunden. Dieser Mechanismus sichert die zelluläre Energiehomöostase in Phasen maximaler Spitzenbelastung im Skelettmuskel sowie in neuronalen Synapsen.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Körperliche Schnellkraftleistung):</strong> Steigert die körperliche Leistung bei kurzzeitigen, hochintensiven Schnellkraftbelastungen ab 3 g/Tag.',
      '<strong>EFSA-bestätigt (Krafttraining & Muskelaufbau bei Erwachsenen):</strong> Steigert die Effizienz des Krafttrainings auf die Muskelkraft.',
      '<strong>Klinische Evidenz (Neuroenergetik & Kognition):</strong> Systematische Reviews belegen signifikante Verbesserungen des Arbeitsgedächtnisses und der geistigen Ermüdungsresistenz, insbesondere bei Nicht-Fleischessern mit niedrigen Basisspeichern.'
    ],
    plainGermanExplanation: 'Kreatin erhöht die zellulären Phosphokreatinspeicher zur schnellen Resynthese von ATP bei kurzen, maximalen Kraftleistungen. Es steigert Kraft und Leistungsfähigkeit im Krafttraining und unterstützt bei fleischfreier Ernährung auch das Arbeitsgedächtnis und die geistige Ermüdungsresistenz.',
    biochemistry: 'Kreatin wird durch Kreatinkinase zu Phosphokreatin phosphoryliert. Bei zellulärem Energiemangel überträgt es seine Phosphatgruppe in Millisekunden auf ADP zur Regeneration von ATP (universelle Energiewährung).',
    plantBasedRelevance: 'Da Kreatin natürlicherweise ausschließlich in Fleisch und Fisch vorkommt, haben Nicht-Fleischesser um 20-30% niedrigere Muskel- und Gehirnkreatinspeicher. Nicht-Fleischesser profitieren daher kognitiv und körperlich am stärksten von Creapure®!',
    intakeAdvice: 'Täglich 3.000 mg (1 Messlöffel) mit Wasser oder im Shake einnehmen. Einnahmezeitpunkt ist flexibel.',
    safetyAndUL: 'Creapure® (Alzchem Deutschland) ist das weltweit reinste Kreatin und das meistuntersuchte Supplement der Welt mit belegter Langzeitsicherheit.',
    scientificReference: 'EFSA Journal 2011;9(7):2303 | International Society of Sports Nutrition (ISSN)'
  },
  'cholin': {
    id: 'cholin',
    name: 'Cholin',
    scientificName: 'Cholinbitartrat (450 mg reines Cholin)',
    categoryName: 'Omega-3 & Vitalstoffe',
    badge: '🧠 Acetylcholin & Leber-Fettstoffwechsel',
    summary: 'Vorstufe des Gedächtnis-Neurotransmitters Acetylcholin und Phosphatidylcholin für Leber und Zellmembranen.',
    simpleBenefitDesc: 'Cholin (2-Hydroxyethyl-trimethylammonium) ist ein essenzieller Nährstoff mit dreifacher biochemischer Schlüsselfunktion: Es ist Substrat für die Cholinacetyltransferase zur Synthese des Neurotransmitters Acetylcholin, bildet über den Kennedy-Weg Phosphatidylcholin (Hauptphospholipid aller Zellmembranen und VLDL-Transporter der Leber) und wird über Betain zur Remethylierung von Homocystein via BHMT im 1-Kohlenstoff-Stoffwechsel oxidiert.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Erhaltung normaler Leberfunktion):</strong> Sichert die Synthese von Phosphatidylcholin zur VLDL-Sekretion und verhindert die Akkumulation von Triglyceriden (Steatosis hepatis / Fettleber).',
      '<strong>EFSA-bestätigt (Fettstoffwechsel & Homocystein):</strong> Trägt zu einem normalen Lipidstoffwechsel und Homocystein-Clearance bei.',
      '<strong>Klinische Evidenz (Neurotransmitter & Kognition):</strong> Essentieller Vorläufer für Acetylcholin zur Erhaltung synaptischer Plastizität, Aufmerksamkeit und Gedächtniskonsolidierung.'
    ],
    plainGermanExplanation: 'Cholin ist die Ausgangssubstanz für den Neurotransmitter Acetylcholin (Aufmerksamkeit, Lernprozesse, Muskelansteuerung) und für Phosphatidylcholin, das den Abtransport von Triglyceriden aus der Leber sichert.',
    biochemistry: 'Cholin wird für die Synthese von Acetylcholin (Fokus, Lernen, neuromuskuläre Übertragung) und Phosphatidylcholin (Hauptphospholipid aller Membranen) benötigt. Über Betain dient es zudem als Methylgruppendonor zur Senkung von Homocystein.',
    plantBasedRelevance: 'Die reichhaltigsten Cholinquellen sind Eigelb und Rinderleber. Pflanzliche Lebensmittel liefern deutlich geringere Konzentrationen. 450 mg deckt die EFSA-Zufuhrempfehlung (400 mg) für Erwachsene optimal ab.',
    intakeAdvice: 'Morgens oder mittags zu einer Mahlzeit einnehmen.',
    safetyAndUL: 'EFSA Adequate Intake (AI): 400 mg/Tag. Der US IOM Tolerable Upper Intake Level liegt bei 3.500 mg/Tag. Mit 450 mg (113% EFSA AI) erreichst du die perfekte Zieldosis bei maximalem Sicherheitsabstand.',
    scientificReference: 'EFSA Journal 2016;14(8):4484 | US IOM Choline Dietary Reference Intakes | Nutrients Journal'
  },
  'hyaluron': {
    id: 'hyaluron',
    name: 'Hyaluronsäure',
    scientificName: 'Natriumhyaluronat 500–700 kDa (500 mg in natural elements)',
    categoryName: 'Omega-3 & Vitalstoffe',
    badge: '💧 Feuchtigkeitsmatrix & Gelenke',
    summary: 'Hochmolekulares Glykosaminoglykan – bindet das bis zu 1.000-fache seines Eigengewichts an Wasser in Haut und Gelenkknorpel.',
    simpleBenefitDesc: 'Hyaluronsäure ist ein unverzweigtes Glykosaminoglykan aus repetitiven Disaccharideinheiten (D-Glukuronsäure und N-Acetylglucosamin). Aufgrund ihrer hohen Dichte an Carboxylatgruppen besitzt sie eine herausragende Wasserbindungskapazität (bis zu 6 Liter Wasser pro Gramm). In der Synovialflüssigkeit wirkt sie als viskoelastisches Schmiermittel und Stoßdämpfer, während sie in der Dermis über CD44-Rezeptoren Fibroblasten zur Neusynthese extrazellulärer Matrix stimuliert.',
    benefitPoints: [
      '<strong>Klinische Evidenz (Hautelastizität & Hydratation):</strong> Placebokontrollierte RCTs belegen, dass die tägliche Einnahme von 120–500 mg Hyaluronat nach 8–12 Wochen die Hautfeuchtigkeit signifikant steigert und Faltentiefen mindert (kein EFSA-Claim).',
      '<strong>Gelenkviskosität & Knorpelbelastbarkeit:</strong> Unterstützt die rheologischen Eigenschaften der Gelenkschmiere und schützt Knorpelflächen vor mechanischem Verschleiß.',
      '<strong>Optimale Molekülgröße (500–700 kDa):</strong> Vegane Fermentationsform mit wissenschaftlich optimierter Molekulargewichtsverteilung für maximale enterale Resorption.'
    ],
    plainGermanExplanation: 'Hyaluronsäure besitzt ein enormes Wasserbindungsvermögen und dient in den Gelenken als viskoelastisches Schmiermittel und Stoßdämpfer. In der Haut verbessert sie die Feuchtigkeitsspeicherung der extrazellulären Matrix.',
    biochemistry: 'Hyaluronsäure ist Hauptbestandteil der Synovialflüssigkeit (Gelenkschmiere) und der extrazellulären Matrix der Dermis. Über CD44-Rezeptoren stimuliert oral zugeführtes Hyaluronat Chondrozyten und Fibroblasten zur endogenen Neusynthese.',
    plantBasedRelevance: 'Gewonnen durch biotechnologische Fermentation (100% vegan). Schützt Gelenkknorpel bei sportlicher Belastung und hydratisiert die Haut von innen.',
    intakeAdvice: 'Mit reichlich Flüssigkeit (mind. 250-300 ml Wasser) morgens einnehmen.',
    safetyAndUL: 'Gilt als extrem sicher und hypoallergen; EFSA-bewertete Studien und toxikologische Reviews nutzen 100-500 mg/Tag ohne jegliche Nebenwirkungen.',
    scientificReference: 'Nutrition Journal 2014;13:70 | Journal of Clinical Biochemistry and Nutrition | EFSA'
  },
  'polyphenols': {
    id: 'polyphenols',
    name: 'Oliven-Polyphenole',
    scientificName: 'Hydroxytyrosol & Oleuropein (2.9 mg in BalanceOil+)',
    categoryName: 'Omega-3 & Vitalstoffe',
    badge: '🌿 LDL-Lipidschutz & Gefäßgesundheit',
    summary: 'Hochpotente Phenolverbindungen aus vorzeitig geerntetem Olivenöl – schützen Blutfette vor oxidativem Stress.',
    simpleBenefitDesc: 'Hydroxytyrosol und Oleuropein sind niedermolekulare Secoiridoid- und Phenol-Derivate aus nativen Olivenölen früher Ernte. Sie zeichnen sich durch eine herausragende Radikalfängerkapazität aus, reichern sich selektiv an zirkulierenden Low-Density-Lipoproteinen (LDL) an und aktivieren über den Nrf2/ARE-Signalweg die Transkription zellulärer Phase-II-Entgiftungs- und Schutzgene (Hämoxygenase-1, NQO1).',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Schutz der Blutfette vor Oxidation):</strong> Olivenöl-Polyphenole (ab 5 mg Hydroxytyrosol/Tag) schützen LDL-Partikel nachweislich vor oxidativer Modifikation zu atherogenem oxLDL.',
      '<strong>Vaskuläre Endothelprotektion:</strong> Verhindert die oxidative Aktivierung von Gefäßadhäsionsmolekülen (VCAM-1, ICAM-1) in der arteriellen Intima.',
      '<strong>Oxidationsschutz für Omega-3:</strong> Schützt das flüssige EPA/DHA im BalanceOil+ sowohl in vitro vor Ranzigkeit als auch in vivo nach der Resorption.'
    ],
    plainGermanExplanation: 'Oliven-Polyphenole (Hydroxytyrosol und Oleuropein) schützen zirkulierende Blutfette (LDL-Cholesterin) vor oxidativer Veränderung. Gleichzeitig bewahren sie ungesättigte Fettsäuren vor vorzeitiger Oxidation.',
    biochemistry: 'Hydroxytyrosol bindet an LDL-Partikel und verhindert deren Oxidation zu oxLDL (Schlüsselfaktor in der Entstehung atherosklerotischer Plaques). Zudem aktiviert es den Nrf2-Signalweg zur Hochregulation körpereigener Schutzenzyme.',
    plantBasedRelevance: 'Verhindert die Oxidation des flüssigen Omega-3-Öls in der Flasche sowie nach der Resorption im Blutkreislauf.',
    intakeAdvice: 'In Zinzino BalanceOil+ direkt im Verbund mit EPA/DHA enthalten.',
    safetyAndUL: 'EFSA bestätigt den Health Claim ab 5 mg Hydroxytyrosol/Tag; absolut natürlicher Nahrungsbestandteil.',
    scientificReference: 'EFSA Journal 2011;9(4):2033 | Atherosclerosis Journal'
  },
  'coq10': {
    id: 'coq10',
    name: 'Coenzym Q10 (vegan)',
    scientificName: 'Coenzym Q10 (200 mg aus Fermentation)',
    categoryName: 'Omega-3 & Vitalstoffe',
    badge: '🔋 200 mg ATP-Atmungskette & Herzschutz',
    summary: 'Zentraler Elektronenüberträger in der inneren Mitochondrienmembran (Komplexe I/II -> III) und starkes lipidlösliches Antioxidans.',
    simpleBenefitDesc: 'Coenzym Q10 (Ubiquinon / Ubiquinol) ist ein lipophiles 1,4-Benzochinonderivat mit einer isoprenoiden Zehner-Seitenkette. Es ist der obligate mobile 2-Elektronen-Carrier in der inneren Mitochondrienmembran, der Reduktionsäquivalente von Komplex I (NADH-Dehydrogenase) und Komplex II (Succinat-Dehydrogenase) auf Komplex III (Cytochrom-bc1-Komplex) überträgt. Über den Q-Zyklus treibt es den Protonengradienten zur mitochondrialen ATP-Generierung an.',
    benefitPoints: [
      '<strong>Klinische Evidenz (Mitochondriale Bioenergetik):</strong> Unerlässlich für die Synthese von über 95% der gesamten Körperenergie (ATP) in stoffwechselintensiven Organen wie Herz, Gehirn und Muskulatur.',
      '<strong>Klinische Evidenz (Myokardschutz & Gefäße):</strong> Große placebokontrollierte Humanstudien (z. B. Q-SYMBIO, KiSel-10) belegen eine signifikante Verbesserung der myokardialen Pumpleistung und vaskulären Endothelfunktion bei 100–200 mg Tagesdosis (kein isolierter EFSA-Claim).',
      '<strong>Intramitochondrialer Radikalschutz:</strong> Neutralisiert intramitochondriale Sauerstoffradikale und schützt mitochondriale DNA und Membranlipide direkt vor Ort.'
    ],
    plainGermanExplanation: 'Coenzym Q10 ist der zentrale Elektronenüberträger in der mitochondrialen Atmungskette zur Bildung von ATP. Es versorgt energieintensive Gewebe wie Herzmuskel und Gehirn und schützt Mitochondrienmembranen vor oxidativen Schäden.',
    biochemistry: 'CoQ10 transferiert Elektronen zur ATP-Synthase und treibt so die zelluläre Energieproduktion in Herz, Muskeln und Gehirn an. Es recycelt oxidiertes Vitamin E und schützt mitochondriale Membranen direkt vor freien Radikalen.',
    plantBasedRelevance: 'Die Hauptnahrungsquellen sind tierische Innereien (Herz, Leber) und fetter Fisch. Durch die 200 mg veganes Fermentations-Q10 schließt du diese Versorgungslücke mit einer klinisch hochwirksamen Dosis.',
    intakeAdvice: 'Fettlöslich: Immer morgens zum Frühstück mit Fettquelle oder zum Omega-3 BalanceOil+ einnehmen.',
    safetyAndUL: 'Für CoQ10 existiert kein gesetzlicher EFSA Upper Limit. Das wissenschaftlich etablierte Observed Safe Level (OSL nach Hathcock & Shao) liegt bei 300 mg/Tag. Mit 200 mg liegt deine Zufuhr im optimalen, klinisch bestens erforschten Bereich.',
    scientificReference: 'Regulatory Toxicology and Pharmacology 2006;45(3):282-288 (Hathcock & Shao CoQ10 Safety) | BioFactors Journal'
  },
  'astaxanthin': {
    id: 'astaxanthin',
    name: 'Astaxanthin (AstaPure®)',
    scientificName: 'Natürliches Astaxanthin (12 mg aus Vitabay)',
    categoryName: 'Omega-3 & Vitalstoffe',
    badge: '👁️ 12 mg Membran-Zellschutz & Blut-Hirn-Schranke',
    summary: 'Das stärkste Carotinoid der Natur (6.000x stärker als Vitamin C) – durchspannt Zellmembranen und schützt Augen, Gehirn und Gefäße.',
    simpleBenefitDesc: 'Astaxanthin ist ein Xanthophyll-Carotinoid mit konjugierten Doppelbindungen und polaren ionischen Endgruppen (Hydroxy- und Ketogruppen an beiden Ringenden). Durch diese amphiphile Struktur spannt sich Astaxanthin quer durch die gesamte Lipiddoppelschicht zellulärer Membranen und neutralisiert freie Radikale sowohl im hydrophilen Außen- und Innenraum als auch im lipophilen Membrankern. Es überwindet die Blut-Hirn- und Blut-Retina-Schranke.',
    benefitPoints: [
      '<strong>Extremes Radikalfängerpotenzial:</strong> Fängt Singulett-Sauerstoff in vitro bis zu 6.000-mal effektiver ab als Vitamin C und 100-mal stärker als Vitamin E.',
      '<strong>Klinische Evidenz (Asthenopie & Augenentlastung):</strong> Randomisierte Studien belegen, dass 6–12 mg Astaxanthin die Akkommodationsfähigkeit der Ziliarmuskeln verbessert und Augenermüdung bei Bildschirmarbeit messbar mindert.',
      '<strong>Haut- & Membran-Photoprotektion:</strong> Dämpft UV-induzierte Matrix-Metalloproteinasen (Kollagenasen) und schützt die Dermis von innen vor Photo-Aging (kein EFSA Health Claim, aber robuste RCT-Literatur).'
    ],
    plainGermanExplanation: 'Astaxanthin ist ein hochpotentes Xanthophyll-Carotinoid, das Zellmembranen durchspannt und oxidativen Stress im Zellinneren sowie an der Membranoberfläche neutralisiert. Es entlastet die Ziliarmuskeln der Augen bei intensiver Bildschirmarbeit und unterstützt den Schutz vor UV-bedingtem Photo-Aging.',
    biochemistry: 'Aufgrund seiner polaren Endgruppen legt sich Astaxanthin quer durch die Lipiddoppelschicht der Zellmembranen und schützt sowohl den inneren als auch den äußeren Zellraum vor Lipidperoxidation. Es passiert mühelos die Blut-Hirn- und Blut-Netzhaut-Schranke.',
    plantBasedRelevance: 'Kommt in der Natur über die Nahrungskette primär in Wildlachs vor. Die hochdosierten 12 mg veganes Astaxanthin aus der Mikroalge Haematococcus pluvialis übertreffen die Zufuhr eines üblichen Fischkonsums um ein Vielfaches.',
    intakeAdvice: 'Fettlöslich: Zu einer Mahlzeit mit Fett oder direkt zusammen mit Zinzino BalanceOil+ einnehmen.',
    safetyAndUL: 'EFSA bewertet bis zu 8–12 mg natürliches Algen-Astaxanthin pro Tag für Erwachsene als sicher und exzellent verträglich.',
    scientificReference: 'EFSA Journal 2020;18(2):5993 | Marine Drugs Journal | Nutrients 2020'
  },
  'laktase': {
    id: 'laktase',
    name: 'Laktase-Enzym',
    scientificName: 'Beta-Galactosidase (30 mg / ~3.000 FCC)',
    categoryName: 'Omega-3 & Vitalstoffe',
    badge: '🥛 Laktose-Spaltung & Bekömmlichkeit',
    summary: 'Verdauungsenzym im Yummy Whey – spaltet Milchzucker (Laktose) zuverlässig auf und verhindert Verdauungsbeschwerden.',
    simpleBenefitDesc: 'Laktase (Beta-D-Galactosid-Galactohydrolase) ist ein hydrolytisches Bürstensaumenzym der Dünndarmmukosa. Es spaltet die beta-1,4-glykosidische Bindung des Disaccharids Laktose (Milchzucker) in die resorbierbaren Monosaccharide D-Glukose und D-Galaktose. Fehlt Laktase, gelangt unverdaute Laktose in das Kolon, wo sie osmotisch Wasser bindet und durch Kolonbakterien zu Gasen (H2, CH4, CO2) und kurzkettigen Fettsäuren fermentiert wird.',
    benefitPoints: [
      '<strong>EFSA-bestätigt (Laktoseabbau & Verdauung):</strong> Verbessert die Laktoseverdauung bei Personen mit Laktoseunverträglichkeit ab einer Dosis von 4.500 FCC-Einheiten.',
      '<strong>Symptomprävention:</strong> Verhindert postprandiale Blähungen, Meteorismus, abdominale Krämpfe und osmotische Diarrhöen nach Proteinkonsum.',
      '<strong>Maximale Shake-Verträglichkeit:</strong> Ermöglicht den beschwerdefreien Verzehr des Molkenproteins selbst bei subklinischer Laktosesensitivität.'
    ],
    plainGermanExplanation: 'Das Verdauungsenzym Laktase spaltet das Disaccharid Laktose im Dünndarm in Glukose und Galaktose. Es gewährleistet die beschwerdefreie Verwertung von Molkenprotein bei bestehender oder leichter Laktoseunverträglichkeit.',
    biochemistry: 'Laktase spaltet das Disaccharid Laktose im Dünndarm enzymatisch in die resorbierbaren Monosaccharide D-Glukose und D-Galaktose. Dadurch wird verhindert, dass ungespaltene Laktose in den Dickdarm gelangt und dort bakteriell zu Gasen fermentiert wird.',
    plantBasedRelevance: 'Sorgt für maximale Magen-Darm-Bekömmlichkeit des Molkenproteins selbst bei leichter Laktosesensitivität.',
    intakeAdvice: 'Bereits im Vit4ever Yummy Whey Pulver enthalten und entfaltet seine Wirkung direkt beim Trinken.',
    safetyAndUL: 'EFSA-geprüftes Verdauungsenzym ohne Obergrenze oder Nebenwirkungen.',
    scientificReference: 'EFSA Journal 2011;9(6):2175 (Health Claim Laktase)'
  },
  'ps': {
    id: 'ps',
    name: 'Phosphatidylserin',
    scientificName: 'Phosphatidylserin (aus Sonnenblumenlecithin) (0 mg - Offen)',
    categoryName: 'Omega-3 & Vitalstoffe',
    badge: '🧠 Kognition & Cortisol-Dämpfung',
    summary: 'Hauptphospholipid der inneren neuronalen Zellmembran – unterstützt Gedächtnis, Signalübertragung und dämpft Stresscortisol.',
    simpleBenefitDesc: 'Phosphatidylserin (PS) ist das quantitativ dominierende saure Glycerophospholipid der inneren Schicht (Inner Leaflet) der neuronalen Plasmamembran. Es aktiviert Schlüsselenzyme der Signaltransduktion (Proteinkinase C, Na+/K+-ATPase), moduliert die synaptische Freisetzung von Acetylcholin, Dopamin und Noradrenalin und reguliert die Hypothalamus-Hypophysen-Nebennierenrinden-Achse (HPA-Achse) bei akutem physischem und mentalem Stress.',
    benefitPoints: [
      '<strong>Klinische Evidenz (Cortisol-Dämpfung bei Belastung):</strong> RCTs (z. B. Starks et al. 2008, Hellhammer et al.) belegen, dass 400–600 mg PS die belastungsinduzierte ACTH- und Serum-Cortisol-Ausschüttung nach intensivem Training signifikant abfedert.',
      '<strong>Klinische Evidenz (Kognition & synaptische Plastizität):</strong> Humanstudien zeigen Verbesserungen von Aufmerksamkeit, Arbeitsgedächtnis und mentaler Verarbeitungsgeschwindigkeit (FDA Qualified Health Claim für kognitive Funktion vorhanden).',
      '<strong>Sichere pflanzliche Quelle:</strong> Gewonnen durch enzymatische Transphosphatidylierung aus gentechnikfreiem Sonnenblumenlecithin.'
    ],
    plainGermanExplanation: 'Phosphatidylserin ist ein Schlüsselphospholipid neuronaler Zellmembranen, das die synaptische Signalübertragung unterstützt und nach körperlicher oder mentaler Belastung eine überschießende Cortisolausschüttung dämpfen kann.',
    biochemistry: 'Phosphatidylserin aktiviert die neuronale Proteinkinase C (PKC) und Na+/K+-ATPase, moduliert die Freisetzung von Acetylcholin und Dopamin und senkt bei physischem oder mentalem Stress überschießende ACTH- und Cortisolspiegel.',
    plantBasedRelevance: 'In der Nahrung in höchster Dichte in tierischem Hirn- und Organgewebe vorhanden. Pflanzliches Phosphatidylserin (aus Sonnenblumen- oder Sojalecithin) liefert 100-300 mg reines bioverfügbares PS.',
    intakeAdvice: '100-200 mg morgens für kognitiven Fokus oder nach intensivem Training zur Cortisolsenkung.',
    safetyAndUL: 'FDA hat für Phosphatidylserin einen "Qualified Health Claim" für kognitive Gesundheit zuerkannt.',
    scientificReference: 'Nutrition Journal | Journal of the International Society of Sports Nutrition'
  }
};
