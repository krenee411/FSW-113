const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.
let inputs = document.getElementsByTagName("input") 
//-console.log(inputs)

function chkLang(lang,...value) {
    result = false
    //console.log(value)
    let obj = document.querySelector('#TestResult')
for (i=0; i<value.length; i++){
    //console.log(obj,value[i],lang) 
    if(value[i]=== lang){result = true}
}
if(result){
    obj.innerHTML = `Congratulations!\nYou know ${lang}.`
}else{
    obj.innerHTML = `Sorry,\nyou don't know ${lang}.`
}
}


    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages

    //let obj = document.querySelector('#TestResult')
    //if (result) 
    //    obj.innerText = `Congratulations!\nYou know ${lang}.`
    //else
       // obj.innerText = `Sorry,\nyou don't know ${lang}.`'
