import { useEffect, useState } from "react"

export const EmployeeList = () => {
   const [employee, setEmployees] = useState([])

   useEffect(
      () => {
         const fetchData = async () => {
            const response = await fetch(`http://localhost:8088/employees?_expand=user`)
            const employeeArray = await response.json()
            setEmployees(employeeArray)
         }
         fetchData()
      },
      []
   )

   return <>{
      employee.map(
         employee => {
            return (
               <section className="employee" key={`employee--${employee.id}`}>
               <header className="employee_header">Name: {employee?.user?.name}</header>
               <div>Email: {employee?.user?.email}</div>
               <div>Start Date: {employee.startDate}</div>
               <div>Rate: {employee.payRate}</div>
               </section>
            )
         }
      )
   }
   </>
}