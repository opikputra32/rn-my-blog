import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as blogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(blogContext);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <BlogPostForm
      initialValue={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        console.log(title, content);
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
