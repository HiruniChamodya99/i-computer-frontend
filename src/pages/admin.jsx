import { Route, Routes } from "react-router-dom";

export default function AdminPage(){
    return(
        <div className="w-full h-full border-4 border-blue-600 flex">
            <div className="w-[300px] h-full bg-red-900">
                <a href="/admin">Orders</a><br/>
                <a href="/admin/products">Products</a><br/>
                <a href="/admin/users">Users</a><br/>

                {/*<Link to="/admin/">Orders</Link>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/users">Users</Link>*/}

                
            </div>
            <div className="flex-1 h-full bg-amber-400">
                <Routes>
                    <Route path="/" element={<h1>Order Page</h1>}/>
                    <Route path="/products" element={<h1>Products Page</h1>}/>
                    <Route path="/users" element={<h1>Users Page</h1>}/>
                </Routes>


            </div>
            
        </div>
    )
}