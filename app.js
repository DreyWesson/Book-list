
//delete book
const getLi = document.querySelector('#book-list ul');
  getLi.addEventListener('click', (e)=>{
    if (e.target.className == 'delete') {
      const li = e.target.parentElement;
      getLi.removeChild(li)
      console.log(`Li deleted`)
    }
  })

//add book
  const getForm = document.forms['add-book'];
  getForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    const value = getForm.querySelector('input[type="text"]').value;

    if (value) {
      const liTag = document.createElement('li')
      const bookNameSpan = document.createElement('span')
      const deleteBtnSpan = document.createElement('span')

      bookNameSpan.textContent = value;
      deleteBtnSpan.textContent = 'delete';

      //Creating class attribute using className most
      //performance:alt classList, setAttribute
      bookNameSpan.className = 'name';
      deleteBtnSpan.className = 'delete';
      // bookNameSpan.setAttribute('class', 'name');
      // deleteBtnSpan.setAttribute('class', 'delete');
      // bookNameSpan.classList.add('name');
      // deleteBtnSpan.classList.add('delete');
  
      liTag.appendChild(bookNameSpan);
      liTag.appendChild(deleteBtnSpan);
      getLi.appendChild(liTag)
    } else
      console.log(`You gotta add an input.`)
  })

//checkbox
const checkBox = document.querySelector('#hide');
checkBox.addEventListener('change', (e)=>{
  if (checkBox.checked) {
    getLi.style.display = "none";
  } else
    getLi.style.display = "initial";

})

//search input
const searchBox = document.forms['search-books'].querySelector('input[type="text"]')
  searchBox.addEventListener('keyup', (e)=>{
    const searchTerm = e.target.value.toLowerCase();
    const books = getLi.getElementsByTagName('li');
    [...books].forEach(book =>{
      const title = book.firstElementChild.textContent;

      if (title.toLowerCase().indexOf(searchTerm) != -1) {
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
  
      }
    })

  })

//tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e)=>{
  if (e.target.tagName === "LI") {
    const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach((panel) =>{
      if (panel == targetPanel){
        panel.classList.add('active');
      }else {
        panel.classList.remove('active');
      }
    })
  }
})



