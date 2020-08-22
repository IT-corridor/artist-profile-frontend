import React from 'react'

const NotFound = () => {
	return (
		<div className="container">		
			<h2 className="text-danger text-center header-404">404</h2>
    		<div class="msg text-center">
    			Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
    			<p>Let's go <a href="/">home</a> and try from there.</p>
			</div>
		</div>
	)
}


export default NotFound