import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Products = () => {
   const [product, displayProducts] = useState([])
   const [sortedProducts, sortProducts] = useState([product])
   const [expensiveProduct, showExpensive] = useState([false])
   const navigate = useNavigate()

   const localKandyUser = localStorage.getItem("kandy_user")
	const kandyUserObject = JSON.parse(localKandyUser)

   useEffect(
      () => {
         const fetchData = async () => {
            const response = await fetch(`http://localhost:8088/products?_expand=productTypes`)
            const productArray = await response.json()
            displayProducts(productArray)
         }
         fetchData()
      },
      []
   )

   useEffect(
      () => {
         const sortedArray = product.sort((a, b) => (a.name > b.name) ? 1 : -1)
         sortProducts(sortedArray)
      },
      [product]
   )

   useEffect(
      () => {
         if(expensiveProduct) {
            const priceyP = product.filter(expensive => expensive.price > 2.00)
            sortProducts(priceyP) 
         } else {
            const sortedArray = product.sort((a, b) => (a.name > b.name) ? 1 : -1)
            sortProducts(sortedArray)
         }
      },
      [expensiveProduct]
   )

   return <>
   {
      kandyUserObject.isStaff
      ?<>
         <button onClick={() => showExpensive(true)}>Show Expensive</button>
         <button onClick={() => showExpensive(false)}>Show All</button>
         <button onClick={() => navigate("./create")}>Create Product</button>
      </>
      : <>
         <button onClick={() => showExpensive(true)}>Show Expensive</button>
         <button onClick={() => showExpensive(false)}>Show All</button>
      </>
   }

   <h2>List of Products</h2>
   <article>
      {
         sortedProducts.map(
            (product) => {
               return (<section key={`product--${product.id}`} className="product">
                  <header className="header">{product.name}</header>
                    <p>Price: {product.price}</p>
                    <p>Type: {product?.productTypes?.category}</p>
               </section>)
            }
         )
      }
   </article>
</>

}