import { FC, useMemo, useState } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { BarChart } from 'react-native-gifted-charts'
import { barDataItem } from 'gifted-charts-core/src/BarChart/types'
import {AggregationLevel} from "@/app/(tabs)";

interface ChartProps {
    data: barDataItem[]
    aggregationLevel: AggregationLevel
}

export const LABEL_WIDTH = 40
export const BAR_SPACING = 3

const dayCharacterLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const timeOfDayLabels = ['12a', '4a', '8a', '12p', '4p', '8p', '11p']

export const Chart: FC<ChartProps> = ({
                                                                    data,
                                                                    aggregationLevel,
                                                                }) => {
    const [chartWidth, setChartWidth] = useState(0)
    const barWidth = useMemo(() => {
        return (chartWidth - data.length * BAR_SPACING) / data.length
    }, [chartWidth, data])

    const maxValue = useMemo(() => {
        if (data?.length === 0) {
            return 0
        }

        let highestValue = data.reduce(
            (max, obj) => (obj.value > max ? obj.value : max),
            data[0].value,
        )
        return Math.ceil(highestValue / 100) * 100 * 1.35
    }, [data])

    const chartHeight = useMemo(
        () => (chartWidth / 2),
        [chartWidth],
    )

    return (
        <View
            style={styles.chartWrapper}
            onLayout={e =>
                setChartWidth(e.nativeEvent.layout.width - LABEL_WIDTH - 32)
            }>
            <BarChart
                isAnimated={true}
                animationDuration={250}
                data={data}
                endSpacing={0}
                xAxisTextNumberOfLines={2}
                width={chartWidth}
                noOfSections={4}
                hideOrigin
                xAxisColor={'black'}
                maxValue={maxValue}
                xAxisLabelsHeight={16}
                spacing={BAR_SPACING}
                barWidth={barWidth}
                height={chartHeight}
                yAxisColor={'transparent'}
                yAxisTextStyle={styles.yAxisLabelText}
                frontColor={'black'}
                barBorderRadius={24}
            />
        </View>
    )
}

const styles =
    StyleSheet.create({
        chartWrapper: {
            width: '100%',
            backgroundColor: 'white',
            paddingHorizontal: 16,
            padding: 16,
            borderRadius: 16,
        },
        yAxisLabelText: {
            color: 'black'
        },
    })