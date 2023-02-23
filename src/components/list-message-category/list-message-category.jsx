import axios from "axios";
import { useEffect, useState } from "react";
import FormMessage from "../form-message/form-message";
import ListMessage from "../list-message/list-message";


const ListMessageCategory = ({categoryId, onReturn}) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState();


    const handleNewMessage = (content) => {
        setMessage(content);
    }

  

    // http://localhost:8080/api/subject/{categoryId}/message
    useEffect(() => {
        
        axios.get('http://localhost:8080/api/subject/'+ categoryId +'/message'
        ).then(response => {
            const res = response.data
            setData(res);
            console.log(data);
            // setData({
            //     author: response.data.author,
            //     content: response.data.content,
            //     createdAt: response.data.createdAt
            // });
            console.log("data: " + data[1].content);
        }).catch(response => {
            setError(response.message);
        })
        
        return () => {
            setData(null);
            setError(null);
        }
    }, [categoryId]);



    return(
        <div>
            <div>
                <h3>Catégorie</h3>
                <button onClick={onReturn}>Retour</button>
            </div>

            <div>
                {/* Boucler pour afficher message par message */}
                {/* <ListMessage data={data} /> */}
                {data && data.map(
        (d) => <ListMessage data={d} />)}
            </div>
            <div>
                <FormMessage onAddMessage={handleNewMessage}/>
            </div>
        </div>
    )
}

export default ListMessageCategory;