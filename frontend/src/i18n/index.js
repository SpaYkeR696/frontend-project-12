import i18next from 'i18next';
import ru from './resources/ru.js';

const i18Instance = i18next.createInstance();
i18Instance.init({
  lng: 'ru',
  debug: false,
  ru,
});

export default i18Instance;
