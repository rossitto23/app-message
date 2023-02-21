

const ListMessageCategory = ({data}) => {

    return(
        <div>
            <div>
                <h3>Catégorie</h3>
                <button>Retour</button>
            </div>
            {data.map()}
        </div>
    )
}

export default ListMessageCategory;