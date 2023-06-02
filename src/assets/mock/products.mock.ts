function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const productsMock = [
  {
    id: uuidv4(),
    picture: 'expresso-tradicional',
    name: 'Expresso Tradicional',
    types: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price:
      Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1 * 100),
  },
  {
    id: uuidv4(),
    picture: 'expresso-americano',
    name: 'Expresso Americano',
    types: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price:
      Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1 * 100),
  },
  {
    id: uuidv4(),
    picture: 'expresso-cremoso',
    name: 'Expresso Cremoso',
    types: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price:
      Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1 * 100),
  },
  {
    id: uuidv4(),
    picture: 'expresso-gelado',
    name: 'Expresso Gelado',
    types: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price:
      Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1 * 100),
  },
  {
    id: uuidv4(),
    picture: 'cafe-com-leite',
    name: 'Café com Leite',
    types: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price:
      Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1 * 100),
  },
  {
    id: uuidv4(),
    picture: 'latte',
    name: 'Latte',
    types: ['tradicional', 'com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price:
      Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1 * 100),
  },
  {
    id: uuidv4(),
    picture: 'capuccino',
    name: 'Capuccino',
    types: ['tradicional', 'com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price:
      Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1 * 100),
  },
  {
    id: uuidv4(),
    picture: 'macchiato',
    name: 'Macchiato',
    types: ['tradicional', 'com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price:
      Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1 * 100),
  },
]
