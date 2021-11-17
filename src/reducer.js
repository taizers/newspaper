const initialState = {
    currentNewsPage: {},
    newsList: [],
    lastNews: [],
};

const actionType = {
    CHANGE_ACTIVE_NEWS: 'CHANGE_ACTIVE_NEWS',
    LOAD_DATA: 'LOAD_DATA',
    LOAD_LAST_NEWS: 'LOAD_LAST_NEWS',
};

const Operation = {
    loadData: (page) => (dispatch, _getState, api) => {
        fetch("https://reqres.in/api/users?page=" + page)
            .then((response) => response.json())
            .then((data) =>{
                dispatch(ActionCreators.LOAD_DATA(data.data));
                dispatch(ActionCreators.LOAD_LAST_NEWS(data.data));
            });
    },
};

const ActionCreators = {
    CHANGE_ACTIVE_NEWS: (currentActiveNewsData) =>{

        return {
            type: actionType.CHANGE_ACTIVE_NEWS,
            payload: currentActiveNewsData
        }
    },
    LOAD_DATA : (news) =>{

        return {
            type: actionType.LOAD_DATA,
            payload: news
        }
    },
    LOAD_LAST_NEWS : (news) =>{
        let lastNews = [];
        if (news.length >3) {
            lastNews = news.slice(0,3);
        }else
        lastNews = news.slice();
        return {
            type: actionType.LOAD_LAST_NEWS,
            payload: lastNews
        }
    },
};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionType.CHANGE_ACTIVE_NEWS:
            return Object.assign({}, state, {
                currentNewsPage: action.payload
            });
        case actionType.LOAD_DATA:
            return Object.assign({}, state, {
                newsList: action.payload
            });
        case actionType.LOAD_LAST_NEWS:
            return Object.assign({}, state, {
                lastNews: action.payload
            });
        default:
            break;
    }
    return state;
};

export {reducer, ActionCreators, Operation};