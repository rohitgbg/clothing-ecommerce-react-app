import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionSnapShotToMap
} from "../../components/firbase/firebase";

// export const updateCollections = collectionMap => ({
//   type: ShopActionTypes.UPDATE_COLLECTIONS,
//   payload: collectionMap
// });

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = collectionMap => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap
});

export const fetchCollectionFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then(async snapshot => {
        const collectionsMap = convertCollectionSnapShotToMap(snapshot);

        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch(error => {
        dispatch(fetchCollectionFailure(error.message));
      });
  };
};
