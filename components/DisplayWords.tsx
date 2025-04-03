import {Text, View} from "react-native-ui-lib";
import useStore from "@/hooks/useStore";
import {ReactNode} from "react";

export const DisplayWords = () => {
    const {guesses, answer, currentGuess} = useStore();

    return (
        <View centerH gap-5>
            {guesses.map((guess, i) => {
                const isCurrentGuess = i === guesses.findIndex(value => value == null);
                return (
                    <Word
                        key={i}
                        word={isCurrentGuess ? currentGuess : guess ?? ''}
                        answer={answer}
                        isFinal={!isCurrentGuess && guess != null}/>
                )
            })}
        </View>
    )
}

const Word = ({word, answer, isFinal}: { word: string, answer: string, isFinal: boolean }) => {
    const tiles: ReactNode[] = []
    for (let i = 0; i < 5; i++) {
        tiles.push(
            <Text key={i}
                  style={{
                      width: 30,
                      height: 50,
                      borderStyle: 'solid',
                      borderColor: '#414141',
                      borderWidth: 1,
                      fontSize: 24,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: isFinal ? word[i] === answer[i] ? '#00ff00' : answer.includes(word[i]) ? '#ffc400' : '#ff0000' : 'unset'
                  }}>
                {word[i]?.toUpperCase() ?? ''}
            </Text>
        )
    }
    return (
        <View gap-6 row>
            {tiles}
        </View>
    )
}

