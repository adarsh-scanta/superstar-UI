import { takeLatest, put } from "@redux-saga/core/effects";
import {
  FETCH_TOKENS,
  FETCH_TOKENS_SUCCESS,
  FETCH_TOKENS_FAILURE,
  FETCH_MARKETPLACE_DATA,
  FETCH_MARKETPLACE_DATA_SUCCESS,
  FETCH_MARKETPLACE_DATA_FAILURE,
  BUY_TOKEN,
  BUY_TOKEN_SUCCESS,
  BUY_TOKEN_FAILURE,
  FETCH_USER_NFT,
  FETCH_USER_NFT_SUCCESS,
  FETCH_USER_NFT_FAILURE,
  ADD_TO_NEWSLETTER,
  ADD_TO_NEWSLETTER_SUCCESS,
  ADD_TO_NEWSLETTER_FAILURE,
} from "../redux/Dashboard/Dashboard.types";
import { getNFTs } from "../services/getNFTs.api";
import { getMarketData } from "../services/getMarketData.api";
import { buyNFT } from "../services/buyNFT.api";
import { getUserNFTs } from "../services/getUserNFTs.api";
import { saveToNewsletter } from "../services/saveToNewsletter.api";

function* fetchTokens(action) { 
  const response = yield getNFTs(action);
  if (response) {
    yield put({
      type: FETCH_TOKENS_SUCCESS,

      payload: response,
    });
  } else {
    yield put({
      type: FETCH_TOKENS_FAILURE,
      payload: response,
    });
  }
}

function* fetchMarketData(action) {
  const response = yield getMarketData(action);
  if (response) {
    yield put({
      type: FETCH_MARKETPLACE_DATA_SUCCESS,

      payload: response,
    });
  } else {
    yield put({
      type: FETCH_MARKETPLACE_DATA_FAILURE,
      payload: response,
    });
  }
}

function* buyToken(action) {
  const response = yield buyNFT(action);
  if (response) {
    yield put({
      type: BUY_TOKEN_SUCCESS,

      payload: response,
    });
  } else {
    yield put({
      type: BUY_TOKEN_FAILURE,
      payload: response,
    });
  }
}
function* fetchUserNfts(action) {
  const response = yield getUserNFTs(action);
  if (response) {
    yield put({
      type: FETCH_USER_NFT_SUCCESS,

      payload: response,
    });
  } else {
    yield put({
      type: FETCH_USER_NFT_FAILURE,
      payload: response,
    });
  }
}

function* addToNewsLetter(action) {
  const response = yield saveToNewsletter(action);
  if (response) {
    yield put({
      type: ADD_TO_NEWSLETTER_FAILURE,

      payload: response,
    });
  } else {
    yield put({
      type: ADD_TO_NEWSLETTER_SUCCESS,
      payload: response,
    });
  }
}

function* DashboardSaga() {
  yield takeLatest(FETCH_TOKENS, fetchTokens);
  yield takeLatest(FETCH_MARKETPLACE_DATA, fetchMarketData);
  yield takeLatest(BUY_TOKEN, buyToken);
  yield takeLatest(FETCH_USER_NFT, fetchUserNfts);
  yield takeLatest(ADD_TO_NEWSLETTER, addToNewsLetter);
}

export default DashboardSaga;
