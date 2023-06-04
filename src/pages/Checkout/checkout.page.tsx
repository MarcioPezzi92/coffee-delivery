import { AmountControl } from '../../shared/components/AmountControl/amount-control.component'
import { defaultTheme } from '../../styles/themes/default'
import {
  CheckoutPageContainer,
  CustomerDataForm,
  Product,
  ProductSelection,
  Summary,
} from './checkout.styles'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
} from 'phosphor-react'

export function CheckoutPage() {
  return (
    <CheckoutPageContainer>
      <CustomerDataForm>
        <h3>Complete seu pedido</h3>
        <form>
          <div className="address-container">
            <div className="subtitle-container">
              <div className="icon">
                <MapPinLine
                  size={22}
                  weight="regular"
                  color={defaultTheme['yellow-dark']}
                />
              </div>
              <div>
                <div className="subtitle">Endereço de Entrega</div>
                <div className="description">
                  Informe o endereço onde deseja receber seu pedido
                </div>
              </div>
            </div>
            <div className="fields">
              <input className="medium-field" placeholder="CEP" />
              <input placeholder="Rua" />
              <span>
                <input className="medium-field" placeholder="Número" />
                <input style={{ flex: 1 }} placeholder="Complemento" />
              </span>
              <span>
                <input className="medium-field" placeholder="Bairro" />
                <input style={{ flex: 1 }} placeholder="Cidade" />
                <input style={{ maxWidth: '60px' }} placeholder="UF" />
              </span>
            </div>
          </div>
          <div className="payment-container">
            <div className="subtitle-container">
              <div className="icon">
                <CurrencyDollar
                  size={22}
                  weight="light"
                  color={defaultTheme.purple}
                />
              </div>
              <div>
                <div className="subtitle">Pagamento</div>
                <div className="description">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </div>
              </div>
            </div>
            <div className="buttons-container">
              <button type="button">
                <CreditCard size={16} color={defaultTheme.purple} />
                Cartão de crédito
              </button>
              <button type="button">
                <Bank size={16} color={defaultTheme.purple} />
                cartão de débito
              </button>
              <button type="button">
                <Money size={16} color={defaultTheme.purple} />
                dinheiro
              </button>
            </div>
          </div>
        </form>
      </CustomerDataForm>

      <ProductSelection>
        <h3>Cafés selecionados</h3>
        <div className="container">
          <ul>
            <Product>
              <div style={{ display: 'flex', gap: '20px' }}>
                <img
                  src="../../../public/images/coffee-types/cafe-com-leite.png"
                  alt="Illustration: coffee cup"
                />
                <div>
                  <div>Latte</div>
                  <div className="actions">
                    <AmountControl />
                    <button className="remove-btn">
                      <Trash size={16} color={defaultTheme.purple} />
                      Remover
                    </button>
                  </div>
                </div>
              </div>
              <span className="total">R$ 9,90</span>
            </Product>
          </ul>
          <Summary>
            <div>
              <span className="field">Total de itens</span>
              <span>R$ 9,90</span>
            </div>
            <div>
              <span className="field">Entrega</span>
              <span>R$ 5,00</span>
            </div>
            <div className="bold">
              <span>Total</span>
              <span>R$ 14,99</span>
            </div>
          </Summary>

          <button className="confirm">CONFIRMAR PEDIDO</button>
        </div>
      </ProductSelection>
    </CheckoutPageContainer>
  )
}
