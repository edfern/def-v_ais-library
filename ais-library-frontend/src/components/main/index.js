import React from 'react'

import styled from 'styled-components'
import { Wrap } from '../container'


const MainContainer =  styled.div`
    background: #d1d1d12e;
    display: flex;
    min-height: 100vh;
`

const Container = styled.div`
    margin-top: 80px;
    background: white;
    width: 85%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 25px;
    min-height: 85vh;
`

export const Main = ({ children }) =>{
    return (
        <>
        <MainContainer>
            <Container>
                <Wrap>{ children }</Wrap>
            </Container>
        </MainContainer>
        </>
    )
}