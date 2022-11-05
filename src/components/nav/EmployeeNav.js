import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const EmployeeNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/stores">Stores</Link>
                <Link className="navbar__link" to="/products">Products</Link>
                <Link className="navbar__link" to="/employees">Employee List</Link>
                <Link className="navbar__link" to="/employees/create">Create New Employee</Link>
                <Link className="navbar__link" to="/employees/customerlist">List Of Customers</Link>
            </li>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
}

