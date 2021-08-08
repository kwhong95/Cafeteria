import styled from '@emotion/styled'

interface ModeChangeProps {
  mode: boolean;
}


export const Container = styled.div<ModeChangeProps>`
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
  
  :before {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: ${props => props.mode ? '52%' : '48%'};
    background-image: linear-gradient(-45deg, #FDDFCA 0%, #FCB37E 100%);
    transition: 1.8s ease-in-out;
    border-radius: 50%;
    z-index: 6;
    transform: ${props => props.mode ?  'translate(100%, -50%)' : 'translateY(-50%)'};
  }

  @media (max-width: 870px) {
    min-height: 800px;
    height: 100vh;

    :before {
      width: 1500px;
      height: 1500px;
      transform: ${props => props.mode ?  'translate(-50%, 100%)' : 'translateX(-50%)'};
      left: 30%;
      bottom: ${props => props.mode ?  '32%' : '68%'};
      right: initial;
      top: initial;
      transition: 2s ease-in-out;
    }
  }
`

export const FormsContainer = styled.div<ModeChangeProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  
`

export const LoginAndResister = styled.div<ModeChangeProps>`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: ${props => props.mode ? '25%' : '75%'};
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;

  @media (max-width: 870px) {
    width: 100%;
    top: ${props => props.mode ? '35%' : '95%'};
    transform: ${props => props.mode ? 'transform: translate(-50%, 0)' : 'translate(-50%, -100%)'};
    transition: 1s 0.8s ease-in-out;
    left: 50%
  }
`

export const LoginForm = styled.form<ModeChangeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: ${props => props.mode ? '1' : '2'};
  opacity: ${props => props.mode ? '0' : '1'};
`

export const ResisterForm = styled.form<ModeChangeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: ${props => props.mode ? '2' : '1'};
  opacity: ${props => props.mode ? '1' : '0'};
  
`

export const Title = styled.h2`
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
`

export const InputField = styled.div`
  max-width: 380px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
  
  i {
    text-align: center;
    line-height: 55px;
    color: #acacac;
    transition: 0.5s;
    font-size: 1.1rem;
  }
  
  input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
  }
  
  input::placeholder {
    color: #aaa;
    font-weight: 500;
  }
`

export const BtnSolid = styled.input`
  width: 150px;
  background-color: #FDDFCA;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
  
  :hover {
    background-color: #FCB37E;
  }
`

export const SocialText = styled.p`
  padding: 0.7rem 0;
  font-size: 1rem;
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
`

export const SocialIcon = styled.a`
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  color: #333;
  border-radius: 50%;
  border: 1px solid #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;
`

export const PanelsContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
  @media (max-width: 870px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }
`

export const LeftPanel = styled.div<ModeChangeProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
  padding: 3rem 17% 2rem 12%;
  pointer-events: ${props => props.mode ?  'none' : 'all'};
  
  h3, p, button, img {
    transform: ${props => props.mode ?  'translateX(-800px)' : 'translateX(0)'};
  }
  
  @media(max-width: 870px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    
    h3, p, button, img {
      transform: ${props => props.mode && 'translateY(-300px)'};
    }
  }
 `

export const Content = styled.div`
  color: #7D6E64;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
  
  button {
    margin: 0;
    background: none;
    border: 2px solid #fff;
    width: 130px;
    height: 41px;
    font-weight: 600;
    font-size: 0.8rem;
    cursor: pointer;
  }
  
  @media (max-width: 870px) {
    padding-right: 15%;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.8s;
    
    button {
      width: 110px;
      height: 35px;
      font-size: 0.7rem;
    }
  }
`

export const AnimationImg = styled.img`
  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
  
  @media (max-width: 870px) {
    width: 200px;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }
`

export const PanelBigText = styled.h3`
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
  
  @media(max-width: 870px) {
    font-size: 1.2rem;
  }
`

export const PanelSmallText = styled.p`
  font-size: 0.95rem;
  padding: 0.7rem 0;

  @media(max-width: 870px) {
    font-size: 0.7rem;
    padding: 0.5rem 0;
  }
`

export const RightPanel = styled.div<ModeChangeProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
  padding: 3rem 12% 2rem 17%;
  pointer-events: ${props => props.mode ?  'all' : 'none'};
  
  h3, p, button, img {
    transform: ${props => props.mode ? 'translateX(0%)' : 'translateX(800px)'};
  }

  @media(max-width: 870px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    
    h3, p, button, img {
      transform: ${props => props.mode && 'transform: translateY(0px)'};
    }
  }
`