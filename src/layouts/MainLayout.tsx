import { useTheme } from '../context/ThemeContext';
import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Header from './Header';


const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { colors, isDarkMode } = useTheme();

    return (
        <View style={[styles.container, colors.backgroundStyle]}>
             <StatusBar
                hidden={false}
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 12,
    },
});

export default MainLayout;