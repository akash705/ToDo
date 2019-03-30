import actions from './../actions';
const Create=(data)=>{
    return {type:actions.CREATED,data:data};
}
const Delete=(data)=>{
    return {type:actions.DELETED,data:data};
}
const Update = (data)=>{
    return {type:actions.UPDATE,data:data};
}
export default {
    Create,
    Delete,
    Update
}