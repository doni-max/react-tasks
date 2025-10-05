import logoreact from "../../assets/logoreact.svg"
import { Minuterie } from "../minuterie/minuterie"
import style from "./header.module.css"




export const Header = () =>{
    return(
        <div className={style.content}>
            <div className={style.cont}>
                <div className={style.div2}>
                    <img src={logoreact} />
                    <h1 className=" text-uppercase fw-bold fs-2 ms-1 text-light">nouvelles taches</h1>
                </div>

                 <div>
                    <Minuterie/>
                </div>
               
            </div>
           
            <div className="mt-3 bg-info px-2 pt-2 rounded-1 w-25 d-flex justify-content-center">
                <p className=" fw-bold fs-6">Démarrer une nouvelle tache</p>
            </div>
        </div>
    )
}