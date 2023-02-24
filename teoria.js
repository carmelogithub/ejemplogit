//función anónima
var masGrande = function (arr){
    var mayor=0;
    var len = arr.length;
    for(var a of arr){
        if(mayor<a){
            mayor = a;
        }
    }
    return mayor;
    }//cierra función anónima
    
function mayor(){
    var intArr = [1,2,3,4,15,6,7,8];
    alert(masGrande(intArr));
    }

//closure en javascript
function closure(){
    var ciudad="madrid";
    function dimeCiudad(){
        alert("la ciudad favorita es "+ciudad);
        alert(`la ciudad favorita es ${ciudad}`);//template
    }//cierra la función interna. closure
    dimeCiudad();//no debe olvidarse llamar a la closure, interna
}//cierra función externa

//función de orden superior - de primera clase
//funciones que pueden tomar otras funciones como arguemntos o/y pueden retornar funciones
function superior(){ //retornar otra funcion
    var get_post = function(post_number) {
       
        return fetch(`https://jsonplaceholder.typicode.com/todos/${post_number}`)
        // Paso como parámetro
        .then(response => response.json())
        .then(function(data) {
        console.log(data);
        });
        };
    get_post(2);
}

//funciones puras
function puras(){
    var unidades=7;
    var precio=5.95;
    precio=8; //mutabilidad
var resultado=(u,p)=>u*p;
alert(`El importe total es ${resultado(10,7)}`);    

}
    
//function map
function funcionmap(){
//crea una array con 5 items con precios con decimales
//muestra esos precios redondeados a la unidad
precios=[10.95,11.85,36.95,12.45,11.5];
const redondeado=precios.map(x=>Math.round(x))
const redondeadoforEach=precios.forEach((x)=>{console.log(Math.round(x))})
console.log(redondeado);
//console.log(redondeadoforEach);

}
//function reduce
function funcionreduce(){
//crea una array con 5 items que son las unidades de los pedidos recibidos
//muestra cuánto ha sido el pedido medio
pedidos=[10,20,30,40,50]
const pedidomedio=pedidos.reduce((x,y)=>(x+y))/pedidos.length;
window.alert(`el pedido medio es ${pedidomedio}`);    
}
//function filter
function funcionfilter(){
//crea un array con 6 emails
//muestra únicamente los emails que son de gmail
var arr =["pepe@email.com", "fran@gmail.com","guillermo@gmail.com", "lucia@email.com","adriana@gmail.com", "ana@email.com"];
console.log(arr.filter(correo=> correo.includes("@gmail.")));

}

//consumir API Rest
function leerapi(){
//consumir una api : unidades, precio...
//creas un array por consola que muestre el producto = price*stock
// https://dummyjson.com/products
//puedes utilizar programación funcional
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(({products})=>{//nodo principal del json
        console.log(products.map(product=>product.price*product.stock));
    })
}