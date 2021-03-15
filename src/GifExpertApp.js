import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {
    //const categories = ['One Punch', 'Pokemon', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);
    //const handleAdd = () => {
      //  setCategories([...categories, 'Hunter']);
    //}
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={ setCategories }/>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
           
        </>
    )
}

export default GifExpertApp
