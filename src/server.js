import express from 'express'
import cors from 'cors'
const app = express()
const port = 5000


app.use(express.json())
app.use(cors())

app.post('/analisar', (req, res) => {
    const mensagem = req.body.msg

    if (!mensagem) {
        return res.status(400).json('mensagem nao fornecida')
    }

    const texto = String(mensagem).toLowerCase()

    let setor = 'setor nao indentificado'

    if (texto.includes('abrir conta') || texto.includes('nova conta')) {
        setor = 'Abrir Contas'
    } else if (texto.includes('cartão') || texto.includes('bloquear cartao')) {
        setor = 'Cartões'
    } else if (texto.includes('financiamento') || texto.includes('emprestimo')) {
        setor = ' Credito e Financiamentos'
    }
    res.json({setor})
    console.log(setor)
})

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))
