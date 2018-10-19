import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import Image from "../../atoms/web/Image";

const CircularWrapper = styled.div`
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.color.primary};
    background-color: transparent;
    width: ${ (props) => props.ratio };
    height: ${ (props) => props.ratio };
    overflow: hidden;
`

class CircularImageView extends Component {

    static propTypes = {
        ratio: PropTypes.string,
        imageUrl: PropTypes.string.isRequired
    }

    static defaultProps = {
        ratio: '150px',
    }

    render () {

        return (
            <CircularWrapper {...this.props}>
                <Image src={this.props.imageUrl} />
            </CircularWrapper>
        )
    }
}


export default CircularImageView