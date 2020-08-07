import React, { Component } from 'react';

class IndexHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }
    render() {
        return (
            <header>
                <div className="row">
                    <div className="fixed-left-menu"
                        onClick={function (e) {
                            var menuBtn = document.querySelector('.menu-btn');
                            var sideNav = document.querySelector('.sideNav');
                            if(!this.state.menuOpen) {
                                menuBtn.classList.add('open');
                                this.setState({
                                    menuOpen: true
                                });
                                sideNav.style.width = '250px';
                            } else {
                                menuBtn.classList.remove('open');
                                this.setState({
                                    menuOpen: false
                                });
                                sideNav.style.width = '0px';
                            }
                                                     
                    }.bind(this)}>
                        <div className="menu-btn">
                            <div className="menu-btn__burger"></div>
                        </div>
                    </div>
                    <div className="col-12">
                        <a href="/">I'm Foodie</a>
                    </div>
                </div>
                <div className="sideNav">
                    <a href="/">I'm Foodie</a>
                    <a href="/">Foodie 캘린더</a>
                    <a href="/">Foodie 로그</a>
                    <a href="/">Foodie 스타</a>
                </div>
            </header>
        )
    }
}

export default IndexHeader;