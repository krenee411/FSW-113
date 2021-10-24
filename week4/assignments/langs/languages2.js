const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.
document.getElementById('submit').addEventListener('click',chkLang)

function chkLang(langs) {
    let result = false
    var inputs = document.getElementsByTagName('input')
    //console.log(inputs)
    var items= []
    for(i= 0; i<inputs.length; i++){
       var area = inputs[i].value.split(',') 
       items= [...items,...area]
     
    }
      //  console.log(items)
     items.find(function(getIt){
     if(items === `${lang}`){
         return result  === false
     }
    })
    
 
    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages
    let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
 
}
