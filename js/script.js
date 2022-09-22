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
    console.log(`participantes: ${participantes} numero: ${numero}\n`);

    const acertijo = {}
    let lista = [];
    for (let i = participantes; i > 0; i--) {

        if (acertijo.hasOwnProperty(acertijo[i]) !== true) {

            let r = Math.floor((Math.random() * (participantes - 1 + 1)) + 1);

            if (lista.length === 0) {
                acertijo[i] = r;
                console.log(`Se agrego por vacio: ${acertijo[i]}`);
                lista.push(r);
            } else {
                let tamaño = lista.length;
                let contador = 0;

                for (let valor of lista) {

                    if (valor !== r) {
                        console.log(`Diferentes ${valor} != ${r}`);
                        contador++;
                        
                        if (contador === tamaño) {
                            console.log("Se agrego \n");
                            acertijo[i] = r;
                            lista.push(r);
                        }
                    } else {
                        console.log(`Iguales ${valor} == ${r}`);
                    }
                }
            }
        } else {
            console.log(`Ya exite: ${acertijo[i]} `);
        }

    }


    console.log(acertijo);
    console.log(lista);
    console.log("|FINALIZO|");
}

console.log(` `);

