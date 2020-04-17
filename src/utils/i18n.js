let __ = (key, _options) => {
  let locales = require(`../locales/${window.localStorage.getItem("locale")}.json`);
  if (window.localStorage.getItem("localeNew")) {
    locales = require(`../locales/${window.localStorage.getItem("localeNew")}.json`);
  } 
  
  const translation = locales[key];
  if (!translation) {
    return key;
  }
  return translation;
}

module.exports = {
  __: __
};
