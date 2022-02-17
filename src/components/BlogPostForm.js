import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
  },
  buttonStyle: {
    marginVertical: 10,
  },
});

export default BlogPostForm;
