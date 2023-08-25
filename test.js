let body = document.querySelector('body')

//METHODS FOR LEFT ONTAINER SECTION NAME HOVER EFFECT     ------

function over1(){
    button1.style.color = "white";
    button1.style.fontSize = "20px";
    line1.style.width = "120px";
    line1.style.color = "white";
}
function leave1(){
    button1.style.color = "rgb(174, 174, 233";
    button1.style.fontSize = "15px";
    line1.style.width = "60px";
}

function over2(){
    button2.style.color = "white";
    button2.style.fontSize = "20px";
    line2.style.width = "120px";
    line2.style.color = "white";
}
function leave2(){
    button2.style.color = "rgb(174, 174, 233";
    button2.style.fontSize = "15px";
    line2.style.width = "60px";
}

function over3(){
    button3.style.color = "white";
    button3.style.fontSize = "20px";
    line3.style.width = "120px";
    line3.style.color = "white";
}
function leave3(){
    button3.style.color = "rgb(174, 174, 233)";
    button3.style.fontSize = "15px";
    line3.style.width = "60px";
}

//METHOD FOR MOUSE RADIAL GRADIENT EFFECT    -------

function mouse_effect(e){
    body.style.setProperty('--x', e.clientX +'px');
    body.style.setProperty('--y',e.pageY+'px');
    body.style.setProperty('--xs',100+'px');
    body.style.setProperty('--ys',e.pageY+'px');    
}

//METHODS FOR EXPERTISE CARDS HOVER EFFECT      -------

function expertise_card_over1(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        exp_card_title_1.style.color = "aqua";
        exp_card_1.style.background = "rgba(27, 34, 70, 0.5)";

        exp_card_2.style.opacity = "0.3";
        exp_card_3.style.opacity = "0.3";
        exp_card_4.style.opacity = "0.3";
        exp_card_5.style.opacity = "0.3";
    }
    else{
        exp_card_title_1.style.color = "aqua";
    }
}
function expertise_card_leave1(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        exp_card_title_1.style.color = "rgb(228, 228, 228)";
        exp_card_1.style.backgroundColor = "transparent";

        exp_card_2.style.opacity = "1";
        exp_card_3.style.opacity = "1";
        exp_card_4.style.opacity = "1";
        exp_card_5.style.opacity = "1";
    }
    else{
        exp_card_title_1.style.color = "rgb(228, 228, 228)";
    }
}

function expertise_card_over2(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        exp_card_title_2.style.color = "aqua";
        exp_card_2.style.background = "rgba(27, 34, 70, 0.5)";

        exp_card_1.style.opacity = "0.3";
        exp_card_3.style.opacity = "0.3";
        exp_card_4.style.opacity = "0.3";
        exp_card_5.style.opacity = "0.3";
    }
    else{
        exp_card_title_2.style.color = "aqua";
    }
}
function expertise_card_leave2(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        exp_card_title_2.style.color = "rgb(228, 228, 228)";
        exp_card_2.style.backgroundColor = "transparent";

        exp_card_1.style.opacity = "1";
        exp_card_3.style.opacity = "1";
        exp_card_4.style.opacity = "1";
        exp_card_5.style.opacity = "1";
    }
    else{
        exp_card_title_2.style.color = "rgb(228, 228, 228)";
    }
}

function expertise_card_over3(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        exp_card_title_3.style.color = "aqua";
        exp_card_3.style.background = "rgba(27, 34, 70, 0.5)";

        exp_card_1.style.opacity = "0.3";
        exp_card_2.style.opacity = "0.3";
        exp_card_4.style.opacity = "0.3";
        exp_card_5.style.opacity = "0.3";
    }
    else{
        exp_card_title_3.style.color = "aqua";
    }
}
function expertise_card_leave3(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        exp_card_title_3.style.color = "rgb(228, 228, 228)";
        exp_card_3.style.backgroundColor = "transparent";

        exp_card_1.style.opacity = "1";
        exp_card_2.style.opacity = "1";
        exp_card_4.style.opacity = "1";
        exp_card_5.style.opacity = "1";
    }
    else{
        exp_card_title_3.style.color = "rgb(228, 228, 228)";
    }
}

