let carts = document.querySelectorAll(".shopitem")

let products = [ 
    { 
        name :"Cup",
        tag :"cup" , 
        price: 50 , 
        incart:0 ,
    },
    { 
        name :"casque",
        tag :"shop05" , 
        price: 100 , 
        incart:0 ,
    },
    { 
        name :"tshirt",
        tag :"shop03" , 
        price: 50 , 
        incart:0 ,
    },
   
]
for(let i = 0 ; i<carts.length;i++) { 
     carts[i].addEventListener('click',()=>{
        cartNumbers(products[i])
        totalcost(products[i])
     })
}
function onLoadCartNumbers(){
    let prductNumbers = localStorage.getItem("cartNumbers") 
   if(prductNumbers) { 
    document.querySelector(".cart span").textContent=prductNumbers;
   }
}
function cartNumbers(products) { 
    
    let prductNumbers = localStorage.getItem("cartNumbers")
    prductNumbers= parseInt(prductNumbers) 

    if(prductNumbers) { 
        localStorage.setItem("cartNumbers",prductNumbers+1)  ;
        document.querySelector(".cart span").textContent = prductNumbers+1; 
    } else{ 
        localStorage.setItem("cartNumbers",1) ; 
        document.querySelector(".cart span").textContent = 1 ; 
    }
    setItems(products);
} 
function setItems(products) { 
    let cartItels= localStorage.getItem("productsInCart")
    cartItels = JSON.parse(cartItels)
   
    if(cartItels !=null) {
       if(cartItels[products.tag] ==undefined) { 
         cartItels ={ 
             ...cartItels,
             [products.tag]: products
         }
       }
        cartItels[products.tag].incart +=1 ; 
    } else {
        products.incart = 1 ; 
        cartItels = { 
            [products.tag]: products
         }
    }
  localStorage.setItem("productsInCart" ,JSON.stringify
  (cartItels)) ; 
}
function totalcost(products)  { 
    //console.log("the product", products.price) 
    let cartCost= localStorage.getItem("totalCost") 
    
    console.log(cartCost) 
    console.log(typeof cartCost) 
    if(cartCost!=null) {
        cartCost= parseInt(cartCost)
        localStorage.setItem("totalCost",cartCost+
         products.price)
    } else{
    localStorage.setItem("totalCost",products.price)
   } 
} 

 function displayCart() { 
     let cartitems = localStorage.getItem("productsInCart");
     cartitems = JSON.parse(cartitems) ;
      let productcontainer= document.querySelector
      (".prrd");
      let cartCost= localStorage.getItem("totalCost") 
      if(cartitems && productcontainer){
        productcontainer.innerHTML = '' ;
        Object.values(cartitems).map(item => {
            productcontainer.innerHTML += `
            <div class="moh">
            <div class="monji">
            <ion-icon name="add-circle-outline" ></ion-icon>
            
            </div>
            <div class="imgg">
            <img id="wissemoxl"  src=heart-outline.svg  >
            
            </div>
            <img src="${item.tag}.png" widht=120px>
            <span>${item.name}M</span>
            <p> DT${item.price},00 </p>
            
         <div class="da">   <span> ${item.incart} </span> </div>
            
            <div class="total"> DT${item.incart * item.price},00 </div>
            </div>
           
            `;
            
            
        }) ;
        productcontainer.innerHTML +=` 
        <div class="basketTotalcontainer">  
           <h4 class="basket">
            basket Total
            </h4> 
            <h4 class="basketTotal">
              DT${cartCost},00
            </h4>

        `; 
      let omg =   document.querySelectorAll(".monji") 
    let HHC=  document.querySelectorAll(".basketTotal")
      for(let i = 0 ; i<omg.length ; i++) 
      omg[i].addEventListener("click",function(){ 
        omg[i].parentElement.remove() ; 
        HHC.remove() ; 
      
      })
let A = document.querySelectorAll(".imgg img")
    } 
    console.log(A)
    let b = document.querySelectorAll(".imgg img") 
    for (i of b) { 
        i.addEventListener("click",function(){  
            i.style.fill="red"  
            
        })
    }
    
  

    
 }





 displayCart() ;
onLoadCartNumbers(); 
