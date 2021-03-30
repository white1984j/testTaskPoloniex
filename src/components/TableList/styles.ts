import {StyleSheet} from 'react-native';
import {COLOR_WHITE, COLOR_ACTIVE, COLOR_BORDER} from '../../utils/colors';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: COLOR_BORDER,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: COLOR_BORDER,
  },
  index: {
    color: COLOR_WHITE,
    width: 30,
  },
  name: {
    color: COLOR_ACTIVE,
    fontWeight: '700',
    width: 100,
  },
  last: {
    color: COLOR_WHITE,
    width: 120,
  },
  highestBid: {
    color: COLOR_WHITE,
    width: 130,
  },
  percentChange: {
    color: COLOR_WHITE,
    width: 120,
  },
});

export default styles;
