import {
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ActivityIndicator,
    RNGestureHandler, 
  } from 'react-native';
  import React, {useState} from 'react';
  import {auth} from "../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from "firebase/auth";
  import AsyncStorage from '@react-native-async-storage/async-storage';

  
  const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
   
    const forgotPassword = () => {
       console.log("Do nothing");
    };
  
    const handleLogin = async () => {
      setIsLoading(true);
  
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        if (email === 'admin@gmail.com' && password === 'admin123') {
          navigation.navigate('Movies'); 
        } else {
          navigation.navigate('Users'); 
        }
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login error:", errorCode, errorMessage);
  
        // Handle login errors appropriately (e.g., display error messages)
        alert('Login failed. Please check your credentials or try again later.');
      } finally {
        setIsLoading(false);
      }
    };
  
    const handleSignUp = () => {
   
      navigation.navigate('SignUp');
    };
    const handleEmailChange = (text) => {
      setEmail(text);
    };

    const handlePasswordChange = (text) => {
      setPassword(text);
    };

  const saveUserData = async (email, password) => {
  
    setIsLoading(true);
    fetch("https://dev.iqrakitab.net/api/login", {
             
      method: "POST",       
      body: JSON.stringify({
        "email": email,
        "password": password
      }),
      headers: {
        Accept: "application/json",
      }
  })
  .then(response => response.json())
 
  .then(async(json) => {
   
      const token = json.token;
      console.log(json);
    
  
     
 
  }).catch(err=>{
      console.log('Error',err);
      alert("credentials not true");

    }).finally(() => {
    setIsLoading(false); 
  });
  
  };

  return(
      <View style={styles.container}>
        <View style={{flex: 0.2, justifyContent: 'flex-end', marginLeft: 15}}>
          <Text style={styles.firstText}>Hi, Welcome Back</Text>
          <Text style={styles.secondText}>Hello again, you’ve been missed! </Text>
        </View>
        <View style={{flex: 0.4, justifyContent: 'center'}}>
          <View style={styles.inputContainer}>
         
            <TextInput placeholder="Email or Phone numbers"  onChangeText={handleEmailChange} value={email}/>
          </View>
          <View style={styles.inputContainer}>
        
          <TextInput
          secureTextEntry={!showPassword}
          placeholder="Password"
          onChangeText={handlePasswordChange}
          value={password}
          />
    
          </View>
          <View style={styles.checkbox}>
           
            <TouchableOpacity onPress={forgotPassword}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#E1082F',
                  fontFamily: 'Roboto',
                  marginLeft:10
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 0.3, alignItems: 'center'}}>
          <TouchableOpacity onPress={handleLogin} style={styles.pressable}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        </View>
  
        <View style={styles.wrap}>
          <Text style={styles.text}>Don’t have any account?</Text>
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpText}> Sign Up</Text>
          </TouchableOpacity>
        </View>
        <StatusBar translucent={true} backgroundColor="transparent" barStyle={'dark-content'}/>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'seashell',
      height: '100%',
      width: '100%',
    },
    firstText: {
      color: '#1D1A19',
    
      fontSize: 32,
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
    secondText: {
      fontFamily: 'Roboto',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'lavendar',
      borderRadius: 10,
      padding: 15,
      margin: 5,
      backgroundColor: 'white',
    },
    icon: {
      marginRight: 10,
      margin: 10,
    },
    checkbox: {
      flexDirection: 'row',
      justifyContent:'flex-start',
      marginTop:10
    },
    label: {
      marginLeft: 10,
      fontSize: 15,
      fontWeight: 'bold',
    },
    pressable: {
      width: 380,
      height: 56,
      borderRadius: 52,
      backgroundColor: 'pink',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    wrap: {
      flex: 0.1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontFamily: 'Roboto',
      fontSize: 16,
      color: 'black',
    },
    signUpButton: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    signUpText: {
      fontFamily: 'Roboto',
      fontSize: 16,
      color: '#E1b45F',
    },
  });
  
  export default Login;
  