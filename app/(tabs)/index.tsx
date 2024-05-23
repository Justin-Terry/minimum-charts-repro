
import { FC, useMemo, useState } from 'react'
import {
    Button,
    ScrollView,
    StyleSheet, View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Chart} from "@/components/Chart";

const tempDayData = [
    { value: 0 },
    { value: 50 },
    { value: 100 },
    { value: 150 },
    { value: 200 },
    { value: 250 },
    { value: 300 },
    { value: 350 },
    { value: 400 },
    { value: 450 },
    { value: 500 },
    { value: 550 },
    { value: 600 },
    { value: 650 },
    { value: 700 },
    { value: 750 },
    { value: 800 },
    { value: 850 },
    { value: 900 },
    { value: 950 },
    { value: 1000 },
    { value: 1050 },
    { value: 1100 },
    { value: 1150 },
]

const tempWeekData = [
    { value: 0 },
    { value: 100 },
    { value: 200 },
    { value: 300 },
    { value: 400 },
    { value: 500 },
    { value: 600 },
]

const tempMonthData = [
    { value: 0 },
    { value: 35 },
    { value: 70 },
    { value: 105 },
    { value: 140 },
    { value: 175 },
    { value: 210 },
    { value: 245 },
    { value: 280 },
    { value: 315 },
    { value: 350 },
    { value: 385 },
    { value: 420 },
    { value: 455 },
    { value: 490 },
    { value: 525 },
    { value: 560 },
    { value: 595 },
    { value: 630 },
    { value: 665 },
    { value: 700 },
    { value: 735 },
    { value: 770 },
    { value: 805 },
    { value: 840 },
    { value: 875 },
    { value: 910 },
    { value: 945 },
    { value: 980 },
    { value: 1015 },
    { value: 1050 },
]

interface HomeScreenProps {}

export enum AggregationLevel {
    DAY = 'day',
    WEEK = 'week',
    MONTH = 'month',
}

const HomeScreen: FC<HomeScreenProps> = () => {
    const [aggregationLevel, setAggregationLevel] =
        useState<AggregationLevel>(AggregationLevel.DAY)

    const data = useMemo(() => {
        switch (aggregationLevel) {
            case AggregationLevel.DAY:
                return tempDayData
            case AggregationLevel.WEEK:
                return tempWeekData
            case AggregationLevel.MONTH:
                return tempMonthData
        }
    }, [
        tempDayData, tempWeekData, tempMonthData,
        aggregationLevel,
    ])

    return (
        <SafeAreaView style={styles.page} edges={['bottom']}>
            <ScrollView
                style={styles.page}
                contentContainerStyle={styles.pageContent}>
                <View style={styles.buttonWrapper}>
                    <Button
                        title={'DAY'}
                        onPress={() => setAggregationLevel(AggregationLevel.DAY)}
                    />
                    <Button
                        title={'WEEK'}
                        onPress={() => setAggregationLevel(AggregationLevel.WEEK)}
                    />
                    <Button
                        title={'MONTH'}
                        onPress={() => setAggregationLevel(AggregationLevel.MONTH)}
                    />
                </View>
                <Chart data={data} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
        page: {
            flex: 1,
        },
        buttonWrapper: {
            margin: 24,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        pageContent: {
            flexGrow: 1,
            paddingTop: 24,
            paddingHorizontal: 16,
            alignItems: 'center',
        },
    })
