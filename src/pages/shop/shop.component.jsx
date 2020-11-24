import { useState } from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { SHOP_DATA } from '../../utils/shopData';

const ShopPage = () => {
    const [collections] = useState(SHOP_DATA)

    return (
        <div className='shop-page'>
            {collections.map(({ id, ...otherCollectionProps }) => {
                return <CollectionPreview key={id} {...otherCollectionProps} />
            })}
        </div>
        
    )
}

export default ShopPage