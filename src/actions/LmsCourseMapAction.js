import {
  FETCH_COURSE_MAPS,
  FETCH_COURSE_MAP,
  ADD_COURSE_MAP,
  UPDATE_COURSE_MAP,
  DELETE_COURSE_MAP
} from "../types/types";

export function fetchCourseMaps() {
  return function(dispatch) {
    console.log("fetching the CourseMaps .......");
    fetch("https://jsonplaceholder.typicode.com/posts") //TODO: change the url
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: FETCH_COURSE_MAPS,
          payload: data
        })
      )
      .catch(e =>
        console.log(
          " got the error while fetching the CourseMaps : " + e.message
        )
      );
  };
}

export function fetchcourseMap(id) {
  return function(dispatch) {
    console.log("fetching the courseMap ......." + id);
    fetch("https://jsonplaceholder.typicode.com/posts") //TODO: change the url include the id
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: FETCH_COURSE_MAP,
          payload: data
        })
      )
      .catch(e =>
        console.log(
          " got the error while fetching the CourseMaps : " + e.message
        )
      );
  };
}

export function createCourseMap(courseMapData) {
  console.log("creating the courseMap ....");
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      //TODO: change the url
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(courseMapData)
    })
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: ADD_COURSE_MAP,
          payload: data
        })
      )
      .catch(e =>
        console.log(" got the error while creating courseMap : " + e.message)
      );
  };
}

export function updateCourseMap(courseMapData) {
  console.log("updating the courseMap....");
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      //TODO: change the url
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(courseMapData)
    })
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: UPDATE_COURSE_MAP,
          payload: data
        })
      )
      .catch(e =>
        console.log(" got the error while updating the courseMap: " + e.message)
      );
  };
}

export function deletecourseMap(courseMapData) {
  console.log("deleting the courseMap....");
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      //TODO: change the url
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(courseMapData)
    })
      .then(res => res.data.json())
      .then(data =>
        dispatch({
          type: DELETE_COURSE_MAP,
          payload: data
        })
      )
      .catch(e =>
        console.log(" got the error while deleting the courseMap: " + e.message)
      );
  };
}
