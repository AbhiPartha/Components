import { setOptions } from '@storybook/addon-options';
import centered from './decorated-center';
import { configure, addDecorator } from '@storybook/react';

const context = require.context('../stories', true, /Story\.jsx$/);

addDecorator(centered);

setOptions({
  name: 'Organism',
  goFullScreen: false,
  addonPanelInRight: false,
  showSearchBox: false,
  showAddonPanel: false,
  showStoriesPanel: true
});

function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);