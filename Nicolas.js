class banco{ 
    constructor (nome,conta){
        this.nome = nome 
        this.conta = conta 
    }
    setarConta(novaConta){
        if (typeof novaConta == "string"){
            this.conta = novaConta
        }
    }

}

let c1 = new banco("Eduardo", "")
let c2 = new banco("Amanda", "Corrente")
let c3 = new banco("Ana", "Poupança")
let c4 = new banco("Larissa", "Salário")

c1.setarConta("Digital");
console.log(`${c1.nome} mudou para a conta ${c1.conta}`)
console.log(`${c2.nome} tem a conta ${c2.conta}`) 
console.log(`${c3.nome} tem a conta ${c3.conta}`) 
console.log(`${c4.nome} tem a conta ${c4.conta}`) 

