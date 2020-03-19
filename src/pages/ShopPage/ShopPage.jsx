import React, { Component } from "react";

// import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import { Route } from "react-router-dom";
// import Collection from "../Collection/Collection";

import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
// import WithSpinner from "../../components/WithSpinner/WithSpinner";
// import { createStructuredSelector } from "reselect";
// import {
//   selectShopCollectionsisFetching,
//   selectShopCollectionsisLoading
// } from "../../redux/shop/shop.selectors";
import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionOverContainer";
import CollectionContainer from "../Collection/CollectionContainer";

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/clothing-ecommerce-adf0b/databases/(default)/documents/collections"
    // )
    //   .then(response => response.json())
    //   .then(collections => console.log("collections", collections));
    // normal api fetch
    // collectionRef.get().then(async snapshot => {
    //   const collectionsMap = convertCollectionSnapShotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({
    //     loading: false
    //   });
    // });
    // live data
    // collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionSnapShotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({
    //     loading: false
    //   });
    // });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          // component={CollectionsOverview}
          // render={props => (
          //   <CollectionsOverviewWithSpinner
          //     isLoading={isCollectionFetching}
          //     {...props}
          //   />
          // )}

          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          // component={Collection}
          // render={props => (
          //   <CollectionWithSpinner
          //     isLoading={!isCollectionLoading}
          //     {...props}
          //   />
          // )}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

// const mapsStateToProps = createStructuredSelector({
//   isCollectionFetching: selectShopCollectionsisFetching,
//   isCollectionLoading: selectShopCollectionsisLoading
// });

const mapsToDispatch = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapsToDispatch)(ShopPage);
