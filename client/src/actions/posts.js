import * as api from '../api';

//Action Creators return actions
export const getPosts = () => async (dispatch) =>{ //async
    try {
        const {data} = await api.fetchPost();

        dispatch({type: 'FETCH_ALL' , payload: data});
    } catch (error) {
        console.log(error.message);
    } 
    //const action = { type: 'FETCH_ALL' , payload: []}

   // dispatch(action)
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch ({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);
        dispatch ({type: 'UPDATE', payload: data})
    }catch (error) {
        console.log(error.message);
    }
}


export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
      console.log(error);
    }
}