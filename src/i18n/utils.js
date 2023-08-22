import { alt, ui, defaultLang, languages } from './ui';

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang;
  return defaultLang;
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
export function useAltTranslations(lang) {
  return function t(key) {
    return alt[lang][key] || alt[defaultLang][key];
  }
}

export function changeCurrentPathLang(path,from,to) {
  const pathnamelayers = path.split("/");
  const [, , page, ...rest] = pathnamelayers;
  const decodedPageURL = decodeURIComponent(page);

  const currentLangEntries = Object.entries(ui[from]);
  const foundedEntry = currentLangEntries.find(([, val]) =>
    val.path.includes(decodedPageURL)
  );

  const key = foundedEntry ? foundedEntry[0] : null;
  return page
  ? `/${to}/${foundedEntry ? ui[to][key].path : decodedPageURL}${rest && `/${rest.join("/")}`}`
  : `/${to}`;
}

