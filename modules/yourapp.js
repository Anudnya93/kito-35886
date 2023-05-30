import React, { useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { GetFCMToken } from '../src/helpers/pushNotification'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads'

const YourApp = () => {
  useEffect(() => {
    GetFCMToken('', (data, notification) => {
      //console.log('console called', data);
      //console.log('console called', notification);
    })
  }, [])

  return (
    <View style={styles.container}>
      <BannerAd
        requestOptions={{
          requestNonPersonalizedAdsOnly: true
        }}
        unitId={'ca-app-pub-8225991916266129/8634487469'}
        sizes={[BannerAdSize.FULL_BANNER]}
      />
      <Text style={styles.text}>Welcome to your brand!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    padding: 13
  },
  text: {
    fontSize: 20
  }
})

export const YourAppModule = {
  name: 'YourApp',
  path: './',
  package: '@modules',
  value: {
    title: 'Your App',
    navigator: YourApp
  }
}
