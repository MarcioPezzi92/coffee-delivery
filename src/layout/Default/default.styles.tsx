import styled from 'styled-components'

export const LayoutContainer = styled.div`
  margin: 0 0.5rem;

  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    max-width: 1120px;
    width: 100%;
  }
`
