const mydata=[
    {
        name:"neymar1"
        image:"https://i.pinimg.com/originals/6d/99/4b/6d994b5944d04de0ae944954c8317c01.jpg"
    },
    {
        name:"neymar2"
        image:"https://i.pinimg.com/originals/2c/6d/49/2c6d499c7064a417925386bc3abfcece.jpg"
    },
    {
        name:"neymar3"
        image:"https://4.bp.blogspot.com/-KuldLDWfjkY/U6vsoX5LBNI/AAAAAAAACAg/GgBmQLRysUA/s1600/917132_610112265753881_1454673087_n.jpg"
    }
]

const con=document.getElementById("container");
for(let i=0;i<mydata.length;i++){
    con.innerHTML+=`<h1>${mydata[i].name}</h1>
    <img src=${mydata[i].image} alt="loading" height="100px"`
}









fetch('https://fakestoreapi.com/products')
.then(
    //anonymous function
    (res)=>res.json()
)
.then((data)=>{
    for(let i=0)
})
