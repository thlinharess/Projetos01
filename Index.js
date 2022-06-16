class Cliente {
   nome;
   cpf;
}

class ContaCorrente{
    agencia;
    saldo;
    
    sacar(valor) {
        if(this.saldo >= valor)
        this.saldo -= valor;
    }
}


const Cliente1 = new Cliente();
Cliente1.nome = "Ricardo";
Cliente1.cpf = 13323345567;


const Cliente2 = new Cliente();
Cliente2.nome = "Ana";
Cliente2.cpf = 12223356689;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1001;
ContaCorrenteRicardo.saldo = 0;


const ContaCorrenteAna = new ContaCorrente();
ContaCorrenteAna.agencia = 1001;
ContaCorrenteAna.saldo = 0;


console.log(Cliente1);

console.log("Saldo: " + ContaCorrenteRicardo.saldo);
ContaCorrenteRicardo.saldo = 300;
console.log("Valor Depositado: " + ContaCorrenteRicardo.saldo);
ContaCorrenteRicardo.sacar(200);
console.log("Disponível para saque: " + ContaCorrenteRicardo.saldo);


console.log(Cliente2);

console.log("Saldo: " + ContaCorrenteAna.saldo);
ContaCorrenteAna.saldo = 400;
console.log("Valor Depositado: " + ContaCorrenteAna.saldo);
ContaCorrenteAna.sacar(185);
console.log("Disponível para saque: " + ContaCorrenteAna.saldo);

