import { useEffect, useState } from "react"
import { Footer } from "./footer/footer"
import { Header } from "./header/header"
import { Input } from "./input/input"
import { List } from "./list/list"



export const Task = () =>{

    const [tache_list, setTache_list] = useState([])
    
    useEffect(() =>{
        const recup_taches_stocké= localStorage.getItem("tache_list")
        if (recup_taches_stocké){
            setTache_list(JSON.parse(recup_taches_stocké))
        } 
    })

    const save_tache_local =  (tache) =>{
        localStorage.setItem("tache_liste", JSON.stringify(tache))
    }
   

   
    

    const ajouter = (titre) =>{
        const newtache = {
            id: tache_list.length ? tache_list[tache_list.length-1].id +1 : 1,
            titre: titre,
            etat: false
        }
        const update_tache = [...tache_list, newtache]
        setTache_list(update_tache)
        save_tache_local(update_tache)
    }  

    const supprimer = (id)=>{
        const newlist = tache_list.filter((tache) => tache.id !== id)
        setTache_list(newlist)
        save_tache_local(newlist)

    }

    const modifier = (id, etatvalue) =>{
        const new_etat = tache_list.map((tache) => tache.id === id ? {...tache, etat: etatvalue} : tache)
        setTache_list(new_etat)
        save_tache_local(new_etat)
    }

    const tachecount = ()=>{
        const complet = tache_list.filter((tache) => tache.etat === true).length
        const incomplet = tache_list.length - complet
        return {complet, incomplet}
    }
    const {complet, incomplet} = tachecount()


     return (
        <main>
            <Header/>
            <Input addtache={ajouter}/>
            <List list ={tache_list} edit={modifier} supprim={supprimer} incomplet={incomplet}  />
            <Footer complet = {complet}/>
        </main>
    )

   
};



    
