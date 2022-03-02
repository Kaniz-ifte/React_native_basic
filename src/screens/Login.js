import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function LoginScreen() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const f1 = (event) => {
        setEmail(event);
        console.log(email); 
      }

	return (
		<View style={styles.container}>

			<TextInput
				style={styles.TextInput, styles.inputView}
				placeholder="Email."
				placeholderTextColor="#003f5c"
				onChangeText= { f1 }
			/>
			<TextInput
				style={styles.TextInput, styles.inputView}
				placeholder="Password."
				placeholderTextColor="#003f5c"
				secureTextEntry={true}
				onChangeText={(password) => setPassword(password)}
			/>
			<Button
				 buttonStyle={{
					backgroundColor: 'rgba(111, 202, 186, 1)',
					borderRadius: 5,
				  }} titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
				  containerStyle={{
					marginHorizontal: 50,
					height: 50,
					width: 200,
					marginVertical: 10,
				  }} title="Log In" 
			/>

<Button
                title="HOME"
                icon={{
                  name: 'home',
                  type: 'font-awesome',
                  size: 15,
                  color: 'white',
                }}
                iconContainerStyle={{ marginRight: 10 }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
              

		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
	height:'100%',
  },


  inputView: {
     backgroundColor: "#f9f9f9",
     borderRadius: 30,
     width: "70%",
     height: 45,
     marginBottom: 20,
	 paddingLeft:20,
     alignItems: "center",
   },

   TextInput: {
     height: 50,
     flex: 1,
     padding: 10,
     marginLeft: 20,
   },
   submitButton:{
	   backgroundColor:'#27AD80',
	   color:'#27AD80',
	   paddingTop:10,
	   paddingBottom:10,
	   paddingRight:30,
	   paddingLeft:30,
	   borderRadius:20,

   },
});

