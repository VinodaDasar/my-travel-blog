export const selectCommentUser=(allUser, id)=>{
    let User
    User = allUser.find(user=>{
        if(user._id==id){
            return user.username
        }
    })
    return User
}
