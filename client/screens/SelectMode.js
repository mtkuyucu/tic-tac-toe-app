import * as React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { Button } from "react-native-elements";

import { colors } from "../lib/Settings";

const SelectMode = ({ navigation }) => {
  const renderWeb = () => {
    if (Platform.OS === "web") {
      return (
        <View>
          <Text style={styles.text}>Download the app:</Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.image}
              source={require(`../assets/images/app-store.png`)}
            />
            <Image
              style={styles.image}
              source={require(`../assets/images/google-play.png`)}
            />
          </View>
        </View>
      )
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select Mode:</Text>
      <View style={{ flexWrap: "wrap", flexDirection: "row", justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Button
          title="Roboplayer"
          type="solid"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Roboplayer")}
        />
        <Button
          title="Multiplayer"
          type="solid"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Multiplayer")}
        />
        <Button
          title="Online Multiplayer"
          type="solid"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Online Multiplayer")}
        />
      </View>
      {renderWeb()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background
  },
  text: {
    color: "white",
    margin: 20,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500"
  },
  button: {
    width: 200,
    padding: 10,
    margin: 10,
    backgroundColor: colors.main
  },
  image: {
    flex: 1,
    height: 60,
    width: 200,
    margin: 10
  }
});

export default SelectMode;
