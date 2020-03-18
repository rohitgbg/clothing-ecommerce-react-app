import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import WithSpinner from "../WithSpinner/WithSpinner";
import CollectionsOverview from "./CollectionsOverview";
import { selectShopCollectionsisFetching } from "../../redux/shop/shop.selectors";

const mapsStateToProps = createStructuredSelector({
  isLoading: selectShopCollectionsisFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapsStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

// without compose
// const CollectionsOverviewContainer = connect(mapsStateToProps)(WithSpinner(CollectionsOverview))
