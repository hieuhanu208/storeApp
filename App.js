import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
import RefImage from './assets/fridge.png';
import smartPhone from './assets/mobile-phone.png';
import airConditioner from './assets/air-conditioner.png';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <CategoryListItem title={"Smart Phone"} image={smartPhone}/>
       <CategoryListItem title={"Air Conditioner"} image={airConditioner}/>
       <CategoryListItem title={"Refrigerator"} image={RefImage}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
});
