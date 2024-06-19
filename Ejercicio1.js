// 1) Crea una función que reciba un array de objetos, donde cada objeto
// representa a un estudiante con las propiedades nombre y nota. La
// función debe devolver un nuevo array con los nombres de los
// estudiantes que tienen una nota mayor o igual a 7.

function AlumnosAprobados(Alumnos) {
    return Alumnos
        .filter(estudiante => estudiante.nota >= 7) 
        .map(estudiante => estudiante.nombre); 
}

const Alumnos = [
    { nombre: 'Julian', nota: 10 }, // La nota que espero profe guiño guiño
    { nombre: 'Yvan', nota: 7 },
    { nombre: 'Francisco', nota: 2 },
];

const Aprobados = AlumnosAprobados(Alumnos);
console.log(`Los alumnos aprobados son`, Aprobados); 
