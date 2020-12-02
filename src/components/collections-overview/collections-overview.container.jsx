import { useSelector } from 'react-redux'

import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionsOverview from './collections-overview.component'

import { selectCollectionFetching } from  '../../redux/shop/shop.selectors'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)

const CollectionsOverviewContainer = ({ ...otherProps }) => {
    const isLoading = useSelector(selectCollectionFetching)
    return <CollectionsOverviewWithSpinner isLoading={isLoading} {...otherProps} />
}

export default CollectionsOverviewContainer