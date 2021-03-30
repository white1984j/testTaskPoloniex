import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Text, View, Animated} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useIsFocused} from '@react-navigation/native';
import {TableList} from '../../components/TableList/TabletList';
import {TData} from '../../utils/types/types';
import styles from './styles';

const MS = 5000;

export function Table() {
  const isFocused = useIsFocused();

  const [data, setData] = useState<TData | null>(null);

  const [error, setError] = useState<string | null>(null);

  const timerRef = useRef<null | ReturnType<typeof setTimeout>>(null);

  const animOpacity = useRef(new Animated.Value(1));

  const onGetData = useCallback(async () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    try {
      const res = await fetch(
        'https://poloniex.com/public?command=returnTicker',
      );
      const json = await res.json();
      setData(json);
      setError(null);
      Animated.timing(animOpacity.current, {
        toValue: 0.8,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(animOpacity.current, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(err.toString());
      }
    }

    timerRef.current = setTimeout(() => {
      onGetData();
    }, MS);
  }, []);

  useEffect(() => {
    if (isFocused) {
      onGetData();
    } else {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
  }, [isFocused]);

  const renderLoader = useCallback(() => {
    return (
      <View style={styles.loaderView}>
        <ActivityIndicator />
      </View>
    );
  }, []);

  const renderEmptyList = useCallback(() => {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptyText}>List is empty</Text>
      </View>
    );
  }, []);

  const renderContent = useCallback(() => {
    if (!data) {
      return renderEmptyList();
    }

    return <TableList data={data} />;
  }, [data, renderEmptyList]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.flex} edges={['top']}>
        {error && (
          <View style={styles.errorView}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        <Animated.View style={{opacity: animOpacity.current}}>
          {!data ? renderLoader() : renderContent()}
        </Animated.View>
      </SafeAreaView>
    </View>
  );
}
