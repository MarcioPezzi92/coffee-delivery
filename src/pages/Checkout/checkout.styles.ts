import styled from 'styled-components'

export const CheckoutPageContainer = styled.main`
  margin-top: 2.5rem;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  h3 {
    margin-bottom: 15px;
  }
`
export const CustomerDataForm = styled.section`
  max-width: 640px;
  width: 100%;
  form {
    > div {
      padding: 2.5rem;
      background: ${(props) => props.theme['base-card']};
      border-radius: 6px;
    }
    .subtitle-container {
      display: flex;
      .icon {
        margin-right: 0.5rem;
      }
      .subtitle {
        margin-bottom: 2px;

        color: ${(props) => props.theme['base-subtitle']};
        line-height: 130%;
      }
      .description {
        font-size: 14px;
        line-height: 130%;
      }
    }
    .address-container {
      margin-bottom: 12px;
      .fields {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;
        .medium-field {
          max-width: 200px;
        }
        input {
          padding: 12px;

          background: ${(props) => props.theme['base-input']};
          border: 1px solid ${(props) => props.theme['base-button']};
          border-radius: 4px;
          color: ${(props) => props.theme['base-text']};

          ::placeholder {
            color: ${(props) => props.theme['base-label']};
          }

          :focus {
            border: 1px solid ${(props) => props.theme['yellow-dark']};
          }
        }
        span {
          display: flex;
          gap: 12px;
        }
      }
    }
    .payment-container {
      .buttons-container {
        margin-top: 2rem;

        display: flex;
        gap: 12px;
        button {
          padding: 1rem;

          max-width: 178.67px;
          width: 100%;

          background: ${(props) => props.theme['base-button']};
          border-radius: 6px;

          font-size: 12px;
          color: ${(props) => props.theme['base-text']};
          text-transform: uppercase;

          display: flex;
          align-items: center;
          gap: 12px;

          :hover {
            background: ${(props) => props.theme['base-hover']};
            color: ${(props) => props.theme['base-subtitle']};
          }
        }
        .selected {
          border-color: ${(props) => props.theme.purple};
          background: ${(props) => props.theme['purple-light']};
        }
      }
    }
  }
`
export const ProductSelection = styled.section`
  max-width: 448px;
  width: 100%;
  .container {
    padding: 2.5rem;

    background: ${(props) => props.theme['base-card']};
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    button.confirm {
      padding: 12px 8px;

      background: ${(props) => props.theme.yellow};
      border-radius: 6px;

      font-weight: 700;
      font-size: 14px;
      line-height: 160%;
      color: ${(props) => props.theme.white};

      :hover {
        background: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`

export const Product = styled.li`
  padding-bottom: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 64px;
    width: 100%;
  }
  & > div {
    .actions {
      margin-top: 0.5rem;

      display: flex;
      gap: 0.5rem;
      .remove-btn {
        padding: 0.5rem;
        background: ${(props) => props.theme['base-button']};

        display: flex;
        align-items: center;
        gap: 0.25rem;
      }
    }
  }
  .total {
    font-weight: 700;
  }
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  .field {
    font-size: 14px;
  }

  .bold {
    font-weight: 700;
    font-size: 20px;
  }
`
