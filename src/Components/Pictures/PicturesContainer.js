import React, { Component } from 'react'
import PictureCard from './PictureCard'
import './picture.css'

export default class PicturesContainer extends Component {

    state = {
        pictures: []
    }

    componentDidMount() {
        fetch('https://personal-website-taylor-stein.herokuapp.com/pictures')
            .then(response => response.json())
            .then(pictures => this.setState({pictures: pictures}))
    }

    renderPictures = () => {
        return this.state.pictures.map(picture => {
            return <PictureCard key={picture.id} picture={picture} />
        })
    }


    render() {
        return (
            <div className='picture-container'>
                {this.renderPictures()}
            </div>
        )
    }
}