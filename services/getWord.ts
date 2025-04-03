const API_URL = 'https://api.mehdi-narimani.ir/api/game/wordle';

export async function getWord() {

    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return json['word'];
}