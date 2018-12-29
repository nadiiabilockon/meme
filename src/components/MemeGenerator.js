import React, {Component} from 'react';


class MemeGenerator extends Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImage: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({
                allMemeImage:memes
            })
        })
    }

    handleChange(e){
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const randomNumber = Math.floor(Math.random()* this.state.allMemeImage.length)
        const randomMemeImg = this.state.allMemeImage[randomNumber].url
        this.setState({
            randomImg:randomMemeImg
        })
    }


    render () {    
        return(
            <div className="container">
                <form className="meme-form" onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            name="topText"
                            placeholder="Top text"
                            value={this.state.topText}
                            onChange={this.handleChange}
                        />
                        <input 
                            type="text"
                            name="bottomText"
                            placeholder="Bottom text"
                            value={this.state.bottomText}
                            onChange={this.handleChange}
                        />
                        <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt=" "/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator