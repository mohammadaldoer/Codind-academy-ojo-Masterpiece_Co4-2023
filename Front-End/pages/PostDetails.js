import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

const PostDetailsScreen = ({ route }) => {
  const { slug } = route.params; // Access slug from route params
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Make an API request to fetch post details based on the slug
    axios.get(`http://10.0.2.2:8080/api/single/${slug}`)
      .then((response) => {
        setPost(response.data.post);
      })
      .catch((error) => {
        console.error('Error fetching post details:', error);
      });
  }, [slug]); // Use slug as a dependency for useEffect

  // Render post details
  return (
    <ScrollView style={styles.container}>
      {post ? (
        <>
          {/* <Image source={{ uri: post.thumbnail.url }} style={styles.thumbnail} /> */}
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.meta}>{post.meta}</Text>
          <Text style={styles.content}>{post.content}</Text>
          <Text style={styles.tags}>Tags: {post.tags.join(', ')}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  meta: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  content: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 16,
  },
  tags: {
    fontSize: 16,
    color: 'blue',
  },
});

export default PostDetailsScreen;
