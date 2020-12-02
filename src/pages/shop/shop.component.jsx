import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match }) => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const collectionRef = firestore.collection('collections')

        collectionRef.onSnapshot(async snapshot => {
            dispatch(updateCollections((convertCollectionsSnapshotToMap(snapshot))))
            console.log('hello')
            setIsLoading(false)
        })
    }, [dispatch, setIsLoading])

    return (
        <div className='shop-page'>
            <Route 
                exact 
                path={`${match.path}`} 
                render={props => <CollectionsOverviewWithSpinner match={props.match} isLoading={isLoading} />} 
            />
            <Route 
                path={`${match.path}/:collectionId`} 
                render={props => <CollectionPageWithSpinner match={props.match} isLoading={isLoading} />} 
            />
        </div>
        
    )
}

export default ShopPage