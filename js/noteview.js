'use strict';
import { Mindmodel } from "./notemodel.js";
export const title = document.querySelector('#title');
export const date = document.querySelector('#date');
export const input1 = document.querySelector('#input1');
const logo = document.querySelector('#logo');
export const newdoc = document.querySelector('#newdoc');
const section1 = document.querySelector('#section1');
export const section2 = document.querySelector('#section2');
export const textarea = document.querySelector('#textarea');
export const textareavalue = document.querySelector('textarea');
export const savecamcel = document.querySelector('#savecancel');
export const save = document.querySelector('#save');
export const savecamcel2 = document.querySelector('#savecancel2');
export const save2 = document.querySelector('#save2');
export const cancel = document.querySelector('#cancel');
export const cancel2 = document.querySelector('#cancel2');
export const clear = document.querySelector('#clear');

class Mindpage{
    constructor() {
        this._section1();
        this._onclicknewdoc();
    };
//////////////////////////////////
//creation of delay to allow nav bar to load before section
    _section1(){
        setTimeout(() => {
            section1.style.opacity = '100%';
            newdoc.style.opacity = '100%';
            section2.style.opacity = '100%'
        }, 2000);
    };

    /////////////////////////////////////
    //activation of the text area on clicking the + at the bottom of the page
    _onclicknewdoc(){
        newdoc.addEventListener('click', function() {
            textareavalue.value = '';
            input1.value = '';
            textarea.style.visibility = 'visible';
            newdoc.style.visibility = 'hidden';
            savecamcel.style.visibility = 'visible'
            section2.innerHTML = '';
            clear.style.opacity = '0'
        })
    }
};
const mindpage = new Mindpage();
const mindmodel = new Mindmodel();