document.addEventListener('DOMContentLoaded', function(){

    const baseUri = 'http://localhost:3000/books'
    const booksId = 'http://localhost:3000/books/:id/'


    getBooks () 

    function getBooks(){
        return fetch(baseUri)
            .then(response => response.json())
            .then(books => renderBooks(books))

    
    }

    function renderBooks(books){
        const div = document.querySelector('#list-panel')
        const ul = document.querySelector('#list')
        books.forEach(function(book){
        renderBook(book)
        })
    
  
    
    }
    function renderBook(book){
        const div = document.querySelector('#list-panel')
        const ul = document.querySelector('#list')
        let li = document.createElement('li')
        li.innerText = book.title 
        li.dataset.id = book.id


        ul.appendChild(li)
        div.append(ul)

        li.addEventListener('click', () => renderBookInfo(book)
        
        )

    }

    //each book should render when clicked with summary


    function renderBookInfo(book){

        const user = {"id":1, "username":"pouros"}

        const div = document.querySelector('#show-panel')
        div.className = 'body'
        const h2 = document.createElement('h2')
        
        h2.innerText = book.title
        
        const img = document.createElement('img') 
        img.src = book.img_url  
            
        const p = document.createElement('p')
        p.innerText = book.description
        
    
        const button = document.createElement('button')
        button.innerText = "Read"
        button.dataset.id = user.id
        
        userUl = document.createElement("ul")
        userUl.dataset.ul = book.id
        
        book.users.forEach(function(reader){
         const li  = document.createElement('li')
        li.innerText = reader.username
        userUl.append(li)
        
        })
        

        h2.append(img)
        div.append(h2,img,p,button, userUl)


        
        //keep passing the book to different function 
        button.addEventListener('click', () => readBook(book))
        

        
       
    }

    function readBook(book){ 
       

        const user = {"id":1, "username":"pouros"}
            let newUsers = book.users
                newUsers.push(user)
            
                const geeks = { 
                
                users: newUsers

                    
        }
            
        let configurationObject = { 
           method : 'PATCH',
           headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           },
           body: JSON.stringify(geeks)
       }
    
     return fetch(`${baseUri}/${book.id}`, configurationObject) 
     .then(response => response.json())
     .then(book => {
         const bookUl = document.querySelector(`[data-ul="${book.id}"]`)
         const li  = document.createElement('li')
         li.innerText = book.users[book.users.length-1].username
         //getting the last user and then adding the user.
         bookUl.append(li)
     } )
 
    //  .then(update => console.log("You have read the book "))
    }

     //add reader for the current list 
        //document query the current list 
        //pop that function init 

})

 
  










 
    // getBooks()
    // function getBooks(){
    // return fetch(booksUrl)
    // .then(response =>response.json())
    // .then(books => renderBooks(books))
    // }

    // function renderBooks(books){
    //     books.forEach(function(book){
        
    //     renderBook(book)

    //     })


    // }

    // function renderBook(book){

    // const div = document.querySelector('#list-panel')
    // const ul = document.querySelector('#list')

    // const li = document.createElement('li')
    // li.id = book.id
    // li.innerText = book.title

    // ul.append(li)
    // div.append(ul)
    
    // li.addEventListener('click', displayBook)
    
    
    
    

    // }
