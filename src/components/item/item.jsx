import style from "./item.module.css"
import poubelle from  "./images/poubelle.png"



export const Item = ({tache, edit , supr}) =>{

    return (
        
        <li className={`list-group-item d-flex justify-content-between align-items-center rounded-1 ${style.list}`}
            onClick={() => edit(tache.id, !tache.etat)}
        
        >
            <div className=" d-flex align-items-center gap-4">
                <div className={` ${tache.etat ? style.num1 : style.num}`}>{tache.id}</div>
                <div className={`${tache.etat ? style.text1 : style.text}`}>{tache.titre}</div>
            </div>
            
            <button type="submit" className=" btn btn-outline-danger fw-bold" onClick={(e) => {
                e.stopPropagation()
                supr(tache.id)
            }}> 
                <img src={poubelle} className={style.img}/>
            </button>
        </li>
        
    )
}
