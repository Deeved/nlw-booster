import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    console.log('Listagem de usuários')

    res.json([
        'Deeved',
        'Natalia',
        'Carlos',
        'Maria',
        'Fábio'
    ])
})

app.listen(3333)
