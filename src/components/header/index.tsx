
import { colors } from '@/styles/colors';
import { Feather } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';



export function Header() {
    return (
        <View style={s.container}>
            <Image style={s.image} source={{uri: "https://github.com/moiseslimma.png"}} />

            <View style={s.user}>
                <Text style={s.name}>Eu Quem</Text>
                <Text style={s.email}>euquem@gmail.com</Text>
            </View>

            <TouchableOpacity>
                <Feather name="more-horizontal" size={20} color={colors.gray[100]} />
            </TouchableOpacity>

        </View>

    )
}



export const s = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        padding: 10,
        borderBottomWidth: .5,
        borderBottomColor: colors.gray[400]
    },
    image:{
        width: 40,
        height: 40,
        borderRadius: 20
    },
    user:{
        flex: 1,
    },
    name: {
        color: colors.gray[100],
        fontWeight: '500',
        fontSize: 16
    },
    email:{
        color: colors.gray[300],

        fontSize: 14
    }

})