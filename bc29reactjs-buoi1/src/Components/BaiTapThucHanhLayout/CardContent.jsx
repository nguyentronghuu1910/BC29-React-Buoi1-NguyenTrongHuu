import React, { Component } from 'react';

export default class CardContent extends Component {
    render() {
        return (
            <div className="card border-0 col-xxl-3 p-3">
                <img className="card-img-top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.JAwW5dQY13cxboT_ai_47QHaE8%26pid%3DApi&f=1" alt />
                <div className="card-body ">
                    <h4 className="card-title"> Card Title</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ducimus unde a?</p>
                </div>
                <div className="card-footer bg-light mt-4">
                    <button className="btn btn-outline-primary">Find Out More!</button>
                </div>
            </div>
        );
    }
}
