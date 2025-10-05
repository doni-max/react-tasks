import { Item } from "../item/item"
import style from "./list.module.css"


export const List = ({list, supprim, edit, incomplet}) =>{
    const la_liste = list.map((tache)=> (
        <Item key={tache.id} tache={tache} supr={supprim} edit={edit} />
    ))

    if (list.length>0){
         return(
        <div className={style.content}>
            {incomplet>0 && (
                <p className=" fw-bold text-light fs-3 text-center">il te reste encore {incomplet} tache{incomplet>1 ? "s" : ""} à accomplir</p>
            )}
             {incomplet === 0 && (
                <p className=" fw-bold text-light fs-3 text-center">Genial! tu as accompli toutes tes taches </p>
            )}

            {list && list.length > 0 && (
                <ul className=" list-group gap-2">
                    {la_liste}
                </ul>
            )}
        </div>
    )
    }
    return(
        <div className={style.content}>
            <p className=" fs-4 fw-bold text-light text-center">Tu n'a aucune tache a accomplir, Ajoute en une!</p>
        </div>
    )


   
}