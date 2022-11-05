import { Outlet, Route, Routes } from "react-router-dom"
import { Products } from "../products/Products"
import { StoreList } from "../stores/StoreList"
import { ProductSearch } from "../products/ProductSearch"

export const CustomerViews = () => {
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
		<Route path="productssearch" element={ <ProductSearch />}></Route>

	</Routes>
	)	
}

