import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const TextBox = styled.input`
    width: ${(props) => props.width }
    height: ${(props) => props.height }
`

const TextBox = (props) => (
    <InputWrapper 
        {...props}
    />
)

TextBox.propTypes = {
    type: PropTypes.string.isRequired,
    alt: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string
}

TextBox.defaultProps = {
    alt: "myAppName",
    height: "inherit",
    width: "inherit"
}

export default TextBox