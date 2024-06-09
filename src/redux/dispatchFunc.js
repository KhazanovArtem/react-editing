import {
    ADD_SERVICE,
    REMOVE_SERVICE,
    CHANGE_SERVICE_FIELD,
    ID_ACTIVE,
    FILTER_SERVICE
} from "./action";

const changeForm = (name, value = null) => {
    return {
        type: CHANGE_SERVICE_FIELD,
        payload: { name, value },
    }
}

const addService = (name, price) => {
    return {
        type: ADD_SERVICE,
        payload: { name, price },
    }
}

const removeService = (id) => {
    return {
        type: REMOVE_SERVICE,
        payload: { id },
    }
}

const addIdActive = (id) => {
    return {
        type: ID_ACTIVE,
        payload: { id },
    }
}

const changeSearchField = (name, value) => {
    return {
        type: FILTER_SERVICE,
        payload: { name, value }
    };
}

export { changeForm, addService, removeService, addIdActive, changeSearchField };