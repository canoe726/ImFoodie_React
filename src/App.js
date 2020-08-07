import React, { Component } from 'react';
import './App.css';
import IndexHeader from './components/index/header';
import IndexDescription from './components/index/description';
import IndexImageCard from './components/index/image-card';
import IndexMyFoodLog from './components/index/myfood_log';
import IndexCarouselSlider from './components/index/carousel-slider';
import IndexFooter from './components/index/footer';

class App extends Component {
    render () {
        return (
            <div className="index">
                <IndexHeader></IndexHeader>
                <IndexDescription></IndexDescription>
                <IndexImageCard></IndexImageCard>
                <IndexMyFoodLog></IndexMyFoodLog>
                <IndexCarouselSlider></IndexCarouselSlider>
                <IndexFooter></IndexFooter>
            </div>
        )
    };
}

export default App;
