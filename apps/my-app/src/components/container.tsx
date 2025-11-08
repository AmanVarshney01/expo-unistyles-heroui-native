import React from "react";
import { SafeAreaView, View } from "react-native";

export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1">{children}</View>
        </SafeAreaView>
    );
};

