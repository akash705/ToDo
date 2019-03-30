import actions from './actions';
var initialState={
    tasks:[
        {
            title:'Title of Task',
            description : "Some quick example text to build on the card title and make up the bulk of the card's content.",
            expiryDate:(+new Date),
            creationDate:(+new Date),
            id:+new Date,
            status:'active'
        }
    ],
    completedTask:[]
}
var reducer=(state=initialState,action)=>{

        if(actions.CREATED==action.type){
            // console.log('inside create');
            let originalPost=[...state.tasks];
            action.data.id=+new Date;
            action.data.creationDate=+new Date;
            originalPost.push(action.data);
            console.log(originalPost);
            return {
                ...state,
                tasks:originalPost
            }
        };
        if(actions.DELETED===action.type){
            let originalPost=[...state.tasks];
            originalPost.splice(action.data.index,1);
            return {
                ...state,
               tasks: originalPost
            }
        }
        if(actions.UPDATE===action.type){
            let originalPost=[...state.tasks];
            let originPost=originalPost[action.data.index];
            originalPost[action.data.index]=action.data.data;
            originalPost[action.data.index].creationDate=originPost.creationDate;
            originalPost[action.data.index].id=originPost.id;
            return {
                ...state,
                tasks:originalPost
            }
        }
        return state;
}

export default reducer;