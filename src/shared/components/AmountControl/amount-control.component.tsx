import { Plus, Minus } from 'phosphor-react'
import { AmountControlContainer } from './amount-control.styles'
import { useState } from 'react'

interface AmountControlProps {
  quantity: number
}

export function AmountControl({ quantity }: AmountControlProps) {
  const [quantityState, setQuantity] = useState(quantity)
  function increaseQuantity() {
    setQuantity(quantityState + 1)
  }
  function decreaseQuantity() {
    setQuantity(quantityState - 1)
  }
  return (
    <AmountControlContainer>
      <button onClick={decreaseQuantity}>
        <Minus size={14} weight="bold" />
      </button>

      <span>{quantityState}</span>

      <button onClick={increaseQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </AmountControlContainer>
  )
}
