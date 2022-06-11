import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { FcApproval, FcHighPriority, FcDisapprove } from "react-icons/fc"

const Container = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    border-bottom: none;
    justify-content: center;
    color: white;
    font-size:15px;
    padding: 5px;
    backdrop-filter: blur(10px);
    text-transform: initial;
    ${props => props.type === "1" && css `
        background-color: #0086525c;
    `}
    
    ${props => props.type === "2" && css `
        background-color: #ae850375;
    `}
    ${props => props.type === "3" && css `
        background-color: #86000061;
    `}
    @media only screen and (max-width: 780px){
        padding: 10px;
        text-align: center;
        font-size: 15px;
    }
    
    animation-name: ${()=>fadeInDown};
    animation-duration: .3s;
    animation-fill-mode: both;
`
const fadeInDown = keyframes`
    0%{
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }
    100%{
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }

`

const IconSucces = styled(FcApproval)`
    margin-right:20px;
    width:25px;
    height:25px;
    @media only screen and (max-width: 780px){
        margin-right: 5px;
    }
    @media only screen and (max-width: 320px){
        margin-right: 0;
    }
`
const IconWarning = styled(FcDisapprove)`
    margin-right:20px;
    width:25px;
    height:25px;
    @media only screen and (max-width: 780px){
        margin-right: 5px;
    }
    @media only screen and (max-width: 320px){
        margin-right: 0;
    }
`
const IconDanger = styled(FcHighPriority)`
    margin-right:20px;
    width:25px;
    height:25px;
    @media only screen and (max-width: 780px){
        margin-right: 5px;
    }
    @media only screen and (max-width: 320px){
        margin-right: 0;
    }
`



export const Message = ({ children, type }) => (
    <Container type={type}>
        {type === "1" ? <IconSucces/>: "" || type === "2" ? <IconWarning/>: "" || type === "3" ? <IconDanger/>: ""}{ children }
    </Container>
)

Message.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string
}
