import { StyleSheet, Text, View, TouchableOpacity, FlatList  } from "react-native";
import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";
import {Page} from '@/components/page'

type Props = {
    data:{
        id: string
        title: string
    }[]
}

export function PageList({data}: Props) {
    return (
        <View style={s.container}>
            <View style={s.header}>
                <Text style={s.title}>Privado</Text>

                <TouchableOpacity>
                    <Feather name="more-horizontal" size={20} color={colors.gray[300]}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Feather name="plus" size={20} color={colors.gray[300]}/>
                </TouchableOpacity>

                
            </View>
            
            <FlatList
                
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <Page title={item.title}/>}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={s.separator}/>}
                    scrollEnabled={false}
                />
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        padding: 20,
        gap: 12,
    },
    header:{
        flexDirection: "row",
        gap: 16,
        paddingRight: 16,
        alignItems: "center"
    },
    title:{
        color: colors.gray[300],
        fontSize: 16,
        flex: 1
    },
    list: {
        backgroundColor: colors.gray[700],
        borderRadius: 8,
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: colors.gray[500],
        marginLeft: 42
    }
})