import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import im1 from './im1.jpeg';
import im2 from './im2.jpeg';
import im3 from './im3.jpeg';
import im4 from './im4.jpeg';
import im5 from './im5.jpeg';
import im6 from './im6.jpeg';

const imageUrls = [im1, im2, im3, im4, im5, im6]; // Use the imported images

const PostsListScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Make an API request to fetch posts
    axios
      .get('http://10.0.2.2:8080/api/allposts')
      .then((response) => {
        // Assign a random image URL to each post
        const postsWithRandomImages = response.data.posts.map((post) => {
          const randomIndex = Math.floor(Math.random() * imageUrls.length);
          return {
            ...post,
            thumbnail: imageUrls[randomIndex],
          };
        });

        setPosts(postsWithRandomImages);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PostDetails', { slug: item.slug })
          }
        >
          <View style={styles.container}>
            <Image source={item.thumbnail} style={styles.thumbnail} />
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.tags}>Tags: {item.tags.join(', ')}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tags: {
    fontSize: 14,
    color: 'gray',
  },
});

export default PostsListScreen;
