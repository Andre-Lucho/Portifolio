import { injectSpeedInsights } from '@vercel/speed-insights';

import menuTabs from './src/modules/menuTabs.js';
import light_DarkToggleMode from './src/modules/lightToggleMode.js';
import initsmoothScroll from './src/modules/smoothScroll.js';
import initContactMenu from './src/modules/initContactMenu.js';
import iniMobileMenu from './src/modules/initMobileMenu.js';

injectSpeedInsights();

menuTabs();
light_DarkToggleMode();
initsmoothScroll();
initContactMenu();
iniMobileMenu();
