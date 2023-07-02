import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import { Entypo } from '@expo/vector-icons'; 
const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View >
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return   <View style={styles.row}>
            <Text style={styles.title}>
          {item.id}{' '}  {item.title}
            </Text> 
            <Entypo name="trash" style={styles.icon} color="black" />
          </View>;
        }}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  row : {
    flexDirection : 'row',
    justifyContent:'space-between',
    paddingVertical:20,
    borderTopWidth:1,
    borderBottomWith:1,
    borderColor:'gray',
    paddingHorizontal:10
  },
  title:{
    fontSize:24,

  },
  icon:{
    fontSize:24
  }
});

export default IndexScreen;
