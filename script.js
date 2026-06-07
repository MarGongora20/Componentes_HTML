let boton = document.getElementById("agregar");
let cate = document.getElementById("seleccion");
let listado = []

boton.addEventListener("click",function () {
    let tarea = document.getElementById("input").value
    let categoria = document.getElementById("seleccion").value
    let nuevaCategoria = document.getElementById("otro").value

    if (tarea === "" || categoria === "") {
        error.textContent = "Complete todos los campos, para continuar."
        return
    }    
    error.textContent = ""

    if (categoria === "Otro") {
        categoriaFinal = nuevaCategoria
    }else{
        categoriaFinal = categoria
    }

    let tareaNueva = {tarea: tarea, categoria: categoriaFinal}
    listado.push(tareaNueva)

    mostrar()
    conteo()
})

cate.addEventListener("change",function () {
    let inputOtro = document.getElementById("otro")

    if (cate.value === "Otro") {
        inputOtro.style.display = "block"
    }else{
        inputOtro.style.display = "none"
    }
})

function mostrar() {
    let tareas = document.getElementById("subBloque1")
    tareas.innerHTML = ""
    
    listado.forEach(function (tareaNueva) {
        tareas.innerHTML += `<p>${tareaNueva.tarea} - ${tareaNueva.categoria}<input type="checkbox" id"marcado" onchange="conteo()"></p>`    
    })   
}

function conteo() {
    let marcados = document.querySelectorAll("input[type='checkbox']:checked").length
    let total = listado.length
    document.getElementById("contador").textContent = marcados
    document.getElementById("numero").textContent = total
}