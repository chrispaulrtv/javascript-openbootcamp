let listaCompras = ['Leche', 'Cereal', 'Avena', 'Pan']

listaCompras = [...listaCompras, 'Aceite de Girasol']

listaCompras = listaCompras.filter(compra => compra !== 'Aceite de Girasol')

console.log(listaCompras)

let listaPeliculas = [
  { titulo: 'The Internship', director: 'Shawn Levy', fecha: new Date(2013,06,07) },
  { titulo: 'Steve Jobs', director: 'Danny Boyle', fecha: new Date(2015,10,09) },
  { titulo: 'Red Social', director: 'David Fincher', fecha: new Date(2010,09,24) },
]

let nuevaListaPeliculas = listaPeliculas.filter(pelicula => pelicula.fecha > new Date(2010,01,01))

console.log(nuevaListaPeliculas)

let directores = listaPeliculas.map(pelicula => pelicula.director);

console.log(directores);

let titulos = listaPeliculas.map(pelicula => pelicula.titulo);

console.log(titulos);

let misPeliculasConcat = directores.concat(titulos);

console.log(misPeliculasConcat);

let misPeliculasConcat2 = [...directores, ...titulos];

console.log(misPeliculasConcat2);