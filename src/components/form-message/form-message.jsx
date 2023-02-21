import { useId } from "react";
import { useForm } from "react-hook-form";


const FormMessage = ({onAddMessage}) => {

    const id = useId();

    const {register, handleSubmit} = useForm()

    const handleAddMessage = (data) => {
        onAddMessage(data.content);
        // reset();
    }

    return (
        <form onSubmit={handleSubmit(handleAddMessage)}>
            <input type='text' id={id + 'content'} {...register('content', {required: true})}/>
            <button type="submit">Envoyer</button>
        </form>
    )
}

export default FormMessage;