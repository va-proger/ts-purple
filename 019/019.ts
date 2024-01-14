// Union
function logId(id: string | number | boolean)
{
    if (typeof id === 'string'){
        console.log(id.toLowerCase());
    }else if (typeof id === 'number'){
        console.log(id);
    }else{
        console.log(id);
    }
}
function logError(err: string | string []){
    if(Array.isArray(err)){
        console.log(err);
    }else {
        console.log(err);
    }
}
function logObject(obj: { a: number } | {b: number}){
    if('a' in obj){
        console.log(obj);
    }else {
        console.log(obj);
    }
}
function logMultipleIds(a: string | number, b: string | boolean)
{
    if(a === b){
        console.log(a, b)
    }else {
        console.log(a, b)
    }
}