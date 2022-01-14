import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Alert } from 'react-native';
import { TextInput, Button, List } from 'react-native-paper';
import { withNavigation } from 'react-navigation';

import SearchWords from './SearchWords';

export default class SignIn extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    };

  }

  signIn = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        email: "lakal@gmail.com",
        password: "lakal123"
      }),
      redirect: this.props.navigation.navigate('Dashboard')
    };

    fetch("http://Pronounce-env-1.eba-a2mejgzf.us-east-2.elasticbeanstalk.com/login", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
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