function expertise_card_over4(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        exp_card_title_4.style.color = "aqua";
        exp_card_4.style.background = "rgba(27, 34, 70, 0.5)";

        exp_card_1.style.opacity = "0.3";
        exp_card_2.style.opacity = "0.3";
        exp_card_3.style.opacity = "0.3";
        exp_card_5.style.opacity = "0.3";
    }
    else{
        exp_card_title_4.style.color = "aqua";
    }
}
function expertise_card_leave4(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        exp_card_title_4.style.color = "rgb(228, 228, 228)";
        exp_card_4.style.backgroundColor = "transparent";

        exp_card_1.style.opacity = "1";
        exp_card_2.style.opacity = "1";
        exp_card_3.style.opacity = "1";
        exp_card_5.style.opacity = "1";
    }
    else{
        exp_card_title_4.style.color = "rgb(228, 228, 228)";
    }
}

function expertise_card_over5(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        exp_card_title_5.style.color = "aqua";
        exp_card_5.style.background = "rgba(27, 34, 70, 0.5)";

        exp_card_1.style.opacity = "0.3";
        exp_card_2.style.opacity = "0.3";
        exp_card_3.style.opacity = "0.3";
        exp_card_4.style.opacity = "0.3";
    }
    else{
        exp_card_title_5.style.color = "aqua";
    }
}
function expertise_card_leave5(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        exp_card_title_5.style.color = "rgb(228, 228, 228)";
        exp_card_5.style.backgroundColor = "transparent";

        exp_card_1.style.opacity = "1";
        exp_card_2.style.opacity = "1";
        exp_card_3.style.opacity = "1";
        exp_card_4.style.opacity = "1";
    }
    else{
        exp_card_title_5.style.color = "rgb(228, 228, 228)";
    }
}

//METHODS FOR PROJECT CARD HOVER EFFECT

function project_card_over1(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        prj_card_title_1.style.color = "aqua";
        prj_card_1.style.background = "rgba(27, 34, 70, 0.5)";

        prj_card_2.style.opacity = "0.3";
        prj_card_3.style.opacity = "0.3";
        prj_card_4.style.opacity = "0.3";
    }
    else{
        prj_card_title_1.style.color = "aqua";
    }
}
function project_card_leave1(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        prj_card_title_1.style.color = "rgb(228, 228, 228)";
        prj_card_1.style.backgroundColor = "transparent";

        prj_card_2.style.opacity = "1";
        prj_card_3.style.opacity = "1";
        prj_card_4.style.opacity = "1";
    }
    else{
        prj_card_title_1.style.color = "rgb(228, 228, 228)";
    }
}

function project_card_over2(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        prj_card_title_2.style.color = "aqua";
        prj_card_2.style.background = "rgba(27, 34, 70, 0.5)";

        prj_card_1.style.opacity = "0.3";
        prj_card_3.style.opacity = "0.3";
        prj_card_4.style.opacity = "0.3";
    }
    else{
        prj_card_title_2.style.color = "aqua";
    }
}
function project_card_leave2(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        prj_card_title_2.style.color = "rgb(228, 228, 228)";
        prj_card_2.style.backgroundColor = "transparent";

        prj_card_1.style.opacity = "1";
        prj_card_3.style.opacity = "1";
        prj_card_4.style.opacity = "1";
    }
    else{
        prj_card_title_2.style.color = "rgb(228, 228, 228)";
    }
}

function project_card_over3(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        prj_card_title_3.style.color = "aqua";
        prj_card_3.style.background = "rgba(27, 34, 70, 0.5)";

        prj_card_1.style.opacity = "0.3";
        prj_card_2.style.opacity = "0.3";
        prj_card_4.style.opacity = "0.3";
    }
    else{
        prj_card_title_3.style.color = "aqua";
    }
}
function project_card_leave3(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        prj_card_title_3.style.color = "rgb(228, 228, 228)";
        prj_card_3.style.backgroundColor = "transparent";

        prj_card_1.style.opacity = "1";
        prj_card_2.style.opacity = "1";
        prj_card_4.style.opacity = "1";
    }
    else{
        prj_card_title_3.style.color = "rgb(228, 228, 228)";
    }
}

function project_card_over4(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        prj_card_title_4.style.color = "aqua";
        prj_card_4.style.background = "rgba(27, 34, 70, 0.5)";

        prj_card_1.style.opacity = "0.3";
        prj_card_2.style.opacity = "0.3";
        prj_card_3.style.opacity = "0.3";
    }
    else{
        prj_card_title_4.style.color = "aqua";
    }
}
function project_card_leave4(){
    if(window.innerWidth >= 670 & window.innerWidth >= 1020){
        prj_card_title_4.style.color = "rgb(228, 228, 228)";
        prj_card_4.style.backgroundColor = "transparent";

        prj_card_1.style.opacity = "1";
        prj_card_2.style.opacity = "1";
        prj_card_3.style.opacity = "1";
    }
    else{
        prj_card_title_4.style.color = "rgb(228, 228, 228)";
    }
}