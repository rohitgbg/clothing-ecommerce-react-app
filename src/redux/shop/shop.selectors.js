import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   jackets: 3,
//   sneakers: 2,
//   womens: 4,
//   mens: 5
// };

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShopCollectionsOverview = createSelector(
  [selectShopCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectShopCollection = collectionUrlParamId =>
  createSelector([selectShopCollections], collections =>
    collections ? collections[collectionUrlParamId] : []
  );
