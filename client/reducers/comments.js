function postComments(state = [], action){
 
    return state;
}
function comments(state = [], action){
    if(typeof action.postId !== 'undefines'){
        return{
            // take current state
            ...state, 
            // overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
       return state;
   }

export default comments;