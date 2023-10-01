let personas=[];

let calcular = () =>{

    let altura = parseFloat(document.querySelector("#altura").value)
    let peso = parseInt(document.querySelector("#peso").value)

    let resultado = parseFloat(peso /(altura*altura));

    let result = document.querySelector("#result")
    result.innerHTML = '<p style="color:blue;"> Tu IMC es : '+resultado+'</p>'

    
}

let btnCalcular = document.querySelector("#btnCalcular")

btnCalcular.addEventListener("click",calcular)

let agregarPersona = (nombre, altura, peso, sexo, edad) => {
    let persona = 
    {
        nombre: nombre,
        altura: altura,
        peso: peso,
        sexo: sexo,
        edad: edad

    };
    personas.push(persona);
    console.log("Persona agregada:", persona);
}




let btnAgregar = document.querySelector("#btnAgregar")

btnAgregar.addEventListener("click", () =>{

    let nombre = document.querySelector("#nombre").value
    let altura = parseFloat(document.querySelector("#altura").value)
    let peso = parseInt(document.querySelector("#peso").value)
    let sexo = document.querySelector("#sexo").value
    let edad = parseInt(document.querySelector("#edad").value)

    agregarPersona(nombre,altura,peso,sexo,edad);


    console.table(personas)

    
})

let mostrar = () => {
    let resultHombre = document.querySelector("#hombre");
    

    let filtrarSexoHombre = personas.filter(datoH => datoH.sexo == 'masculino')

    let personasHTMLHombre = filtrarSexoHombre.map(persona => {

        let resultado = parseFloat(persona.peso /(persona.altura*persona.altura));

        return `
        <div style="box-shadow: blue 1px 1px 10px; border-radius:10px;padding:1rem">
            <p>Nombre: ${persona.nombre}
            <br>Edad: ${persona.edad}
            <br>Peso: ${persona.peso}
            <br>Altura: ${persona.altura}
            <br>IMC: ${resultado}
            

            
            </p>
            
            </div>`;
            
    }).join(''); 

    resultHombre.innerHTML += personasHTMLHombre;


//
    let resultMujer = document.querySelector("#mujer");

    let filtrarSexoMujer = personas.filter(datoM => datoM.sexo == 'femenino')

    


    let personasHTMLMujer = filtrarSexoMujer.map(persona => {

        let resultado = parseFloat(persona.peso /(persona.altura*persona.altura));

        return `
        <div style="box-shadow: blue 1px 1px 10px; border-radius:10px;padding:1rem">
        <p>Nombre: ${persona.nombre}
        <br>Edad: ${persona.edad}
        <br>Peso: ${persona.peso}
        <br>Altura: ${persona.altura}
        <br>IMC: ${resultado}

        
        </p>
        
        </div>`;
            
    }).join(''); 

    resultMujer.innerHTML += personasHTMLMujer;

    
}

let btnMostrar = document.querySelector("#btnMostrar");
btnMostrar.addEventListener("click", mostrar);


let filtrarSexo = personas.filter(dato => dato.sexo == 'mas')
console.log(filtrarSexo)










 







