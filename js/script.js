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
        }// else {
        //     console.log(`Ya exite: ${acertijo[i]} `);
        // }
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
        // console.log(`Se agrego por vacio: ${acertijo[i]}`);
        lista.push(r);
    } else {
        let tamaño = lista.length;
        let contador = 0;
        while (contador < tamaño) {
            for (let valor of lista) {
                if (valor !== r) {
                    // console.log(`Diferentes ${valor} != ${r} c: ${contador}`);
                    contador++;

                    if (contador === tamaño) {
                        // console.log("Se agrego \n");
                        acertijo[i] = r;
                        lista.push(r);
                        contador = 0;
                        tamaño = lista.length;
                        return true;
                    }
                } else {
                    // console.log(`Iguales ${valor} == ${r} c: ${contador}`);
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
            // console.log(`pc: ${persona_cons} == v: ${valor}`);
            if(contador <= numero){
                resultados.aprobado += 1;
                // console.log(`${persona_cons} aprobo `);

                if(persona_cons >= participantes){
                    bandera = false;
                    // console.log("Se termino");
                }else{
                    persona_cons++;
                    persona = persona_cons;
                    contador = 0;
                }
            }else{
                resultados.desaprobado += 1;
                // console.log(`${persona_cons} desaprobo `);

                if(persona_cons >= participantes){
                    bandera = false;
                    // console.log("Se termino");
                }else{
                    persona_cons++;
                    persona = persona_cons;
                    contador = 0;
                }
            }
        }else{
            // console.log(`pc: ${persona_cons} != v: ${valor}`);
            contador++;
            persona = valor;
        }
        // console.log(`pc: ${persona_cons} par: ${participantes}`);
        
        // console.log(`pc: ${persona_cons} p: ${persona} v: ${valor} c: ${contador} b: ${bandera}`);
    }

    Mostrar(resultados);
}


function Mostrar(obj) {
    parrafos[0].textContent = `• Participants who found their number before ${numero} attempts: ${obj.aprobado}`;
    parrafos[1].textContent = `• Participants who did NOT find their number before ${numero} attempts: ${obj.desaprobado}`;
    let pa = (obj.aprobado * 100) / participantes;
    let pd = (obj.desaprobado * 100) / participantes;
    parrafos[2].textContent = `• Approval percentage: ${pa}% | Disapproval percentage: ${pd}%`;

    for (let valor in acertijo) {
        const nuevo = document.createElement('P');
        nuevo.textContent = `• Box: ${valor} value: ${acertijo[valor]}`;
        nuevo.classList.add("White");

        const ver = document.querySelector(".View");
        ver.appendChild(nuevo);
    }
    
}

console.log(` `);

