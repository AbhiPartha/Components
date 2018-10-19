import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const ImageWrapper = styled.img`
    width: ${(props) => props.width }
    height: ${(props) => props.height }
`

const Image = (props) => (
    <ImageWrapper 
        {...props}
    />
)

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string
}

Image.defaultProps = {
    alt: "myAppName",
    height: "inherit",
    width: "inherit"
}

export default Image