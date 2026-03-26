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
    marginTop: 25,
    textAlign: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  textBottomCreate: {
    fontSize: 16,
    color: themas.Colors.primary,
  },
  textRecovery: {
    fontSize: 14,
    color: themas.Colors.primary,
    textDecorationLine: 'underline',
    marginTop: 15,
    marginBottom: 15,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingBottom: 40,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    lineHeight: 20,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
    color: '#000',
  },
  modalButton: {
    marginBottom: 15,
  },
  modalCancel: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    paddingVertical: 10,
  },
  recoveryTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  recoveryTypeButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    alignItems: 'center',
  },
  recoveryTypeActive: {
    backgroundColor: themas.Colors.primary,
    borderColor: themas.Colors.primary,
  },
  recoveryTypeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  recoveryTypeTextActive: {
    color: '#FFFFFF',
  },
  passwordInputContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  passwordToggle: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
});