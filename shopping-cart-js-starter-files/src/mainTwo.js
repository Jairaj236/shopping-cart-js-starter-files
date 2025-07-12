 const shop = document.getElementById('shop')
//  console.log(shop)

  let basket =[]
 function display(){
    return (shop.innerHTML = shopItemsData.map((item)=>{ 
              let {id,img,name,desc,price} = item;
                const search = basket.filter((x)=>x.id ===id)
                // console.log("id", id)
        return `
    <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">
            ${search.item === undefined ? 0 : search.item}
              </div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
    `; 
    }).join(''))
 }
 display()


let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x)=> x.id === selectedItem.id)
   
  
  if(search === undefined){
   basket.push({
    id:selectedItem.id,
    item : 1
   })
  }
  else{
     search.item +=1
  }
  update(selectedItem.id);

  
};
function decrement(id){
   const selectedItem = id
     
   const search = basket.find(x=> x.id === selectedItem.id)
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  
  update(selectedItem.id);
}

function update(id){
  const search = basket.find(x => x.id === id);

  document.getElementById(id).innerHTML = search.item
 calculation();
}

let calculation = () => {
    const cartCount = document.getElementById("cartAmount")
    cartCount.innerHTML = basket.map(x=>x.item).reduce((ac,val)=> ac+val,0)
}
