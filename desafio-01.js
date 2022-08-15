class usuario {
    constructor(nombre, apellido, mascotas, libros) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = mascotas;
        this.libros = libros;

    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota) {  //Agregar mascota
        this.mascotas.push(mascota);
    }
    countMascotas() { //Contar mascotas
        return this.mascotas.length;
    }
    addBook(nombre, autor) { //Agregar libro
        this.libros.push({nombre: nombre, autor: autor});
    }
    getBookName() { //Obtener nombre de libro
        return this.libros.map(libro => libro.nombre);
    }


}

const usuario1 = new usuario('Luis', 'De La Hoz', ['perro', 'gato'], [{nombre: 'Harry Potter', autor: 'J.K. Rowling'}]);


console.log(usuario1.getFullName());
usuario1.addMascota('loro')
console.log(`mascotas:  ` + usuario1.mascotas);
console.log(`total mascotas:  `+ usuario1.countMascotas());
usuario1.addBook('El Principito', 'Antoine De Saint-Exupéry')
console.log(usuario1.libros);
console.log(usuario1.getBookName());