import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const onDelete = (key) => {
    let newList = list.filter((item) => item.key !== key);
    setList(newList);
    // console.log("list", list);
  };
  return (
    <View style={styles.container}>
      <GoalInput setText={setText} text={text} list={list} setList={setList} />
      <FlatList
        // keyExtractor={(item, index )=>item.key} this by default
        style={styles.list}
        data={list}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            onDelete={onDelete}
            goal={itemData.item.value}
          />
        )}
      ></FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 50,
  },

  list: {},
});
