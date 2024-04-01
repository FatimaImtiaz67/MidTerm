import { useEffect, useState } from "react";
import axios from "axios";

const GLOBAL = require("./GLOBLES");

export default function GETAPIHook(){

    const [signup, setsignup] = useState();

    useEffect(() => {

    const signUpParams = {
    email:"amna11@gmail.com",
    password:"12345678910",
    firstName:"Amna",
    lastName:"User",
    confirmPassword:"12345678910",
    signUpType: "EMAIL"
    }
    
    let finalURL = GLOBAL.BASE_URL+'signup'
    
    axios
    .post(finalURL, signUpParams, {
      headers: {
        Accept: "application/json",
      },
    })
    .then(function (response) {
      console.log("We are Successful ==", response.data);
      setsignup(signup);
    })
    .catch(function (error) {
      console.log('What is error == ',error.response.data.message);
    //   Alert.alert(error.response.data.message);
    setsignup(signup);
    })
      }, []);
      return {signup}
}