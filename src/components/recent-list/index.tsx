import { StyleSheet, View, Text } from "react-native"
import { FlatList } from "react-native"
import {Recent} from '@/components/recent'
import { colors } from "@/styles/colors"

type Props = {
    data: {
        id: string
        title: string
        cover?: string
    }[]
}

export function RecentList({data}: Props) {
    return (
        <View style={s.container}>
            <Text  style={s.title} >RecentList</Text>

            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Recent data={item}/>}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={s.content}
            />
        </View>
    )
}

export const s = StyleSheet.create({
    container: {
        width: "100%",
        gap: 12,
    },
    title:{
        color: colors.gray[300],
        fontSize: 16,
        marginLeft: 20
    },
    content:{
        gap: 12,
        padding: 20
    }


})