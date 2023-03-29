import { Link, Outlet } from "react-router-dom"


const Layout = () => {
    return (
        <>
            <ul>
                <li><Link to="/">HOme</Link></li>
                <li><Link to="/list">list</Link></li>
                <li><Link to="/write">write</Link></li>
            </ul>
            <Outlet />
        </>
    )
}

export default Layout