class Book{
    constructor(t,a,i){
        this.title = t 
        this.author = a
        this.isbn = i
    }
}


class UI{

    static display(){
      const storedbooks = [          //array hai
        {
          title: "title 1",
          author: "author one",
          isbn: "1234"
        },
        {
          title: "title 1",
          author: "author one",
          isbn: "1234"
        },
        {
          title: "title 1",
          author: "author one",
          isbn: "1234"
        },
      ]
      storedbooks.forEach((book) =>{
        // console.log(book)
        UI.addbooktolist(book)   //table mei jod deta hai data
      }) 
    }
       
   static addbooktolist(book){
        
                const list = document.querySelector("#book-list") //tbody hai  //generally fetch krne ke kaam aayega local storage se
                const row = document.createElement("tr")   // <tr></tr> aaisa tr bna hai !!
                
                    //back-ticks operator with the help of $ we can directly access object  EASY KRTA H KM
                row.innerHTML = `                    
                  <td>${book.title}</td>
                  <td>${book.author}</td>
                  <td>${book.isbn}</td>
                  <td><a href="#" class='btn btn-danger btn-sm delete'>X</a></td>
                `  //<tr><td>title</td></tr>
                console.log(row)
                list.appendChild(row)
    }

    static clearall(){
      document.querySelector("#title").value = ''
      document.querySelector("#author").value = ''
      document.querySelector("#isbn").value = ''
    }
         
    static showalert(msg,className){             //DYNAMIC ALERT BUTTON
      const div = document.createElement('div')  //backend mei aaisa bna <div></div>
      // console.log(div)
      div.className =`alert alert-${className}`  
      // console.log(div)
      div.appendChild(document.createTextNode(msg))
      // console.log(div)
      const form = document.querySelector("#book-form")
      console.log(form)
      const container = document.querySelector(".container")   //hmesha ek hi value return krega
      console.log(container)
      container.insertBefore(div,form)
      setTimeout(function() {
         document.querySelector(".alert").remove()     //braces r imp here!!
      },3000);
    }
}

class local{


}

let book = new Book ("title 1","author one", 1234)   //creating object
// console.log(book)

//event listener  + book add ho rhi h

document.querySelector("#book-form").addEventListener("submit",function(e){   // arrow function [ () => ]
    e.preventDefault()
  //   console.log("not load")
        const title = document.querySelector("#title").value
        const author = document.querySelector("#author").value
        const isbn = document.querySelector("#isbn").value 
      //   console.log(title,author,isbn)
        const book = new Book(title,author,isbn)
        UI.addbooktolist(book)   //function calling 
        UI.clearall()  
        UI.showalert("book added sucessfully",'success')
        
        
         
      
        
})

document.querySelector("#book-list").addEventListener("click",function(e){
  if(e.target.classList.contains("delete")){
    if(confirm("ARE YOU SURE YOU WANT TO DELETE THIS BOOK"))
    (e.target.parentElement.parentElement.remove())
  }   //else bhi dl skte ui.showalert krke 

})

document.addEventListener("DOMContentLoaded",UI.display)   



