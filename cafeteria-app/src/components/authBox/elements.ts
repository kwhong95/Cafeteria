import styled from '@emotion/styled'

export const FormsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export const LoginAndResister = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
`

export const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: 2;
`

export const ResisterForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: 1;
  opacity: 0;
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
  
  image {
    width: 100%;
    
  }
`

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
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
  }
`

export const PanelBigText = styled.h3`
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
`

export const PanelSmallText = styled.p`
  font-size: 0.95rem;
  padding: 0.7rem 0;
`

export const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
`