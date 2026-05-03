import { Link } from "react-router-dom";

export default function LoginPage(){
    return(
        <div className="w-full h-full bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
            <div className="w-[50%] h-full flex-col justify-center items-center">
                <img src="/logo.jpg" className="w-[300px] h-[300px] object-center"/>
                <h1 className="text-4xl font-bold mt-5 text-amber-50">TECH</h1>

            </div>
      
                <div className="backdrop-blur-md w-[500px] h-[650px] shadow-2xl rounded-2xl flex flex-col item-center justify-center">
                    <input type="email" placeholder="Email" className="m-5 p-3 w-[90%] h-[50px] rounded-lg border border-Secondary outline-none"/>
                    <input type="password" placeholder="Password" className="m-5 p-3 w-[90%] h-[50px] rounded-lg border border-Secondary outline-none"/>
                    <p className="w-full text-right pr-5">Forgot Password?<Link to="/forgot-password" className="text-accent">Reset</Link></p>
                    <button className="m-5 p-3 w-[90%] h-[50px] rounded-lg bg-accent text-white font-bold">Login</button>
                    <button className="m-5 p-3 w-[90%] h-[50px] rounded-lg border border-accent text-white font-bold">Login with Google</button>
                    <p className="w-full text-right pr-5">Don't have an account?<Link to="/register" className="text-accent">Register</Link></p>
                </div>

            </div>
             
    )
}