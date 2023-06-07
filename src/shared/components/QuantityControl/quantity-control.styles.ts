import styled from 'styled-components'

export const QuantityControlContainer = styled.div`
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

    :disabled {
      opacity: 0.6;
    }
  }
  span {
    padding: 8.5px 4px;
    line-height: 21px;
    color: ${(props) => props.theme['base-title']};
  }
  .in-cart {
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 600;
  }
`
