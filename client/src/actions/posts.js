import * as api from '../api';

// Action Creators
export const getPosts = () => async (dispatch, getState) => {  //getPosts zwraca async funkcje ktora przyjmuje funkcje dispatch jako parametr
    try {
        //console.log(getState()+"Current state")
        const { data } = await api.fetchPosts();
        dispatch({ type:'FETCH_ALL', payload: data }) //wyslanie akcji do reducera 
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}