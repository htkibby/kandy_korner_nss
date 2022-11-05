import { Outlet, Route, Routes } from "react-router-dom"
import { Products } from "../products/Products"
import { StoreList } from "../stores/StoreList"
import { ProductForm } from "../products/ProductForm"
import { EmployeeList } from "../employees/EmployeeList"
import { EmployeeForm } from "../employees/EmployeeForm"
import { ListOfCustomers } from "../employees/ListOfCustomers"
import { CustomerDetails } from "../employees/CustomerDetails"

export const EmployeeViews = () => {
	return (
	<Routes>
		<Route path="/" element={
			<>
			<h1>Kandy Korner</h1>

			<Outlet />
			</>
		}></Route>

		<Route path="stores" element={ <StoreList />}></Route>
		<Route path="products" element={ <Products />}></Route>
		<Route path="products/create" element={ <ProductForm />}></Route>
      <Route path="employees" element={< EmployeeList />}></Route>
      <Route path="employees/create" element={< EmployeeForm />}></Route>
      <Route path="employees/customerlist" element={< ListOfCustomers />}></Route>
      <Route path="employees/customerlist/:customerId" element={< CustomerDetails />}></Route>
	</Routes>
	)	
}

