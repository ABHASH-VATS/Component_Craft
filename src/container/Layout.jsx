import React, {  useState, setState, Component, useEffect } from 'react';
import "./Layout.css"
import ComponentCalling from "./ComponentCalling";
import {Accordian} from "../components/accordian";
import {ScrollToSection} from '../components/scroll-to-top-and-bottom/scroll-to-section';
import {ModalTest} from "../components/custom-modal-popup/modal-test";
import {ExpandingSectionsOnHover} from "../components/expandingSectionsOnHover/ExpandingSectionsOnHover";
import {ScrollToTopAndBottom} from "../components/scroll-to-top-and-bottom/index";
import {SearchAutocomplete} from "../components/search-autocomplete-with-api";
import {TabTest} from "../components/custom-tabs/tab-test";
import {FeatureFlags} from "../components/feature-flag";
import {FeatureFlagGlobalState} from "../components/feature-flag/context";
import {GithubProfileFinder} from "../components/github-profile-finder";
import {ImageSlider} from "../components/image-slider";
import {LightDarkMode} from "../components/light-dark-mode";
import {LoadMoreData} from "../components/load-more-data";
import {QRCodeGenerator} from "../components/qr-code-generator";
import {RandomColor} from "../components/random-color";
import {ScrollIndicator} from "../components/scroll-indicator";
import {StarRating} from "../components/star-rating";
import {TicTacToe} from "../components/tic-tact-toe";
import {TreeView} from "../components/tree-view";
import {UseFetchHookTest} from "../components/use-fetch/test";
import {UseOnclickOutsideTest} from "../components/use-outside-click/test";
import {UseWindowResizeTest} from "../components/use-window-resize/test";

// Functional component =====================================================
function Layout(){
    const [state, setState] = useState("")
    var openAccordian = () => {
        setState("Accordian")
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

    var TabTest = () => {
        setState("TabTest")
    }

    var FeatureFlags = () => {
        setState("FeatureFlags")
    }

    var FeatureFlagGlobalState = () => {
        setState("FeatureFlagGlobalState")
    }

    var GithubProfileFinder = () => {
        setState("GithubProfileFinder")
    }

    var ImageSlider = () => {
        setState("ImageSlider")
    }

    var LightDarkMode = () => {
        setState("LightDarkMode")
    }

    var LoadMoreData = () => {
        setState("LoadMoreData")
    }

    var QRCodeGenerator = () => {
        setState("QRCodeGenerator")
    }

    var RandomColor = () => {
        setState("RandomColor")
    }

    var ScrollIndicator = () => {
        setState("ScrollIndicator")
    }

    var StarRating = () => {
        setState("StarRating")
    }

    var TicTacToe = () => {
        setState("TicTacToe")
    }

    var TreeView = () => {
        setState("TreeView")
    }

    // var menus = () => {
    //     setState("menus")
    // }

    var UseFetchHookTest = () => {
        setState("UseFetchHookTest")
    }

    var UseOnclickOutsideTest = () => {
        setState("UseOnclickOutsideTest")
    }

    var UseWindowResizeTest = () => {
        setState("UseWindowResizeTest")
    }

    return(
        <div>
            <div className="split left">
                <div className="List">
                    <ul style={{listStyleType:"none"}}>
                        <li onClick={openAccordian}><a href="#" className='ListText' id="Accordian">Accordian</a></li>
                        <li onClick={ScrollToSection}><a href="#" className='ListText' id="scrollTopToBottom">Scroll top to bottom</a></li>
                        <li onClick={ModalTest}><a href="#" className='ListText' id="ModalTest">Modal test</a></li>
                        <li onClick={TabTest}><a href="#" className='ListText' id="TabTest">Tab test</a></li>
                        <li onClick={ExpandingSectionsOnHover}><a href="#" className='ListText' id="ExpandingSectionsOnHover">Expanding sections on hover</a></li>
                        <li onClick={ScrollToTopAndBottom}><a href="#" className='ListText' id="ScrollToTopAndBottom">Scroll to top and bottom</a></li>
                        <li onClick={SearchAutocomplete}><a href="#" className='ListText' id="SearchAutocomplete">Search auto complete</a></li>
                        <li onClick={FeatureFlags}><a href="#" className='ListText' id="FeatureFlags">Feature flags</a></li>
                        <li onClick={FeatureFlagGlobalState}><a href="#" className='ListText' id="FeatureFlagGlobalState">Feature flag global state</a></li>
                        <li onClick={GithubProfileFinder}><a href="#" className='ListText' id="GithubProfileFinder">Github profile finder</a></li>
                        <li onClick={ImageSlider}><a href="#" className='ListText' id="ImageSlider">Image slider</a></li>
                        <li onClick={LightDarkMode}><a href="#" className='ListText' id="LightDarkMode">Light dark mode</a></li>
                        <li onClick={LoadMoreData}><a href="#" className='ListText' id="LoadMoreData">Load more data</a></li>
                        <li onClick={QRCodeGenerator}><a href="#" className='ListText' id="QRCodeGenerator">QRCode generator</a></li>
                        <li onClick={RandomColor}><a href="#" className='ListText' id="RandomColor">Random color</a></li>
                        <li onClick={ScrollIndicator}><a href="#" className='ListText' id="ScrollIndicator">Scroll indicator</a></li>
                        <li onClick={TicTacToe}><a href="#" className='ListText' id="TicTacToe">TicTacToe</a></li>
                        <li onClick={TreeView}><a href="#" className='ListText' id="TreeView">Tree view</a></li>
                        {/* <li onClick={menus}><a href="#" className='ListText' id="menus">menus</a></li> */}
                        <li onClick={StarRating}><a href="#" className='ListText' id="StarRating">Star rating</a></li>
                        <li onClick={UseFetchHookTest}><a href="#" className='ListText' id="UseFetchHookTest">Use fetch hook test</a></li>
                        <li onClick={UseOnclickOutsideTest}><a href="#" className='ListText' id="UseOnclickOutsideTest">Use onclick outside test</a></li>
                        <li onClick={UseWindowResizeTest}><a href="#" className='ListText' id="UseWindowResizeTest">Use window resize test</a></li>
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