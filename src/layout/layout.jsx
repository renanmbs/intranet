import "./layout.css";
// import logo from '../image/Monarch3Logo.svg';
// import { useState } from "react";

export let Layout = (props) => {

    if (!props.target) {
        return null;
    }

    return (

        <div className="project-dashboard">

            <h1 className="title">{props.target ? `${props.target} Tools` : 'All Projects'}</h1>

            <div className="project-card-grid">

                {/* Example Card Structure */}
                <div className="project-card">
                    <div className="project-card-header">
                        <h3 className="project-card-title">Z Clip Configurator</h3>
                        {/* <p className="project-card-subtitle">Estimators / Q3 2025</p> */}
                    </div>
                    <div className="project-card-body">
                        <p>This tool is for custom Z Clips. Calculates pricing, Z Clip configuration and drawing </p>
                        <a href="https://www.google.com"  target="_blank" rel="noopener noreferrer"><button className="projbuttons">
                            Open
                        </button></a>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-card-header">
                        <h3 className="project-card-title">Tool 1</h3>
                        {/* <p className="project-card-subtitle"></p> */}
                    </div>
                    <div className="project-card-body">
                        <p>This is an Example</p>
                        <button className="projbuttons">
                            View Details
                        </button>
                    </div>
                </div>

                 <div className="project-card">
                    <div className="project-card-header">
                        <h3 className="project-card-title">Tool 2</h3>
                        <p className="project-card-subtitle">Subtitle (if needed)</p>
                    </div>
                    <div className="project-card-body">
                        <p>This is an Example</p>
                        <button className="projbuttons">
                            View Details
                        </button>
                    </div>
                </div>

                 <div className="project-card">
                    <div className="project-card-header">
                        <h3 className="project-card-title">Tool 3</h3>
                        <p className="project-card-subtitle"></p>
                    </div>
                    <div className="project-card-body">
                        <p>This is an Example</p>
                        <button className="projbuttons">
                            View Details
                        </button>
                    </div>
                </div>

                 <div className="project-card">
                    <div className="project-card-header">
                        <h3 className="project-card-title">Tool 4</h3>
                        <p className="project-card-subtitle"></p>
                    </div>
                    <div className="project-card-body">
                        <p>This is an Example</p>
                        <button className="projbuttons">
                            View Details
                        </button>
                    </div>
                </div>

                 <div className="project-card">
                    <div className="project-card-header">
                        <h3 className="project-card-title">Tool 5</h3>
                        <p className="project-card-subtitle"></p>
                    </div>
                    <div className="project-card-body">
                        <p>This is an Example</p>
                        <button className="projbuttons">
                            View Details
                        </button>
                    </div>
                </div>

                {/* ... more cards ... */}

            </div>

        </div>

    )
}