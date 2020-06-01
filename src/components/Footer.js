import React, {Component} from "react";
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div style={{ textAlign: "center", padding: "50px 0" }}>
        		<div style={{ marginBottom: 5 }}>
        			<a target="_blank" href="https://www.instagram.com/rbissell/?hl=en" style={{ marginRight: 5 }} alt="">
        				<img src={instagram} alt="instagram" style={{ width: 40, height: 40, boxShadow: "none" }} />
        			</a>
        			<a target="_blank" href="https://www.facebook.com/robertbissellart/?ref=py_c" alt="">
        				<img src={facebook} alt="facebook" style={{ width: 40, height: 40, boxShadow: "none" }} />
        			</a>
        		</div>
           		<p className="container copyright"> Copyright © 2020 Robert Bissell.<span>  All rights reserved.</span></p>
           	</div>
        )
    }
}

export default Footer