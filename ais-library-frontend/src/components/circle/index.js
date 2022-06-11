import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 50px;
    @media only screen and (max-width: 780px){
        padding: 20px;
    }
`

const CircleContainer = styled.div`
    background-image: url(${ props => props.url });
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
    width: ${ props => props.width};
    height: ${ props => props.height};
    border-radius: 50%;
    box-shadow: 0px 5px 20px rgb(0 0 0 / 19%);
    &:hover{
        cursor: pointer;
        opacity: 75%;
    }
`
const TitleCircle = styled.span`
    font-size: 15px;
    text-transform: capitalize;
`
export const Circle = ({ width, height, title, url, isOpen })=>(
    <Container>
        <CircleContainer width={ width } height={ height } url={ url } onClick={ isOpen }/>
        <TitleCircle>{ title }</TitleCircle>
    </Container>
)