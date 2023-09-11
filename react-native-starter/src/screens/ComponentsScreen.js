import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const name = 'Lincoln'

  return (
    <View>
      <Text style={styles.text}>Getting started with react native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: { fontSize: 40 },
  subHeaderStyle: { fontSize: 25 }
})

export default ComponentsScreen
