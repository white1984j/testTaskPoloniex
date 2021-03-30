import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, COLOR_DANGER, COLOR_WHITE} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  flex: {
    flex: 1,
  },
  loaderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: COLOR_WHITE,
    fontSize: 20,
  },

  errorView: {
    padding: 24,
  },
  errorText: {
    textAlign: 'center',
    color: COLOR_DANGER,
  },
});

export default styles;
