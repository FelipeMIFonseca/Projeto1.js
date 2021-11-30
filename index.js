import { cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";
 
//criração de contas
const cliente1 = new cliente( "Luis Felipe", 12312312312, 123489586 );
const cliente2 = new cliente("Alice", 32132132132, 3213213199 );

const contaCorrenteLuis = new contaCorrente(cliente1, 2001 );
contaCorrenteLuis.agencia = 2001;
contaCorrenteLuis.cliente = cliente1;

const contaCorrenteAlice = new contaCorrente(cliente2, 2001 );
contaCorrenteAlice.agencia = 2001;
contaCorrenteAlice.cliente = cliente2;

//movimentações
contaCorrenteLuis.transferir(100, contaCorrenteAlice);
contaCorrenteLuis.depositar(20);
contaCorrenteLuis.depositar(300);
contaCorrenteLuis.depositar(700);

console.log(contaCorrente.numeroDeContas)




// null - valor nulo propriedade sem nenhum valor atribuido 

 //cliente2.nome = "Alice";
 //cliente2.cpf = 32132132132;
 //cliente2.rg = 3213213199;

 // contaCorrenteLuis.sacar(150);
// const valorSacado = contaCorrenteLuis.sacar(200);
//console.log(valorSacado)
//contaCorrenteLuis._saldo = 0;







