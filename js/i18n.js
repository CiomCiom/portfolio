// i18n.js — переключение языка сайта (EN / RU).
//
// Английский текст остаётся в HTML как есть. Русские переводы лежат в js/i18n-ru.js.
// Выбранный язык запоминается в браузере и сохраняется при переходе между страницами.
// Ссылкой можно задать язык явно: index.html?lang=ru или index.html?lang=en.

(function () {
  var STORAGE_KEY = 'lang';
  var LANGS = ['en', 'ru'];
  var dict = window.I18N_RU || {};

  var textUnits = new Map(); // элемент → исходный английский HTML
  var attrUnits = [];        // { el, name, en }
  var seenAttrs = new WeakMap();
  var titleEn = document.title;
  var current = 'en';

  var norm = function (s) { return s.replace(/\s+/g, ' ').trim(); };
  var escapeHtml = function (s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };
  var decodeHtml = function (s) {
    var t = document.createElement('textarea');
    t.innerHTML = s;
    return t.value;
  };

  function hasOwnText(el) {
    for (var i = 0; i < el.childNodes.length; i++) {
      var n = el.childNodes[i];
      if (n.nodeType === 3 && n.textContent.trim()) return true;
    }
    return false;
  }

  function collectAttrs(el) {
    ['alt', 'aria-label', 'title'].forEach(function (name) {
      if (!el.hasAttribute(name)) return;
      var names = seenAttrs.get(el) || [];
      if (names.indexOf(name) !== -1) return;
      var value = el.getAttribute(name);
      if (!norm(value)) return;
      names.push(name);
      seenAttrs.set(el, names);
      attrUnits.push({ el: el, name: name, en: value });
    });
  }

  // Находит на странице текстовые блоки и атрибуты, которые можно перевести.
  function scan(root) {
    (function walk(el) {
      if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE' || el.hasAttribute('data-no-translate')) return;
      collectAttrs(el);
      if (textUnits.has(el)) return;
      if (el !== document.body && hasOwnText(el)) {
        textUnits.set(el, el.innerHTML);
        el.querySelectorAll('[alt],[aria-label],[title]').forEach(collectAttrs);
        return;
      }
      for (var i = 0; i < el.children.length; i++) walk(el.children[i]);
    })(root);
  }

  function apply(lang) {
    current = lang;
    var ru = lang === 'ru';

    textUnits.forEach(function (en, el) {
      var tr = ru ? dict[norm(en)] : null;
      var next = tr != null ? tr : en;
      if (el.innerHTML !== next) el.innerHTML = next;
    });

    attrUnits.forEach(function (u) {
      var tr = ru ? dict[escapeHtml(norm(u.en))] : null;
      u.el.setAttribute(u.name, tr != null ? decodeHtml(tr) : u.en);
    });

    var titleRu = dict[escapeHtml(norm(titleEn))];
    document.title = ru && titleRu ? decodeHtml(titleRu) : titleEn;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-set-lang') === lang));
    });
  }

  function save(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initialLang() {
    try {
      var fromUrl = new URLSearchParams(location.search).get('lang');
      if (LANGS.indexOf(fromUrl) !== -1) { save(fromUrl); return fromUrl; }
      var saved = localStorage.getItem(STORAGE_KEY);
      if (LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var browser = (navigator.language || '').toLowerCase();
    return /^(ru|be)\b/.test(browser) ? 'ru' : 'en';
  }

  function bindSwitch() {
    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      if (btn.dataset.bound) return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-set-lang');
        if (lang === current) return;
        save(lang);
        apply(lang);
      });
    });
  }

  function reveal() {
    document.documentElement.classList.remove('i18n-pending');
  }

  // Первый проход — сразу, чтобы не было мелькания английского текста.
  scan(document.body);
  bindSwitch();
  apply(initialLang());

  // Второй проход — для элементов ниже скрипта (например, кнопки закрытия лайтбокса).
  document.addEventListener('DOMContentLoaded', function () {
    scan(document.body);
    bindSwitch();
    apply(current);
    reveal();
  });
  setTimeout(reveal, 0);
})();
