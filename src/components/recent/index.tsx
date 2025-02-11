import { Feather } from "@expo/vector-icons";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

type Props = {
    data:{
        title: string
        cover?: string
    }
}

export function Recent({data}: Props) {
    return (
        <View style={s.container}>
            <TouchableOpacity >
                <Image style={s.cover} source={{uri: data.cover}} />

                <View style={s.content}>
                    <Feather name="file-text" size={32} color={colors.gray[300]} />
                    <Text style={s.title} numberOfLines={2}>{data.title}</Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        height: 134,
        width: 134,
        borderRadius: 10,
        backgroundColor: colors.gray[700],
        overflow: "hidden",
    },
    cover: {
        height: "50%",
        width: "100%",
        backgroundColor: colors.gray[600],
    },
    title: {
        marginTop: 10,
        fontSize: 16,
        color: colors.gray[100]
    },
    icon: {
        position: "absolute",
        left: 7,
        top: -16
    },
    content: {
        height: "50%",
        width: "100%",
        padding: 12
    }

})