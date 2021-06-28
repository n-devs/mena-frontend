//Reducer for character information Initialize State
const initState = {
    username: null,
    password: null,
    fullName: null,
    phoneNumber: null,
    email: null,
    profession: null,
    projectYear: null,
    userMessage: null,
    addProjectAbstract: null,
    addProjectDate: null,
    addProjectName: null,
    addProjectOrganizer: null,
    addProjectType: null,
    editProjectAbstract: null,
    editProjectDate: null,
    editProjectName: null,
    editProjectOrganizer: null,
    editProjectType: null,
    searchAll: null,
    searchProjectAbstract: null,
    searchProjectDate: null,
    searchProjectName: null,
    searchProjectOrganizer: null,
    searchProjectType: null,
}

//Define Actions
const inputReducer = (state = initState, action) => {
    switch (action.type) {
        //Change character name
        case 'CHANGE_USERNAME':
            return {
                ...state,
                username: action.payload
            }

        case 'CHANGE_PASSWORD':
            return {
                ...state,
                password: action.payload
            }
        case 'CHANGE_FULL_NAME':
            return {
                ...state,
                fullName: action.payload
            }
        case 'CHANGE_PHONE_NUMBER':
            return {
                ...state,
                phoneNumber: action.payload
            }
        case 'CHANGE_EMAIL':
            return {
                ...state,
                email: action.payload
            }
        case 'CHANGE_PROFESSION':
            return {
                ...state,
                profession: action.payload
            }
        case 'CHANGE_PROJECT_YEAR':
            return {
                ...state,
                projectYear: action.payload
            }
        case 'CHANGE_USER_MESSAGE':
            return {
                ...state,
                userMessage: action.payload
            }
        case 'CHANGE_ADD_PROJECT_ABSTRACT':
            return {
                ...state,
                addProjectAbstract: action.payload
            }
        case 'CHANGE_ADD_PROJECT_DATE':
            return {
                ...state,
                addProjectDate: action.payload
            }
        case 'CHANGE_ADD_PROJECT_NAME':
            return {
                ...state,
                addProjectName: action.payload
            }
        case 'CHANGE_ADD_PROJECT_ORGANIZER':
            return {
                ...state,
                addProjectOrganizer: action.payload
            }
        case 'CHANGE_ADD_PROJECT_TYPE':
            return {
                ...state,
                addProjectType: action.payload
            }
        case 'CHANGE_EDIT_PROJECT_ABSTRACT':
            return {
                ...state,
                editProjectAbstract: action.payload
            }
        case 'CHANGE_EDIT_PROJECT_DATE':
            return {
                ...state,
                editProjectDate: action.payload
            }
        case 'CHANGE_EDIT_PROJECT_NAME':
            return {
                ...state,
                editProjectName: action.payload
            }
        case 'CHANGE_EDIT_PROJECT_ORGANIZER':
            return {
                ...state,
                editProjectOrganizer: action.payload
            }
        case 'CHANGE_EDIT_PROJECT_TYPE':
            return {
                ...state,
                editProjectType: action.payload
            }
        case 'CHANGE_SEARCH_ALL':
            return {
                ...state,
                searchAll: action.payload
            }
        case 'CHANGE_SEARCH_PROJECT_ABSTRACT':
            return {
                ...state,
                searchProjectAbstract: action.payload
            }
        case 'CHANGE_SEARCH_PROJECT_DATE':
            return {
                ...state,
                searchProjectDate: action.payload
            }
        case 'CHANGE_SEARCH_PROJECT_NAME':
            return {
                ...state,
                searchProjectName: action.payload
            }
        case 'CHANGE_SEARCH_PROJECT_ORGANIZER':
            return {
                ...state,
                searchProjectOrganizer: action.payload
            }
        case 'CHANGE_SEARCH_PROJECT_TYPE':
            return {
                ...state,
                searchProjectType: action.payload
            }
        default:
            return state
    }
}

export default inputReducer;