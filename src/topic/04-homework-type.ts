/*
    ===== Código de TypeScript =====
*/

interface SuperHero2{

    name: string;
    age: number;
    address: {
        calle: string;
        pais: string;
        ciudad: string;
    };
    showAddress(): string;
}// sulucion hecha por mi jjj

// solucion del maestro

interface SuperHero{
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

// creamo otra interfaz que contenga la infor que necesitamos NOTA CON F2 CAMBIAMOS EL NOMBRE DE LA VARIABLE EN TODO EL CODIGO COMO CTRL + R



interface Address {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}
const superheroe_2: SuperHero2 = {
    name: 'enmanuel',
    age : 15,
    address: {
        calle: "san luis",
        pais: "NIcaragua",
        ciudad: "Matagalpa"
    },
    showAddress() {
        
        return `este codigo funciona ${this.name} porque es buenisimo donde vives ${this.address.calle} ${this.address.pais}`;
    }

}

console.log({superheroe_2});

//const direccion = superheroe_2.showAddress();

//console.log(direccion);
const direccion2 = superheroe_2.showAddress();
console.log(direccion2);
const address = superHeroe.showAddress();
console.log( address );




export {};