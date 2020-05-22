import React, {Component} from "react";
import Parser from 'html-react-parser';

class Artist extends Component
{
    constructor(props) {
        super(props);
    }

    render()
    {
        let artist_image = this.props.artist_image
        let artist_content = this.props.artist_content

        return (
                       <section className="middle-section parallax-container" id="2_about">
                           <div className="row">
                               <div className="col-lg-5 col-md-4">
                                   <img src= {artist_image} className="author-img" alt="author" />

                                   <p className="photo-copyright">© Photo by <a href="#">Michel Lunardelli</a></p>
                               </div>
                               <div className="col-lg-7 col-md-8 description-right">
                                     {Parser(artist_content)}
                               </div>
                           </div>
                       </section>
        )
    }
}

export default Artist