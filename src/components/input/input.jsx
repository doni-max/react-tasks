import { useState } from "react"
import style from "./input.module.css"


export const Input = ({addtache}) => {

    const [title, setTitle] = useState("")

    const recup_titre = (e) =>{
        setTitle(e.target.value)
    }
    const get_titre = (e) =>{
        e.preventDefault()
        addtache(title)
        setTitle("")
    }



    return(
        <div className={style.content}>
            <div className={` text-light ${style.titre}`}>
                <h1>Ajoute ta nouvelle tache</h1>
            </div>
            <div>
                <form className=" mt-2 w-100" onSubmit={get_titre}>
                    <div className=" row w-100">
                        <div className=" col-10">
                            <input 
                                type="text" className=" form-control" 
                                placeholder="indiquer votre nouvelle tache" onChange={recup_titre}
                                value={title} s
                            />
                        </div>

                        <div className=" col-2">
                            <button type="submit" className=" btn btn-primary w-100">Ajouter</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}