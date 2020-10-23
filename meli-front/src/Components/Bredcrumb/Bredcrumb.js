import React from 'react';

const Bredcrumb = ({category}) => {

    return(
        <div className="breadcrumb-container">
            {category.map(category=><span key={category}>{category}</span>)}
        </div>
    )
}

export default Bredcrumb