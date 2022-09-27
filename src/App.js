import { React, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

function App() {
  let [num, setNum] = useState(0);
  let [num1, setNum1] = useState(0);
  return (
    <View style={styles.app}>
      <View
        style={[
          styles.container,
          {
            flexDirection: "row"
          }
        ]}
      >
        <View
          style={{
            flex: 2,
            backgroundColor: "pink",
            marginRight: 20,
            paddingTop: 200,
            textAlign: "center",
            width: 200
          }}
        >
          <Text>введите количество ваших деняк в тенге</Text>
          <TextInput
            style={styles.input}
            placeholder="деньги в тенге"
            onChangeText={(num) => setNum(num / 8)}
          ></TextInput>
          <Text>{num}</Text>
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: "lightblue",
            paddingTop: 200,
            textAlign: "center"
          }}
        >
          <Text>введите количество ваших деняк в тенге</Text>
          <TextInput
            style={styles.input}
            placeholder="деньги в тенге"
            onChangeText={(num1) => setNum1(num1 * 8)}
          ></TextInput>
          <Text>{num1}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    flexDirection: "column",
    height: "100%"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  container: {
    flex: 1,
    padding: 20
  }
});

export default App;
