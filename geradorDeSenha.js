//Gerador de senha ou token

//nome da função e o parametro da quantidade de caracteres que gostaria de ter
function gerarSenha(tamanho){

    //Possiveis letras que podem ser sorteadas 
   let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*=+;:.'

    //A senha tem que ser declarada vazia para que possa ser adicionada as aleatorias, porem se tivesse algo todas teriam o mesmo começo
   let senha = ''

   //laço for para sortear os caracteres e definir o tamanho da senha
   for(let i = 0; i<tamanho; i++){
     
      //sorteia a senha com o caracteres.length definindo o tamanho para o Math.random conseguir acessar a variavel caracteres e até quantos indices vai o sorteio
      let sorteioDeLetras = Math.floor(Math.random()*caracteres.length)
      
      //vai adicionando a variavel senha os caracteres sorteados
      senha+= caracteres[sorteioDeLetras] 

   }
    //retorna a senha
    return senha;

}

//imprime a senha e precisa de um parametro de tamanho da senha
console.log(gerarSenha(8))

