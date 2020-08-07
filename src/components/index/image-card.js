import React, { Component } from 'react';

class IndexImageCard extends Component {
    render() {
        return (
            <section className="image-card">
                <div className="row">
                    <a href="/">
                        <div className="image-text-container col-12 col-sm-4">
                            <div className="top-left">
                                <h2>Foodie 달력</h2>
                                <p>나만의 푸드 로그를 작성해보세요</p>
                                <p>작성하기 <i className="fas fa-arrow-right"></i></p>
                            </div>
                            <img src="image/food1.jpg" alt="calendar-btn"/>
                        </div>
                    </a>
                    <a href="/">
                        <div className="image-text-container col-12 col-sm-4">
                            <div className="top-left">
                                <h2>Foodie 스타</h2>
                                <p>다른 사람의 푸드 로그를 구경 해보세요</p>
                                <p>구경하기 <i className="fas fa-arrow-right"></i></p>
                            </div>
                            <img src="image/food1.jpg" alt="star-btn"/>
                        </div>
                    </a>
                    <a href="/">
                        <div className="image-text-container col-12 col-sm-4">
                            <div className="top-left">
                                <h2>Foodie 찾기</h2>
                                <p>내가 찾고 싶은 글쓴이를 찾아보세요</p>
                                <p>찾아보기 <i className="fas fa-arrow-right"></i></p>
                            </div>
                            <img src="image/food1.jpg" alt="find-btn"/>
                        </div>
                    </a>
                </div>
            </section>
        )
    }
}

export default IndexImageCard;