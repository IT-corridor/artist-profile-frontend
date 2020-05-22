import React, {Component} from "react";
import axios from 'axios'
import Parser from 'html-react-parser';
import { Checkbox } from 'pretty-checkbox';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import alertify from 'alertifyjs';
import { Parallax } from 'react-scroll-parallax';
import $ from 'jquery'
import Artworks from "./Artworks";
import Artist from "./Artist";
import Form from "./Form";
import Menu from "./Menu";
import {url_back} from './Consts'
import Main from "./Main";
import '../css/bootstrap.min.css'
import '../css/reset.css'
import '../css/animate.min.css'
import '../css/font-awesome.min.css'
import '../css/style.css'
import '../css/alertify.min.css'
import '../css/main.css'
import Footer from "./Footer";

class Home extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            headerImage: '',
            artwork_content: '',
            artworks: [],
            artist_image: '',
            artist_content: '',
            email_content: '',
        }
    }

        componentDidMount()
    {
        axios.get(url_back+'/home/').then(response => {
            let data = response.data.data
            this.setState({
                    headerImage: data.header_image,
                    artwork_content: data.artwork_content,
                    artworks: data.artworks,
                    artist_image: data.artist_image,
                    artist_content:  data.artist_content,
                    email_content:   data.email_content,
                })
            }).catch(error=>{
        })

        $(window).scroll(function () {
            $('.parallax-container').each(function (i) {
                var scrollTop = $(window).scrollTop() + 0;
                var elementOffset = $(this).offset().top;
                if (scrollTop > elementOffset) {
                    $(this).css("opacity", 1 - (scrollTop - elementOffset) / 786);
                }
            });
        });
        if ($(window).width() > 767) {
            $('.page-section').addClass('parallax-container');
        } else {
            $('.page-section').removeClass('parallax-container');
        }


        $('a').bind('click', function (e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 600, function () {
                //location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
        });


         var doAnimations = function () {

         var offset = $(window).scrollTop() + $(window).height(),
                    $animatables = $('.animatable');

         if ($animatables.length == 0) {
             $(window).off('scroll', doAnimations);
         }

         $animatables.each(function (i) {
             var $animatable = $(this);
             if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                 $animatable.removeClass('animatable').addClass('animated');
             }
         });

        };

        $(window).on('scroll', doAnimations);
        $(window).trigger('scroll');
    }

    render()
    {
        const {headerImage,artwork_content, artworks, artist_image, artist_content, email_content} = this.state

        return (
            <div className ="wrapper home">
                    <Main />
                    <Menu ></Menu>
                    <section className="main-banner">
                        <div className="parallax-container">
                            <img src= {headerImage} className="cover-bg" alt="background"/>
                        </div>
                        <h2 className="generic-title"><img src="logo.svg" className="logo"/></h2>

                        <nav role="navigation" className="top-menu">
                            <div id="menuToggle">
                                <img src="images/rblogo-white.svg" className="mobile-logo" alt="logo"/>

                                <div className="dotes">
                                    <i className="fa fa-circle"></i>
                                    <i className="fa fa-circle"></i>
                                    <i className="fa fa-circle"></i>
                                </div>
                                <input type="checkbox"/>
                                <ul id="menu-panel">
                                    <a className="navigation__link active" href="#1_artwork">ARTWORK</a>
                                    <a className="navigation__link" href="#2_about">ABOUT</a>
                                    <a className="navigation__link" href="#3_connect">CONNECT</a>
                                </ul>
                            </div>
                            <button type="button" class="close" data-dismiss="menuToggle" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </nav>

                    </section>
                    <section className="container grid parallax-container page-section hero" id="1_artwork">
                           <div className="heading">
                               {Parser(artwork_content)}
                           </div>
                            <Artworks artworks={artworks} />
                       </section>

                       <Artist artist_image={artist_image} artist_content={artist_content} />


                       <Form email_content={email_content} />
                    <Footer />
          </div>
        )
    }
}

export default Home