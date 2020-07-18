import React, {Component} from "react";

class Artworks extends Component
{
    constructor(props) {
        super(props);
    }

    render()
    {
        let artworks = this.props.artworks

        return (
            <div className="grid-inner fade-in-section">
                {
                    artworks.map(artwork =>  <div key={artwork.id}>
                        <a href={`/gallery/${artwork.name.toLowerCase()}`}>
                            <img src={artwork.image} className="img-fluid" alt="artwork" /> <p>{artwork.name} </p>
                        </a>
                   </div>)

                }
            </div>
        )
    }
}

export default Artworks