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

    if (texto.includes('conta') || texto.includes('emprestimo') || texto.includes('financiamento')) {
        setor = 'Gerência de Atendimento'
    } else if (texto.includes('cartão') || texto.includes('cheque') || texto.includes('pagamento')) {
        setor = 'Caixas'
    } else if (texto.includes('automovel') || texto.includes('residencia') || texto.includes('veiculo')) {
        setor = 'Seguros e Previdência'
    }
    res.json({setor})
    console.log(setor)
})

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))
