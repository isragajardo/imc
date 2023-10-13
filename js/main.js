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

let agregarPersona = (nombre, altura, peso, sexo, edad,resultado) => {
    let persona = 
    {
        nombre: nombre,
        altura: altura,
        peso: peso,
        sexo: sexo,
        edad: edad,
        resultado: peso /(altura*altura)

    };
    personas.push(persona);
    
    localStorage.setItem("usuario",JSON.stringify(persona));
    console.log("Persona agregada:", "$persona");
}




let btnAgregar = document.querySelector("#btnAgregar")

btnAgregar.addEventListener("click", () =>{

    let nombre = document.querySelector("#nombre").value
    let altura = parseFloat(document.querySelector("#altura").value)
    let peso = parseInt(document.querySelector("#peso").value)
    let sexo = document.querySelector("#sexo").value
    let edad = parseInt(document.querySelector("#edad").value)

    agregarPersona(nombre,altura,peso,sexo,edad);

    document.querySelector("#nombre").value = "";
    document.querySelector("#altura").value = "";
    document.querySelector("#peso").value = "";
    document.querySelector("#edad").value = "";

    



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

    resultHombre.innerHTML = personasHTMLHombre;


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

    resultMujer.innerHTML = personasHTMLMujer;

    
}

let btnMostrar = document.querySelector("#btnMostrar");
btnMostrar.addEventListener("click", mostrar);


let filtrarSexo = personas.filter(dato => dato.sexo == 'mas')
console.log(filtrarSexo)

const btnStorage = document.querySelector("#btnStorage")

btnStorage.addEventListener('click', ()=>{
 let contenidoStorage = JSON.parse(localStorage.getItem("usuario"))
 console.log(contenidoStorage)
 let mostrarStorage = document.querySelector("#mostrarStorage")
 
 mostrarStorage.innerHTML = `<div style="margin-top:1rem;width:60%;display: flex;justify-content: center;align-items: center;box-shadow: 5px 10px 10px 2px;background-color: rgb(165, 205, 238);">
                                 <p>Nombre: ${JSON.stringify(contenidoStorage.nombre)}</p>
                                 <p>Sexo: ${JSON.stringify(contenidoStorage.sexo)}</p>
                                 <p>Edad: ${JSON.stringify(contenidoStorage.edad)}</p>
                                 <p>Peso: ${JSON.stringify(contenidoStorage.peso)}</p>
                                 <p>Altura: ${JSON.stringify(contenidoStorage.altura)}</p>
                                 <p>Total: ${JSON.stringify(contenidoStorage.resultado)}</p>

                               </div>`
})

let btnStorageClear = document.querySelector("#btnStorageClear")

btnStorageClear.addEventListener('click' , ()=>{
    localStorage.clear()
})






 







