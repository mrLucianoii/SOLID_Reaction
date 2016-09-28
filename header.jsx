'use strict';

var Header = React.createClass({
	render: {
		return 
		<navbar class="navbarSD">
			<div class="container">
        	<img class="logo" src="">
			<ul>
            	<li class="visBtns">SERVICES</li>
           		 <li class="visBtns">COMPANY</li>
           		 <li class="visBtns">BLOG</li>
            	<li class="visBtns">CONTACT</li>
        	    <li><a><img class="hamburger" src="img/icon/hamburgerSD.svg"></a></li>
			</ul>
			</div>
		</navbar>;
	}
})
ReactDOM.render(<Header />, document.getElementById('Header'));
