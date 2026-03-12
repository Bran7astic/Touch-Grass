import { Outlet, useNavigate } from "react-router";

export default function Layout() {

    const navigate = useNavigate()

    return(
        <div>
            <div className="navBar">
                <h1 onClick={() => navigate('/')}>🌱 Touch Grass</h1>
            </div>

            <div 
                style={{
                    marginTop: "10%",

                }}
            >
                <Outlet/>
            </div>
        </div>
    )
}