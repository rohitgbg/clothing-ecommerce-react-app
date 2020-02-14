import React from "react";

import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import { Route } from "react-router-dom";
import Collection from "../Collection/Collection";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default ShopPage;
