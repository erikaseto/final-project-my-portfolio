
import React from "react";
const imageData = "./models/images.json";


class ImageList extends React.Component {
    constructor(props){
        super(props);
        this.state = { imageList: [] }
    }

    componentDidMount(){
        fetch(imageData)
        .then(res => res.json())
        .then( data => this.setState({imageList : data }))
        .catch( err => console.log(err))
    }

    render(){
        return (
            <div className="image-list">
                
                 {/*List rendering */}
                {this.state.imageList.map( image => (
                    <div key={image.id} className="image-list2">
                        <img src={image.image} alt="photos" />
                        <p>{image.id}. {image.description}</p>
                   </div>
                   ))}
            </div>
        )
    }

}

export default ImageList;
