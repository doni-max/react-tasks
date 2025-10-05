import { useEffect } from "react"
import { useState } from "react"
import style from "./min.module.css"



export const Minuterie = () =>{
    const [count, setCount] = useState(0)
    const [en_marche, setEn_marche] = useState(false)
    let interval;

    useEffect(() =>{
        if (en_marche){
            interval = setInterval(() => {
                setCount((precount) => precount+1)
            }, 1000);
        }
        return () =>{
            clearInterval(interval)
        }
    }, [en_marche])
    
    const on_off = () =>{
        setEn_marche(!en_marche)
    }
    const reinit = () =>{
        setCount(0)
        setEn_marche(false)
    }

   
     return(
        <div className={` d-flex flex-column align-items-center ${style.div1}`}>
            <p className=" bg-light fs-5 rounded-2 px-1 fw-bold">Minuteur</p>
            <div className=" bg-light w-50 justify-content-center d-flex rounded-1">
                <span className=" fw-bold fs-5">{count}</span>
            </div>
            <div className=" mt-2">
                <button className=" btn btn-success" onClick={on_off}>{en_marche ? "Arréter" : "Démarrer"}</button>
                <button className=" ms-2 btn btn-warning" onClick={reinit}>Reinitialiser</button>
            </div>
        </div>
    )
}