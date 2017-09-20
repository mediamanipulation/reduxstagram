// a reducer takes in two things;

// 1. the action (info about what has happened)

// 2. copy of current state


function posts(state = [], action){
    console.log('state   '+state, 'action  '+action);
    return state;
}

export default posts;


