const rollDice = sides => {
    let result = Math.ceil(Math.random() * sides);
    console.log(result)
}

rollDice(6);