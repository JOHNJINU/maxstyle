import {Component} from 'react';
import axios from 'axios';
import '../css/Offers.css';

class Offers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrayOfImages: []
        };
    }

    getoffersList(){
        console.log("inside get offers");
        axios.get("http://192.168.64.2/admin/getLatestOffers.php")
        .then( res => {
            this.setState({arrayOfImages:res.data})
        })
    }

    componentDidMount(){
        console.log("inside component did mount");
        this.getoffersList();
    }

    render(){
        return(
            <div>
                
                { this.state.arrayOfImages.map((item) => (
                     <div className="offerContainer">
                        <h3> {item.title} </h3> 
                        <p> {item.description} </p> 
                    </div>
                         ))
                   }
            </div>
        )
    }

}

export default Offers;