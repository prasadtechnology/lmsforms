import {
  FETCH_CREDENTIALS,
  FETCH_CREDENTIAL,
  ADD_CREDENTIAL,
  UPDATE_CREDENTIAL,
  DELETE_CREDENTIAL
} from "../types/types";

export function fetchCredentials() {
  return function(dispatch) {
    console.log("fetching the credentials .......");
    fetch("http://localhost:8090/credentials") //TODO: change the url
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: FETCH_CREDENTIALS,
          payload: JSON.parse(res.data)
        });
      })
      .catch(e =>
        console.log(
          " got the error while fetching the credentials : " + e.message
        )
      );
  };
}

export function fetchCredential(id) {
  return function(dispatch) {
    console.log("fetching the credential ......." + id);
    fetch("http://localhost:8090/credentials/16") //TODO: change the url include the id
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: FETCH_CREDENTIAL,
          payload: JSON.parse(res.data)
        });
      })
      .catch(e =>
        console.log(
          " got the error while fetching the credentials : " + e.message
        )
      );
  };
}

export function createCredentials(credentialData) {
  console.log("creating the credential ....");
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      //TODO: change the url
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(credentialData)
    })
      .then(res => res.json())
      .then(res =>
        dispatch({
          type: ADD_CREDENTIAL,
          payload: JSON.parse(res.data)
        })
      )
      .catch(e =>
        console.log(" got the error while creating credential : " + e.message)
      );
  };
}

export function updateCredentials(credentialData) {
  console.log("updating the credential....");
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      //TODO: change the url
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(credentialData)
    })
      .then(res => res.json())
      .then(res =>
        dispatch({
          type: UPDATE_CREDENTIAL,
          payload: JSON.parse(res.data)
        })
      )
      .catch(e =>
        console.log(
          " got the error while updating the credential: " + e.message
        )
      );
  };
}

export function deleteCredential(credentialData) {
  console.log("deleting the credential....");
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      //TODO: change the url
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(credentialData)
    })
      .then(res => res.json())
      .then(res =>
        dispatch({
          type: DELETE_CREDENTIAL,
          payload: JSON.parse(res.data)
        })
      )
      .catch(e =>
        console.log(
          " got the error while deleting the credential: " + e.message
        )
      );
  };
}
