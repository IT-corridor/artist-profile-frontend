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
        let artist_header_content = this.props.artist_header_content || ""

        const style = {
          fontSize: '17.5px',
          lineHeight: '24px',
          letterSpacing: '-0.005em',
          color: '#7C7C7C',
          marginBottom: '60px',
          fontWeight: 'normal',
          paddingLeft: '30px',
          paddingRight: '30px'
        }

        return (
                       <section className="fade-in-section middle-section parallax-container parallax-container-parent" id="2_about">
                           <div className="artist-header-content" style={style}>
                            {Parser(artist_header_content)}
                           </div>
                           <div className="row artist-row">
                               <div className="col-lg-6 col-md-6 col-xs-4">
                                   <img src= {artist_image} className="author-img" alt="author" />

                                   <p className="photo-copyright">Robert Bissell</p>
                               </div>
                               <div className="col-lg-6 col-md-6 col-xs-8 description-right">
                                     {Parser(artist_content)}
                               </div>
                           </div>
                       </section>
        )
    }
}

export default Artist