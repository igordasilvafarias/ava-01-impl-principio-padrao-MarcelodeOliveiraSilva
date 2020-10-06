import { Produto } from './Produto'

export class Carrinho {
  private readonly produtos: Produto[] = []

  /*
  // prod2? significa parâmetro opcional
  adiciona(prod1: Produto, prod2?: Produto): void {
    this.produtos.push(prod1)
    if (prod2) {
      this.produtos.push(prod2)
    }
  }
  */
 adiciona(...prod: Produto[]): void{
  var i: number = 0
  while (i <= prod.length){
    this.produtos.push(prod[i])
    i++
  }

 }

  toString(): string {
    return 'Conteúdo do Carrinho:\n' +
           '=====================\n' +
           this.produtos.join('\n') // junta os produtos separados por nova linha
  }
}
