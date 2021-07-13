## 🔥️ Petite Vue I18n Lite

A super lightweight and minimal plugin that introduces internationalization into your [Petite Vue](https://github.com/vuejs/petite-vue) app with a simple API.

## 🚀 Usage

```js
import { createApp } from 'petite-vue';
import { createI18n } from 'petite-vue-i18n-lite';

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: {
            home: 'Home'
        }
    }
});

createApp(i18n).mount();
```

Then use it in your HTML: `<p>{{t('home')}}</p>`

You can optionally add a `v-t` directive, provided that `i18n` is reactive:

```js
import { createApp, reactive } from 'petite-vue';
import { createI18n } from 'petite-vue-i18n-lite';

const i18n = reactive(createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: {
            home: 'Home'
        }
    }
}));

createApp(i18n).directive('t', ({el, get, effect}) => effect(() => el.textContent = i18n.t(get()))).mount();
```

Then use it in your HTML: `<p v-t="'home'">Home</p>`

You can find the current locale using: `{{current}}`

You can change it using: `@click="changeLocale('en')"`

## 📦 Install

```bash
yarn add petite-vue-i18n-lite
```

### CDN

```html
<script src="https://unpkg.com/petite-vue-i18n-lite"></script>
```

It will be exposed to global as `window.VueI18nLite`


## 📄 License

MIT License © 2021 [Erik Pham](https://github.com/erikpham) &amp; [niu tech](https://github.com/niutech)
