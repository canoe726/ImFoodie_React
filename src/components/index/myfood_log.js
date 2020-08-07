import React, { Component } from 'react';

class IndexMyFoodLog extends Component {
    render() {
        return (
            <section className="myfood_log">
                <div className="title row">
                    <div className="left col-6"> 내 최신 푸드 로그</div>
                    <div className="right col-6">
                        <a href="/">All</a>
                    </div>
                </div>
                <div className="container row">
                    <div className="card">
                        <a className="add-card" href="/">
                            <i className="fas fa-plus"></i>
                        </a>
                    </div>
                    <div className="card">
                        <a href="/"><img src="image/food1.jpg" alt="card-item"/></a>
                    </div>
                    <div className="card">
                        <a href="/"><img src="image/food1.jpg" alt="card-item"/></a>
                    </div>
                    <div className="card">
                        <a href="/"><img src="image/food1.jpg" alt="card-item"/></a>
                    </div>
                    <div className="card">
                        <a href="/"><img src="image/food1.jpg" alt="card-item"/></a>
                    </div>
                    <div className="card">
                        <a href="/"><img src="image/food1.jpg" alt="card-item"/></a>
                    </div>
                    <div className="card">
                        <a href="/"><img src="image/food1.jpg" alt="card-item"/></a>
                    </div>
                </div>
            </section>
        )
    }
}

export default IndexMyFoodLog;