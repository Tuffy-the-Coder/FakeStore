import { Outlet, useParams } from "react-router-dom"
export default function Checkout() {
    
    return (
        <div className=" flex justify-center p-6 ">
            <Outlet />
        </div>
    )
}
