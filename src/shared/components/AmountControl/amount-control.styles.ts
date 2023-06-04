import styled from 'styled-components'

export const AmountControlContainer = styled.div`
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  button {
    padding: 0 8px;

    background: transparent;
    color: ${(props) => props.theme.purple};

    display: flex;
    align-items: center;

    :hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
  span {
    padding: 8.5px 4px;
    line-height: 21px;
    color: ${(props) => props.theme['base-title']};
  }
`
