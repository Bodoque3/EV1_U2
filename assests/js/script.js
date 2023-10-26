function enviar(){
    document.getElementsById("formulario")
    
    let Nombre = document.getElementsByName("Nombre").value;
    let Apellido = document.getElementsByName("Apellido").value;
    let Teléfono = document.getElementsByName("Teléfono").value;
    let Carrera = document.getElementsByName("Carrera").value;
    let Edad = document.getElementsByName("Edad").value;

    if(Nombre.length == 0 || !isNaN(Nombre)){
        alert("Mensaje no enviado. Revisar datos ingresados")
    }else{
        console.log(Nombre)
    }

    if(Apellido.length==0 || !isNaN(Apellido)){
        alert("Mensaje no enviado. Revisar datos ingresados")
    }else{
        console.log(Apellido)
    }

    if(Teléfono < 222222222 || Teléfono > 999999999 ){
        alert("Mensaje no enviado. Revisar datos ingresados")
    }else{
        console.log(Teléfono)
    }

    if(Carrera.length==0 || !isNaN(Carrera)){
        alert("Mensaje no enviado. Revisar datos ingresados")
    }else{
        console.log(Carrera)
    }

    if(isNaN(Edad) || Edad < 17 || Edad > 60){
        alert("Mensaje no enviado. Revisar datos ingresados")
    }else{
        console.log(Edad)
    }

}
