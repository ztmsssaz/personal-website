import styled from 'styled-components'

export const Style = styled.div`
  header {
    transition: all 0.3s ease-in-out;
    top: 0;
    &.hiddenHeader {
      top: -250px;
    }
  }
`
