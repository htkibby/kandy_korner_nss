import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


export const EmployeeForm  = () => {
   
   const [employee, setEmployee] = useState({
      startDate: "",
      payRate: 0,
      userId: 0,
      locationId: 0
   })

   const [user, setUser] = useState({
      name: "",
      email: "",
      isStaff: true
   })

   const [userIdSet, setUserId] = useState([])

   useEffect(
        () => {
            const fetchUserId = async () => {
               const res = await fetch(`http://localhost:8088/users?_sort=id&_order=desc`)
               const resp = await res.json()
               setUserId(resp)
            }
            fetchUserId()
        },
        []
    )

   const navigate = useNavigate()
   const localKandyUser = localStorage.getItem("kandy_user")
   const kandyUserObject = JSON.parse(localKandyUser)

   const submitFunction = (event) => {
      event.preventDefault()

      const employeeToSendToAPI = {
         startDate: employee.startDate,
         payRate: +employee.payRate,
         userId: userIdSet[0]?.id + 1,
         locationId: +employee.locationId
      }

      const userToSendToAPI = {
         name: user.name,
         email: user.email,
         isStaff: user.isStaff
      }

      const sendUserData = async () => {
         const options = {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(userToSendToAPI)
         }
         const response = await fetch(`http://localhost:8088/users`, options)
         await response.json()
      }
      sendUserData()

      const sendEmployeeData = async () => {
         const options = {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeToSendToAPI)
         }
         const response = await fetch(`http://localhost:8088/employees`, options)
         await response.json()
         navigate("/employees")
      }
      sendEmployeeData()
   }

   return (
      <form className="employeeForm">
         <h2 className="employeeFormTitle">New Employee</h2>
         <fieldset>
            <div className="formGroup">
               <label htmlFor="name">Name:</label>
               <input
                  type="text"
                  placeholder="Name of Employee"
                  value={user.name}
                  onChange={
                     (event) => {
                        const copy = {...user}
                        copy.name = event.target.value
                        setUser(copy)
                     }
                  }
               ></input>
            </div>
         </fieldset>
         <fieldset>
            <div className="formGroup">
               <label htmlFor="email">Email:</label>
               <input
                  required autoFocus
                  type="text"
                  placeholder="Email of Employee"
                  value={user.email}
                  onChange={
                     (event) => {
                        const copy = {...user}
                        copy.email = event.target.value
                        setUser(copy)
                     }
                  }
               />
            </div>
         </fieldset>
         <fieldset>
            <div className="formGroup">
               <label htmlFor="name">Start Date:</label>
               <input
                  required autoFocus
                  type="date"
                  value={employee.startDate}
                  onChange={
                     (event) => {
                        const copy = {...employee}
                        copy.startDate = event.target.value
                        setEmployee(copy)
                     }
                  }
               ></input>
            </div>
         </fieldset>
         <fieldset>
            <div className="formGroup">
               <label htmlFor="payrate">Pay Rate:</label>
               <input
                  required autoFocus
                  type="number"
                  value={employee.payRate}
                  onChange={
                     (event) => {
                        const copy = {...employee}
                        copy.payRate = event.target.value
                        setEmployee(copy)
                     }
                  }
               ></input>
            </div>
         </fieldset>
         <fieldset>
            <div className="formGroup">
               <label htmlFor="location">Employee Location</label>
               <input
                  required autoFocus
                  type="radio"
                  value={1}
                  onChange={
                     (event) => {
                        const copy = {...employee}
                        copy.locationId = event.target.value
                        setEmployee(copy)
                     }
                  }
               />
               North
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
                        const copy = {...employee}
                        copy.locationId = event.target.value
                        setEmployee(copy)
                     }
                  }
               />
               South
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
                        const copy = {...employee}
                        copy.locationId = event.target.value
                        setEmployee(copy)
                     }
                  }
               />
               West
            </div>
         </fieldset>
         <button
            onClick={(clickEvent) => submitFunction(clickEvent)}
            className="button">
               Submit Employee
         </button>
      </form>
   )
}