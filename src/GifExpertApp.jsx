import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Master Chief', 'Gears of War', 'Call of Duty']);

    const onAddCategory = (newCategory) => {

        if( categories.includes( newCategory ) ) return;

        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <h1> GifExpertApp </h1>
            <AddCategory onNewCategory={ onAddCategory } />
            
            {
                categories.map( category => (
                        <GifGrid  key={ category }  category={ category }/>
                    ) 
                )
            }

            <div>
                <button as>
                    <a href="https://github.com/josesowl"> Coded by: José David Montes</a>
                </button>
            </div>
          
        </>
    )
}