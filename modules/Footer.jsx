"use strict";


var Header = React.createClass({
	render: {
		return <footer>
    <div class="container">
        <ul>
            <li class="twenty"><img class="icon" src="img/icon/tweetSD.svg"></li>
            <li class="twenty"><img class="icon" src="img/icon/linkedSD.svg"></li>
            <li class="twenty" id="masterG2"><img onClick="gridLaunch(event)" data-service="masterG" src="img/icon/master-G.svg"></li>
            <li class="twenty"><img class="icon" src="img/icon/facebookSD.svg"></li>
            <li class="twenty"><img class="icon" src="img/icon/vemeoSD.svg"></li>
        </ul>
    </div>
    
</footer>

  <a><img onClick="gridLaunch(event)" data-service="masterG" id="masterG" src="img/icon/master-G.svg"/></a>;
		
	}

});

ReactDOM.render(<Header />, document.getElementById('Header'));
