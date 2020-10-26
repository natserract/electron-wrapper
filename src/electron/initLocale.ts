import { app, Menu } from 'electron';
import i18n, { initI18n } from './i18next';
import { getMainMenu } from './menu';

export const initLocale = () => {
  initI18n();

  i18n.on('initialized', () => {
    const appLocale = app.getLocale();
    i18n.changeLanguage(appLocale);
  });

  i18n.on('languageChanged', () => {
    const appMenu = getMainMenu(i18n);
    Menu.setApplicationMenu(appMenu);
  });
};
