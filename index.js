const arrayDosPost = []

function guardaDados() {
    // DOM * -----------------------------------------------------------------------------------------------------
    const imputTitulo = document.getElementById("titulo-post")
    const imputAutor = document.getElementById("Autor-post")
    const imputConteudo = document.getElementById("conteudo-post")


    const post = {
        titulo: imputTitulo.value,
        autor: imputAutor.value,
        conteudo: imputConteudo.value
    }

    arrayDosPost.push(post)

    console.log(post)
    console.log(arrayDosPost)

    imputTitulo.value = ""
    imputAutor.value = ""
    imputConteudo.value = ""

    function addPost() {
        const containerDosPosts = document.getElementById("container-de-posts")
        containerDosPosts.innerHTML += `<div>${arrayDosPost}<div>`
        arrayDosPost.value = ""
    }

    function apertouBotao(evento) {
        const containerDosPosts = document.getElementById(containerDosPosts)
        console.log(evento)
        addPost()
    }
}