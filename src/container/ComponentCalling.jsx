import React from 'react';
import "./Layout.css";
import {Accordian} from "../components/accordian";
import {ScrollToSection} from '../components/scroll-to-top-and-bottom/scroll-to-section';
import {ModalTest} from "../components/custom-modal-popup/modal-test";
import {ExpandingSectionsOnHover} from "../components/expandingSectionsOnHover/ExpandingSectionsOnHover";
import {ScrollToTopAndBottom} from "../components/scroll-to-top-and-bottom/index";

function ComponentCalling(props){
    return(
            <div className="split right" id='rihtPanel'>
                    {props.str === "Accordian" ?<div className="centered"><Accordian/></div>:null}
                    {props.str === "ScrollToSection" ?<div className="centered"><ScrollToSection/></div>:null}
                    {props.str === "ModalTest" ?<div className="centered"><ModalTest/></div>:null}
                    {props.str === "ExpandingSectionsOnHover" ?<div className="centered"><ExpandingSectionsOnHover/></div>:null}
                    {props.str === "ScrollToTopAndBottom" ?<div className="centered"><ScrollToTopAndBottom/></div>:null}
                </div>
    )
}
export default ComponentCalling;