import { useState } from "react";
import ListCategory from "../list-category/list-category";


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
        {/* <ListMessageCategory /> */}
        </>
    )
}

export default AppMessage;