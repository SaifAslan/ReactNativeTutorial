import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
function GoalItem(props) {
  console.log(props);
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.id)}>
      <View>
        <Text style={styles.text}>{props.goal}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default GoalItem;
const styles = StyleSheet.create({
  text: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ccc",
    marginTop: 10,
    marginBottom: 10,
  },
});
