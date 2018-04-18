import * as actionTypes from "../constants/action-types";
export const addArticle = article => {
    return { type: actionTypes.ADD_ARTICLE, payload: article }
};