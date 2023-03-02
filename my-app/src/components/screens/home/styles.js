import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7dd3fc',
    },
    header: {
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    main: {
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: 50,
        marginTop: 30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    textData: {
        fontSize: 16,
        marginLeft: 10
    }
  });