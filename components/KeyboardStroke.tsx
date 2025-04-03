import {Assets, Button, Icon, View} from "react-native-ui-lib";
import {LetterButton} from "@/components/LetterButton";
import useStore from "@/hooks/useStore";


export const KeyboardStroke = () => {
    const {currentGuess, guesses, answer, setIsGameOver, setGuesses, setCurrentGuess} = useStore();

    Assets.loadAssetsGroup('icons', {
        backspace: require('../assets/images/backspace.png'),
    });
    return (
        <View gap-2 centerH>
            <View gap-3 row>
                <LetterButton value={'q'}/>
                <LetterButton value={'w'}/>
                <LetterButton value={'e'}/>
                <LetterButton value={'r'}/>
                <LetterButton value={'t'}/>
                <LetterButton value={'y'}/>
                <LetterButton value={'u'}/>
                <LetterButton value={'i'}/>
                <LetterButton value={'o'}/>
                <LetterButton value={'p'}/>
            </View>
            <View gap-3 row>
                <LetterButton value={'a'}/>
                <LetterButton value={'s'}/>
                <LetterButton value={'d'}/>
                <LetterButton value={'f'}/>
                <LetterButton value={'g'}/>
                <LetterButton value={'h'}/>
                <LetterButton value={'j'}/>
                <LetterButton value={'k'}/>
                <LetterButton value={'l'}/>
            </View>
            <View gap-3 row bottom>
                <Button
                    label={'ENTER'}
                    style={{minWidth: 60, minHeight: 50, borderRadius: 5}}
                    avoidInnerPadding
                    onPress={() => {
                        if (currentGuess.length !== 5)
                            return;
                        const newGuesses = [...guesses]
                        newGuesses[guesses.findIndex(value => value == null)] = currentGuess
                        setGuesses(newGuesses);
                        setCurrentGuess('');
                        if (answer === currentGuess)
                            setIsGameOver(true);
                    }}
                />
                <LetterButton value={'z'}/>
                <LetterButton value={'x'}/>
                <LetterButton value={'c'}/>
                <LetterButton value={'v'}/>
                <LetterButton value={'b'}/>
                <LetterButton value={'n'}/>
                <LetterButton value={'m'}/>
                <Button
                    style={{minWidth: 60, minHeight: 50, borderRadius: 5}}
                    avoidInnerPadding
                    onPress={() => setCurrentGuess(currentGuess.slice(0, -1))}>
                    <Icon source={Assets.icons.backspace}/>
                </Button>
            </View>
        </View>
    )
}