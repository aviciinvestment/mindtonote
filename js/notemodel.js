'use strict';

import { cancel,cancel2, date, clear, input1, newdoc, save2, savecamcel2, save, savecamcel, section2, textarea, textareavalue, title } from "./noteview.js";

export class Mindmodel{
    constructor() {
        this.date; 
        this.setdate;  
        this.settime;
        this._usernote();
    }

    ///////////////////////////////////
    //creating a prototype that determines the action on clicking save (+)
    _usernote(){
        section2.innerHTML = '';
        let save1 = JSON.parse(localStorage.getItem("save"));

        ////////////////////////////
        //seting each record to its respective index
        let index;



        /////////////////////
        //condition for the opacity of the clear all button
        if (section2.innerHTML === '') {
            clear.style.opacity = '0'
        }
        ////////////////////////////
        // function that inserts elements into record
        const insert = (content) =>{
            let i = 0
            content.forEach(element => {
            let title = element.title;
            if (title.length > 20) {
                title = title.slice(0, 20) + '...'
            }
            section2.insertAdjacentHTML('afterbegin',`<div data-user = '${i}' id="recordscontainer"><div><div id="title">${title}</div><div id="date">${element.time}</div></div><div id="del" data-user = '${i}'>del</div></div>`);
            i++
            });
        }


        //////////////////////////////////
        //creation of delay to allow nav bar to load before section

        ////////////////////////////////////////
        //setting the record terminal on the screen when save is clicked
        if(Array.isArray(save1)) {
                insert(save1);
            }

            /////////////////////
        //defining the container element
        var recordscontainer = document.querySelectorAll('#recordscontainer');

        
        
        //////////////////////////////
        //creation of the save time
        this.date = new Date;
        this.setdate = `${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`
        this.settime = `${this.date.getHours()}:${this.date.getMinutes()}`;
        const time = `${this.setdate} ${this.settime}`;    

        
        //////////////////////////////
        //setting an action that happens on clicking the save button
        let records = [];
        if(Array.isArray(save1)) {
            records.push(...save1)
        }

        /////////////////////////////////
        //function that deletes each record
        const delet = (record) => {
            record.forEach(element => {
                element.addEventListener('click', function(e) {
                    e.stopPropagation();
                    index = this.dataset.user;

                    //removing the specified record and saving it in the localstorage
                    if(Array.isArray(save1)) {
                        records.splice(index, 1);
                        localStorage.setItem("save", JSON.stringify(records));
                        save1 = JSON.parse(localStorage.getItem("save"));
                        section2.innerHTML =''
                        insert(save1)
                        //redefining the container element
                        recordscontainer = document.querySelectorAll('#recordscontainer');
                        ///////////////////////////////////////////
                        //setting user action on clicking each record
                        edit(recordscontainer)
                        clear.style.opacity = '50%'
                    }

                })
            });
        }


        ///////////////////////////////////////
        //deleting a record
        let del = document.querySelectorAll('#del');
        delet(del)


        ////////////////////////////
        //function that takes user back to history on clicking the record
        const edit = (content) =>{
            content.forEach(element => {
                element.addEventListener('click', function(){
                    textarea.style.visibility = "visible";
                    savecamcel2.style.visibility = "visible";
                    newdoc.style.visibility = 'hidden';
                    section2.innerHTML = '';
                    index = this.dataset.user;
                    if(Array.isArray(save1)) {
                        const {title,note,time} = save1[index];
                        textareavalue.value = note;
                        input1.value = title
                    }
                }) 
            })
        }


        
        //////////////////////////////////
        //setting save that saves a note when a user edits 
        save2.addEventListener('click', function(){
            section2.innerHTML = '';
            //////////////////////////////
            //creating an object that takes users note title, note and date........
            let currentrecord = {title: input1.value, note: textareavalue.value,time: time};
            records[index] = currentrecord;         
            ///////////////////////////////////////
            //storing recorded user note to the device local storage
            localStorage.setItem("save", JSON.stringify(records))
            ///////////////////////////////////////
            //getting item from local storage
            
            save1 = JSON.parse(localStorage.getItem("save"));
            
            ///////////////////////////////////////
            //actions of the user interface after clicking save

            //section2.innerHTML = '';


            textarea.style.visibility = "hidden";
            newdoc.style.visibility = 'visible';
            //recordscontainer.style.visibility = 'visible';
            savecamcel2.style.visibility = "hidden";
            

            ////////////////////////////////////////
            //setting the record terminal on the screen when save is clicked

            if(Array.isArray(save1)) {
                insert(save1);
            }  
            
            /////////////////////
            //redefining the container element
            recordscontainer = document.querySelectorAll('#recordscontainer');
            ///////////////////////////////////////////
            //setting user action on clicking each record
            edit(recordscontainer)
            clear.style.opacity = '50%'

            ///////////////////////////////////////
            //deleting a record
            del = document.querySelectorAll('#del');
            delet(del)
            });


        //function that cancels
        const cancels = () =>{
            textarea.style.visibility = "hidden";
            savecamcel.style.visibility = "hidden";
            savecamcel2.style.visibility = "hidden";
            newdoc.style.visibility = 'visible';
            textareavalue.value = '';
            input1.value = '';
            section2.innerHTML = '';
            //setting the record terminal on the screen when save is clicked

            if(Array.isArray(save1)) {
                insert(save1);
            }

            /////////////////////
            //redefining the container element
            recordscontainer = document.querySelectorAll('#recordscontainer');
            ///////////////////////////////////////////
            //setting user action on clicking each record
            edit(recordscontainer)

            ///////////////////////////////////////
            //deleting a record
            del = document.querySelectorAll('#del');
            delet(del)
        }



        //////////////////////////
        //setting save that saves a note when a user click new doc 
        save.addEventListener('click', function(){
            section2.innerHTML = '';
            /////////////////////
            //creating an object that takes users note title, note and date........
            let currentrecord = {title: input1.value, note: textareavalue.value,time: time};
            records.push(currentrecord)            

            ///////////////////////////////////////
            //storing recorded user note to the device local storage
            localStorage.setItem("save", JSON.stringify(records))
            ///////////////////////////////////////
            //getting item from local storage
            
            save1 = JSON.parse(localStorage.getItem("save"));
            
            ///////////////////////////////////////
            //actions of the user interface after clicking save

            //section2.innerHTML = '';


            textarea.style.visibility = "hidden";
            newdoc.style.visibility = 'visible';
            //recordscontainer.style.visibility = 'visible';
            savecamcel.style.visibility = "hidden";
            

            ////////////////////////////////////////
            //setting the record terminal on the screen when save is clicked

            if(Array.isArray(save1)) {
                insert(save1);
            }  
            
            /////////////////////
            //redefining the container element
            recordscontainer = document.querySelectorAll('#recordscontainer');
            ///////////////////////////////////////////
            //setting user action on clicking each record
            edit(recordscontainer);
            clear.style.opacity = '50%';

            ///////////////////////////////////////
            //deleting a record
            del = document.querySelectorAll('#del');
            delet(del)
        });


        
        //////////////////////////
        //setting save that cancels after edit
        cancel2.addEventListener('click', function(){
            cancels()
        })
        //////////////////////////////////////
        //canceled after clicking new doc
        cancel.addEventListener('click', function(){
            cancels()
            
        })   

        ///////////////////////////////////////////
        //setting user action on clicking each record
        edit(recordscontainer)

        //////////////////////////
        //clearing all records
        clear.addEventListener('click', function() {
            localStorage.removeItem('save');
            records = [];
            section2.innerHTML = '';
            clear.style.opacity = '0'
        })
            
    };

}