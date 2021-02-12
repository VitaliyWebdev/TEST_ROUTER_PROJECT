export const getComments = async (id) =>{
    return await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(value=>value.json()).then(value=>value)
}
