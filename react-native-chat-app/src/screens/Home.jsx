import { useState, useEffect } from 'react'
import { socket } from '../socket'
import { Button, SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import MyForm from '../components/MyForm'
import ConnectionState from '../components/ConnectionState'
import Events from '../components/Events'

export default function Home() {
  const room = 'sala1'
  const [username, setUsername] = useState('')
  const [roomData, setRoomData] = useState(null)
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    function receiveMessage(message) {
      setMessages((prevState) => [...prevState, message])
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('message', receiveMessage)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('message', receiveMessage)
    }
  }, [])

  return (
    <View style={styles.container}>
      {!roomData && (
        <SafeAreaView>
          <TextInput
            placeholder="Digite nome de usuario"
            onChangeText={setUsername}
            value={username}
          />
          <Button
            title="Entrar na sala"
            onPress={() =>
              socket.emit('join', { username, room }, (error) => {
                setRoomData({ username, room })
                if (error) {
                  console.log(error)
                }
              })
            }
          />
        </SafeAreaView>
      )}
      {roomData && (
        <>
          <ConnectionState isConnected={isConnected} />
          <Events events={messages} />
          <MyForm />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
})
