import { FlatList, View, StyleSheet } from 'react-native';
import { useRef, useEffect, useState } from 'react';
import { useTheme } from "../../theme/ThemeProvider";
import CarouselCard from './CarouselCard';

const Carousel = ({ carouselData }) => {

    const { theme: { colors, spacing } } = useTheme()

    const styles = StyleSheet.create({
        indicatorContainer: {
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: spacing.xs,
            position: "relative",
            bottom: -100,
            zIndex: 10
        },
        indicator: {
            height: 4,
            width: 4,
            backgroundColor: colors.black300,
            marginHorizontal: spacing.xxs,
            borderRadius: spacing.xl,
        },
        indicatorActive: {
            backgroundColor: colors.blue
        },

        carousel: {
            position: "relative",
            zIndex: 0
        }
    })

    const [visibleItemIndex, setVisibleItemIndex] = useState(0)
    const onViewCallBackRef = useRef(({ viewableItems }) => {
        if(viewableItems.length > 0) {
            setVisibleItemIndex(viewableItems[0].index);
          }
    }, [])
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

    const flatListRef = useRef(null)
    const [carouselIndex, setCarouselIndex] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {
            setCarouselIndex((carouselIndex + 1) % carouselData.length)
            flatListRef.current.scrollToIndex({ index: carouselIndex, animated: true })
        }, 5000)

        return () => clearInterval(interval)

    }, [carouselIndex])

    return (
        <View>
            <View style={styles.indicatorContainer}>
                {carouselData.map((_, index) => (
                    <View key={index} style={[styles.indicator, visibleItemIndex === index && styles.indicatorActive]}/>
                ))}
            </View>
            <FlatList
                style={styles.carousel}
                ref={flatListRef}
                onViewableItemsChanged={onViewCallBackRef.current}
                viewabilityConfig={viewConfigRef.current}
                horizontal
                pagingEnabled
                data={carouselData}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => <CarouselCard key={index} item={item} />}
            />
        </View>
    )
}

export default Carousel
