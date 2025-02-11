import { Feather } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

type Props = {

    title: string
}

export function Page({title}: Props) {
    return (
        <View style={s.container}>
       
            <Feather name="chevron-right" size={20} color={colors.gray[300]}/>   
            <Feather name="file-text" size={20} color={colors.gray[300]}/>
            
            <Text style={s.title}>{title}</Text>

            <TouchableOpacity>
                <Feather name="plus" size={20} color={colors.gray[300]}/>
            </TouchableOpacity>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        gap: 7,
        alignItems: "center",
        padding: 16
    },
    title: {
        flex: 1,
        fontSize: 16,
        color: colors.gray[100]
    },


})