import db from "../config/knex.js"

async function listar() {
    return await db("produtos").select("*").orderBy("id")
}

async function buscarPorId(id) {
    return await db("produtos")
    .where({id})
    .first()
}

//funcao de persistência de dados criar produto
async function criar(produto) {
    const [novoProduto] = await db("produtos")
    .insert(produto)
    .returing("*")

    return novoProduto
}

async function atualizar(id, dados) {
    const [produtoAtualizado] = await db("produtos")
    .where({id})
    .update(dados)
    .returing("*")

    return produtoAtualizado
}

async function excluir(id) {
    return await db("produtos")
    .where({id})
    .del()
}

export{
    listar,
    buscarPorId,
    criar,
    atualizar,
    excluir
}