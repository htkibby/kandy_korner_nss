import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ListOfCustomers = () => {
   const [customers, setCustomers] = useState([])

   useEffect(
      () => {
         const fetchData = async () => {
            const response = await fetch(`http://localhost:8088/customers?_expand=user`)
            const customerArray = await response.json()
            setCustomers(customerArray)
         }
         fetchData()
      },
      []
   )

   return <>{
      customers.map(
         customers => {
            return (
               <section className="customers" key={`customer--${customers.id}`}>
               <div>
                  <Link to={`/employees/customerlist/${customers?.user?.id}`}>Name {customers?.user?.name}</Link>
               </div>
               <div>Email: {customers?.user?.email}</div>
               </section>
            )
         }
      )
   }
   </>
}