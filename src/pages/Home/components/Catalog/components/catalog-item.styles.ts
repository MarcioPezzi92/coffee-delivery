import styled from 'styled-components'

export const CatalogItemContainer = styled.article`
  margin-top: 0.5rem;
  padding: 0 20px;

  max-width: 256px;

  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  align-items: center;

  .product-type {
    margin-top: 0.75rem;
    padding: 4px 8px;

    background: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;

    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};
  }
  h3 {
    margin-top: 1rem;
  }
  img {
    margin-top: -20px;
    max-width: 120px;
  }
  p {
    margin-top: 0.5rem;

    text-align: center;
    font-size: 14px;
    line-height: 18.2px;
    color: ${(props) => props.theme['base-label']};
  }

  .actions {
    margin: 1.25rem 0.25rem 1.25rem 0.25rem;

    width: 100%;

    display: flex;
    align-items: center;

    .price {
      flex: 1;
      .currency {
        font-size: 14px;
      }
      .value {
        font-family: 'Baloo 2', cursive;
        font-size: 24px;
        font-weight: 800;
      }
    }
  }

  .add-to-cart {
    margin-left: 0.5rem;
    padding: 0.5rem;

    border-radius: 6px;
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};

    display: flex;
    align-items: center;

    :hover {
      background: ${(props) => props.theme.purple};
    }
  }
`
