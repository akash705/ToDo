var initialState={
    tasks:[
        {
            title:'Title of Task',
            description : "Some quick example text to build on the card title and make up the bulk of the card's content.",
            expiryDate:(+new Date),
            creationDate:(+new Date),
            id:+new Date,
            status:'Active'
        }
    ],
    completedTask:[]
}
var reducer=(state=initialState,action)=>{
    switch(action.type){
        case("CREATED"):{
            let originalPost=[...state.tasks];
            originalPost.id=+new Date;
            originalPost.push(action.data);
            return {
                ...state,
                originalPost
            }
        };
        case("DELETED"):{
            let originalPost=[...state.tasks];
            originalPost.splice(action.data.index,1);
            return {
                ...state,
                originalPost
            }
        }
        case("UPDATED"):{
            let originalPost=[...state.tasks];
            originalPost[action.data.index]=action.data.data;
            return {
                ...state,
                originalPost
            }
        }
        default:{
            return state;
        }
    }
}
export default reducer;