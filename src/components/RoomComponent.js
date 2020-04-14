import React, {Component} from 'react';


class RoomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleEnterRoom = this.handleEnterRoom.bind(this);
    }

    componentDidMount() {
        this.getImage();
    }

    handleClick(event){
        this.props.nextRoom();
    }

    handleEnterRoom(event){
        this.props.enterRoom();
    }

    getImage(){
        if(this.props.selectedRoom.name === "The spooky old castle"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/castle.jpg"})
        }
        if(this.props.selectedRoom.name === "Another Planet!?!?!?"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/planet.jpg"})
        }
        if(this.props.selectedRoom.name === "An old pirate ship"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/pirate.jpg"})
        }
        if(this.props.selectedRoom.name === "A creepy, dark, dank basement"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/basement.jpeg"})
        }
        if(this.props.selectedRoom.name === "An old timey western saloon"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/saloon.jpg"})
        }
        if(this.props.selectedRoom.name === "A modern, open plan corporate office"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/office.jpg"})
        }
        if(this.props.selectedRoom.name === "Somewhere under the sea!"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/sea.png"})
        }
        if(this.props.selectedRoom.name === "A haunted forest!"){
            this.setState({img: process.env.PUBLIC_URL +"images/rooms/forest.jpg"})
        }
        if(this.props.selectedRoom.name === "The top of a tall mountain!"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/mountain.jpg"})
        }
        if(this.props.selectedRoom.name === "2000 years into the future!"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/futuristic.png"})
        }
    }


    render(){
        if(this.props.result === "" && this.props.hasEnteredRoom === false){
            return(
                <div>
                    <h1 className="roomHeading">{this.props.selectedRoom.name}</h1>
                    <img src={this.state.img} alt={this.props.selectedRoom.name} height="300px" width="300px" className="roomImages" />
                    <p className="roomDescription">{this.props.selectedRoom.description}</p>
                    <button type="submit" onClick={this.handleEnterRoom}>Enter Room</button>
                </div>
            )
        }
        if(this.props.result === "right" || this.props.result === "wrong"){
            return(
                <div>
                    <h2 className="compassText">Choose your exit</h2>
                    {/*<button onClick={this.handleClick}>North</button>*/}
                    {/*<button onClick={this.handleClick}>South</button>*/}
                    {/*<button onClick={this.handleClick}>East</button>*/}
                    {/*<button onClick={this.handleClick}>West</button>*/}
                    <button onClick={this.handleClick} className="compass"><img src={process.env.PUBLIC_URL +"/images/rooms/compass.png"} height="300px" width="300px" alt="compass" /></button>
                </div>
            )
        }
        if(this.props.hasEnteredRoom === true){
            return null;
        }
    }
}

export default RoomComponent;