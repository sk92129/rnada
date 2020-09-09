import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View
      style={styles.header}
      accessible={true}
      accessibilityLabel={'Main app header'}
      accessibilityRole={'header'}>
      <Text style={styles.header_text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    backgroundColor: '#3e3e3e',
  },
  header_text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 17,
    textAlign: 'center',
    padding: 10,
  },
});

export default Header;
