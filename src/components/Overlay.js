import config from '../config'
import styled from 'styled-components'
import posed from 'react-pose'
import Lottie from 'react-lottie'
import alertAnimation from '../assets/images/alert_animation'
import winAnimation from '../assets/images/win_animation'
import startAnimation from '../assets/images/start_animation'

const FadeInUp = posed.div({
  mounted: { opacity: 1, y: 0 },
  unmounted: { opacity: 0, y: 200 }
})

const alertOptions = {
    loop: true,
    autoplay: true,
    animationData: alertAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};
const winOptions = {
    loop: true,
    autoplay: true,
    animationData: winAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};
const startOptions = {
    loop: true,
    autoplay: true,
    animationData: startAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};
const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`

const Background = styled.div`
  background-color: ${config.green};
  height: 100%;
  left: 0;
  opacity: 0.9;
  position: absolute;
  top: 0;
  width: 100%;
`

const Content = styled.div`
  align-items: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 10;
`

const Title = styled.h2`
  font-size: 60px;
  line-height: 1;
  margin: 0 0 20px;
`

const Text = styled.p`
  font-size: 20px;
  line-height: 1.7;
  margin: 0 auto 20px;
  max-width: 600px;
  width: 100%;
`

const Button = styled.button`
  background-color: ${config.red};
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  outline: none;
  padding: 20px 30px;
  transition: background-color 200ms ease-out;

  &:hover, &:focus {
    background-color: ${config.black};
  }
`

export function StartOverlay({ onClick }) {
  return <Overlay
    title='Mau Mau Game'
    animation={startOptions}
    buttonLabel='Start the game'
    onClick={onClick}
  />
}

export function LastCardOverlay({ name }) {
  return <Overlay title={`Last card for ${name}!`}  animation={alertOptions}/>
}

export function WinnerOverlay({ name, onClick }) {
  return <Overlay
    title={`Game over! ${name} has won!`}
    animation={winOptions}
    text='That was fun! Want to make them play again?'
    buttonLabel='Play again'
    onClick={onClick}
  />
}

function Overlay({ title, text, onClick, buttonLabel,animation }) {
  return (
    <Container>
      <Background />
      <Content>
          <Lottie options={animation}
                  height={400}
                  width={400}>

          </Lottie>
        {title && <FadeInUp initialPose='unmounted' pose='mounted'><Title>{title}</Title></FadeInUp>}
        {text && <FadeInUp initialPose='unmounted' pose='mounted'><Text>{text}</Text></FadeInUp>}
        {onClick && buttonLabel && <FadeInUp initialPose='unmounted' pose='mounted'><Button onClick={() => onClick()}>{buttonLabel}</Button></FadeInUp>}
      </Content>
    </Container>
  )
}
