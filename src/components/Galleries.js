import React, {Component} from "react";
import Parser from 'html-react-parser';

class Galleries extends Component
{
    constructor(props) {
        super(props);
    }

    render()
    {
        let galleries = this.props.galleries

        return (
                <div className="carousel" id="carousel-page">
                        {
                                            galleries.map(gallery =>

                                    <div key={gallery.id}>
                                        <img className="d-block" src={gallery.image} alt=" First slide"/>

                                        <div className="art-details">
                                            <h2 className="art-name"><span>{gallery.name}</span></h2>

                                                {Parser(gallery.content)}
                                        </div>
                                    </div>
                                )

                            }

                </div>
           
        )
    }


}

export default Galleries