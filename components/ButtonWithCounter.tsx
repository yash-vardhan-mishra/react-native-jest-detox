import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

interface Props {
    initialCount: number;
}

const ButtonWithCounter = ({ initialCount }: Props) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => setCount(count + 1);

    return (
        <View>
            <Button title="Press me" onPress={increment} />
            <Text style={{ alignSelf: 'center', marginTop:12 }}>You pressed {count} times</Text>
        </View>
    );
};

export default ButtonWithCounter;