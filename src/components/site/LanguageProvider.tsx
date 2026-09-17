import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "EN" | "FR";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (value: string) => string;
};

const TRANSLATIONS: Record<string, string> = {
  Home: "Accueil",
  About: "A propos",
  Capabilities: "Expertises",
  Work: "Projets",
  Ecosystem: "Ecosysteme",
  Insights: "Perspectives",
  Contact: "Contact",
  "Start a project": "Demarrer un projet",
  "Architectural Tech & Design Studio": "Studio d'architecture, technologie et design",
  "Ideas are everywhere.": "Les idees sont partout.",
  "We turn the right ones into": "Nous transformons les bonnes idees en",
  "something real.": "quelque chose de concret.",
  "At Nloga, we bring strategy, product design, technology, and creative thinking together to build digital products and brands that people can understand, use, trust, and remember.":
    "Chez Nloga, nous reunissons strategie, design produit, technologie et creativite pour construire des produits numeriques et des marques que les gens comprennent, utilisent, font confiance et retiennent.",
  Navigate: "Navigation",
  Social: "Reseaux sociaux",
  "Privacy Policy": "Politique de confidentialite",
  "Terms & Conditions": "Conditions generales",
  Capability: "Expertise",
  "Page not found": "Page introuvable",
  "This page didn't load": "Cette page ne s'est pas chargee",
  "Something went wrong on our end. You can try refreshing or head back home.":
    "Un probleme est survenu de notre cote. Vous pouvez actualiser la page ou revenir a l'accueil.",
  "Go home": "Retour a l'accueil",
  "Start a project.": "Demarrer un projet.",
  "About & our story": "A propos et notre histoire",
  "Thinking, written down.": "La reflexion mise en mots.",
  "Notes on product, design, brand and learning. The entries below are placeholders.":
    "Notes sur le produit, le design, la marque et l'apprentissage. Les articles ci-dessous sont des exemples.",
  "Tell us what you are trying to build, change or learn. The more specific you are, the more useful our first reply will be.":
    "Dites-nous ce que vous souhaitez construire, changer ou apprendre. Plus votre demande sera precise, plus notre premiere reponse sera utile.",
  "Building digital products and brands from strategy through execution.":
    "Nous construisons des produits numeriques et des marques, de la strategie a l'execution.",
  "Think deeply. Design intentionally. Build properly.":
    "Reflechir en profondeur. Concevoir avec intention. Construire correctement.",
  "Three Directions.": "Trois directions.",
  "Explore Our Services": "Decouvrir nos services",
  "Discover Our Ecosystem": "Decouvrir notre ecosysteme",
  "Digital products & software": "Produits numeriques et logiciels",
  "Brand, visual & creative design": "Design de marque, visuel et creatif",
  "Learning, training & development": "Apprentissage, formation et developpement",
  "Product & Design Training Program": "Programme de formation produit et design",
  "Learn.": "Apprendre.",
  "Create.": "Creer.",
  "Grow.": "Grandir.",
  "Learn from experts. Build real skills. From UX to full-stack, motion design and business thinking — all in one place.":
    "Apprenez aupres d'experts. Developpez des competences concretes, de l'UX au full-stack, au motion design et a la strategie — au meme endroit.",
  "Join Now": "Rejoindre maintenant",
  "Watch Intro": "Voir l'introduction",
  "Brands, Experiences, Visual Identities.": "Marques, experiences, identites visuelles.",
  "Graphic Design": "Design graphique",
  "Brand Identity": "Identite de marque",
  "Digital Campaigns": "Campagnes digitales",
  "CreativePics Art": "CreativePics Art",
  "We Design": "Nous concevons",
  "Explore CreativePics Art": "Decouvrir CreativePics Art",
  "Discover all courses": "Decouvrir toutes les formations",
  "View All Programs": "Voir tous les programmes",
  "Learn More": "En savoir plus",
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("EN");

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("nloga-language", nextLanguage);
      document.documentElement.lang = nextLanguage === "FR" ? "fr" : "en";
    }
  };

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("nloga-language");
    if (savedLanguage === "FR") setLanguage("FR");
  }, []);

  const t = (value: string) => (language === "FR" ? TRANSLATIONS[value] ?? value : value);

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
