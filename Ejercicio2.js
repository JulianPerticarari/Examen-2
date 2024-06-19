// 2) Crea una función que reciba un array de objetos, donde cada objeto 
// representa a un estudiante con las propiedades nombre y nota. La 
// función debe devolver el promedio de las notas de todos los 
// estudiantes.

function NotasPromedio(Alumnos) {

    if (Alumnos.length === 0) {
    }

    let SumadeNota = 0;


    for (let i = 0; i < Alumnos.length; i++) {
        SumadeNota += Alumnos[i].nota;
    }

 
    let promedio = SumadeNota / Alumnos.length;


    return promedio.toFixed(2);
}
let Alumnos = [
    { nombre: 'Julian', nota: 10 }, 
    { nombre: 'Yvan', nota: 7 },
    { nombre: 'Francisco', nota: 2 },
];

console.log(`El promedio de notas de lo Alumnos es de`, NotasPromedio(Alumnos));