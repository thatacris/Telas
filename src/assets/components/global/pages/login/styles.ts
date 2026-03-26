import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxTop: {
    height: Dimensions.get('window').height / 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxMid: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    paddingHorizontal: 37,
    justifyContent: 'center',
  },
  boxBottom: {
    height: Dimensions.get('window').height / 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 40,
  },
  text: {
    marginTop: 35,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textBottom: {
    fontSize: 14,
    color: themas.Colors.gray,
    marginTop: 20,
    textAlign: 'center',
  },
  textBottomCreate: {
    fontSize: 16,
    color: themas.Colors.primary,
  },
});