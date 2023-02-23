import axios from "axios";
import { useEffect, useState } from "react";
import FormMessage from "../form-message/form-message";
import ListMessage from "../list-message/list-message";


const ListMessageCategory = ({categoryId, onReturn, author}) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [posted, setPosted] = useState(false);


    const handleNewMessage = (content) => {
        setPosted(true);
        axios.post(`http://localhost:8080/api/subject/${categoryId}/message`, {
          categoryId: categoryId, 
          author: author,
          content,
          createAt: new Date()
        }).then(response => {
            console.log(response)
        }).catch(response => {
            console.log(response.message);
        })
    }

  

    // http://localhost:8080/api/subject/{categoryId}/message
    useEffect(() => {
        
        axios.get(`http://localhost:8080/api/subject/${categoryId}/message`
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
            setPosted(false);
        }
    }, [categoryId, posted]);



    return(
        <div>
            <div>
                <h3>Catégorie</h3>
                <button onClick={onReturn}>Retour</button>
            </div>
            {error && <p>{error}</p>}
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