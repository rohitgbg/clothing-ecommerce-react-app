import React from "react";
import CollectionsPreview from "../../components/CollectionPreview/CollectionsPreview";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

const ShopPage = ({ collections }) => (
  <div>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionsPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
