import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const WrapAvatar = styled.div`
    margin-top: ${ props => props.mt };
    flex-wrap: wrap;
    justify-content: ${ props => props.jc };
    align-items: center;
    width: 100%;
    height: 100px;
    text-align: center;
    display: flex;
`

const PhotoComponent = styled.div`
    width: ${ props => props.width };
    height: ${ props => props.height };
    border-radius: 50%;
    background-image: url(${(props) => props.url});
    background-size: cover;
    transition: all .3s ease;
    
`

const InfoComponent = styled.div`
    text-align: center;
    display: grid;
`

export const Avatar = ({ children, url, width, height, mt, jc }) => (
    <WrapAvatar mt={ mt } jc={ jc }>
        <PhotoComponent url={ url } width={ width } height={ height }/>
        <InfoComponent>{ children }</InfoComponent>
    </WrapAvatar>
)

WrapAvatar.propTypes = {
    children: PropTypes.node.isRequired,
    url: PropTypes.string,
    mt: PropTypes.string
}

WrapAvatar.defaultProps = {
    url: '',
    mt: '0',
}

