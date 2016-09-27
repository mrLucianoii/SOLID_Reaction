'use strict';

// Simple pure-React component so we don't have to remember
// Bootstrap's classes
var BootstrapButton = React.createClass({
  render: function() {
    return (
      <a {...this.props}
        href="javascript:;"
        role="button"
        className={(this.props.className || '') + ' btn'} />
    );
  }
});

var BootstrapModal = React.createClass({
  // The following two methods are the only places we need to
  // integrate Bootstrap or jQuery with the components lifecycle methods.
  componentDidMount: function() {
    // When the component is added, turn it into a modal
    console.log(this.refs.root);
      $(this.refs.root).modal({backdrop: 'static', keyboard: false, show: false});
  },
  componentWillUnmount: function() {
    $(this.refs.root).off('hidden', this.handleHidden);
  },
  close: function() {
    $(this.refs.root).modal('hide');
  },
  open: function() {
    $(this.refs.root).modal('show');
  },
  render: function() {
    var confirmButton = null;
    var cancelButton = null;
      
    if (this.props.confirm) {

      confirmButton = (
        <BootstrapButton
          onClick={this.handleConfirm}
          className="btn-primary">
          {this.props.confirm}
        </BootstrapButton>
      );
    }
    if (this.props.cancel) {
      cancelButton = (
        <BootstrapButton onClick={this.handleCancel} className="btn-default">
          {this.props.cancel}
        </BootstrapButton>
      );
    }

    return (
      <div className="modal fade" ref="root">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                onClick={this.handleCancel}>
                &times;
              </button>
              <h3>{this.props.title}</h3>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
            <div className="modal-footer">
              {cancelButton}
              {confirmButton}
            </div>
          </div>
        </div>
      </div>
    );
  },
  handleCancel: function() {
    if (this.props.onCancel) {
        console.log(this);
      this.props.onCancel();
    }
  },
  handleConfirm: function() {
    if (this.props.onConfirm) {
      this.props.onConfirm();
    }
  }
});

var Atom = React.createClass({
   render: function(){
       return(
                <div className="sd_atom">
                  <div className="inner one"></div>
                  <div className="inner two"></div>
                  <div className="inner three"></div>
                  <div className="nucleus"></div>
                </div>

       );
       
   }
    
});

var Slider = React.createClass({
   render: function(){
       return(
            <div className="slide" id="slide1">
                <div className="container text-center col-sm-12">
                    <img src="../img/logo/sd_table.svg" id="sd_table"></img>
                <Atom/>
                    <h1>Coming Soon.</h1>
               </div>
           </div>
       );
   } 
});



var Slider2 = React.createClass({
   render: function(){
       return(
            <div className="slide" id="slide1">
                <h1>hi there</h1>
                <p> hahahahah </p>
            </div>
       );
   } 
});


var Section = React.createClass({
   render: function(){
       return (
            <div className="section" id="section0">
               <Slider/>
           </div>
       );
   } 
});
var Section2 = React.createClass({
   render: function(){
       return (
            <div className="section" id="section1">
               <Slider2/>
               <Slider/>
           </div>
       );
   } 
});

var Page = React.createClass({
  handleCancel: function() {
    if (confirm('Are you sure you want to cancel?')) {
      this.refs.modal.close();
    }
  },
  componentDidMount: function() {
    $('#fullpage').fullpage({
				anchors: ['welcome'],
                css3: true,
                controlArrows: false,
                verticalCentered: true
    });   
  },    
  render: function() {
    var modal = null;
    modal = (
      <BootstrapModal
        ref="modal"
        confirm="OK"
        cancel="Cancel"
        onCancel={this.handleCancel}
        onConfirm={this.closeModal}
        title="Hello, Bootstrap!">
          This is a React component powered by jQuery and Bootstrap!
      </BootstrapModal>
    );
      
    return (
        <div id="fullpage">
            
            <Section/>

        </div>// end of Example
    );
      
  },
  openModal: function() {
      console.log( this );
    this.refs.modal.open();
  },
  closeModal: function() {
    this.refs.modal.close();
  }
});



ReactDOM.render(<Page />, document.getElementById('SOLID_REACTION'));
// End of Bootstrap Modal Example

      
   
