import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import DeliveryMan from '../../assets/images/delivery-man.svg'
import { SuccessContainer } from './success.styles'
import { defaultTheme } from '../../styles/themes/default'

export function SuccessPage() {
  return (
    <SuccessContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <div className="content">
        <div className="info-container">
          <div className="order-information">
            <div
              className="icon-container"
              style={{ background: defaultTheme.purple }}
            >
              <MapPin size={16} weight="fill" />
            </div>
            <div>
              Entrega em Rua João Daniel Martinelli, 102 <br />
              Farrapos - Porto Alegre, RS
            </div>
          </div>
          <div className="order-information">
            <div
              className="icon-container"
              style={{ background: defaultTheme.yellow }}
            >
              <Timer size={16} weight="fill" />
            </div>
            <div>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div className="order-information">
            <div
              className="icon-container"
              style={{ background: defaultTheme['yellow-dark'] }}
            >
              <CurrencyDollar size={16} weight="fill" />
            </div>
            <div>
              Pagamento na entrega <br />
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </div>

        <img
          src={DeliveryMan}
          alt="Illustration: entregador montado em sua moto"
        />
      </div>
    </SuccessContainer>
  )
}
