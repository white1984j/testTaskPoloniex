import React, {useMemo, useCallback, useRef, useEffect} from 'react';
import {FlatList, Text, View, ScrollView, Animated} from 'react-native';
import {TData, TDataBody} from '../../utils/types/types';
import styles from './styles';

interface Props {
  data: TData;
}

function TableItem(props: {item: string; data: TData; index: number}) {
  const {item, data, index} = props;
  const refLastItem = useRef<null | TDataBody>(null);
  const animOpacity = useRef(new Animated.Value(1));

  useEffect(() => {
    if (
      refLastItem.current &&
      JSON.stringify(refLastItem.current) !== JSON.stringify(data[item])
    ) {
      Animated.timing(animOpacity.current, {
        toValue: 0.5,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(animOpacity.current, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    }

    refLastItem.current = data[item];
  }, [item, data]);

  return (
    <Animated.View style={[styles.wrapper, {opacity: animOpacity.current}]}>
      <Text style={styles.index}>{index}.</Text>
      <Text style={styles.name}>{item}</Text>
      <Text style={styles.last}>{data[item].last}</Text>
      <Text style={styles.highestBid}>{data[item].highestBid}</Text>
      <Text style={styles.percentChange}>{data[item].percentChange}</Text>
    </Animated.View>
  );
}

export function TableList(props: Props) {
  const {data} = props;

  const dataKeys = useMemo(() => {
    return Object.keys(data);
  }, [data]);

  const renderItem = useCallback(
    ({item, index}: {item: string; index: number}) => {
      return <TableItem data={data} item={item} index={index} />;
    },
    [data],
  );

  return (
    <ScrollView horizontal>
      <View>
        <View style={styles.header}>
          <Text style={styles.index}>#</Text>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.last}>Last</Text>
          <Text style={styles.highestBid}>Highest Bid</Text>
          <Text style={styles.percentChange}>Percent change</Text>
        </View>
        <FlatList
          data={dataKeys}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
}
