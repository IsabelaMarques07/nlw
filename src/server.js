//Servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSuccess} = require('./pages')

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Início e configuração do servidor
server
//receber od dados do req.body
.use(express.urlencoded({ extended: true}))
//configurar arquivos estáticos (css, scipts, imagens)
.use(express.static("public"))
//rotas de aplicações
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/page-success", pageSuccess)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)

