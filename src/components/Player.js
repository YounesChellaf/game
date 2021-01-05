import Card from './Card'
import config from '../config'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components'

const CardContainer = posed.div({
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 }
})

const Container = styled.div`
  border-radius: 4px;
  overflow: hidden;
  padding-top: 50px;
  margin-bottom: 200px;
  width: 100%;
  height: 70%;

  @media (${config.viewportM}) {
    width: calc(50% - 100px);
  }
`

const CardsContainer = styled.div`
  display: flex;
  position: relative;
`

const StyledCardContainer = styled(CardContainer)`
  display: block;

  &:not(:first-child) {
    left: ${({ index }) => `${index * 70}px`};
    position: absolute;
    top: 0;
  }
`

const Name = styled.div`
  color: #fff;
  margin-top: -30px;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
`

export default function Player({ cards, name }) {
  return (
    <Container>
      <CardsContainer>
        <PoseGroup>
          {cards.map(({ type, number }, i) => (
            <StyledCardContainer key={i} index={i}>
              <Card key={i} type={type} number={number} />
            </StyledCardContainer>
          ))}
        </PoseGroup>
      </CardsContainer>
        <Name>{name}</Name>
    </Container>
  )
}
