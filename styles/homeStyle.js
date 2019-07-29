import {
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import constants from '../config/constants';

const styles = StyleSheet.create({
  container: {
    // Instead of do 100% of height and width is doing flex: 1,
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginBottom: 5
  },
  searchbox: {
    marginTop: Platform.select({
      ios: 0,
      android: 20,
    }),
  },
  errorText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: Platform.select({
      ios: 'Chalkboard SE',
      android: 'sans-serif-condensed',
    }),
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: Platform.select({
      ios: 'Chalkboard SE',
      android: 'sans-serif-condensed',
    }),
    color: 'black',
  },
  imageView: {
    height: constants.screenHeight / 3,
  },
});
export default styles;
