import React from "react";
import "./CollectionsOverview.scss";
import CollectionsPreview from "../CollectionPreview/CollectionsPreview";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionsOverview } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionsPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsOverview
});

export default connect(mapStateToProps)(CollectionsOverview);
