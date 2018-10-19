import React from "react";
import PropTypes from 'prop-types';
import styled, { withTheme } from "styled-components";

const PrimaryText = styled.div`
    letter-spacing: ${(props) => props.theme.letterSpacing.button};
    font-weight: ${(props) => props.theme.fontWeight.button};
    text-align: center;
`

const Text = (props) => (
    <PrimaryText>
        {props.children}
    </PrimaryText>
)

Text.propTypes = {
    theme: PropTypes.object.isRequired
}

export default withTheme(Text)