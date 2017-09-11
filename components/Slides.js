import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View key={index} style={[styles.slideStyle, { backgroundColor: slide.color }]} >
                    <Text style={styles.textStyle} >
                        {slide.text}
                    </Text>
                    {this.renderLastSlide(index)}
                </View>
            );
        });
    }

    renderLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return (
                <View style={{ marginTop: 15 }} >
                    <Button
                        title="Onwards!"
                        raised
                        buttonStyle={styles.buttonStyle}
                        onPress={this.props.onComplete}
                    />
                </ View>
            );
        }
    }

    render() {
        return (
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                style={{ flex: 1 }}
            >
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    slideStyle: {
        flex: 1,
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        backgroundColor: '#0288D1'
    }
};

export default Slides;
