const translations = {
  en: {
    pageTitle: "aSoftLabs — Native apps for Apple platforms",
    pageDescription: "Native apps for iPhone, iPad, Apple Watch, and Mac — designed and built by aSoftLabs.",
    navApps: "Apps",
    navValues: "About",
    navSupport: "Support",
    heroEyebrow: "Independent apps, thoughtfully made",
    heroTitle: "Small apps.<br><em>Meaningful improvements.</em>",
    heroDescription: "Native tools for everyday life, travel, creativity, and better development workflows — built with care for Apple platforms.",
    exploreApps: "Explore all apps",
    contact: "Get in touch",
    statApps: "native apps",
    statPlatforms: "Apple platforms",
    statDeveloper: "independent developer",
    heroCardCaption: "Relax. We will remind you.",
    catalogEyebrow: "The collection",
    catalogTitle: "Find your next useful app.",
    catalogDescription: "Open any card to see screenshots, features, and download options.",
    filterAll: "All apps",
    emptyState: "No apps match this filter.",
    valuesEyebrow: "Built independently",
    valuesTitle: "Useful by design.<br>Private by default.",
    valueNativeTitle: "Native first",
    valueNativeText: "Fast, focused experiences made specifically for Apple devices.",
    valueClearTitle: "Clear value",
    valueClearText: "Every app solves a real problem without unnecessary complexity.",
    valueHumanTitle: "Human support",
    valueHumanText: "Questions and feedback go directly to the developer behind the apps.",
    footerTagline: "Independent apps for Apple platforms.",
    privacy: "Privacy Policy",
    store: "Store",
    featured: "Featured",
    viewScreens: "View screenshots",
    appStore: "View on the App Store",
    lemon: "Buy directly",
    screenshot: "screenshot"
  },
  de: {
    pageTitle: "aSoftLabs — Native Apps für Apple-Plattformen",
    pageDescription: "Native Apps für iPhone, iPad, Apple Watch und Mac — entwickelt von aSoftLabs.",
    navApps: "Apps",
    navValues: "Über uns",
    navSupport: "Support",
    heroEyebrow: "Unabhängige Apps, mit Sorgfalt entwickelt",
    heroTitle: "Kleine Apps.<br><em>Spürbare Verbesserungen.</em>",
    heroDescription: "Native Werkzeuge für Alltag, Reisen, Kreativität und bessere Entwicklungsabläufe — mit Liebe für Apple-Plattformen gebaut.",
    exploreApps: "Alle Apps entdecken",
    contact: "Kontakt aufnehmen",
    statApps: "native Apps",
    statPlatforms: "Apple-Plattformen",
    statDeveloper: "unabhängiger Entwickler",
    heroCardCaption: "Entspann dich. Wir erinnern dich.",
    catalogEyebrow: "Die Kollektion",
    catalogTitle: "Finde deine nächste nützliche App.",
    catalogDescription: "Öffne eine Karte für Screenshots, Funktionen und Download-Optionen.",
    filterAll: "Alle Apps",
    emptyState: "Keine Apps entsprechen diesem Filter.",
    valuesEyebrow: "Unabhängig entwickelt",
    valuesTitle: "Nützlich gestaltet.<br>Standardmäßig privat.",
    valueNativeTitle: "Konsequent nativ",
    valueNativeText: "Schnelle, fokussierte Erlebnisse speziell für Apple-Geräte.",
    valueClearTitle: "Klarer Nutzen",
    valueClearText: "Jede App löst ein echtes Problem ohne unnötige Komplexität.",
    valueHumanTitle: "Persönlicher Support",
    valueHumanText: "Fragen und Feedback gehen direkt an den Entwickler hinter den Apps.",
    footerTagline: "Unabhängige Apps für Apple-Plattformen.",
    privacy: "Datenschutz",
    store: "Store",
    featured: "Empfohlen",
    viewScreens: "Screenshots ansehen",
    appStore: "Im App Store ansehen",
    lemon: "Direkt kaufen",
    screenshot: "Screenshot"
  }
};

class AppCatalogViewModel {
  constructor(apps) {
    this.apps = apps;
    this.locale = this.resolveInitialLocale();
    this.filter = "all";
    this.activeAppId = null;
    this.slideIndex = 0;
  }

  resolveInitialLocale() {
    try {
      const savedLocale = window.localStorage.getItem("asoft-language");
      if (savedLocale === "en" || savedLocale === "de") return savedLocale;
    } catch (_) {
      // Local storage can be unavailable in privacy-focused browser modes.
    }

    return navigator.language.toLowerCase().startsWith("de") ? "de" : "en";
  }

  setLocale(locale) {
    if (locale !== "en" && locale !== "de") return;
    this.locale = locale;
    this.slideIndex = 0;

    try {
      window.localStorage.setItem("asoft-language", locale);
    } catch (_) {
      // The selected language still applies for the current session.
    }
  }

  setFilter(filter) {
    this.filter = filter;
  }

