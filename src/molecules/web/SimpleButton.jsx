import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import Text from "../../atoms/web/Text";

const Wrapper = styled.button`
    border: transparent;
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.white};
    border-radius: 50px;
    padding: 12px;
    max-width: 200px;
`

class SimpleButton extends Component {

    static propTypes = {
        text: PropTypes.string.isRequired
    }

    static defaultProps = {
        text: 'Click Me!', 
    }

    render () {
        return (
            <Wrapper>
                <Text>
                    {this.props.text.toUpperCase()}
                </Text>
            </Wrapper>
        )
    }
}


export default SimpleButton