import styled from 'styled-components'

export const Style = styled.div`
  div#projects {
    position: relative;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('./assets/images/binary-bg.jpg');
      background-size: cover;
      z-index: -1;
    }
    .box {
      z-index: 2;
      img {
        transition-duration: 300ms;
      }
      &:hover img {
        transform: scale(1.05);
      }
    }
  }
`
