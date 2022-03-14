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
    console.log(this.saldo, this.historico);
    return 'Extrato';
} 

Conta.prototype.transferir = function(valor, conta) {
    this.sacar(valor);
    conta.depositar(valor);
    this.historico.push('Transferencia de ' + valor + ' efetuada.');
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


const carlos = new Conta ()

