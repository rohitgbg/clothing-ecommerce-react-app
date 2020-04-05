import React, { useEffect } from "react";

import { Route } from "react-router-dom";

import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionOverContainer";
import CollectionContainer from "../Collection/CollectionContainer";

const ShopPage = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
};

const mapsToDispatch = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapsToDispatch)(ShopPage);
