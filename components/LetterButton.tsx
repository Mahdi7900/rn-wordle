import {Button} from "react-native-ui-lib";
import useStore from "@/hooks/useStore";

export const LetterButton = ({value}: { value: string }) => {
    const {currentGuess,isGameOver, setCurrentGuess} = useStore();

    return (
        <Button
            label={value}
            avoidInnerPadding
            onPress={() => (!isGameOver && currentGuess.length < 5) && setCurrentGuess(currentGuess + value)}
            style={{minWidth: 30, minHeight: 50, borderRadius: 5}}
        />
    )
}