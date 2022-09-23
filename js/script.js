var participantes;
var numero;
const acertijo = {};
var lista = [];
const parrafos = document.querySelectorAll(".Results p");

function EjercicioAcertijo() {
    participantes = parseInt(prompt(
        "Number of participants (preferably multiple of 10) | Numero de participantes (preferiblemente multiplo de 10)"
    ));

    numero = parseInt(prompt(
        "Number of opportunities (preferably less than the number of participants) | Numero de oportunidades (preferiblemente menor al numero de participantes)"
    ));

    console.log(`participantes: ${participantes} numero: ${numero}\n`);

    for (let i = participantes; i > 0; i--) {

        if (acertijo.hasOwnProperty(acertijo[i]) !== true) {
            let bandera = Buscar(acertijo, lista, i);
            if (bandera == false) {
                Buscar(acertijo, lista, i);
            }
        }
    }

    console.log(acertijo);
    lista.sort((a, b) => a - b)
    console.log(lista);
    
    Encontrar();
}

function Buscar(acertijo, lista, i) {
    let r = Math.floor((Math.random() * (participantes - 1 + 1)) + 1);

    if (lista.length === 0) {
        acertijo[i] = r;
        lista.push(r);
    } else {
        let tamaño = lista.length;
        let contador = 0;
        while (contador < tamaño) {
            for (let valor of lista) {
                if (valor !== r) {
                    contador++;

                    if (contador === tamaño) {
                        acertijo[i] = r;
                        lista.push(r);
                        contador = 0;
                        tamaño = lista.length;
                        return true;
                    }
                } else {
                    r = Math.floor((Math.random() * (participantes - 1 + 1)) + 1);
                    contador = 0;
                }
            }
        }
    }
}

function Encontrar() {
    const resultados = {
        aprobado: 0,
        desaprobado: 0,
    };

    let persona_cons = 1; 
    let persona = 1;
    let valor = 0;
    let contador = 1;
    let bandera = true;

    while(bandera){
        valor = acertijo[persona];
        
        if(persona_cons === valor){

            if(contador <= numero){
                resultados.aprobado += 1;

                if(persona_cons >= participantes){
                    bandera = false;
                }else{
                    persona_cons++;
                    persona = persona_cons;
                    contador = 0;
                }
            }else{
                resultados.desaprobado += 1;

                if(persona_cons >= participantes){
                    bandera = false;
                }else{
                    persona_cons++;
                    persona = persona_cons;
                    contador = 0;
                }
            }
        }else{
            contador++;
            persona = valor;
        }
    }

    Mostrar(resultados);
}


function Mostrar(obj) {
    parrafos[0].textContent = `• Participants: ${participantes} | Allowed attempts: ${numero}`;
    parrafos[1].textContent = `• Participants who found their number before ${numero} attempts: ${obj.aprobado}`;
    parrafos[2].textContent = `• Participants who did NOT find their number before ${numero} attempts: ${obj.desaprobado}`;
    let pa = (obj.aprobado * 100) / participantes;
    let pd = (obj.desaprobado * 100) / participantes;
    parrafos[3].textContent = `• Approval percentage: ${pa}% | Disapproval percentage: ${pd}%`;
   
    for (let valor in acertijo) {
        const nuevo = document.createElement('P');
        nuevo.textContent = `• Box: ${valor}  value: ${acertijo[valor]}`;
        nuevo.classList.add("White");

        const ver = document.querySelector(".View");
        ver.appendChild(nuevo);
    }
    
}

console.log(` `);

