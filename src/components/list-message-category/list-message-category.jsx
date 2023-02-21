import FormMessage from "../form-message/form-message";
import ListMessage from "../list-message/list-message";


const ListMessageCategory = ({data}) => {

    return(
        <div>
            <div>
                <h3>Catégorie</h3>
                <button>Retour</button>
            </div>

            <div>
                {/* Boucler pour afficher message par message */}
                <ListMessage data={data} />
            </div>
            <div>
                <FormMessage />
            </div>
        </div>
    )
}

export default ListMessageCategory;