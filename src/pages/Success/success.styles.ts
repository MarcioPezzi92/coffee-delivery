import styled from 'styled-components'

export const SuccessContainer = styled.main`
  margin-top: 5rem;
  h2 {
    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    font-size: 20px;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .info-container {
      padding: 2.5rem;
      background: linear-gradient(white, white) padding-box,
        linear-gradient(
            to right,
            ${(props) => props.theme.yellow},
            ${(props) => props.theme.purple}
          )
          border-box;
      border-radius: 6px 36px;
      border: 1px solid transparent;
      .order-information {
        display: flex;
        align-items: center;
        gap: 12px;
      }
    }

    .icon-container {
      padding: 8px;

      height: fit-content;

      border-radius: 50%;
      color: white;

      display: flex;
      align-items: center;
    }
  }
`
