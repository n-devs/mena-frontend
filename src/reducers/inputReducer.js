//Reducer for character information Initialize State
import UserMessageInput from '../components/inputs/UserMessageInput';
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
        default:
            return state
    }
}

export default inputReducer;