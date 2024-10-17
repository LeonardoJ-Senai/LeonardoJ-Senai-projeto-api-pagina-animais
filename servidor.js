const express = require("express")
const app = express()

const path = require("path")

const PORTA = 3000
//Avisar ao expresse que os nossos arquivos estáticos estão aqui para ele juntar ao html e enviar
//Na pasta public entra CSS, imagem, icones, JS, ...
app.use(
    express.static(path.join(__dirname,"public"))
)
//Rota que o cliente vai acessar e o método que ele vai usar no caso GET
app.get('/', (pedido,resposta) =>{
    resposta.redirect("/bufalo")
})

app.get("/bufalo", (pedido,resposta) => {
    resposta.sendFile(path.join(__dirname,"views","bufalo_page.html"))
})

app.get("/esquilo", (pedido,resposta) => {
    resposta.sendFile(path.join(__dirname,"views","esquilo_page.html"))
})

app.get("/ganco", (pedido,resposta) => {
    resposta.sendFile(path.join(__dirname,"views","ganco_page.html"))
})

app.get("/garca", (pedido,resposta) => {
    resposta.sendFile(path.join(__dirname,"views","garca_page.html"))
})

app.get("/leao", (pedido,resposta) => {
    resposta.sendFile(path.join(__dirname,"views","leao_page.html"))
})

app.get("/tartaruga", (pedido,resposta) => {
    resposta.sendFile(path.join(__dirname,"views","tartaruga_page.html"))
})


app.listen(PORTA, ()=>{
    console.log(`Servidor rodando com sucesso no  endereço: localhost:${PORTA}`)
})