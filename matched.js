let products=[
    {id:1,name:'leptop hp',price:52000},
    {id:1,name:'Leptop dell',price:42000},
    {id:1,name:'Leptop lenevo',price:22000},
    {id:1,name:'leptop acer',price:47000},
    {id:1,name:'i phone',price:5200},
    {id:1,name:'sumsung Phone',price:5200},
    {id:1,name:' xiomi phone',price:5200},
    {id:1,name:' remax earbut',price:5200},
    {id:1,name:' samsung earbut',price:5200},
];
function matchProducts(products,search){
    let empty=[];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            empty.push(product);
        }
    }
    return empty;
}
const result=matchProducts(products,'leptop');
console.log(result);