import styled from 'styled-components'

export const HeroContainer = styled.section`
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 476px;
    width: 100%;
    height: min-content;
  }

  div {
    p {
      margin-top: 1rem;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  ul {
    margin-top: 4.12rem;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    li {
      min-width: 232px;

      display: flex;
      align-items: center;
      gap: 12px;
      span {
        :first-child {
          padding: 0.5rem;

          border-radius: 50%;

          display: flex;
        }
      }
    }
  }
`
