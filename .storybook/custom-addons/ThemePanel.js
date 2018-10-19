import React, { Component } from 'react';
import PropTypes from 'prop-types';
import addons from '@storybook/addons';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
	display: inline-block;
	padding: 12px;
`;

const Button = styled.button`
	display: inline-block;
	padding: 6px;
	outline: none;
	border: 1px solid grey;
	background: transparent;
	border-radius: 5px;
	font-weight: 500;
`;

const SelectedButton = styled(Button)`
	background: lightgrey;
	border: 1px solid darkgrey;
	font-weight: 800;
`;

export default class ThemePanel extends Component {
	constructor(props) {
		super(props);

		const { channel, api } = props;

		/**
		 * setting the channel/api to the instance
		 */
        this.channel = channel ? channel : addons.getChannel();
        this.api = api;

		this.state = {
			currentTheme: '',
			themeNames: [],
		};

		this.channel.on('set-themes', this.setThemes);
        this.channel.on('remove-themes', this.removeThemes);
        this.channel.on('check-params', this.bindWrapperToCheckParams);
    }

    bindWrapperToCheckParams = () => {
        this.checkParams();
    }
    
    checkParams = () => {
        /**
         * Fetching the theme from param to maintain theme during switch between stories
         */
        let themeFromParam = this.api.getQueryParam('currentTheme');

        (themeFromParam && themeFromParam != this.state.currentTheme)
            && this.changeTheme(themeFromParam);
    }

	setThemes = themeNames => {
		this.setState({
			currentTheme: themeNames[0],
			themeNames: themeNames,
		});
	};

	removeThemes = () => {
		this.setState({
			themeNames: [],
		});
	};

	changeTheme = themeName => {
		this.channel.emit('theme-changed', themeName);

		/**
		 * Setting it to the queryParam and state
		 */
		this.props.api.setQueryParams({
			currentTheme: themeName,
		});

		this.setState({
			currentTheme: themeName,
		});
    };

	render() {
        let { currentTheme, themeNames } = this.state;   
		return themeNames.map(name => {
			return (
				<ButtonWrapper key={`${name}-wrapper`}>
					{currentTheme != name ? (
						<Button key={`${name}-button`} onClick={() => this.changeTheme(name)}>
							{name}
						</Button>
					) : (
						<SelectedButton key={`${name}-button`} onClick={() => this.changeTheme(name)}>
							{name}
						</SelectedButton>
					)}
				</ButtonWrapper>
			);
		});
	}

	/**
	 * Remove all the listeners
	 */
	componentWillUnmount() {
		this.channel.removeListener('set-themes', this.setThemes);
        this.channel.removeListener('remove-themes', this.removeThemes);
        this.channel.removeListener('check-params', this.bindWrapperToCheckParams);
	}
}

ThemePanel.propTypes = {
	api: PropTypes.shape({
		getQueryParam: PropTypes.func,
		setQueryParams: PropTypes.func,
	}).isRequired,
	channel: PropTypes.shape({
		emit: PropTypes.func,
		on: PropTypes.func,
		removeListener: PropTypes.func,
	}),
};

ThemePanel.defaultProps = {
	channel: undefined,
};
