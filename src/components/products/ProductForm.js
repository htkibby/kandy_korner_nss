import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {

   const [product, update] = useState({
      name: "",
      productTypesId: 0,
      price: 0
   })

   const navigate = useNavigate()
   const localKandyUser = localStorage.getItem("kandy_user")
   const kandyUserObject = JSON.parse(localKandyUser)

   const submitFunction = (event) => {
      event.preventDefault()

      const productToSendToAPI = {
         name: product.name,
         productTypesId: +product.productTypesId,
         price: +product.price
      }

      const sendData = async () => {
         const options = {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(productToSendToAPI)
         }
         const response = await fetch(`http://localhost:8088/products`, options)
         await response.json()
         navigate("/products")
      }
      sendData()
   }

   return (
      <form className="productForm">
         <h2 className="productForm_title">New Candy Product</h2>
         <fieldset>
            <div className="formGroup">
               <label htmlFor="name">Product Name</label>
               <input
                  required autoFocus
                  type="text"
                  className="form-control"
                  placeholder="Name of Product"
                  value={product.name}
                  onChange={
                     (event) => {
                        const copy = {...product}
                        copy.name = event.target.value
                        update(copy)
                     }
                  } />
            </div>
         </fieldset>
         <fieldset>
            <div className="formGroup">
               <label htmlFor="productTypesId">Product Type</label>
               <input
                  required autoFocus
                  type="radio"
                  value={1}
                  onChange={
                     (event) => {
                        const copy = {...product}
                        copy.productTypesId = event.target.value
                        update(copy)
                     }
                  }
               />
               Chocolate
            </div>
         </fieldset>
         <fieldset>
            <div className="formGroup">
               <input
                  required autoFocus
                  type="radio"
                  value={2}
                  onChange={
                     (event) => {
                        const copy = {...product}
                        copy.productTypesId = event.target.value
                        update(copy)
                     }
                  }
               />
               Gummies
            </div>
         </fieldset>
         <fieldset>
            <div className="formGroup">
               <input
                  required autoFocus
                  type="radio"
                  value={3}
                  onChange={
                     (event) => {
                        const copy = {...product}
                        copy.productTypesId = event.target.value
                        update(copy)
                     }
                  }
               />
               Hard Candy
            </div>
         </fieldset>
         <fieldset>
            <div className="formGroup">
            <label htmlFor="name">Product Price</label>
                  <input
                     required autoFocus
                     type="number"
                     value={product.price}
                     onChange={
                        (event) => {
                           const copy = {...product}
                           copy.price = event.target.value
                           update(copy)
                        }
                     }
                  />
            </div>
         </fieldset>
         <button
            onClick={(clickEvent) => submitFunction(clickEvent)}
            className="button">
               Submit Product
         </button>
      </form>
   )
}