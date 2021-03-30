import React, {useMemo, useCallback} from 'react';
import {FlatList, Text, View, ScrollView} from 'react-native';
import {TData} from '../../utils/types/types';
import styles from './styles';

interface Props {
  data: TData;
}

export function TableList(props: Props) {
  const {data} = props;

  const dataKeys = useMemo(() => {
    return Object.keys(data);
  }, [data]);

  const renderItem = useCallback(
    ({item, index}: {item: string; index: number}) => {
      return (
        <View style={styles.wrapper} key={item}>
          <Text style={styles.index}>{index}.</Text>
          <Text style={styles.name}>{item}</Text>
          <Text style={styles.last}>{data[item].last}</Text>
          <Text style={styles.highestBid}>{data[item].highestBid}</Text>
          <Text style={styles.percentChange}>{data[item].percentChange}</Text>
        </View>
      );
    },
    [],
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
        <FlatList data={dataKeys} renderItem={renderItem} />
      </View>
    </ScrollView>
  );
}
