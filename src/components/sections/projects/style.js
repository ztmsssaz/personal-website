import styled from 'styled-components'

export const Style = styled.div`
  div#projects {
    background-image: url('./assets/images/binary-bg.jpg');
    background-size: cover;
    .box {
      img {
        transition-duration: 300ms;
      }
      &:hover img {
        transform: scale(1.05);
      }
    }
  }
`
