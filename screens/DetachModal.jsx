import React, { useMemo, useRef } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

const App = () => {
    // ref
    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ["25%", "50%", "100%"], []);

    // renders
    return (
        <View style={styles.container}>
            <Button
                title="expand"
                onPress={() => {
                    bottomSheetRef.current.expand();
                }}
            />

            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                // add bottom inset to elevate the sheet
                bottomInset={46}
                // set `detached` to true
                detached={true}
                style={styles.sheetContainer}
            >
                <View style={styles.contentContainer}>
                    <Text>Awesome 🎉</Text>
                    <Button
                        title="close"
                        onPress={() => {
                            console.log(bottomSheetRef);
                            bottomSheetRef.current.close();
                        }}
                    ></Button>
                </View>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "grey",
    },
    sheetContainer: {
        // add horizontal space
        marginHorizontal: 24,
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
    },
});

export default App;
