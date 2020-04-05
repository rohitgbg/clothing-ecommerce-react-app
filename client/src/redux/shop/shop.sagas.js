import { takeLatest, call, put, all } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionSnapShotToMap
} from "../../components/firbase/firebase";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";

//takeEvery - listens every actions

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionSnapShotToMap, snapshot); //call- invoke method
    // put is the saga effect for creating action
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
