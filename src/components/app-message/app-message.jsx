import { useState } from "react";
import ListCategory from "../list-category/list-category";
import ListMessageCategory from "../list-message-category/list-message-category";


const AppMessage = () => {

    const [choixCategorie, setChoixCategorie] = useState(null)
    const categorySelected = (id) => {
        setChoixCategorie(id)
        console.log(id);
    }

    return(
        <>
        {/* <Login /> */}
        <ListCategory onCat = {categorySelected}/>
        {/* {choixCategorie && <ListMessageCategory id={choixCategorie}/>} */}
        {/* <ListMessageCategory /> */}
        </>
    )
}

export default AppMessage;