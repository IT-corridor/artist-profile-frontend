import React, {Component} from "react";
import { useRouteMatch } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Main from "./Main";
import '../css/bootstrap.min.css'
import '../css/animate.min.css'
import '../css/slick.css'
import '../css/style.css'
import '../css/font-awesome.min.css'
import '../css/alertify.min.css'
import '../css/main.css'
import '../js/slick.js'
import axios from "axios";
import {url_back} from "./Consts";
import Artworks from "./Artworks";
import Galleries from "./Galleries";
import Footer from "./Footer";
import Parser from 'html-react-parser';

class Gallery extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            galleries: [],
            gallery_text_name: '',
            gallery_text_desc: ''
        }
    }

    render()
    {
        this.id = this.props.match.params.id
        if (!this.id) {
             throw new Error();
        }

        const {galleries, gallery_text_name, gallery_text_desc} = this.state

        return (
            <section className="gallery-banner">
                 <header>
                     <nav role="navigation" className="top-menu">
                         <div id="menuToggle">
                             <img src="/images/rblogo-white.svg" className="mobile-logo" alt="logo"/>

                             <div className="dotes">
                                 <i className="fa fa-circle"></i>
                                 <i className="fa fa-circle"></i>
                                 <i className="fa fa-circle"></i>
                             </div>
                             <input type="checkbox"/>
                             <ul id="menu-panel">
                                 <a className="navigation__link active" href="/#1_artwork">ARTWORK</a>
                                 <a className="navigation__link" href="/#2_about">ABOUT</a>
                                 <a className="navigation__link" href="/#3_connect">CONNECT</a>
                             </ul>
                         </div>
                         <button type="button" className="close" data-dismiss="menuToggle" aria-label="Close">
                             <span aria-hidden="true">×</span>
                         </button>
                     </nav>
                 </header>
                 <div className="container">
                     <div className="wrapper">
                         <a className="full_screen_modal_close">
                             <i className="fa fa-times fa-lg"></i>
                         </a>
                         <Galleries galleries={galleries} />
                     </div>
                 </div>
                 <div className={`content-description fixed-bar animated-quick fadeInDown animated gallery-content ${gallery_text_name}`}>
                     <h2> {gallery_text_name}</h2>
                     {Parser(gallery_text_desc)}
                 </div>
                <Footer />
                <Main />
            </section>

        )
    }

    componentDidMount()
    {
        axios.get(url_back+'/util/gallery/'+this.id).then(response => {
            let data = response.data.data
            this.setState({
                    galleries: data.galleries,
                    gallery_text_name: data.gallery_text_name,
                    gallery_text_desc: data.gallery_text_desc,
                })
            }).catch(error=>{
        })
    }

}

export default Gallery