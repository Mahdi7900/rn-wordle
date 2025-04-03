import {Button, Colors, Text, View} from "react-native-ui-lib";
import {useRouter} from 'expo-router';
import useStore from "@/hooks/useStore";
import {getWord} from "@/services/getWord";

export default function Index() {
    const router = useRouter();
    const {setAnswer, setGuesses, setCurrentGuess, setIsGameOver} = useStore();

    const newGame = async () => {
        setIsGameOver(false);
        setGuesses(Array(6).fill(null));
        setCurrentGuess('');
        const answer = await getWord();
        setAnswer(answer);
        router.push('/game');
    }

    return (
        <View flex center gap-5>
            <Text text40>
                Lets Play!
            </Text>
            <Button
                label={'Start'}
                size={Button.sizes.large}
                backgroundColor={Colors.green40}
                borderRadius={20}
                onPress={newGame}/>
        </View>
    );
}
