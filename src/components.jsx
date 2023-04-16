// import PropTypes from 'prop-types'
import React, { Component } from 'react';
import './components.css';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.handleChoice(this.props.card);

    }


    render() {
        return (
            <div className='card' >
                <div className={this.props.flipped ? "flipped" : ""}>
                    <img className='front' src={this.props.card.src} alt="card front" />
                    <img className='back' src='/card-game-React/cover.png' alt="card back"
                        onClick={this.handleClick} />
                </div>
            </div>
        );
    }
}

