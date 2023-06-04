interface ProductMock {
  picture: string
  name: string
  classification: string[]
  description: string
}

export const productsMock: ProductMock[] = [
  {
    picture: 'expresso-tradicional',
    name: 'Expresso Tradicional',
    classification: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
  },
  {
    picture: 'expresso-americano',
    name: 'Expresso Americano',
    classification: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
  },
  {
    picture: 'expresso-cremoso',
    name: 'Expresso Cremoso',
    classification: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
  },
  {
    picture: 'expresso-gelado',
    name: 'Expresso Gelado',
    classification: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
  },
  {
    picture: 'cafe-com-leite',
    name: 'Café com Leite',
    classification: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
  },
  {
    picture: 'latte',
    name: 'Latte',
    classification: ['tradicional', 'com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  },
  {
    picture: 'capuccino',
    name: 'Capuccino',
    classification: ['tradicional', 'com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
  {
    picture: 'macchiato',
    name: 'Macchiato',
    classification: ['tradicional', 'com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
  },
]
