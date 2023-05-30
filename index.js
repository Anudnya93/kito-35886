/**
 * @format
 */

import { Alert, AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import messaging from '@react-native-firebase/messaging'

// messaging().setBackgroundMessageHandler(async () => {
//   Alert.alert('hey called')
//   console.log('setBackgroundMessageHandler notification received here')
//   return Promise.resolve()
// })

AppRegistry.registerComponent(appName, () => App)
