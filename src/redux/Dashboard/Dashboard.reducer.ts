import {
  FETCH_TOKENS_SUCCESS,
  FETCH_MARKETPLACE_DATA_SUCCESS,
  FETCH_USER_NFT_SUCCESS,
} from "./Dashboard.types";
const initialState = {
  nftData: {},
  marketData: {},
  userNFTs: [],
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    // case LOGIN:
    //   return { ...state, userLoggedIn: true };
    case FETCH_TOKENS_SUCCESS:
      return { ...state, nftData: action.payload.data };
    case FETCH_MARKETPLACE_DATA_SUCCESS:
      return { ...state, marketData: action.payload.data };
    case FETCH_USER_NFT_SUCCESS:
      return { ...state, userNFTs: action.payload.data };
    default:
      return state;
  }
};

export default DashboardReducer;
