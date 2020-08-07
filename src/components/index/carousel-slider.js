import React, { Component } from 'react';

class IndexCarouselSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0
        }
    }
    componentDidMount() {
        this.showSlides(this.state.slideIndex);
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName('mySlides');
        var thumbnail = document.getElementsByClassName('thumbnail-image');
        var caption = document.getElementById('caption');
    
        if(n >= slides.length) { n = 0; }
        if(n < 0) { n = slides.length - 1; }
        for(i=0; i<slides.length; i++) {
            if(n === i) {
                slides[i].style.display = 'block';
                thumbnail[i].classList.add('selected');
            } else {
                slides[i].style.display = 'none';
                thumbnail[i].classList.remove('selected');
            }
        }

        caption.innerHTML = thumbnail[n].alt;

        this.setState({
            slideIndex: n
        });
    }
    plusSlides(n) {
        this.showSlides(this.state.slideIndex + n)      
    }
    currentSlide(n) {
        this.showSlides(n);
    }
    render() {
        return (
            <section className="carousel-slider">
                <div className="title row">
                    <div className="left col-6"> Star 푸드 로그</div>
                    <div className="right col-6">
                        <a href="/">All</a>
                    </div>
                </div>
                <div className="container">
                    <a href="/">
                        <div className="mySlides">
                            <div className="numbertext">1 / 6</div>
                            <img className="main-image" src="image/food1.jpg" alt="main-item"/>
                        </div>
                    </a>
                </div>

                <div className="container">
                    <div className="mySlides">
                        <div className="numbertext">2 / 6</div>
                        <img className="main-image" src="image/food1.jpg" alt="main-item"/>
                    </div>
                </div>

                <div className="container">
                    <div className="mySlides">
                        <div className="numbertext">3 / 6</div>
                        <img className="main-image" src="image/food1.jpg" alt="main-item"/>
                    </div>
                </div>

                <a href="/" className="prev"
                    onClick={function(e) {
                        e.preventDefault();
                        this.plusSlides(-1);
                    }.bind(this)}>❮</a>
                <a href="/" className="next"
                    onClick={function(e) {
                        e.preventDefault();
                        this.plusSlides(1);
                    }.bind(this)}>❯</a>

                <div className="caption-container">
                    <p id="caption"></p>
                </div>

                <div className="row">
                    <div className="col-4">
                        <img className="thumbnail-image selected" src="image/food1.jpg"
                            onClick={function(e) {
                                e.preventDefault();
                                this.currentSlide(0);
                            }.bind(this)}
                            alt="delicious!"/>
                    </div>
                    <div className="col-4">
                        <img className="thumbnail-image" src="image/food1.jpg"
                            onClick={function(e) {
                                e.preventDefault();
                                this.currentSlide(1);
                            }.bind(this)}
                            alt="awesome!"/>
                    </div>
                    <div className="col-4">
                        <img className="thumbnail-image" src="image/food1.jpg"
                            onClick={function(e) {
                                e.preventDefault();
                                this.currentSlide(2);
                            }.bind(this)}
                            alt="tasty!"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default IndexCarouselSlider;