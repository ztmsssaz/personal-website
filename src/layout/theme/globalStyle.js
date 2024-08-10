import {createGlobalStyle} from 'styled-components'
export const GlobalStyle = createGlobalStyle`

*{
  font-family: 'lato-bla';
  font-weight: normal;
}
.maskProfile{
    height: 100%;
    width: 100%;
    mask-image: url('./assets/images/super-ellipse-mask.svg');
    mask-repeat: no-repeat;
    position: relative;
    max-width: 390px;
}
h{
  &1{
    font-size: 40px;
    font-weight: bold;
  }
  &2{
    font-size: 25px;
  }
  &3{
    font-size: 20px;
  }
  &4{
    font-size: 16px;
  }
  &5{
    font-size: 12px;
  }
  &4{
    font-size: 10px;
  }
}
`
