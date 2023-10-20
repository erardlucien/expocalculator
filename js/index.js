'use strict';

let base = document.querySelector('.base');
let exponent = document.querySelector('.exponent');
let result = document.querySelector('.result');
let calculate = document.querySelector('.calculate');
const MAX = 100 ** 25;
const MAXLENGTH = 12;

window.addEventListener('DOMContentLoaded', () => {
    calculate.addEventListener('click', () => {
        let baseContent = base.value;
        let expContent = exponent.value;
        const ALLOWED_CHARACTER = /^[- | +]{0,1}\d+$/;
        
    
        if( !ALLOWED_CHARACTER.test(baseContent) || !ALLOWED_CHARACTER.test(expContent) ) {
            result.textContent = `!Only integer are valid!`;
            return;
        }

        let baseValue = parseInt(baseContent);
        let expValue = parseInt(expContent);

        if( isNaN(baseValue) || isNaN(expValue) ) {
            result.textContent = `!Not a Number!`;
            return;
        }

        if(baseValue < 0 || expValue < 0) {
            result.textContent = `!The base and the exponent must be bigger or equal to zero!`;
            return;
        }
    
        let resultValue = baseValue ** expValue;
    
        if( resultValue > MAX ||  !isFinite(resultValue) ) {
            result.textContent = `!The result exceed ${MAX}!`;
            return;
        }

        let resultValueLength = resultValue.toString().length;
    
        result.innerHTML = `The result is <br>${ resultValueLength > MAXLENGTH ?
            resultValue.toPrecision(5) : resultValue }`;
    });
})
