import React from 'react'
import { Button, SafeAreaView, TextInput } from 'react-native'
import { socket } from '../socket'

const MyForm = () => {
  const [text, onChangeText] = React.useState('Useless Text')
  const [isLoading, setIsLoading] = React.useState(false)

  const onSubmit = () => {
    setIsLoading(true)

    socket.emit('send_message', text, () => {
      setIsLoading(false)
      onChangeText('')
    })
  }

  return (
    <SafeAreaView>
      <TextInput onChangeText={onChangeText} value={text} />
      <Button title="Send message" onPress={onSubmit} disabled={isLoading} />
    </SafeAreaView>
  )
}

export default MyForm
