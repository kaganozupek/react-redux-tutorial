import * as actionTypes from '../constants/action-types'
const initialState = {
    articles: []
  };
const rootReducer = (state = initialState, action) => {
      
    switch(action.type)
    {
        case actionTypes.ADD_ARTICLE:
        console.log("asdaseqwe")
            return {...state, articles :state.articles.concat(action.payload)}
        default:
            return state
    }
  }
  export default rootReducer;