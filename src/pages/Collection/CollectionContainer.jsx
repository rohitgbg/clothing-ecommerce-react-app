import { connect } from "react-redux";
import { compose } from "redux";
import WithSpinner from "../../components/WithSpinner/WithSpinner";
import { selectShopCollectionsisLoading } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import Collection from "./Collection";

const mapsStateToProps = createStructuredSelector({
  isLoading: state => !selectShopCollectionsisLoading(state)
});

const CollectionContainer = compose(
  connect(mapsStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
