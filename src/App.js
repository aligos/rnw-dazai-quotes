import React, { Component } from "react";
import dazai from "./osamu-dazai.jpeg";
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity
} from "react-native-web";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: {
        id: "",
        quoteMessage: "loading...",
        author: "",
      }
    }
  }

  getQuote = () => {
    const api = '//echo-quote.herokuapp.com/api/randomquote';
    axios.get(api)
    .then((response) => this.setState({quote: response.data}))
    .catch((err) => console.log(err))
  }

  componentDidMount() {
    this.getQuote()
  }

  onClick = () => {
    if (window) {
      window.location.href = "https://en.wikipedia.org/wiki/Osamu_Dazai";
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: dazai }} style={styles.image} />
        <Text style={styles.text}>
          {this.state.quote.quoteMessage}
          <TouchableOpacity onPress={this.onClick}>
            <Text style={styles.link}>@Dazai Osamu</Text>
          </TouchableOpacity>
        </Text>
        <Button
            onPress={this.getQuote}
            title="RANDOM QUOTE"
            color="#E74E4E"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#263650",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    padding: 30,
    marginBottom: 20,
    backgroundColor: "#2273AA",
    borderRadius: 20
  },
  link: {
    marginLeft: 5,
    color: "#57CBFF"
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    margin: 20
  },
  random: {
    margin: 30
  }
});
