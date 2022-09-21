var participantes;
var numero
const parrafos = document.querySelectorAll(".Results p");

function EjercicioAcertijo() {
    participantes = parseInt(prompt(
        "Numero de participantes (preferiblemente multiplo de 10)"
    ));

    numero = parseInt(prompt(
        "Numero de oportunidades (preferiblemente menor al numero de participantes)"
    ));
    console.log(`participantes: ${participantes} numero: ${numero}`);
    
    const acertijo = {}

    for (let i = participantes; i > 0; i--) {
        acertijo[i] = "vacio";
    }

    let contador = Object.entries(acertijo).length; 
    for (let key in acertijo) {
        for (const key2 in acertijo) {
            
            let r = Math.floor((Math.random() * (participantes - 1 + 1)) + 1);
            
            if(acertijo.key2 !== r){
                contador--;
                if(contador === 0){
                    acertijo[key] = r;
                    contador = Object.entries(acertijo).length; 
                }
            }
        }
        
        // if(key !== r){
        //     acertijo[key] = r;
        //     console.log(`key: ${key} r: ${r}`); 
        // }
        
    }

    
    console.log(acertijo);
    console.log("|FINALIZO|");
}

console.log(`i: `);