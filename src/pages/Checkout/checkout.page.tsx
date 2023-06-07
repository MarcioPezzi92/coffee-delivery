import { CartItemQtyControl } from '../../shared/components/QuantityControl/quantity-control.component'
import { defaultTheme } from '../../styles/themes/default'
import {
  OrderForm,
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
import useCart from '../../hooks/useCart'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useEffect, useState } from 'react'

const PaymentModes = {
  MONEY: 'MONEY',
  CREDIT_CARD: 'CREDIT_CARD',
  DEBIT_CARD: 'DEBIT_CARD',
}

const checkoutFormSchema = zod.object({
  cep: zod
    .string()
    .nonempty('Este campo é obrigatório')
    .regex(/^\d{5}-?\d{3}$/i, 'Digite um CEP válido'),
  street: zod.string().nonempty('Este campo é obrigatório'),
  number: zod.string().nonempty('Este campo é obrigatório'),
  complement: zod.string(),
  city: zod.string().nonempty('Este campo é obrigatório'),
  neighborhood: zod.string().nonempty('Este campo é obrigatório'),
  state: zod.string().nonempty('Este campo é obrigatório'),
  paymentMode: zod.string(),
  totalPrice: zod.number(),
})

type CheckoutFormType = zod.infer<typeof checkoutFormSchema>

export function CheckoutPage() {
  const [paymentMode, setPaymentMode] = useState('')
  const {
    dispatch,
    REDUCER_ACTIONS,
    totalItems,
    deliveryFee,
    cart,
    totalPrice,
  } = useCart()

  const checkoutForm = useForm<CheckoutFormType>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      cep: '',
      complement: '',
      city: '',
      neighborhood: '',
      number: '',
      state: '',
      street: '',
      paymentMode: '',
      totalPrice: 0,
    },
    mode: 'onChange',
  })

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = checkoutForm

  useEffect(() => {
    setValue('totalPrice', totalPrice)
  })

  const navigate = useNavigate()

  const onSubmit = (data: CheckoutFormType) => {
    console.log(data)
    setValue('totalPrice', totalPrice)
    dispatch({ type: REDUCER_ACTIONS.SUBMIT })
    reset()
    localStorage.removeItem('@coffee-delivery:cart-state-1.0.0')
    navigate('/success')
  }

  function onSetPaymentMode(mode: string) {
    setPaymentMode(mode)
    setValue('paymentMode', mode)
  }

  return (
    <OrderForm onSubmit={handleSubmit(onSubmit)}>
      <section className="left-side">
        <h3>Complete seu pedido</h3>
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
            <input
              maxLength={9}
              className="medium-field"
              placeholder="CEP"
              {...register('cep')}
            />
            {errors.cep && <span>{errors.cep.message}</span>}
            <input placeholder="Rua" {...register('street')} />
            <span>
              <input
                className="medium-field"
                placeholder="Número"
                {...register('number')}
              />
              {errors.number && <span>numero ta errado</span>}
              <input
                style={{ flex: 1 }}
                placeholder="Complemento"
                {...register('complement')}
              />
              {errors.complement && <span>complemento ta errado</span>}
            </span>
            <span>
              <input
                className="medium-field"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
              {errors.neighborhood && <span>neighborhood ta errado</span>}
              <input
                style={{ flex: 1 }}
                placeholder="Cidade"
                {...register('city')}
              />
              {errors.city && <span>city ta errado</span>}
              <input
                style={{ maxWidth: '60px' }}
                placeholder="UF"
                {...register('state')}
              />
              {errors.state && <span>state ta errado</span>}
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
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </div>
            </div>
          </div>
          <div className="buttons-container">
            <button
              type="button"
              className={
                paymentMode === PaymentModes.CREDIT_CARD
                  ? 'selected-payment'
                  : ''
              }
              onClick={() => {
                onSetPaymentMode(PaymentModes.CREDIT_CARD)
              }}
            >
              <CreditCard size={16} color={defaultTheme.purple} />
              Cartão de crédito
            </button>
            <button
              type="button"
              className={
                paymentMode === PaymentModes.DEBIT_CARD
                  ? 'selected-payment'
                  : ''
              }
              onClick={() => {
                onSetPaymentMode(PaymentModes.DEBIT_CARD)
              }}
            >
              <Bank size={16} color={defaultTheme.purple} />
              cartão de débito
            </button>
            <button
              type="button"
              className={
                paymentMode === PaymentModes.MONEY ? 'selected-payment' : ''
              }
              onClick={() => {
                onSetPaymentMode(PaymentModes.MONEY)
              }}
            >
              <Money size={16} color={defaultTheme.purple} />
              dinheiro
            </button>
          </div>
        </div>
      </section>
      <ProductSelection>
        <h3>Cafés selecionados</h3>
        <div className="container">
          <ul>
            {cart.map((item) => {
              const image: string = new URL(
                `/src/assets/images/coffee-types/${item.picture}.png`,
                import.meta.url,
              ).href

              const lineTotal: number = item.qty * item.price

              const onRemoveFromCart = () =>
                dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item })

              return (
                <Product key={item.id}>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <img src={image} alt={`Illustration: ${item.name}`} />
                    <div>
                      <div>{item.name}</div>
                      <div className="actions">
                        <CartItemQtyControl item={item} />
                        <button
                          type="button"
                          className="remove-btn"
                          onClick={onRemoveFromCart}
                        >
                          <Trash size={16} color={defaultTheme.purple} />
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>
                  <span className="total">
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(lineTotal)}
                  </span>
                </Product>
              )
            })}
          </ul>
          <Summary>
            <div>
              <span className="field">Total de itens</span>
              <span>{totalItems}</span>
            </div>
            <div>
              <span className="field">Entrega</span>
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(deliveryFee)}
              </span>
            </div>
            <div className="bold">
              <span>Total</span>
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(totalPrice)}
              </span>
            </div>
          </Summary>

          <button
            type="submit"
            className="confirm"
            disabled={!(isValid && paymentMode.length)}
          >
            CONFIRMAR PEDIDO
          </button>
        </div>
      </ProductSelection>
    </OrderForm>
  )
}
