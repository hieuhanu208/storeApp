//import liraries
import React, {Component} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


// create a component
class CategoryListItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Image style= {styles.categoryImage} source={this.props.image}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryImage:{
    width:64,
    height:64
  },
  title:{
    textTransform:'uppercase',
    marginBottom: 8,
    fontWeight: '700',
  },
  container:{
    alignItems:'center',
    padding: 16,
    borderRadius:4,
    backgroundColor:'#fff',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {height:0,with:0},
    marginBottom:16

  }
})


export default CategoryListItem;
