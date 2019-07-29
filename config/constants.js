import { Dimensions, Platform } from 'react-native';
import { Header } from 'react-navigation';
let headerHeight = Header.HEIGHT;
let footerHeight = 55;
let defaultSwiperIndex = 0;

const constants = {
  appName: 'sampleApp',
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
  search_place_holder: "Type Here"
};
export default constants;
