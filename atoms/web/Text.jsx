import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const PrimaryText = styled.div`
    color: black;
    text-align: center;
`

const Text = (props) => (
    <PrimaryText>
        {props.children}
    </PrimaryText>
)

Text.propTypes = {
    name: PropTypes.string
}

Text.defaultProps = {
    name: 'stranger'
}

export default Text