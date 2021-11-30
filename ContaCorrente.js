import { cliente } from "./Cliente.js";

export class contaCorrente{
agencia;

static numeroDeContas = 0;

_cliente;
set cliente(novoValor){
if(novoValor instanceof  cliente){
this._cliente = novoValor;
}
}
get cliente(){
return this._cliente;
}

constructor(cliente, agencia){
  this._cliente = cliente
  this.agencia = agencia
  contaCorrente.numeroDeContas += 1;
}

_saldo = 0;
get saldo(){
return this._saldo;
}


sacar(valor){
if(this._saldo >= valor){
this._saldo -= valor;
return valor;
//console.log(this.#saldo);
}
}

depositar(valor){
if(valor <=0 ) return; 
this._saldo += valor;
}

transferir(valor, conta){
const valorSacado = this.sacar(valor);
conta.depositar(valorSacado);
}
}

// null - valor nulo propriedade sem nenhum valor atribuido 