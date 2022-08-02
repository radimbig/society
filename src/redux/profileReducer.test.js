
import { React } from 'react';
import {addPostActionCreator} from "./actionCreators"
import profileReducer from './profileReducer';


let initializationState = {
    currentProfile:{
      id:"1",
      fullname:"Radim",
      surname:"Voronianskyi",
      image:"https://paintbynumbersforsale.com/wp-content/uploads/2021/11/aesthetic-Capybara-paint-by-numbers-247x296.jpg",
      job:"I`m loking for job as react developer!",
      bio:"I study react!",
      country:"Ukraine",
      age:17,
      instagram:"https://www.instagram.com/radimbig/",
      facebook:"https://www.facebook.com/radimvadim1",
      github:"https://www.github.com/radimbig"
    },
    
    postsObj: [
      { id: 1, likes: 133, text: "ja churka" },
      { id: 2, likes: 45, text: "lysa boshka" },
      { id: 3, likes: 89, text: "kruchu binance" },
      { id: 4, likes: 22, text: "bebromentr" },
    ],
    tempPost: "Radim",
    isFetching:true
  };


it("After post added lenght shoud be incremented", ()=>{
    
    
    let action = addPostActionCreator("test text")


    let newState = profileReducer(initializationState, action)


    expect(newState.postsObj.length).toBe(5)
})


it("Text of added post shoud be correct", ()=>{
    let action = addPostActionCreator("test text")

    let newState = profileReducer(initializationState, action)


    expect(newState.postsObj[4].text).toBe("test text")
})