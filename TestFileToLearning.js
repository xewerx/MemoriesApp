export const getPosts = () => (dispatch) => {  //getPosts zwraca async funkcje ktora przyjmuje funkcje dispatch jako parametr
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type:'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}