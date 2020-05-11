import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'
import CollectionsOverview  from '../../components/collection-overview/collection-overview.component';
import CollectionPage  from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);
class  ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }
  

    render(){
        const { match } = this.props;
        const { loading } = this.props;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`}  render={(props) => <CollectionsPageWithSpinner isLoading={loading} {...props} />} />
            </div>
            );
    }
} 

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  });
  

 const mapStateToProps = createStructuredSelector({
    loading: selectIsCollectionFetching
 });
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);