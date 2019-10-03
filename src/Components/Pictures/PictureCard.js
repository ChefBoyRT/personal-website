import React, { Component } from 'react'

export default class PictureCard extends Component {

    state = {
        cardFront: true
    }

    toggleCard = () => {
        this.setState({
            cardFront: !this.state.cardFront
        })
    }

    render() {
        return (
            <div className='picture-card' onClick={() => this.toggleCard()} >
                {this.state.cardFront 
                    ? <img className='picture-img' src={this.props.picture.image_url} alt={this.props.picture.description}/> 
                    : <div className='picture-info'>
                        <p className='picture-location'>{this.props.picture.location}</p>
                        <p className='picture-date'>{this.props.picture.date}</p>
                        <p className='picture-description'>{this.props.picture.description}</p>
                    </div>
                    }
            </div>
        )
    }
}
