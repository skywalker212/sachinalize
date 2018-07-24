import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

export default class Navbar extends React.Component{

    getStatus = (e)=>{
        $.get("/status", (data) => {
            $(".modal-body pre").html(JSON.stringify(data, undefined, 2));
        });
    }

    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Sachinalize</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/analytics">Analytics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Comparison</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Conclusion</Link>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-primary float-right" id="esstatus" onClick={this.getStatus} data-toggle="modal" data-target="#exampleModal">Get Server Status</button>
                </nav>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">ElasticSearch Server Status</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <pre>please wait...</pre>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}