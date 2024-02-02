import * as authorApi from "../../api/authorApi";
import * as types from "./actionTypes";
import { apiCallError, beginApiCall } from "./apiStatusActions";

export function loadAuthorsSucess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors: authors };
}

export function loadAuthors() {
  return function (dispath) {
    dispath(beginApiCall());
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispath(loadAuthorsSucess(authors));
      })
      .catch((err) => {
        dispath(apiCallError(err));
        throw err;
      });
  };
}
