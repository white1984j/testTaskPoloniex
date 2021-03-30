import {StyleSheet} from 'react-native';
import {COLOR_WHITE, BACKGROUND_COLOR} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  content: {
    paddingVertical: 30,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
  },
  text: {
    fontSize: 18,
    lineHeight: 25,
    color: COLOR_WHITE,
    textAlign: 'center',
  },
});

export default styles;
