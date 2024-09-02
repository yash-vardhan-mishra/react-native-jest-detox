import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

interface Props {
    onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<Props> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username && password) {
            onLogin(username, password);
        }
    };

    return (
        <View>
            <TextInput
                style={styles.inputStyle}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        marginVertical: 12
    }
})

export default LoginForm;