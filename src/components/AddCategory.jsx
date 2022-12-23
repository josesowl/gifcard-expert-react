import { useState } from "react"


export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( { target } ) => {
        setInputValue(  target.value );
    }

    const onSubmit = () => {
        event.preventDefault();

        if( inputValue.trim().length <= 1) return;

        //setCategories( categories => [inputValue, ...categories]);
        setInputValue( '' );
        
        onNewCategory( inputValue.trim() );
    }

    return (
        
        <form onSubmit={ onSubmit }>
            <input type="text"
            placeholder="Search gif"
            value={ inputValue }
            onChange={ onInputChange }/>
        </form>
        
    )
}