import { useSelector } from 'react-redux'

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

const ShopPage = () => {
    const collections = useSelector(selectShopCollections)

    return (
        <div className='shop-page'>
            {collections.map(({ id, ...otherCollectionProps }) => {
                return <CollectionPreview key={id} {...otherCollectionProps} />
            })}
        </div>
        
    )
}

export default ShopPage