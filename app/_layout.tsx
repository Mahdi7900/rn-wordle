import {Stack} from "expo-router";

export default function RootLayout() {
    return <Stack screenOptions={{
        headerStyle: {
            backgroundColor: '#313131',
        },
        headerTintColor: '#fff',
    }}>
        <Stack.Screen name={'index'} options={{title: 'Wordle', headerTitleAlign: 'center'}}/>
        <Stack.Screen name={'game'} options={{title: 'Wordle', headerTitleAlign: 'center'}}/>
    </Stack>;
}
