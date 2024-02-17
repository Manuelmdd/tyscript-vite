

function addNumeros(a: number, b: number): number {

    return a+b;
}


const resultado: number = addNumeros(5,10);

console.log({resultado});

// creando una funcion con valores obligatorios, nulos y por defecto

function multiplicar(firstNumber: number, secondNumber?: number, base: number = 2){

    return firstNumber * base;
}

const resultadoMultiply: number = multiplicar(6);

console.log({resultadoMultiply});
// funciones con objetos


interface Character{

    name: string;
    hp: number;
    // funciones 
    showHp: () => void;

} 

// creando un metodo que utiliza un objeto del tipo character

const healCharacter = (character: Character, amount: number) =>{

    character.hp += amount;
}

const ironMan: Character = {
    name: 'TOny stark',
    hp: 70,

    showHp() {
        console.log(`Puntos de VIda ${this.hp}`);
    }

}

ironMan.showHp();

console.log('curamos en 10');

healCharacter(ironMan,10);
ironMan.showHp();

export{};