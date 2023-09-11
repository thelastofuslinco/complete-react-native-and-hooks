import { io } from 'socket.io-client'

const URL = 'https://lin-chat-app-6f5bb902b804.herokuapp.com'

export const socket = io(URL)
