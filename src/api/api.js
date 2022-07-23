import axios from "axios";


const instance = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials:true,
    headers:{
        "API-KEY":"33602c08-6ab1-4706-a32e-98372c8dc47f"
    }
})


export const userAPI = {
    getUser(page = 1,count = 5){
        return instance.get(`users?page=${parseInt(page)}&count=${count}`).then((res) => {
            return(res.data)
          });
    },
    follow(id){
        return instance.post(`follow/${id}`).then((res)=>{
            return(res.data)
        })
    },
    unfollow(id){
        return instance.delete(`follow/${id}`).then((res)=>{
            return(res.data)
        })
    },
}

export const profileAPI = {
    getProfile(id){
        return instance.get(`profile/${id}`).then(res=>{
            return(res.data)
        })
    }
}


export const authAPI = {
    authMe(){
        return instance.get(`auth/me`).then(res=>{
            return res.data
        })
    }
}