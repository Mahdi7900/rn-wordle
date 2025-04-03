import {Text, View} from "react-native-ui-lib";
import {KeyboardStroke} from "@/components/KeyboardStroke";
import {DisplayWords} from "@/components/DisplayWords";

export default function Game() {

    return (
        <View style={{width: '100%', height: '100%'}} centerH spread paddingV-15 gap-6>
            <Text h1 text10>
                Wordle
            </Text>
            <DisplayWords/>
            <KeyboardStroke/>
        </View>
    )
}