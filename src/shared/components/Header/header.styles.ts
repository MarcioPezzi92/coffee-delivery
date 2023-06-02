import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const LocationButton = styled.button`
  padding: 0.5rem;

  border-radius: 0.375rem;
  background: ${(props) => props.theme['purple-light']};

  display: flex;
  align-items: center;
  gap: 0.465rem;

  span {
    font-size: 14px;
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const ShoppingCartButton = styled.button`
  position: relative;
  padding: 0.5rem;

  border-radius: 0.375rem;
  background: ${(props) => props.theme['yellow-light']};

  display: flex;
  align-items: center;

  span {
    z-index: 1;
    position: absolute;
    top: -7px;
    right: -7px;

    padding: 2px 6px;

    border-radius: 1000px;
    background: ${(props) => props.theme['yellow-dark']};

    font-size: 12px;
    color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
  }
`
