import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends Component {
    constructor(props) {
        super();
        const ref = this;
        ref.state = {
          data: [],
        }
    }

    componentWillMount() {
        axios.get('https://raw.githubusercontent.com/Uxgradients/json/master/gradients.json') 
            .then(res => {
                this.setState({ 
                    data: res.data
                });
            });
    }

    showColor(color){
        if(color.length === 3){
            alert(`background: linear-gradient(to left, ${color[0]}, ${color[1]}, ${color[2]})`)
        } else if(color.length === 4){
            alert(`background: linear-gradient(to left, ${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`)
        } else{
            alert(`background: linear-gradient(to left, ${color[0]}, ${color[1]})`)
        }
    }

    render() {
        const ref = this;
        return (
            <div className="App">
                <Header/>
                {
                    <div className="container-fluid">
                        <div className="row">
                            {
                                ref.state.data.map(function(el, i) {
                                    return (
                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                            <div className="cards">
                                                <div className="image" style={el.colors[3] ? {background: `linear-gradient(to left, ${el.colors[0]}, ${el.colors[1]}, ${el.colors[2]}, ${el.colors[3]})`} : el.colors[2] ? {background: `linear-gradient(to left, ${el.colors[0]}, ${el.colors[1]}, ${el.colors[2]})`} : {background: `linear-gradient(to left, ${el.colors[0]} , ${el.colors[1]})`}}>
                                                    <div className="copy_circle">
                                                        <i className="ion-ios-copy" onClick={ colors => ref.showColor(el.colors)} title="Copy CSS"></i>
                                                    </div>
                                                </div>
                                                <div className="texts">
                                                    <div className="name">{el.name}</div>
                                                    <div className="code">
                                                        {
                                                            el.colors.map(function(elem, i) {
                                                                return <span>{elem} </span>
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
                <Footer />
            </div>
        );
    }
}

export default App;