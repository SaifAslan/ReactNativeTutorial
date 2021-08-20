import React from "react";
import { View, Button, Text, TextInput, StyleSheet } from "react-native";
function GoalInput(props) {
  return (
    <View style={styles.containerSecondary}>
      <TextInput
        style={styles.textInput}
        onChangeText={(value) => props.setText(value)}
        placeholder={"enter goal"}
      ></TextInput>
      <Button
        title="Add"
        onPress={() =>
          props.setList([
            ...props.list,
            { key: Math.random().toString(), value: props.text },
          ])
        }
      ></Button>
    </View>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  containerSecondary: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // marginTop:0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {},
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    padding: 10,
  },
});
