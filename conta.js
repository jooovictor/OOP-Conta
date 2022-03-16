function Conta(agencia=0, numero=0, digito=0, saldo=0, titular=null,
    tipo='cc') { 
    // agencia=0, associa um valor default no caso o 0.
    //propriedades
    this.agencia = agencia;
    this.numero = numero;
    this.digito = digito;
    this.saldo = saldo;
    this.titular = titular;
    this.tipo = tipo;
    this.historico = [];
    }


Conta.prototype.extrato = function () {
    console.log(this.historico)
    return this.saldo;
} 

Conta.prototype.transferir = function(valor, conta) {
    this.saldo -= valor;
    conta.saldo += valor;
    conta.historico.push(`Transferencia de ${valor} recebida de ${this.titular}.`)
    this.historico.push(`Transferencia de ${valor} efetuada para ${conta.titular}.`);
    return 'ta transferido confia';
}

Conta.prototype.depositar = function(valor) {
    this.historico.push('Depósito de ' + valor + ' efetuado.');
    return this.saldo += valor;
}

Conta.prototype.sacar = function(valor) {
    this.historico.push('Saque de ' + valor + ' efetuado.');
    return this.saldo -= valor;
}


const carlos = new Conta (112, 1, 0, 500, 'Carlos Eduardo');
const joao = new Conta (112, 2, 5, 750, 'João Victor');

