window.APP_CATALOG = [
  {
    id: "haltewecker",
    name: "HalteWecker",
    icon: "assets/icons/haltewecker.png",
    accent: "#dd765c",
    accentSoft: "#f6d9cc",
    platforms: ["iphone"],
    featured: true,
    category: { en: "Travel", de: "Reisen" },
    tagline: {
      en: "Never miss your stop again.",
      de: "Nie wieder die Haltestelle verpassen."
    },
    description: {
      en: "Choose your destination, relax during the ride, and get reminded before you arrive. HalteWecker covers stops throughout Germany and adds live transit radar in supported cities.",
      de: "Zielhaltestelle auswählen, entspannt fahren und rechtzeitig erinnert werden. HalteWecker bietet Haltestellen in ganz Deutschland sowie Live-Radar in unterstützten Städten."
    },
    highlights: {
      en: ["Stops across Germany", "Live radar in selected cities", "Favorites and adjustable alert radius"],
      de: ["Haltestellen in ganz Deutschland", "Live-Radar in ausgewählten Städten", "Favoriten und einstellbarer Alarmradius"]
    },
    screenshots: [
      "assets/screenshots/haltewecker/1.webp",
      "assets/screenshots/haltewecker/2.webp",
      "assets/screenshots/haltewecker/3.webp",
      "assets/screenshots/haltewecker/4.webp",
      "assets/screenshots/haltewecker/5.webp",
      "assets/screenshots/haltewecker/6.webp"
    ],
    links: [
      { type: "appstore", url: "https://apps.apple.com/app/id6789654959" }
    ]
  },
  {
    id: "pasty",
    name: "Pasty",
    icon: "assets/icons/pasty.jpg",
    accent: "#c77d68",
    accentSoft: "#f3d8ce",
    platforms: ["iphone", "ipad", "watch"],
    featured: true,
    category: { en: "Clipboard", de: "Zwischenablage" },
    tagline: {
      en: "Your clipboard, organized.",
      de: "Deine Zwischenablage, organisiert."
    },
    description: {
      en: "Save text, links, images, screenshots, and PDFs in one searchable place. On-device OCR, automatic tags, private clips, widgets, and Apple Watch keep everything close at hand.",
      de: "Texte, Links, Bilder, Screenshots und PDFs an einem durchsuchbaren Ort speichern. OCR auf dem Gerät, automatische Tags, private Clips, Widgets und Apple Watch halten alles griffbereit."
    },
    highlights: {
      en: ["OCR search in images and PDFs", "Private iCloud sync", "iPhone, iPad and Apple Watch"],
      de: ["OCR-Suche in Bildern und PDFs", "Private iCloud-Synchronisierung", "iPhone, iPad und Apple Watch"]
    },
    screenshots: {
      en: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => `assets/screenshots/pasty/en/${index}.webp`),
      de: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => `assets/screenshots/pasty/de/${index}.webp`)
    },
    links: [
      { type: "appstore", url: "https://apps.apple.com/app/id6766716767" }
    ]
  },
  {
    id: "buropilot",
    name: "BüroPilot",
    icon: "assets/icons/buropilot.jpg",
    accent: "#4f93ad",
    accentSoft: "#d5e9ed",
    platforms: ["iphone"],
    featured: true,
    category: { en: "Productivity", de: "Produktivität" },
    tagline: {
      en: "Understand German paperwork.",
      de: "Deutsche Dokumente einfach verstehen."
    },
    description: {
      en: "Turn complex German letters, contracts, forms, and PDFs into clear explanations. Detect deadlines, translate documents, and keep important paperwork organized.",
      de: "Komplexe Behördenbriefe, Verträge, Formulare und PDFs verständlich erklären lassen. Fristen erkennen, Dokumente übersetzen und wichtige Unterlagen organisieren."
    },
    highlights: {
      en: ["Plain-language document analysis", "Deadlines and reminders", "Translation and PDF scanning"],
      de: ["Dokumentanalyse in klarer Sprache", "Fristen und Erinnerungen", "Übersetzung und PDF-Scan"]
    },
    screenshots: [
      "assets/screenshots/buropilot/1.webp",
      "assets/screenshots/buropilot/2.webp",
      "assets/screenshots/buropilot/3.webp",
      "assets/screenshots/buropilot/4.webp",
      "assets/screenshots/buropilot/5.webp",
      "assets/screenshots/buropilot/6.webp"
    ],
    links: [
      { type: "appstore", url: "https://apps.apple.com/app/id6780277797" }
    ]
  },
  {
    id: "macreach",
    name: "MacReach",
    icon: "assets/icons/macreach.jpg",
    accent: "#607aa9",
    accentSoft: "#d8deee",
    platforms: ["iphone", "mac"],
    category: { en: "Remote Control", de: "Fernsteuerung" },
    tagline: {
      en: "Your Mac, within reach.",
      de: "Dein Mac, immer in Reichweite."
    },
    description: {
      en: "Control volume and media, lock your screen, put your Mac to sleep, and monitor system status from iPhone. Automatic local discovery means no accounts, cloud, or setup codes.",
      de: "Lautstärke und Medien steuern, den Bildschirm sperren, den Mac in den Ruhezustand versetzen und Systemdaten am iPhone sehen. Ohne Konto, Cloud oder Einrichtungscodes."
    },
    highlights: {
      en: ["Automatic Bonjour connection", "Media and system controls", "Private local-network operation"],
      de: ["Automatische Bonjour-Verbindung", "Medien- und Systemsteuerung", "Privat im lokalen Netzwerk"]
    },
    screenshots: [
      "assets/screenshots/macreach/1.webp",
      "assets/screenshots/macreach/2.webp",
      "assets/screenshots/macreach/3.webp",
      "assets/screenshots/macreach/4.webp"
    ],
    links: [
      { type: "appstore", url: "https://apps.apple.com/app/id6773302981" }
    ]
  },
  {
    id: "nimbusdb",
    name: "NimbusDB",
    icon: "assets/icons/nimbusdb.png",
    accent: "#3985b9",
    accentSoft: "#d2e8f2",
    platforms: ["mac"],
    featured: true,
    category: { en: "Database Manager", de: "Datenbankverwaltung" },
    tagline: {
      en: "Your cloud data, in one native app.",
      de: "Deine Cloud-Daten in einer nativen App."
    },
    description: {
      en: "A focused macOS client for CloudKit, Supabase, Firestore, and Appwrite. Browse records, edit data, inspect schemas, export information, and keep credentials safely in Keychain.",
      de: "Ein fokussierter macOS-Client für CloudKit, Supabase, Firestore und Appwrite. Datensätze durchsuchen, bearbeiten, Schemas prüfen, Daten exportieren und Zugangsdaten sicher im Schlüsselbund speichern."
    },
    highlights: {
      en: ["CloudKit, Supabase, Firestore, Appwrite", "Full record management", "Local Keychain credentials"],
      de: ["CloudKit, Supabase, Firestore, Appwrite", "Vollständige Datensatzverwaltung", "Lokale Schlüsselbund-Zugangsdaten"]
    },
    screenshots: [
      "assets/screenshots/nimbusdb/1.webp",
      "assets/screenshots/nimbusdb/2.webp",
      "assets/screenshots/nimbusdb/3.webp",
      "assets/screenshots/nimbusdb/4.webp",
      "assets/screenshots/nimbusdb/5.webp",
      "assets/screenshots/nimbusdb/6.webp"
    ],
    links: [
      { type: "appstore", url: "https://apps.apple.com/app/id6769177806" },
      { type: "lemon", url: "https://asoft-dev.lemonsqueezy.com/checkout/buy/39c97a0c-99d6-4914-9341-94ed2a37c4c6?embed=1" }
    ]
  },
  {
    id: "sourceradar",
    name: "SourceRadar",
    icon: "assets/icons/sourceradar.png",
    accent: "#7a746e",
    accentSoft: "#e5dfd8",
    platforms: ["mac"],
    category: { en: "Developer Tools", de: "Entwicklertools" },
    tagline: {
      en: "See the health of your Swift codebase.",
      de: "Den Zustand deines Swift-Projekts verstehen."
    },
    description: {
      en: "Scan Swift projects locally for concurrency risks, unused code, legacy patterns, and project hygiene issues. Review structured findings with severity, evidence, and clear next steps.",
      de: "Swift-Projekte lokal auf Concurrency-Risiken, ungenutzten Code, veraltete Muster und Hygiene-Probleme prüfen. Strukturierte Ergebnisse mit Schweregrad, Belegen und nächsten Schritten erhalten."
    },
    highlights: {
      en: ["Swift concurrency review", "Structured findings and evidence", "100% local source analysis"],
      de: ["Swift-Concurrency-Analyse", "Strukturierte Befunde mit Belegen", "100 % lokale Quellcodeanalyse"]
    },
    screenshots: [
      "assets/screenshots/sourceradar/90099898-2c46-42dc-b942-889c8d77deb3-SourceRadar.webp",
      "assets/screenshots/sourceradar/7015039c-17c7-4b19-aabb-af6dbf24cc0d-SourceRadar.webp",
      "assets/screenshots/sourceradar/1204f2ee-46c4-487c-b922-623a47324c4f-SourceRadar.webp",
      "assets/screenshots/sourceradar/35898879-b043-4875-9274-18c2ca811848-SourceRadar.webp",
      "assets/screenshots/sourceradar/312777ea-afd3-4b60-855d-e8cddc879b04-SourceRadar.webp",
      "assets/screenshots/sourceradar/951e93b7-fb46-4800-85a9-5f2324d384f8-SourceRadar.webp"
    ],
    links: [
      { type: "appstore", url: "https://apps.apple.com/app/id6778817856" }
    ]
  },
  {
    id: "envio",
    name: "Envio",
    icon: "assets/icons/envio.png",
    accent: "#61966f",
    accentSoft: "#d5e8d8",
    platforms: ["mac"],
    category: { en: ".env Manager", de: ".env-Verwaltung" },
    tagline: {
      en: "Switch environments with confidence.",
      de: "Umgebungen sicher wechseln."
    },
    description: {
      en: "Manage local, staging, production, and custom .env configurations from the macOS menu bar. Keep keys aligned, hide sensitive values, and switch with one click.",
      de: "Lokale, Staging-, Produktions- und eigene .env-Konfigurationen direkt aus der macOS-Menüleiste verwalten. Schlüssel abgleichen, sensible Werte verbergen und mit einem Klick wechseln."
    },
    highlights: {
      en: ["One-click environment switching", "Multiple projects", "Sensitive values hidden by default"],
      de: ["Umgebungswechsel mit einem Klick", "Mehrere Projekte", "Sensible Werte standardmäßig verborgen"]
    },
    screenshots: [
      "assets/screenshots/envio/1.webp",
      "assets/screenshots/envio/2.webp",
      "assets/screenshots/envio/3.webp",
      "assets/screenshots/envio/4.webp",
      "assets/screenshots/envio/5.webp",
      "assets/screenshots/envio/6.webp"
    ],
    links: [
      { type: "appstore", url: "https://apps.apple.com/app/id6768711101" }
    ]
  },
  {
    id: "airbreaker",
    name: "AirBreaker",
    icon: "assets/icons/airbreaker.jpg",
    accent: "#ad6eb7",
    accentSoft: "#ead8ed",
    platforms: ["iphone"],
    category: { en: "Game", de: "Spiel" },
    tagline: {
      en: "Classic arcade, controlled by your head.",
      de: "Klassisches Arcade-Spiel mit Kopfsteuerung."
    },
    description: {
      en: "A colorful brick breaker with an unexpected twist: move the paddle by tilting your head with supported AirPods. Touch controls, visual themes, power-ups, and Game Center are included too.",
      de: "Ein farbenfroher Brick-Breaker mit besonderer Steuerung: Bewege den Schläger durch Kopfneigung mit unterstützten AirPods. Touch-Steuerung, Themes, Power-ups und Game Center sind ebenfalls dabei."
    },
    highlights: {
      en: ["Optional AirPods head control", "Endless levels and power-ups", "Six visual themes"],
      de: ["Optionale Kopfsteuerung mit AirPods", "Endlose Level und Power-ups", "Sechs visuelle Themes"]
    },
    screenshots: [
      "assets/screenshots/airbreaker/1.webp",
      "assets/screenshots/airbreaker/2.webp",
      "assets/screenshots/airbreaker/3.webp",
      "assets/screenshots/airbreaker/4.webp",
      "assets/screenshots/airbreaker/5.webp"
    ],
    links: [
      { type: "appstore", url: "https://apps.apple.com/app/id6773462525" }
    ]
  },
  {
    id: "portmonitor",
    name: "Port Monitor",
    icon: "assets/icons/portmonitor.png",
    accent: "#9877bb",
    accentSoft: "#e6dbee",
    platforms: ["mac"],
    category: { en: "Network", de: "Netzwerk" },
    tagline: {
      en: "Know what is using every port.",
      de: "Jeden belegten Port im Blick."
    },
    description: {
      en: "Monitor TCP and UDP ports in real time from the menu bar. Identify processes, stop them with one click, pin important ports, and receive change notifications.",
      de: "TCP- und UDP-Ports in Echtzeit über die Menüleiste überwachen. Prozesse erkennen und mit einem Klick beenden, wichtige Ports anheften und Änderungen melden lassen."
    },
    highlights: {
      en: ["Live TCP and UDP monitoring", "One-click process control", "Favorites and alerts"],
      de: ["Live-Überwachung von TCP und UDP", "Prozesssteuerung mit einem Klick", "Favoriten und Benachrichtigungen"]
    },
    screenshots: [
      "assets/screenshots/portmonitor/port_monitor_banner.webp",
      "assets/screenshots/portmonitor/maket.webp"
    ],
    links: [
      { type: "lemon", url: "https://asoft-dev.lemonsqueezy.com/checkout/buy/65cd478d-81a7-4203-9247-4bb9100a7a31?embed=1&discount=0" }
    ]
  },
  {
    id: "snippio",
    name: "Snippio",
    icon: "assets/icons/snippio.png",
    accent: "#667487",
    accentSoft: "#dce1e7",
    platforms: ["mac"],
    category: { en: "Developer Tools", de: "Entwicklertools" },
    tagline: {
      en: "Reusable code, ready when you are.",
      de: "Wiederverwendbarer Code, sofort bereit."
    },
    description: {
      en: "Browse ready-to-use components, generate architecture templates, and keep personal snippets with syntax highlighting. Supports Swift, Python, Kotlin, JavaScript, TypeScript, and more.",
      de: "Fertige Komponenten durchsuchen, Architekturvorlagen generieren und eigene Snippets mit Syntaxhervorhebung speichern. Unterstützt Swift, Python, Kotlin, JavaScript, TypeScript und mehr."
    },
    highlights: {
      en: ["UI components with live previews", "MVVM, VIPER, TCA and more", "Personal snippets with iCloud sync"],
      de: ["UI-Komponenten mit Live-Vorschau", "MVVM, VIPER, TCA und mehr", "Eigene Snippets mit iCloud-Sync"]
    },
    screenshots: [
      "assets/screenshots/snippio/1.webp",
      "assets/screenshots/snippio/2.webp",
      "assets/screenshots/snippio/3.webp",
      "assets/screenshots/snippio/4.webp"
    ],
    links: [
      { type: "appstore", url: "https://apps.apple.com/app/id6767014501" }
    ]
  }
];
