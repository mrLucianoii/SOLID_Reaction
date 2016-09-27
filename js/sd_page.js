
fullpage.initialize('#fullpage', {
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		menu: '#menu',
		css3:true,
        autoScrolling:false
	});

    var el = document.getElementsByClassName("scene-1-btn"),
            targEl =  [];

    var stg1 = $('.stage'),
        stg2 = $('.stage');


    targEl.push($('.stage'));
    targEl.push($('#page'));
    console.log( targEl[0] );

function gridLaunch(e){

    console.log(e.currentTarget.dataset.service);

    var $target = e.currentTarget.dataset.service;

    $("#fullpage").toggleClass("off");
    if ( targEl[1].hasClass("gd") ){
            console.log("Condition Test");
            targEl[1].removeClass('gd');
            
            $("#fullpage").removeClass('off');

    }else {
            console.log("Condition Test");
            targEl[1].addClass('gd');
            $("#fullpage").addClass('off');
    }
}

function toggleSD(e){
    console.log(e.currentTarget.dataset.service);
    console.log( targEl[0] );

    var $target = e.currentTarget.dataset.service;
            
       if ( targEl[0].hasClass("to3") ){
            console.log("Condition 1");
            targEl[0].removeClass('to3');
            targEl[0].removeClass('to2');
            

        }else if ( targEl[0].hasClass("to2") ) {
            console.log("Condition 2");
            targEl[0].addClass('to3');

        }else {            
            console.log("Condition 3");
            targEl[0].addClass('to2');
            
        } 
   
        
    return true;
}