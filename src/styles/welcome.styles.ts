
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 30,
    paddingTop: 70,
  },
  info: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 50,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 25,
  },
})