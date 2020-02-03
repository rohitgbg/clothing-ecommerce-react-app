import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionsPreview from "../../components/CollectionPreview/CollectionsPreview";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionsPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
