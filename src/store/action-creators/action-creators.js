import actions from './../actions';
const create=(data)=>{
    return {type:actions.CREATED,data:data};
}
export default {
    create
}