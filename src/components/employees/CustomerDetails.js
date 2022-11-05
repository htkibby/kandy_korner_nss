import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
   const {customerId} = useParams()
   const [customer, updateCustomer] = useState([])

   useEffect(
      () => {
         const fetchData = async () => {
            const response = await fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`)
            const customerArray = await response.json()
            updateCustomer(customerArray)
         }
         fetchData()
      },
      [customerId]
   )

   return <>
      {customer.map(
         customer => {
            return ( <>
               <header>Customer Name: {customer?.user?.name}</header>
               <div>Loyalty Number: {customer.loyaltyNumber}</div>
               <div>Customer Email: {customer?.user?.email}</div>
               </>
            )
         }
      )
      }

   </>
}