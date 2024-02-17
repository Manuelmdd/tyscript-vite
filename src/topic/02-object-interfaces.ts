


let skills: string[] = ['patadas','pelea'];


interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;

    
}



const strider: Character =
{
    name: "Deco",
    hp: 100,
    skills: ['patadas','cuchillo']
    
}

strider.hometown = "enmanuel";

console.table(strider);
export{};