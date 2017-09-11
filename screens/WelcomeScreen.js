import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDES_DATA = [
    { text: 'Welcome to JobApp', color: '#03A9F4' },
    { text: 'Set your location, then swipe away', color: '#009688' },
];

class WelcomeScreen extends Component {

    onSlideComplete = () => {
        this.props.navigation.navigate('auth');
    }

    render() {
        return (
            <Slides data={SLIDES_DATA} onComplete={this.onSlideComplete} />
        );
    }
}

export default WelcomeScreen;
