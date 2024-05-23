
import {FC, useState} from 'react'
import {
    Button, Dimensions,
    StyleSheet, View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {BarChart} from "react-native-gifted-charts";

const BAR_SPACING = 3


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

const HomeScreen: FC<HomeScreenProps> = () => {
    const [data, setData] = useState(tempDayData)
    const [chartWidth, setChartWidth] = useState(Dimensions.get('screen').width)

    return (
        <SafeAreaView style={styles.page} edges={['top']}>
                <View style={styles.buttonWrapper}>
                    <Button
                        title={'DAY'}
                        onPress={() => setData(tempDayData)}
                    />
                    <Button
                        title={'WEEK'}
                        onPress={() => setData(tempWeekData)}
                    />
                    <Button
                        title={'MONTH'}
                        onPress={() => setData(tempMonthData)}
                    />
                </View>
                <BarChart
                    isAnimated={true}
                    animationDuration={500}
                    data={data}
                    endSpacing={0}
                    xAxisTextNumberOfLines={2}
                    width={chartWidth}
                    noOfSections={4}
                    hideOrigin
                    xAxisColor={'black'}
                    xAxisLabelsHeight={16}
                    spacing={BAR_SPACING}
                    barWidth={10}
                    height={chartWidth / 2}
                    yAxisColor={'transparent'}
                    frontColor={'black'}
                    barBorderRadius={24}
                />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
        page: {
            flex: 1,
            backgroundColor: 'white'
        },
        buttonWrapper: {
            margin: 24,
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
