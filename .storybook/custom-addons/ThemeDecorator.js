import React from 'react';
import PropTypes from 'prop-types';
import addons from '@storybook/addons';

import { ThemeProvider } from 'styled-components';
import { StyleSheet, View } from 'react-native';

// Default theme for components
import { Bleedblue as defaultTheme } from '../../theme/Bleedblue'

const styles = StyleSheet.create({
  root: {
    minHeight: '100vh',
    maxWidth: 760,
    marginHorizontal: 'auto'
  }
});

export class ThemeDecorator extends React.Component {
  constructor(props) {
    super(props);

		/**
		 * Getting the channel and the renderStory function
		 */
    const { channel, renderStory } = props;

		/**
		 * setting the channel,api to the instance
		 */
    this.channel = channel ? channel : addons.getChannel();

		/**
		 * setting the story to the instance
		 */
    this.story = renderStory();

		/**
		 * getting the list of theme names
		 */
    this.themeNames = [];
    this.themeNames.push(defaultTheme.name)

		/**
		 * creating the map of themes with themename as key
		 */
    this.themeMap = {
      [defaultTheme.name]: defaultTheme
    };

    /**
     * State of the component
     */
    this.state = {
      currentTheme: defaultTheme.name
    }

    // getting the content from the props.
    this.props.themes.map(theme => {

      // Assigning the theme based on name
      this.themeMap[theme.name] = theme;

      // getting all the theme names
      this.themeNames.push(theme.name);
    });

    /**
     * Listening to
     */
    this.channel.on('theme-changed', this.handleThemeChange);

		/**
		 * broadcasting the themeNames while mounting the decorator
		 */
    this.channel.emit('set-themes', this.themeNames );
  }

  componentWillMount() {
    this.channel.emit('check-params');
  }

	/**
	 * If story changed, then reassigning new story
	 */
  componentWillReceiveProps(nextProps) {

    // TODO: Dynamic theme changing

    if (nextProps.story !== this.props.story) {
      this.story = nextProps.renderStory();
    }
  }

	/**
	 * broadcasting to remove the themes.
	 */
  componentWillUnmount() {
    /**
     * clearing the themes
     */
    this.channel.emit('remove-themes');

    /**
     * Removing all the listeners
     */
    this.channel.removeListener('theme-changed', this.handleThemeChange);
    this.handleThemeChange = () => undefined;
  }

	/**
	 * Handle if theme changes
	 */
  handleThemeChange = (themeName) => {
    this.setState({
      currentTheme: themeName,
    });
  };

  render() {
    const themeName = this.state.currentTheme;
    const theme = this.themeMap[themeName];

    return (
      <ThemeProvider theme={theme}>
        <View style={styles.root}>{
          this.story
        }</View>
      </ThemeProvider>
    );
  }
}

ThemeDecorator.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.object),
  channel: PropTypes.shape({
    emit: PropTypes.func,
    on: PropTypes.func,
    removeListener: PropTypes.func,
  }),
  renderStory: PropTypes.func.isRequired,
};

ThemeDecorator.defaultProps = {
  themes: [],
  channel: undefined,
};

export default themes => story => <ThemeDecorator renderStory={story} themes={themes} />;
