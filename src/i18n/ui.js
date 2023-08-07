export const languages = {
  fr: 'Français',
  en: 'English',
};

export const defaultLang = 'fr';

export const ui = {
  en: {
    'nav.about': {path:'about', title: 'about me'},
    'nav.projects': {path:'projects', title: 'projects'},
  },
  fr: {
    'nav.about': {path:'à propos', title: 'à propos'},
    'nav.projects': {path:'projets', title: 'projets'},
  },
};
/* ui[lang] */
console.log(Object.entries(ui["en"]));