let array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

const swap = (array, index, index2) => {
    let indexOne = array.indexOf(index);
    let indexTwo = array.indexOf(index2);
    //let swapArray = [];

    [array[indexOne], array[indexTwo]] = [array[indexTwo], array[indexOne]];

    return array;
}

console.log(swap(array, 1, 3));