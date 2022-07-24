class Forca {

// Configuração inicial
  constructor(palavraSecreta){    
    this.letrasChutadas = [];
    this.vidas = 6;
    this.palavra = [...palavraSecreta].map(() => "_");  // Popula o array PALAVRA com '_'
    this.palavraEsperada = [...palavraSecreta];
  }

  chutar(letra) { 
    
    const chute = letra.toLowerCase(); // Se certifica que a letra chutada é minúscula pois 'a' é diferente de 'A'

// ********************* Validação do chute *************************

    const validarChute = () => {

// Verifica se apenas UMA letra foi inserida
      if (chute.length > 1){
        console.log('Por favor, digite UMA letra por vez.');
      }

// Verifica se a letra já foi chutada antes
      else if (this.letrasChutadas.includes(chute)){
        console.log(`A letra | ${chute} | já foi chutada`);
      }

// Caso contrário insere a letra chutada no array 
      else {
        this.letrasChutadas.push(chute);

// Se o chute estiver errado e a letra não foi chutada ainda perde uma vida
        if (!this.palavraEsperada.includes(chute)){                                       
            this.vidas--;  
        }

// Se o chute estiver certo insere a letra chutada na posição correta       
        else{                                        
          this.palavraEsperada.forEach((item, i) => {
            if (item === chute){
              this.palavra[i] = chute;
            }
          })
        }
      }
    }
    
    validarChute(chute); 
  }

  buscarEstado() { // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

// Muda o estado do jogo para 'GANHOU ' caso a PALAVRA seja igual a PALAVRA ESPERADA
    if (this.palavra.join(" ") === this.palavraEsperada.join(" ") && this.vidas > 0){ 
        return 'ganhou';
    }  

// Muda o estado do jogo para 'PERDEU' caso as vidas chegem a zero
    else if (this.vidas <= 0){
        return 'perdeu';
    }

// Caso contrário o estado do jogo permanece em  'AGUARDANDO CHUTE
    else {
      return 'aguardando chute'
    }
   } 

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
          // --------------------------------------------
      }
  }
}

module.exports = Forca;
