import React, {  useState, setState, Component, useEffect } from 'react';
import "./Layout.css"
import ComponentCalling from "./ComponentCalling";
import {Accordian} from "../components/accordian";
import {ScrollToSection} from '../components/scroll-to-top-and-bottom/scroll-to-section';
import {ModalTest} from "../components/custom-modal-popup/modal-test";
import {ExpandingSectionsOnHover} from "../components/expandingSectionsOnHover/ExpandingSectionsOnHover";
import {ScrollToTopAndBottom} from "../components/scroll-to-top-and-bottom/index";
import {SearchAutocomplete} from "../components/search-autocomplete-with-api";

// Functional component =====================================================
function Layout(){
    const [state, setState] = useState("")
    var openAccordian = () => {
        setState("Accordian")
        document.getElementById("Accordian").style.color = "blue"
    }
    var ScrollToSection = () => {
        setState("ScrollToSection")
    }
    var ModalTest = () => {
        setState("ModalTest")
    }
    var ExpandingSectionsOnHover = () => {
        setState("ExpandingSectionsOnHover")
    }
    var ScrollToTopAndBottom = () => {
        setState("ScrollToTopAndBottom")
    }

    var SearchAutocomplete = () => {
        setState("SearchAutocomplete")
    }
    return(
        <div>
            <div className="split left">
                <div className="List">
                    <ul style={{listStyleType:"none"}}>
                        <li onClick={openAccordian}><a href="#" className='ListText' id="Accordian">Accordian</a></li>
                        <li onClick={ScrollToSection}><a href="#" className='ListText' id="scrollTopToBottom">Scroll top to bottom</a></li>
                        <li onClick={ModalTest}><a href="#" className='ListText' id="ModalTest">Modal test</a></li>
                        <li onClick={ExpandingSectionsOnHover}><a href="#" className='ListText' id="ExpandingSectionsOnHover">Expanding sections on hover</a></li>
                        <li onClick={ScrollToTopAndBottom}><a href="#" className='ListText' id="ScrollToTopAndBottom">Scroll to top and bottom</a></li>
                        <li onClick={SearchAutocomplete}><a href="#" className='ListText' id="SearchAutocomplete">Search auto complete</a></li>
                    </ul>
                </div>
            </div>
            <ComponentCalling str={state}/>
        </div>
    )
}

// Class component=============================================================
// class Layout extends Component{
//     constructor() {
//         super();
//         this.state = {
//             str:"",
//         }
//     }
//     openAccordian = () => {
//         this.setState({str:"Accordian"})
//     }
//     ScrollToSection = () => {
//         this.setState({str:"ScrollToSection"})
//         console.log(this.state.str)
//     }
//     ModalTest = () => {
//         this.setState({str:"ModalTest"})
//         console.log(this.state.str)
//     }
//     render(){
//         return(
//             <React.Fragment>
//                 <div className="split left">
//                     <div className="List">
//                         <ul>
//                             <li onClick={()=>this.openAccordian()}>Accordian</li>
//                             <li onClick={()=>this.ScrollToSection()}>scrollTopToBottom</li>
//                             <li onClick={()=>this.ModalTest()}>ModalTest</li>
//                         </ul>
//                     </div>
//                 </div>

//                 <div className="split right" id='rihtPanel'>
//                     <div className="centered">
//                         {this.state.str === "Accordian" && <Accordian/>}
//                         {this.state.str === "ScrollToSection" && <ScrollToSection/>}
//                         {this.state.str === "ModalTest" && <ModalTest/>}
//                     </div>
//                 </div>
//             </React.Fragment>
//         );
//     }
        
// }
export default Layout;