  get visibleApps() {
    if (this.filter === "all") return this.apps;
    if (this.filter === "iphone") {
      return this.apps.filter((app) => app.platforms.some((platform) => ["iphone", "ipad", "watch"].includes(platform)));
    }
    return this.apps.filter((app) => app.platforms.includes("mac"));
  }

  openApp(appId) {
    if (!this.apps.some((app) => app.id === appId)) return null;
    this.activeAppId = appId;
    this.slideIndex = 0;
    return this.activeApp;
  }

  get activeApp() {
    return this.apps.find((app) => app.id === this.activeAppId) ?? null;
  }

  screenshotsFor(app) {
    if (Array.isArray(app.screenshots)) return app.screenshots;
    return app.screenshots[this.locale] ?? app.screenshots.en;
  }

  moveSlide(offset) {
    const app = this.activeApp;
    if (!app) return;
    const screenshots = this.screenshotsFor(app);
    this.slideIndex = (this.slideIndex + offset + screenshots.length) % screenshots.length;
  }

  selectSlide(index) {
    const app = this.activeApp;
    if (!app) return;
    const screenshots = this.screenshotsFor(app);
    if (index >= 0 && index < screenshots.length) this.slideIndex = index;
  }
}

class AppCatalogView {
  constructor(viewModel) {
    this.viewModel = viewModel;
    this.elements = {
      grid: document.getElementById("appsGrid"),
      emptyState: document.getElementById("emptyState"),
      dialog: document.getElementById("appDialog"),
      dialogClose: document.getElementById("dialogClose"),
      dialogIcon: document.getElementById("dialogIcon"),
      dialogCategory: document.getElementById("dialogCategory"),
      dialogTitle: document.getElementById("dialogTitle"),
      dialogTagline: document.getElementById("dialogTagline"),
      dialogDescription: document.getElementById("dialogDescription"),
      dialogHighlights: document.getElementById("dialogHighlights"),
      dialogPlatforms: document.getElementById("dialogPlatforms"),
      dialogActions: document.getElementById("dialogActions"),
      galleryImage: document.getElementById("galleryImage"),
      galleryCounter: document.getElementById("galleryCounter"),
      galleryPrevious: document.getElementById("galleryPrevious"),
      galleryNext: document.getElementById("galleryNext"),
      galleryThumbnails: document.getElementById("galleryThumbnails")
    };
  }

  start() {
    this.bindEvents();
    this.renderPage();
    document.getElementById("copyrightYear").textContent = new Date().getFullYear();
  }

