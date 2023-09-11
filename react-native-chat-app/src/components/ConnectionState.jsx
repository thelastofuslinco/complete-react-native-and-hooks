import { Text } from 'react-native'

const ConnectionState = ({ isConnected }) => {
  return <Text>State: {isConnected && 'Connected!'}</Text>
}

export default ConnectionState
