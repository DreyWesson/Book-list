

const pTags = document.querySelectorAll('p');
pTags.forEach((pTag) => {
  if (pTag.innerText.includes('error')) {
    console.log(pTag)
    pTag.classList.add('error')
  } else if(pTag.innerText.includes('success')) {
    pTag.classList.add('success')
    console.log(pTag)
    
  }
})
