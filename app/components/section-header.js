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
    backgroundColor: '#228B22',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20
  }
});

export default SectionHeader;
