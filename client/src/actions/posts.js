import * as api from '../api/index.js';

/*Action creators

Action creators are functions that return an action, an object with a type and payload

const getPosts = () =>{
    const action = { type: 'FETCH_ALL', payload: []}

    return action;
}

With redux thunk since we are dealing with asynchronous logic have to add the async dispatch function and instead of returning the action have to dispatch it

const getPosts = () => async (dispatch) =>{
    const action = { type: 'FETCH_ALL', payload: []}

    dispatch (action);
} */

export const getPosts = () => async (dispatch) =>{
    try {
        const { data } = await api.fetchPosts();

        dispatch ({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch( {type: 'DELETE', payload : id});
    } catch (error) {
        console.log(error);
    }
}