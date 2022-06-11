import styled, { keyframes } from 'styled-components'


import { Title } from '../typography'


const WrapWidget = styled.div`
    width: 100%;
    height: auto;
    padding: 10px;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 20px;
    border-top: 4px solid ${props => props.color};
    box-shadow: 0px 5px 20px rgb(0 0 0 / 19%);
    &:hover{
        box-shadow: 0px 10px 25px rgb(0 0 0 / 21%);
    }
    &:hover ${()=>IconWidget}{
        animation: ${()=> Rotate } .9s linear normal;
    }
    &:hover ${()=> Number}{
        animation: ${()=> Rotate} .9s ease;
    }

`
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc((100% - 20px)/2);
   
`
const InfoWidget = styled.div`
    width: 100%;
    display: block;
    text-align: center;
`
const InfoBody = styled.div`
`
const Number = styled.h1`
`

const IconWidget = styled.div`
    width: 60px;
    height: 60px;
    background: ${props => props.color +'3d'};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.color};
    font-size: 30px; 
    
`
const Rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(10deg);
    }
    30% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(5deg);
    }
    70% {
      transform: rotate(0deg);
    }
    80% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
`

export const Widget = ({color, title, number, description, icon, }) => {
    return(
        <WrapWidget color={color}>
            <Container>
                <Item>
                    <InfoWidget>
                        <Title size="19px" text={title}/>
                        <InfoBody>
                            <Number>{number}</Number>
                            <small>{description}</small>
                        </InfoBody>
                    </InfoWidget>
                </Item>
                <Item>
                    <IconWidget color={color}>
                        {icon}
                    </IconWidget>
                </Item>
            </Container>
        </WrapWidget>
    )
}

