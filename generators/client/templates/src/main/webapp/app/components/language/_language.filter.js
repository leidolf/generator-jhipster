(function() {
    'use strict';

    angular
        .module('<%=angularAppName%>')
        .filter('findLanguageFromKey', findLanguageFromKey);

    function findLanguageFromKey() {
        return findLanguageFromKeyFilter;

        function findLanguageFromKeyFilter(lang) {
            return {
                'ca': 'Català',
                'da': 'Dansk',
                'de': 'Deutsch',
                'el': 'Ελληνικά',
                'en': 'English',
                'es': 'Español',
                'fr': 'Français',
                'gl': 'Galego',
                'hu': 'Magyar',
                'it': 'Italiano',
                'ja': '日本語',
                'ko': '한국어',
                'nl': 'Nederlands',
                'pl': 'Polski',
                'pt-br': 'Português (Brasil)',
                'pt-pt': 'Português',
                'ro': 'Română',
                'ru': 'Русский',
                'sv': 'Svenska',
                'ta': 'தமிழ்',
                'tr': 'Türkçe',
                'zh-cn': '中文（简体）',
                'zh-tw': '繁體中文'
            }[lang];
        }
    }
})();
