import { useEffect, useState } from "react";
import axios from "axios";
import GETAPIHook from "./GETAPIHook";

const GLOBAL = require("./GLOBLES");

export default function POSTAPIHook(){

    const [login, setLogin] = useState();

    useEffect(() => {


    const signUpParams = {
    email:"amna11@gmail.com",
    password:"12345678910",
    }
    
    let finalURL = GLOBAL.BASE_URL+'login'
    axios
    .post(finalURL, signUpParams, {
      headers: {
        Accept: "application/json",
      },
    })
    .then(function (response) {
      console.log("We are Successful ==", response.data);
      setLogin(login);
    })
    .catch(function (error) {
      console.log('What is error == ',error.response.data.message);
    //   Alert.alert(error.response.data.message);
    setLogin(login);
    })


      }, []);


      return {login}
}