import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <SafeAreaView>
            <View className="flex-1">{children}</View>
        </SafeAreaView>
    );
};

