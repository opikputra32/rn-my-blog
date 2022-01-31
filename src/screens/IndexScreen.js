import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
// import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
              {/* <Feather name="trash" /> */}
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
