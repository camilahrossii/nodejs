const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + "\n >")
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if(answers.length < questions.length){
        ask(answers.length)
    } else {
        console.log(answers);
        process.exit()
    }
})

process.on("exit", () => {
    console.log(`
    Olá
    
    O que você aprendeu hoje foi ${answers[0]}
    O que te deixou aborrecido e o que deve melhorar é ${answers[1]}
    O que te deixou feliz foi ${answers[2]}
    E você ajudou ${answers[3]} pessoas hoje.

    Jóia, volte amanhã para mais reflexões!

    `)
})