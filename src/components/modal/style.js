import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Style = styled.div`
  .modal {
    position: fixed;
    opacity: 0;
    z-index: -1;
    transition: all 0.3s ease-out;
    &.show {
      z-index: 11;
      opacity: 0.8;
    }
  }
  .modal-dialog {
    z-index: -1;
    opacity: 0;
    top: 50%;
    transition: all 0.3s ease-in-out;
    &.show {
      z-index: 20;
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`
