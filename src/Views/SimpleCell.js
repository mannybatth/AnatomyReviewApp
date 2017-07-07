import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';

class SimpleCell extends React.Component {

  goToNextScreen() {
    this.props.navigation.navigate(this.props.data.screen);
  }

  render() {
    return (
      <TouchableHighlight onPress={this.goToNextScreen.bind(this)} 
                      underlayColor={"#E8E8E8"}
                      style={styles.button}>
      <View style={styles.container}>
          <Text style={styles.text}>{this.props.data.text}</Text>
      </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#bcbcbf'
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  }
});

export default SimpleCell;
