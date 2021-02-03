import React from 'react';
import './previewCollection.styles.scss';
import CollectionItem from '../collectionItem/collectionitem';

const PreviewCollection = ({title, items}) => {
    return(
        <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, indx)=>indx<4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    );
}

export default PreviewCollection;