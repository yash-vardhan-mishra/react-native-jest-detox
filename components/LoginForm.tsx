import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
            <View style={styles.textInputContainer}>
                <TextInput
                    testID='username-test-input'
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.textInputContainer}>
                <TextInput
                    testID='password-test-input'
                    placeholder="Password"
                    value={password}
                    secureTextEntry
                    onChangeText={setPassword}
                    style={styles.textInput}
                />
            </View>
            <Button testID='login-form-button' title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        marginVertical: 12
    },
    textInputContainer: { borderWidth: 1, borderRadius: 12, borderColor: Colors.light, width: '75%', marginVertical: 12, alignSelf: 'center', paddingHorizontal: 8, paddingVertical: 12 },
    textInput: { width: '100%' }
})

export default LoginForm;