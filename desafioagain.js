let familia = {

    receitas: [500, 200, 250.43, 360.45],

    despesas:[320.34, 128.45, 176.87, 1450.00]

}

function soma(array) {
    let total = 0

    for(let valor of array)
    total += valor
    
    return total
} 

function calcularBalanco(){
    const calcularReceitas = soma(familia.receitas)
    const calcularDespesas = soma(familia.despesas)

    const total = calcularReceitas - calcularDespesas
    const estaOk = total >=0

    let textoDeBalanco = "Negativo"

    if (estaOk) {
        textoDeBalanco = "Positivo"
    }

    console.log(`Seu saldo é ${textoDeBalanco}: ${total.toFixed(2)}`)
}

calcularBalanco()



// Buscando e encontrando dados

const livrosPorCategoria = [
    {
        categoria:"Riqueza",
        livros:[
            {
                titulo:"Os segredos da mente milionária",
                autor: "T. Harv Eker"
            },
            {
                titulo: "O homem mais rico da Babilônia",
                autor: "George S Clason",
            },
            {
                titulo: "Pai rico, pai pobre",
                autor: "Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ],
    },
    {
        categoria:"Inteligencia Emocional",
        livros: [
            {
                titulo: "Você é insubstituivel",
                autor: "Augusto Cury",
            },
            {
                titulo: "Ansiedade - Como enfrentar o mal do século",
                autor: "Augusto Cury",
            },
            {
                titulo: "Os 7 hábitos das pessoas altamente eficazes",
                autor: "Stephen R. Covey"
            }
        ],
    },
]

const totalDeCategorias = livrosPorCategoria.length
console.log(totalDeCategorias)

for (let categoria of livrosPorCategoria) {
    console.log(`Total de livros da categoria: ${categoria.categoria}`)
    console.log(categoria.livros.length)
}

function contarAutores() {
    let autores = [];

    for(let categoria of livrosPorCategoria) {
        for(let livros of categoria.livros) {
            if(autores.indexOf(livros.autor) == -1) {
                autores.push(livros.autor)
            }
        }
    }

    console.log(`Total de autores: ${autores.length}`)
}

contarAutores()


function livrosDoAugustoCury() {
    let livros =[];

    for(let categoria of livrosPorCategoria) {
        for(let livro of categoria.livros) {
            if(livro.autor === 'Augusto Cury') {
                livros.push(livro.titulo)
            }
        }
    }

    console.log(`Livros do autor: ${livros}`)
}

livrosDoAugustoCury()


function livrosDoAutor(autor) {
    let livros = [];

    for(let categoria of livrosPorCategoria) {
        for(let livro of categoria.livros) {
            if(livro.autor === autor) {
                livros.push(livro.titulo)
            }
        }
    }

    console.log(`Livros do autor: ${autor}: ${livros.join(", ")}`)
}

livrosDoAutor('T. Harv Eker')