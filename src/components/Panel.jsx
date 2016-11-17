import React from 'react';

const stylelist = {
    marginTop:'5px'
};

const Panel = React.createClass({
    getInitialState() {
        return {
            panellist: [],
            text: ''
        }
    },
    handleChange(e) {
        this.setState({text: e.target.value});
    },
    handleAdd () {
        let currentitems = this.state.panellist;
        if (this.state.text)
        {
            currentitems.push(this.state.text);
            this.setState({panellist: currentitems});
            this.refs.theinput.value = '';
            this.setState({text: ''});
        }
    },
    render() {
        let panelclass = 'panel panel-'+this.props.panelstyle;
        return (
            <div className={panelclass}>
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.paneltitle}</h3>
                </div>
                <div className="panel-body">
                    <div className="input-group">
                        <input ref="theinput" type="text" className="form-control" placeholder="Add..." onChange={this.handleChange}/>
                        <span className="input-group-btn">
                            <button onClick={this.handleAdd} className="btn btn-default" type="button">Add</button></span>
                    </div>
                    <ul style={stylelist} className="list-group">{this.state.panellist.map((number,id) =>
                        <li key={id} className="list-group-item">{number}</li>)}
                    </ul>
                </div>
            </div>
        )
    }

});

export default Panel;