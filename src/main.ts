import { Produto } from './Produto'
import { Carrinho } from './Carrinho'

const p1 = new Produto('Tripé Para Celular Flexivel')
const p2 = new Produto('Carregador de parede universal 2.1A, 2 portas USB, bivolt')
const p3 = new Produto('Caixa Multimidia Portatil Go 2, JBL')
const p4 = new Produto('Bateria Externa Carga Rápida 10,000Mah USB Tipo C')
const p5 = new Produto('Fones de Ouvido Xiaomi Redmi AirDots')
const p6 = new Produto('Máquina De Café Espresso Coffee Cream ')
const p7 = new Produto('Parafusadeira/furadeira De Impacto 1⁄2” (13mm) 20v Max')
const p8 = new Produto('Honorall Full HD 1080 P Webcam USB Mini Câmera')
const p9 = new Produto('p9')
const p10 = new Produto('p10')
const p11 = new Produto('p11')
const p12 = new Produto('p12')
const p13 = new Produto('p13')
const p14 = new Produto('p14')
const p15 = new Produto('p15')
const p16 = new Produto('p16')
const p17 = new Produto('p17')

const carrinho = new Carrinho()

// adicionando dois produtos
carrinho.adiciona(p1)
carrinho.adiciona(p2)
console.log(`${carrinho}`) // toString
// adicionando mais dois produtos
carrinho.adiciona(p3, p4)
console.log(`${carrinho}`) // toString
// adicionando mais quatro produtos
carrinho.adiciona(p5, p6)
carrinho.adiciona(p7, p8)
console.log(`${carrinho}`) // toString
//adicionando mais produtos
carrinho.adiciona(p9,p10,p11,p12,p13,p14,p15,p16,p17)
console.log(`${carrinho}`) // toString

