import React from 'react'
import { Text, View } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title={'mountain'}
        score={9}
        source={require('../../assets/mountain.jpg')}
      />
      <ImageDetail
        title={'forest'}
        score={7}
        source={require('../../assets/forest.jpg')}
      />
      <ImageDetail
        title={'beach'}
        score={5}
        source={require('../../assets/beach.jpg')}
      />
    </View>
  )
}

export default ImageScreen
