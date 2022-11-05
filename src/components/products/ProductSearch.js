import { useEffect, useState } from "react"

export const ProductSearch = () => {

   const [product, displayProducts] = useState([])
   const [searchTerms, setSearchTerms] = useState("")
   const [sortedProducts, sortProducts] = useState([])

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
         if (searchTerms) {
            const searchedProduct = product.filter(products => (products.name.toLowerCase().startsWith(searchTerms.toLowerCase())));
            sortProducts(searchedProduct)
         } else {
            sortProducts([])
         }
      },
      [searchTerms]
   )

   return <>
      <div>
         <input 
            onChange={
               (changeEvent) => {
                  setSearchTerms(changeEvent.target.value)
               }
            }
            type="text" placeholder="What candy are you looking for?"/>
      </div>
      <article>
      {
         sortedProducts.map(
            (product) => {
               return (<section key={`product--${product.id}`} className="product">
                  <header className="header">{product.name}</header>
                    <p>Price: {product.price}</p>
               </section>)
            }
         )
      }
   </article>

   </>

}