import React from 'react';

const stylelist = {
    marginTop:'5px'
};

export default class Panel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            panellist: [],
            text: ''
        };
    }
    render() {
        var panelclass = 'panel panel-'+this.props.panelstyle;
        return (
            <div className={panelclass}>
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.paneltitle}</h3>
                </div>
                <div className="panel-body">
                    <div className="input-group">
                        <input ref="theinput" type="text" className="form-control" placeholder="Add..." onChange={this.handleChange.bind(this)}/>
                        <span className="input-group-btn">
                            <button onClick={this.handleAdd.bind(this)} className="btn btn-default" type="button">Add</button></span>
                    </div>
                    <ul style={stylelist} className="list-group">{this.state.panellist.map((number,id) =>
                        <li key={id} className="list-group-item">{number}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
    handleChange(e) {
    this.setState({text: e.target.value});
    }

    handleAdd () {
    var currentitems = this.state.panellist;
    if (this.state.text)
    {
        currentitems.push(this.state.text);
        this.setState({panellist: currentitems});
        this.refs.theinput.value = '';
        this.setState({text: ''});
    }
}
}
/*


    getInitialState: function () {
        return {
            panellist: [],
            text: ''
        }
    },
    handleChange: function (e) {
        this.setState({text: e.target.value})
    },

    handleAdd: function () {
        var currentitems = this.state.panellist;
        if (this.state.text)
        {
            currentitems.push(this.state.text);
            this.setState({panellist: currentitems});
            this.refs.theinput.value = '';
            this.setState({text: ''});
        }

    },
    render: function () {
        var panelclass = 'panel panel-'+this.props.panelstyle;
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
*/