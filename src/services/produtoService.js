import * as repository from "../repositories/produtoRepository"

//essa funcao é apenas para ser utilizada nos erros
function criarErro(mensagem, status){
    const erro = new Error(mensagem)
    erro.status = status

    return erro
}

//validação dos dados do produto
function validarProduto(dados){
    const {nome, preco, quantidade} = dados

    //caso o nome esteja vazio
    if (typeof nome !== "string" || !nome.trim()){
        throw criarErro("O nome é obrigatório", 400)
    }
    //verificar se o preço não é numero ou está negativo
    if (typeof preco !== "number" || preco < 0){
        throw criarErro("Preço inválido")
    }

    //verificar a quantidade de produtos
    if (typeof quantidade !== "number" || quantidade < 0){
        throw criarErro("Quantidade inválida")
    }
    return{
        nome,
        preco,
        quantidade
    }
}

//validar os repositories
async function listar() {
    return await repository.listar()
}

async function buscarPorId(id){
    const produto = await repository.buscarPorId()

    if(!produto){
        throw criarErro("Produto não encontrado", 404)
    }

    return produto
}

