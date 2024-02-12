import React from 'react';
import "./Layout.css";
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
// import {menus} from "../components/tree-view/data";
import {UseFetchHookTest} from "../components/use-fetch/test";
import {UseOnclickOutsideTest} from "../components/use-outside-click/test";
import {UseWindowResizeTest} from "../components/use-window-resize/test";

function ComponentCalling(props){
    return(
            <div className="split right" id='rihtPanel'>
                    {props.str === "Accordian" ?<div className="centered"><Accordian/></div>:null}
                    {props.str === "ScrollToSection" ?<div className="centered"><ScrollToSection/></div>:null}
                    {props.str === "ModalTest" ?<div className="centered"><ModalTest/></div>:null}
                    {props.str === "ExpandingSectionsOnHover" ?<div className="centered"><ExpandingSectionsOnHover/></div>:null}
                    {props.str === "ScrollToTopAndBottom" ?<div className="centered"><ScrollToTopAndBottom/></div>:null}
                    {props.str === "SearchAutocomplete" ?<div className="centered"><SearchAutocomplete/></div>:null}
                    {props.str === "TabTest" ?<div className="centered"><TabTest/></div>:null}
                    {props.str === "FeatureFlags" ?<div className="centered"><FeatureFlags/></div>:null}
                    {props.str === "FeatureFlagGlobalState" ?<div className="centered"><FeatureFlagGlobalState/></div>:null}
                    {props.str === "GithubProfileFinder" ?<div className="centered"><GithubProfileFinder/></div>:null}
                    {props.str === "ImageSlider" ?<div className="centered"><ImageSlider/></div>:null}
                    {props.str === "LightDarkMode" ?<div className="centered"><LightDarkMode/></div>:null}
                    {props.str === "LoadMoreData" ?<div className="centered"><LoadMoreData/></div>:null}
                    {props.str === "QRCodeGenerator" ?<div className="centered"><QRCodeGenerator/></div>:null}
                    {props.str === "RandomColor" ?<div className="centered"><RandomColor/></div>:null}
                    {props.str === "ScrollIndicator" ?<div className="centered"><ScrollIndicator/></div>:null}
                    {props.str === "StarRating" ?<div className="centered"><StarRating/></div>:null}
                    {props.str === "TicTacToe" ?<div className="centered"><TicTacToe/></div>:null}
                    {props.str === "TreeView" ?<div className="centered"><TreeView/></div>:null}
                    {/* {props.str === "menus" ?<div className="centered"><menus/></div>:null} */}
                    {props.str === "UseFetchHookTest" ?<div className="centered"><UseFetchHookTest/></div>:null}
                    {props.str === "UseOnclickOutsideTest" ?<div className="centered"><UseOnclickOutsideTest/></div>:null}
                    {props.str === "UseWindowResizeTest" ?<div className="centered"><UseWindowResizeTest/></div>:null}
                </div>
    )
}
export default ComponentCalling;