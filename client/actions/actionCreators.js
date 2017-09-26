// imcrement

export function increment(index){

    return{
        type: 'INCREMENT_LIKES',
        index 
    }
}


// add comment
export function addComment(postId, author, comment){
    //console.log("dispatching an add comment");
    return{
        type: 'ADD_COMMENT',
        postId, 
        author, 
         comment
    }
}


//remove comment

export function removeComment(postId, i){
     //console.log("dispatching a remove comment");
    return{
        type: 'REMOVE_COMMENT',
        postId, 
        i
    }

}



