// //grabbed the submit button
// const submitButton = document.querySelector('#submit-button');
// submitButton.addEventListener('click', mainFunction);

const inputElement = document.querySelector('[type="text"]');
inputElement.addEventListener('input', mainFunction);

const anchorTag = document.querySelector('a');

const unorderedList = document.querySelector('ul');


anchorTag.addEventListener('click', function(){
  
  if (unorderedList.className === 'dissapear'){
unorderedList.className = 'noClass'
}
  else if(unorderedList.className === 'noClass'){
  unorderedList.className = 'dissapear';
}
});





function mainFunction(){
 
  
  
  const inputValue = inputElement.value;
  let displayResultsElement = document.querySelector('#results');
  const radioButtons = document.querySelectorAll('[type="radio"]');
  let buttonValue = '';
  
  
  for (const button of radioButtons){
    if (button.checked){
      buttonValue = button.value;
    }
  }
  


  if (buttonValue === 'encode'){
    displayResultsElement.innerText = encode(inputValue);
  }
  else if (buttonValue === 'translate'){
    displayResultsElement.innerText  = translate(inputValue);
  }
  else if (buttonValue === 'madlib'){
    displayResultsElement.innerText  = madlib(inputValue);
  }
  else if (buttonValue === 'search'){
    
    const emojiObject = search(inputValue);
    if (emojiObject.length === 0){
      newChildElement = document.createElement('p');
      let results2 = displayResultsElement.appendChild(newChildElement);
      results2.innerText = 'no emoji found';
    }
    else{
      for (const emoji of emojiObject){
        newChildElement = document.createElement('p');
        let results2 = displayResultsElement.appendChild(newChildElement);
        results2.innerText = emoji.symbol;
      }
    }
  }
  else if (buttonValue === 'random'){
    const radioButtons = ['encode', 'translate', 'madLib', 'search']
    let randomButton = randomElement(radioButtons);
    
    if (randomButton === 'encode'){
      displayResultsElement.innerText = encode(inputValue);
    }
    else if (randomButton === 'translate'){
      displayResultsElement.innerText  = translate(inputValue);
      
    }
    else if (randomButton === 'madLib'){
      displayResultsElement.innerText  = madlib(inputValue);
      
      
    }
    else if (randomButton === 'search'){
      const emojiObject = search(inputValue);
      if (emojiObject.length === 0){
        newChildElement = document.createElement('p');
        let results2 = displayResultsElement.appendChild(newChildElement);
        results2.innerText = 'no emoji found';
      }
      else{
        for (const emoji of emojiObject){
          newChildElement = document.createElement('p');
          let results2 = displayResultsElement.appendChild(newChildElement);
          results2.innerText = emoji.symbol;
        }
      }
    }
  }
  
};
