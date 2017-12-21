import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = () => {
  const { headerStyle, textStyle } = styles;
  return (
    <View style={headerStyle}>
      <Text style={textStyle}>This is the header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 50,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'Cochin',
  }
});

export default Header;
