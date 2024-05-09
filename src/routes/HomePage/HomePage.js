import React from 'react'
import CategoryList from '../../components/CategoryComponent/CategoryList'
import CategorieCard from '../../components/CategoryComponent/CategorieCard'

import './HomePage.scss'

const HomePage = () => {
    return (
        <div className='HomePage_main'>
            <div className='container_fluid'>
                <div className='row_custom'>
                    {CategoryList.map((category) => (
                        <CategorieCard
                            key={category.id}
                            category={category}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage