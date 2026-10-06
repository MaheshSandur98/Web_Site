const products=[
{id:1,name:"ProBook 14",type:"work",tag:"BUSINESS",price:64999,spec:"Intel Core i5 • 16GB RAM • 512GB SSD"},
{id:2,name:"Creator X15",type:"work",tag:"CREATOR",price:89999,spec:"Intel Core i7 • 16GB RAM • 1TB SSD"},
{id:3,name:"Nitro G16",type:"gaming",tag:"GAMING",price:109999,spec:"Ryzen 7 • RTX Graphics • 16GB RAM"},
{id:4,name:"UltraBook Air",type:"work",tag:"ULTRABOOK",price:74999,spec:"Core Ultra • 16GB RAM • 512GB SSD"},
{id:5,name:"Predator X",type:"gaming",tag:"GAMING",price:149999,spec:"Intel Core i9 • RTX Graphics • 32GB RAM"},
{id:6,name:"StudentBook 15",type:"work",tag:"EVERYDAY",price:45999,spec:"Ryzen 5 • 8GB RAM • 512GB SSD"}];
let cart=[];
const grid=document.getElementById("productGrid");
const money=n=>"₹"+n.toLocaleString("en-IN");
function renderProducts(filter="all"){
 const list=filter==="all"?products:products.filter(p=>p.type===filter);
 grid.innerHTML=list.map(p=>`<article class="product"><div class="product-image"><div class="mini-laptop"></div></div><div class="product-info"><small>${p.tag}</small><h3>${p.name}</h3><p>${p.spec}</p><div class="product-bottom"><strong>${money(p.price)}</strong><button class="add" onclick="addToCart(${p.id})">Add to Cart</button></div></div></article>`).join("");
}
window.addToCart=id=>{cart.push(products.find(p=>p.id===id));updateCart();openCart()};
function updateCart(){
 document.getElementById("cartCount").textContent=cart.length;
 document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-item"><div><strong>${p.name}</strong><br><small>${money(p.price)}</small></div><button class="add" onclick="removeItem(${i})">×</button></div>`).join(""):"<p style='color:#99a2b3'>Your cart is empty.</p>";
 document.getElementById("cartTotal").textContent=money(cart.reduce((s,p)=>s+p.price,0));
}
window.removeItem=i=>{cart.splice(i,1);updateCart()};
document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderProducts(b.dataset.filter)});
const panel=document.getElementById("cartPanel"),overlay=document.getElementById("overlay");
function openCart(){panel.classList.add("open");overlay.classList.add("show")}
function closeCart(){panel.classList.remove("open");overlay.classList.remove("show")}
document.getElementById("cartButton").onclick=openCart;document.getElementById("closeCart").onclick=closeCart;overlay.onclick=closeCart;
document.getElementById("menuButton").onclick=()=>document.getElementById("nav").classList.toggle("open");
document.getElementById("serviceForm").onsubmit=e=>{e.preventDefault();document.getElementById("formMessage").textContent="Demo booking submitted successfully.";e.target.reset()};
document.getElementById("checkoutBtn").onclick=()=>alert("Demo checkout. Connect your backend/payment gateway later.");
renderProducts();updateCart();