var initialState={
    tasks:[
        {
            title:'Title of Task',
            description : "Some quick example text to build on the card title and make up the bulk of the card's content.",
            expiryDate:(+new Date),
            creationDate:(+new Date),
            id:"akadlkfjda"
        }
    ],
    completedTask:[]
}
var reducer=(state=initialState,action)=>{
    return state
}
export default reducer;