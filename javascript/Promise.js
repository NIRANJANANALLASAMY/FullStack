// function locationFinder(){
//     train=17
//     return new Promise((resolve,reject)=>{
    
//     if(train ==7)
//     {
//         resolve("train has arrived")
//     }
//     else{
//         reject("train rejected")
//     }
// })

// }
// console.log(locationFinder())


async function LikeCode() {
    return new Promise((like)=>{
        like("like posted successfully.")
    })
    
}
async function CommentCode() {
    return new Promise((commentPosted)=>{
        commentPosted("commment posted successfully.")
    })
    
}
async function createPost(){
    var post=new Promise((cPost)=>{
        cPost("post created successfully")
    })
    var [post,comment,like]=await Promise.all([Post(),CommentCode(),LikeCode()])
    console.log(post);
    console.log(comment);
    console.log(like);
}
createPost()