  bindEvents() {
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => {
        this.viewModel.setLocale(button.dataset.language);
        this.renderPage();
        if (this.elements.dialog.open) this.renderDialog();
      });
    });

    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        this.viewModel.setFilter(button.dataset.filter);
        this.renderFilters();
        this.renderCards();
      });
    });

    this.elements.grid.addEventListener("click", (event) => {
      const card = event.target.closest("[data-app-id]");
      if (card) this.openDialog(card.dataset.appId);
    });

    this.elements.grid.addEventListener("keydown", (event) => {
      const card = event.target.closest("[data-app-id]");
      if (!card || event.target !== card || !["Enter", " "].includes(event.key)) return;
      event.preventDefault();
      this.openDialog(card.dataset.appId);
    });

    this.elements.dialogClose.addEventListener("click", () => this.elements.dialog.close());
    this.elements.dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
    this.elements.dialog.addEventListener("click", (event) => {
      if (event.target === this.elements.dialog) this.elements.dialog.close();
    });

    this.elements.galleryPrevious.addEventListener("click", () => {
      this.viewModel.moveSlide(-1);
      this.renderGallery();
    });

    this.elements.galleryNext.addEventListener("click", () => {
      this.viewModel.moveSlide(1);
      this.renderGallery();
    });

    this.elements.galleryThumbnails.addEventListener("click", (event) => {
      const thumbnail = event.target.closest("[data-slide-index]");
      if (!thumbnail) return;
      this.viewModel.selectSlide(Number(thumbnail.dataset.slideIndex));
      this.renderGallery();
    });

    document.addEventListener("keydown", (event) => {
      if (!this.elements.dialog.open) return;
      if (event.key === "ArrowLeft") {
        this.viewModel.moveSlide(-1);
        this.renderGallery();
      } else if (event.key === "ArrowRight") {
        this.viewModel.moveSlide(1);
        this.renderGallery();
      }
    });
  }

  renderPage() {
    const { locale } = this.viewModel;
    const copy = translations[locale];
    document.documentElement.lang = locale;
    document.title = copy.pageTitle;
    document.querySelector('meta[name="description"]').setAttribute("content", copy.pageDescription);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = copy[element.dataset.i18n];
      if (value) element.innerHTML = value;
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === locale));
    });

    this.renderFilters();
    this.renderCards();
  }

  renderFilters() {
    document.querySelectorAll("[data-filter]").forEach((button) => {
      const isActive = button.dataset.filter === this.viewModel.filter;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  renderCards() {
    const locale = this.viewModel.locale;
    const copy = translations[locale];
    const apps = this.viewModel.visibleApps;

    this.elements.grid.innerHTML = apps.map((app) => {
      const screenshots = this.viewModel.screenshotsFor(app);
      const orientation = ["haltewecker", "pasty", "buropilot", "macreach", "airbreaker"].includes(app.id) ? "portrait" : "landscape";
      const platformLabels = app.platforms.map((platform) => this.platformLabel(platform)).join("");

      return `
        <article
          class="app-card"
          tabindex="0"
          role="button"
          aria-label="${this.escapeHTML(app.name)} — ${this.escapeHTML(copy.viewScreens)}"
          data-app-id="${app.id}"
          data-orientation="${orientation}"
          style="--app-accent:${app.accent};--app-soft:${app.accentSoft}"
        >
          <div class="card-preview">
            <img src="${screenshots[0]}" alt="" loading="lazy" decoding="async">
            <img class="card-icon" src="${app.icon}" alt="" width="64" height="64" loading="lazy">
            ${app.featured ? `<span class="featured-label">${copy.featured}</span>` : ""}
          </div>
          <div class="card-body">
            <div class="card-meta">
              <span class="card-category">${this.escapeHTML(app.category[locale])}</span>
              <span class="platform-icons">${platformLabels}</span>
            </div>
            <h3>${this.escapeHTML(app.name)}</h3>
            <p class="card-tagline">${this.escapeHTML(app.tagline[locale])}</p>
            <div class="card-footer">
              <span>${screenshots.length} ${copy.screenshot}${screenshots.length === 1 ? "" : "s"}</span>
              <button class="card-open" type="button" tabindex="-1" aria-hidden="true">→</button>
            </div>
          </div>
        </article>`;
    }).join("");

    this.elements.emptyState.hidden = apps.length > 0;
  }

  openDialog(appId) {
    if (!this.viewModel.openApp(appId)) return;
    this.renderDialog();
    document.body.classList.add("dialog-open");
    this.elements.dialog.showModal();
  }

  renderDialog() {
    const app = this.viewModel.activeApp;
    if (!app) return;
    const locale = this.viewModel.locale;
    const copy = translations[locale];

    this.elements.dialogIcon.src = app.icon;
    this.elements.dialogIcon.alt = `${app.name} icon`;
    this.elements.dialogCategory.textContent = app.category[locale];
    this.elements.dialogTitle.textContent = app.name;
    this.elements.dialogTagline.textContent = app.tagline[locale];
    this.elements.dialogDescription.textContent = app.description[locale];
    this.elements.dialogHighlights.innerHTML = app.highlights[locale]
      .map((highlight) => `<li>${this.escapeHTML(highlight)}</li>`)
      .join("");
    this.elements.dialogPlatforms.innerHTML = app.platforms.map((platform) => this.platformLabel(platform)).join("");
    this.elements.dialogActions.innerHTML = app.links.map((link) => {
      const isAppStore = link.type === "appstore";
      const label = isAppStore ? copy.appStore : copy.lemon;
      const classes = isAppStore ? "store-button store-button-appstore" : "store-button store-button-lemon lemonsqueezy-button";
      return `<a class="${classes}" href="${link.url}" target="_blank" rel="noopener">${label}</a>`;
    }).join("");

    this.renderGallery();
  }

  renderGallery() {
    const app = this.viewModel.activeApp;
    if (!app) return;
    const copy = translations[this.viewModel.locale];
    const screenshots = this.viewModel.screenshotsFor(app);
    const index = this.viewModel.slideIndex;

    this.elements.galleryImage.src = screenshots[index];
    this.elements.galleryImage.alt = `${app.name} ${copy.screenshot} ${index + 1}`;
    this.elements.galleryCounter.textContent = `${index + 1} / ${screenshots.length}`;
    this.elements.galleryPrevious.disabled = screenshots.length < 2;
    this.elements.galleryNext.disabled = screenshots.length < 2;
    this.elements.galleryThumbnails.innerHTML = screenshots.map((screenshot, thumbnailIndex) => `
      <button
        class="gallery-thumbnail${thumbnailIndex === index ? " active" : ""}"
        type="button"
        data-slide-index="${thumbnailIndex}"
        aria-label="${copy.screenshot} ${thumbnailIndex + 1}"
        aria-current="${thumbnailIndex === index ? "true" : "false"}"
      >
        <img src="${screenshot}" alt="" loading="lazy" decoding="async">
      </button>`).join("");

    const activeThumbnail = this.elements.galleryThumbnails.querySelector(".active");
    activeThumbnail?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  platformLabel(platform) {
    const labels = { iphone: "iPhone", ipad: "iPad", watch: "Watch", mac: "Mac" };
    return `<span class="platform-pill">${labels[platform]}</span>`;
  }

  escapeHTML(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
}

const viewModel = new AppCatalogViewModel(window.APP_CATALOG ?? []);
const catalogView = new AppCatalogView(viewModel);
catalogView.start();
