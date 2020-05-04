import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions'
import CollectionsOverview  from '../../components/collection-overview/collection-overview.component';
import CollectionPage  from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


import { firestore, convertCollectionsSnapshotMap } from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);
class  ShopPage extends React.Component {

    state = {
        loading: true
    };
    unsubscribreFromSnapshot = null

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

       this.unsubscribreFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotMap(snapshot);        
            updateCollections(collectionsMap);

            this.setState({ loading: false });

        });
    }
  

    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`}  render={(props) => <CollectionsPageWithSpinner isLoading={loading} {...props} />} />
            </div>
            );
    }
} 

const mapDispatchToProps = dispatch =>({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});
export default connect(null, mapDispatchToProps)(ShopPage);