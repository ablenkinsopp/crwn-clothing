import { useSelector } from 'react-redux'

import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const CollectionPageContainer = ({ ...otherProps }) => {
    const isFetched = useSelector(selectIsCollectionsLoaded)
    return <CollectionPageWithSpinner isLoading={!isFetched} {...otherProps} />
}

export default CollectionPageContainer