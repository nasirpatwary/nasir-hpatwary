const problem = [ 
    {phone:'iphone',price:165000},
    {nakia: 'inkia',price:65000},
    {samsun:'samsun',price:45000},
    {ilel:   'ilel' ,price:35000},
    {lenovo:'lenovo',price:75000},
    {acer:'acer' ,price:55000}
];
function cheopestPrice(phones){   
    let cheopest = price[0];
    for(let i = 0;phones.length; i++){
    const phone = phones[i];
    if(phones.price < cheopest.price){
        cheopest = phone;    
    }
  }
    return cheopest;
}
const finish = cheopestPrice(phones);
console.log(finish)
