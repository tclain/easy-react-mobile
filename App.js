import React from "react";
import { StyleSheet, Text, View, Platform, AppRegistry } from "react-native";
import { Button } from "./src/components/Button";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button color="red">Hello</Button>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

// for web, run it directly
if (Platform.OS === "web") {
  AppRegistry.registerComponent("App", () => App);
  AppRegistry.runApplication("App", {
    initialProps: {},
    rootTag: document.getElementById("root")
  });
}
