import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 16,
        borderRadius: 50
    },
    input: {
        backgroundColor: '#f1f4f5',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 2,
        padding: 8,
        width: '80%',
        marginBottom: 12,
        height: 40,
    },
    button:{
        
        backgroundColor:'#8cc8f5 ',
        paddingVertical:20,
        borderRadius:10,
    }
});