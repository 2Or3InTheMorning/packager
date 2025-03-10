import {derived} from 'svelte/store';
import writablePersistentStore from '../p4/persistent-store';
import englishMessages from '!../build/unstructure-translations-loader!./en.json';
import localeNames from './locale-names.json';

const allMessages = {
  en: () => englishMessages,
  // Generated code:
  /*===*/
  "ca": () => require("./ca.json"),
  "cs": () => require("./cs.json"),
  "de": () => require("./de.json"),
  "es": () => require("./es.json"),
  "fr": () => require("./fr.json"),
  "it": () => require("./it.json"),
  "ja": () => require("./ja.json"),
  "ko": () => require("./ko.json"),
  "lt": () => require("./lt.json"),
  "nl": () => require("./nl.json"),
  "pl": () => require("./pl.json"),
  "pt": () => require("./pt.json"),
  "pt-br": () => require("./pt-br.json"),
  "ru": () => require("./ru.json"),
  "sl": () => require("./sl.json"),
  "tr": () => require("./tr.json"),
  "zh-cn": () => require("./zh-cn.json"),
  "zh-tw": () => require("./zh-tw.json"),
  /*===*/
};

const supportedLocales = {};
// Iterate over localeNames to preserve order
for (const key of Object.keys(localeNames)) {
  if (allMessages[key]) {
    supportedLocales[key] = localeNames[key];
  }
}

const getInitialLocale = () => [
  navigator.language.toLowerCase(),
  navigator.language.toLowerCase().split('-')[0]
].find(i => allMessages[i]) || 'en';

const locale = writablePersistentStore('P4.locale', getInitialLocale());
locale.subscribe((lang) => {
  if (!allMessages[lang]) {
    locale.set('en');
  }
  document.documentElement.lang = lang;
});

const getProperty = (obj, id) => {
  const parts = id.split('.');
  for (let i = 0; i < parts.length - 1; i++) {
    obj = obj[parts[i]];
    if (!obj) {
      return null;
    }
  }
  return obj[parts[parts.length - 1]] || null;
};

const translate = derived(locale, (locale) => {
  const localMessages = allMessages[locale]();
  /**
   * @param {string} id Message ID
   * @returns {string} Translated message
   */
  const translateMessage = (id) => {
    return getProperty(localMessages, id) || getProperty(englishMessages, id) || id;
  };
  translate.translate = translateMessage;
  return translateMessage;
});

export {
  locale,
  supportedLocales,
  translate as _
};
