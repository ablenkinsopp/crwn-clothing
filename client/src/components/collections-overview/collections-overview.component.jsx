import { useSelector } from 'react-redux'
import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/collection-preview.component'

import './collections-overview.component'

const CollectionsOverview = () => {
    const collections = useSelector(selectShopCollectionsForPreview)

    return (
        <div className='collections-overview'>
            {collections.map(({ id, ...otherCollectionProps }) => {
                return <CollectionPreview key={id} {...otherCollectionProps} />
            })}
        </div>
    )
}

export default CollectionsOverview