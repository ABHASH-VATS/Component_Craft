import React from 'react';
import './ExpandingSectionsOnHover.css';
export function ExpandingSectionsOnHover(){
    return(
        <div class="container">
            <div id="marketing" class="section">
                <div class="content">
                <h1>Marketing</h1>
                </div>
                <div class="overlay"></div>
            </div>
            <div id="technology" class="section">
                <div class="content">
                <h1>Technology</h1>
                </div>
                <div class="overlay"></div>
            </div>
            <div id="advertising" class="section">
                <div class="content">
                <h1>Advertising</h1>
                </div>
                <div class="overlay"></div>
            </div>
        </div>
    );
}
