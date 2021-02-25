var localStorage = window.localStorage;

///-----------------------------------------------USUARIOS
var usuarios = [
    {
        nombre:"Pedro",
        apellido:"Martinez",
        ordenes:[
            {
                nombreProducto:"Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            },
            {
                nombreProducto:"Producto 2",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            }
        ]
    },
    {
        nombre:"Juan",
        apellido:"Perez",
        ordenes:[
            {
                nombreProducto:"Producto 3",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            },
            {
                nombreProducto:"",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            }
        ]
    },
    {
        nombre:"Maria",
        apellido:"Rodriguez",
        ordenes:[
            {
                nombreProducto:"Producto 4",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            },
            {
                nombreProducto:"Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            }
        ]
    }
];


///-----------------------------------------------CATEGORIAS
var categorias = [ 
    {
        nombreCategoria:"Farmacias",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#9482C4",
        icono:"fab fa-angellist",
        empresas:[
            {
                nombreEmpresa: "Empresa 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Restaurantes",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#9482C4",
        icono:"fab fa-angellist",
        empresas:[
            {
                nombreEmpresa: "Empresa 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Salud",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#9482C4",
        icono:"fab fa-angellist",
        empresas:[
            {
                nombreEmpresa: "Empresa 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Café",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#9482C4",
        icono:"fab fa-angellist",
        empresas:[
            {
                nombreEmpresa: "Empresa 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Bebidas",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#9482C4",
        icono:"fab fa-angellist",
        empresas:[
            {
                nombreEmpresa: "Empresa 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    }
];

//localStorage para categorias:

if(localStorage.getItem('categorias') == null){
    localStorage.setItem('categorias', JSON.stringify(categorias));
}else{
    categorias = JSON.parse(localStorage.getItem('categorias'));
}

//localStorage para usuarios:

if(localStorage.getItem('usuarios') == null){
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}else{
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
}

// Generando las categorias:



console.log ('Usuarios', usuarios);
console.log ('Categorias', categorias);