import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())
app.use(cors())


app.post('/analisar', (req, res) =>{
    const  mensagem = req.body.msg
  
    if(!mensagem){
        return res.status(400).json('mensagem nao fornecida')
    }

    const texto = String(mensagem).toLowerCase()

    let setor = 'setor nao indentificado'
    
    if(texto.includes('abrir conta') || texto.includes('nova conta')){
        setor = 'Abrir Contas'
    }else if(texto.includes('cartão') || texto.includes('bloquear cartao')){
        setor = 'Cartões'
    }else if(texto.includes('financiamento') || texto.includes(' emprestimo')){
        setor = ' Credto e Financiamentos'
    }
    res.json({ mensagem: `isso é feito no setor ${setor}`})
})

app.listen(5000, () => console.log('servidor rodando'))
