const getLangFromLocaleString = (
  localeStr: typeof navigator['languages'][0],
) => {
  const lang = /^(.{2})\-.{2}$/g.exec(localeStr);
  if (lang) {
    return lang[1];
  }
  return '';
};

if (!navigator.languages) {
  navigator.languages = (function () {
    let langs = [];
    let lang;
    if (navigator.language) {
      langs.push(navigator.language);
      lang = getLangFromLocaleString(navigator.language);
      if (lang) {
        langs.push(lang);
      }
    } else if (navigator.userLanguage) {
      langs.push(navigator.userLanguage);
      lang = getLangFromLocaleString(navigator.userLanguage);
      if (lang) {
        langs.push(lang);
      }
    } else if (navigator.browserLanguage) {
      langs.push(navigator.browserLanguage);
      lang = getLangFromLocaleString(navigator.browserLanguage);
      if (lang) {
        langs.push(lang);
      }
    }
    return langs;
  })();
}
