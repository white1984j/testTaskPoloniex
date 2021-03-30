import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ICON_LOGO} from '../../utils/images';
import styles from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.content}>
          <Image source={ICON_LOGO} style={styles.logo} />
          <Text style={styles.text}>
            Poloniex is a cryptocurrency exchange that offers various bitcoin
            markets available for trading. The Company provides its customers
            with a secure trading environment and advanced charts and data
            analysis tools. The platform enables users to buy and sell
            cryptocurrencies such as litecoin, namecoin, dogecoin, and more.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
