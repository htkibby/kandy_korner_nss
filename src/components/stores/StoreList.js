import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StoreStyles.css"

export const StoreList = () => {
   const [stores, displayStores] = useState([])

   useEffect(
      () => {
         const fetchData = async () => {
            const response = await fetch(`http://localhost:8088/locations`)
            const storeArray = await response.json()
            displayStores(storeArray)
         }
         fetchData()
      },
      []
   )

   return <>
      <h2>List of Stores</h2>
      <article className="stores">
         {
            stores.map(
               (store) => {
                  return <section key={store.id} className="store">
                     <h3 className="header">{store.name}</h3>
                     <div>
                        <p>Address: {store.address}</p>
                        <p>Square Feet: {store.sqFt}</p>
                     </div>
                  </section>
               }
            )
         }
      </article>
   </>
   

}