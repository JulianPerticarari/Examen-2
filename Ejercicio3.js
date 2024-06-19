// 3) Crea una clase que represente un libro en una biblioteca. Cada libro 
// debe tener las propiedades título, autor y año de 
// publicacion. La clase debe tener un método que imprima la 
// información del libro en la consola. Además, crea otra clase que 
// gestione una colección de libros. La clase biblioteca debe tener un 
// método para añadir libros a la colección y otro método para mostrar 
// todos los libros en la biblioteca. 

class Libro {
    constructor(titulo, autor, Publicacion) {
        this.titulo = titulo;
        this.autor = autor;
        this.Publicacion = Publicacion;
    }

    imprimirInfo() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Publicación: ${this.Publicacion}`);
    }
}

class biblioteca {
    constructor() {
        this.coleccion = [];
    }

    añadirLibro(libro) {
        this.coleccion.push(libro);
    }

    mostrarLibros() {
        this.coleccion.forEach(libro => libro.imprimirInfo());
    }
}


const Libro1 = new Libro('Las aventuras de un estudiante de programacion', 'Julian Perticarari', 2024);
const Libro2 = new Libro('Las aventuras de Sherlock Holmes ', 'Arthur Conan Doyle.',  1892); // Busque los 2 libros en google xq sinceramente no leo libros y como consecuencia no me acordaba de ninguno.
const Libro3 = new Libro('El código Da Vinci', 'Dan Brown', 2003);

const Mibiblioteca = new biblioteca();

Mibiblioteca.añadirLibro(Libro1);
Mibiblioteca.añadirLibro(Libro2);
Mibiblioteca.añadirLibro(Libro3);
Mibiblioteca.mostrarLibros();
