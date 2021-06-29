import env from '@beam-australia/react-env';

//Reducer for character information Initialize State
const initState = {
      loginData: {
            store: null,
            response: null
      },
      registerData: {
            store: null,
            response: null
      },
      contactUsData: {
            store: null,
            response: null
      },
      searchData: {
            store: null,
            response: null
      }
}

const buttonReducer = (state = initState, action) => {
      switch (action.type) {
            case "SEND_LOGIN_DATA":
                  return {
                        ...state,
                        loginData: {
                              ...state.loginData,
                              store: action.payload
                        }
                  }

            case "GET_LOGIN_DATA":
                  return {
                        ...state,
                        loginData: {
                              ...state.loginData,
                              response: action.payload
                        }
                  }
            case "GET_LOGOUT_DATA":
                  return {
                        ...state,
                        loginData: {
                              ...state.loginData,
                              response: action.payload
                        }
                  }
            case "SEND_REGISTER_DATA":
                  return {
                        ...state,
                        registerData: {
                              ...state.registerData,
                              store: action.payload
                        }
                  }
            case "GET_REGISTER_DATA":
                  return {
                        ...state,
                        registerData: {
                              ...state.registerData,
                              response: action.payload
                        }
                  }
            case "SEND_CONTACT_US_DATA":
                  return {
                        ...state,
                        contactUsData: {
                              ...state.contactUsData,
                              store: action.payload
                        }
                  }
            case "GET_CONTACT_US_DATA":
                  return {
                        ...state,
                        contactUsData: {
                              ...state.contactUsData,
                              response: action.payload
                        }
                  }
            case "SEND_SEARCH_DATA":
                  return {
                        ...state,
                        searchData: {
                              ...state.searchData,
                              store: action.payload
                        }
                  }
            case "GET_SEARCH_DATA":
                  return {
                        ...state,
                        searchData: {
                              ...state.searchData,
                              response: action.payload
                        }
                  }
            default:
                  return state
      }
}

export function fetchLogout() {
      return dispatch => {
            dispatch({ type: "GET_LOGOUT_DATA", payload: null })
      }
}

// fetch
export function fetchLogin(username, password) {

      return dispatch => {
            let data = {
                  username: username,
                  password: password
            };

            dispatch({ type: "SEND_LOGIN_DATA", payload: data });

            console.log("fetchLogin", data);

            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let raw = JSON.stringify(data);

            let requestOptions = {
                  method: "POST",
                  headers: myHeaders,
                  body: raw,
                  redirect: "follow"
            };

            // http://localhost:8080/api/login
            return fetch(`${env("API_URL")}/api/login`, requestOptions)
                  .then(response => response.json())
                  .then(result => {
                        console.log(result);
                        dispatch({ type: "GET_LOGIN_DATA", payload: result })
                        return result
                  })
                  .catch(error => {
                        console.log(error);
                        dispatch({ type: "GET_LOGIN_DATA", payload: error })

                        return error
                  });
      }
};

// fetch
export function fetchAdminLogin(username, password) {

      return dispatch => {
            let data = {
                  username: username,
                  password: password
            };

            dispatch({ type: "SEND_LOGIN_DATA", payload: data });

            console.log("fetchLogin", data);

            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let raw = JSON.stringify(data);

            let requestOptions = {
                  method: "POST",
                  headers: myHeaders,
                  body: raw,
                  redirect: "follow"
            };

            // http://localhost:8080/api/login
            return fetch(`${env("API_URL")}/api/admin/login`, requestOptions)
                  .then(response => response.json())
                  .then(result => {
                        console.log(result);
                        dispatch({ type: "GET_LOGIN_DATA", payload: result })
                        return result
                  })
                  .catch(error => {
                        console.log(error);
                        dispatch({ type: "GET_LOGIN_DATA", payload: error })

                        return error
                  });
      }
};



// fetch
export function fetchRegister(fullName, phoneNumber, email, profession, username, password) {

      return dispatch => {
            let data = {
                  fullName: fullName,
                  phoneNumber: phoneNumber,
                  email: email,
                  profession: profession,
                  username: username,
                  password: password
            };

            dispatch({ type: "SEND_REGISTER_DATA", payload: data });

            console.log("fetchRegister", data);

            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let raw = JSON.stringify(data);

            let requestOptions = {
                  method: "POST",
                  headers: myHeaders,
                  body: raw,
                  redirect: "follow"
            };

            // http://localhost:8080/api/register
            return fetch(`${env("API_URL")}/api/register`, requestOptions)
                  .then(response => response.json())
                  .then(result => {
                        console.log(result);
                        dispatch({ type: "GET_REGISTER_DATA", payload: result })
                        return result
                  })
                  .catch(error => {
                        console.log(error);
                        dispatch({ type: "GET_REGISTER_DATA", payload: error })

                        return error
                  });
      }
};

// fetch
export function fetchSendContactUs(fullName, phoneNumber, email, profession, message) {

      return dispatch => {
            let data = {
                  fullName: fullName,
                  phoneNumber: phoneNumber,
                  email: email,
                  profession: profession,
                  message: message
            };

            dispatch({ type: "SEND_CONTACT_US_DATA", payload: data });

            console.log("fetchContactUs", data);

            // let myHeaders = new Headers();
            // myHeaders.append("Content-Type", "application/json");

            // let raw = JSON.stringify(data);

            // let requestOptions = {
            //       method: "POST",
            //       headers: myHeaders,
            //       body: raw,
            //       redirect: "follow"
            // };

            // // http://localhost:8080/api/login
            // return fetch(`${env("API_URL")}/api/login`, requestOptions)
            //       .then(response => response.json())
            //       .then(result => {
            //             console.log(result);
            //             dispatch({ type: "GET_LOGIN_DATA", payload: result })
            //       })
            //       .catch(error => {
            //             console.log(error);
            //             dispatch({ type: "GET_LOGIN_DATA", payload: error })

            //             return error
            //       });
      }
};

// fetch
export function fetchSearch(all, name, organizer, date, type, abstract) {

      return dispatch => {
            let data = {
                  all: all,
                  name: name,
                  organizer: organizer,
                  date: date,
                  type: type,
                  abstract: abstract
            };

            dispatch({ type: "SEND_SEARCH_DATA", payload: data });

            console.log("fetchSearch", data);

            // let myHeaders = new Headers();
            // myHeaders.append("Content-Type", "application/json");

            // let raw = JSON.stringify(data);

            // let requestOptions = {
            //       method: "POST",
            //       headers: myHeaders,
            //       body: raw,
            //       redirect: "follow"
            // };

            // // http://localhost:8080/api/login
            // return fetch(`${env("API_URL")}/api/login`, requestOptions)
            //       .then(response => response.json())
            //       .then(result => {
            //             console.log(result);
            //             dispatch({ type: "GET_LOGIN_DATA", payload: result })
            //       })
            //       .catch(error => {
            //             console.log(error);
            //             dispatch({ type: "GET_LOGIN_DATA", payload: error })

            //             return error
            //       });
      }
};




export default buttonReducer;