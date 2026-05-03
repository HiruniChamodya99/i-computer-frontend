import { useState } from "react"

export default function Test(){

    const [count,setCount] = useState(0)
    const [isVisible,setIsVisible] = useState(true)

    return(
        <div className="w-full h-full bg-amber-500 flex items-center justify-center">

            <button onClick={
                ()=>{
                    setIsVisible(false)
                }
            } className="w-[50px] h-[50px] bg-red-500 text-white">X</button>


            {isVisible &&<div className="w-[400px] h-[400px] bg-amber-50 flex justify-center items-center flex-col">

                <h1 className="text-[55px]">{count}</h1>

                <div className="w-full h-[50px] flex items-center justify-center gap-2">

                    <button onClick={
                        ()=>{
                            setCount(count - 1)
                        }
                    }className="w-[100px] h-[45px] bg-red-400 text-white">
                        Decriment
                    </button>

                    <button onClick={
                        ()=>{
                            setCount(count + 1)
                        }
                    }className="w-[100px] h-[45px] bg-green-400 text-white">
                        Increment
                    </button>
                    

                </div>

            </div>}

        </div>
    )
    
}