import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SectionHeader = (props) => {
  return (
    <View style={styles.headerViewStyle}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerViewStyle: {
    backgroundColor: '#a9a9a9',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    color:'#FFFFFF'
  }
});

export default SectionHeader;
