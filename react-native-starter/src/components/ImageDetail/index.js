import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ImageDetail = ({ title, source, score }) => {
  return (
    <View>
      <Image style={styles.logo} source={source} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },
  tinyLogo: {
    width: 50,
    height: 50
  },
  logo: {
    width: 100,
    height: 100
  }
})

export default ImageDetail
