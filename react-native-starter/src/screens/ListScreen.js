import { FlatList, StyleSheet, Text } from 'react-native'

const ListScreen = () => {
  const friends = Array.from({ length: 100 }).map((u, i) => ({
    name: 'Friend #' + (i + 1),
    age: Math.floor(Math.random() * 50 - 1 + 1) + 1
  }))

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => (
        <Text style={style.text}>
          {item.name} - Age {item.age}
        </Text>
      )}
    >
      ListScreen
    </FlatList>
  )
}

const style = StyleSheet.create({
  text: { padding: 10 }
})

export default ListScreen
