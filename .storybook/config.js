import { setOptions } from '@storybook/addon-options';
import themes from './custom-addons/ThemeDecorator';
import { configure, addDecorator } from '@storybook/react';

import { OrangeStreak } from '../theme/OrangeStreak'
import { VioletSky } from '../theme/VioletSky';

const context = require.context('../stories', true, /Story\.jsx$/);

addDecorator(themes([
  OrangeStreak,
  VioletSky
]));

setOptions({
  name: 'Components',
  goFullScreen: false,
  addonPanelInRight: true,
  showSearchBox: false,
  showAddonPanel: true,
  showStoriesPanel: true
});

function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);