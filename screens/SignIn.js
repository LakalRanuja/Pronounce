/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { TextInput, Button, List } from 'react-native-paper';
// import auth from '@react-native-firebase/auth';
// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
// import ListAccordionGroup from 'react-native-paper/lib/typescript/components/List/ListAccordionGroup';

// GoogleSignin.configure({
//   webClientId: '',
// });
import SearchWords from './SearchWords';

export default class SignIn extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    };
    this.emailHandler = this.emailHandler.bind(this)
    this.passwordHandler = this.passwordHandler.bind(this)

    // GoogleSignin.configure({
    //   webClientId: '236313856268-e0metqhp3p47k2514vkp2lcpr7c2hd8r.apps.googleusercontent.com',
    // });
  }

  // signIn = async () => {
  //   const { idToken } = await GoogleSignin.signIn();
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //   auth().signInWithCredential(googleCredential).then((result) => {
  //     if (result.user) {
  //       this.props.navigation.navigate('Dashboard');
  //     }
  //   });
  // }

  signIn = () => {

    var data = new Headers();

    return fetch('http://192.168.42.62:3000/customer' ,{
      method: 'POST',
      headers: data
    })
    .then(response => response.json())
    .then(resp => {
      if(resp.affectedRows > 0) {
        console.log('Done');
      }
    })
    .catch(err => {
      console.log('Failed');
    })
  }

  render() {
    return (
      <View>
        {/* <Text style={{ alignSelf: 'center', marginTop: 20, color: 'gray' }}>English (United States) </Text> */}
        <Text style={{ fontFamily: 'fantasy', alignSelf: 'center', fontSize: 30, marginTop: 90, marginBottom: 40, color: "black" }} >Pronounce</Text>
        <TextInput
          label="Email"
          style={{ width: 320, alignSelf: 'center' }}
          value={
            this.state.email
          }
          onChangeText={
            (e) => {
              this.setState({ email: e })
            }
          } />
        <TextInput
          label="Password"
          style={{ width: 320, alignSelf: 'center', marginTop: 20, marginBottom: 35 }}
          secureTextEntry
          value={
            this.state.password
          }
          onChangeText={
            (e) => {
              this.setState({ password: e })
            }
          }
        />
        <Button
          mode="outlined"
          onPress={this.signIn}
          color="#3498db"
          style={{ width: 320, alignSelf: 'center' }}
        >
          Signup

        </Button>
        <View className="row">
          {/* <Text style={{ alignSelf: 'center', marginTop: 20, color: "gray", fontSize: 11 }}>_______________  OR  _______________</Text> */}
        </View>
        {/* <GoogleSigninButton
          style={{ width: 192, height: 48, position: 'relative', alignSelf: 'center', marginTop: 15 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
        /> */}
      </View>
    );
  }
}
