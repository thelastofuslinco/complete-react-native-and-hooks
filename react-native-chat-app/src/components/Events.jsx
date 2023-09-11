import { FlatList, Text } from 'react-native'

const Events = ({ events }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(e, i) => i}
      data={events}
      renderItem={({ item }) => (
        <Text>
          {item.username} - {item.text}
        </Text>
      )}
    />
  )
}

export default Events
