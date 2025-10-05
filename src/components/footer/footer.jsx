
export const Footer = ({complet}) =>{


    
    return(
        <footer className=" mt-2">
            <div className=" bg-dark justify-content-center d-flex rounded-2">
                {complet>0 && (
                     <h1 className=" fw-bold fs-2 text-light">Tu as accompli {complet} tache{complet>1 ? "s": ""}</h1>
                )}
            </div> 
        </footer>
    )
}