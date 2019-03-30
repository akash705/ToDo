import actions from './actions';
const updateLocalStorage=(data)=>{
        localStorage.setItem('posts',JSON.stringify(data));
        return true;
}
//  {
//     title:'Title of Task',
//     description : "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     expiryDate:(+new Date()),
//     creationDate:(+new Date()),
//     id:+new Date(),
//     status:'active'
// }
const getLocalStorage=()=>{
    try{
        let a = localStorage.getItem('posts');
        let b = JSON.parse(a);
        return b||[];
    }
    catch(e){
        return [];
    }
}
var initialState={
    tasks:[],
    completedTask:[]
}
initialState.tasks=getLocalStorage();
var reducer=(state=initialState,action)=>{
    switch(action.type){
        case(actions.CREATED):{
            let originalPost=[...state.tasks];
            action.data.id=+new Date();
            action.data.creationDate=+new Date();
            originalPost.push(action.data);
            updateLocalStorage(originalPost);
            return {
                ...state,
                tasks:originalPost
            }
        }
        case(actions.DELETED):{
            let originalPost=[...state.tasks];
            originalPost.splice(action.data.index,1);
            updateLocalStorage(originalPost);
            return {
                ...state,
               tasks: originalPost
            }
        }
        case(actions.UPDATE):{
            let originalPost=[...state.tasks];
            let originPost=originalPost[action.data.index];
            originalPost[action.data.index]=action.data.data;
            originalPost[action.data.index].creationDate=originPost.creationDate;
            originalPost[action.data.index].id=originPost.id;
            updateLocalStorage(originalPost);
            return {
                ...state,
                tasks:originalPost
            }
        }
        default:{
            return state;
        }
    } 
}

export default reducer;