import {User} from "./models/User"
const user = new User({name:"karim",age:24})
user.on("click",()=>{console.log("test1")})
user.on("click",()=>{console.log("test2")})
user.on("dfghsdfhsd",()=>{console.log("test3")})
user.trigger("dfghsdfhsd")