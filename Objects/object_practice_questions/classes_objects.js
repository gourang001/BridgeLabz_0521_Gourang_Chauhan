class Book{
    constructor(title, author){
      this.title = title;
      this.author = author;
      this.isAvailable = true;
    }
  
    borrowBook(){
      if(this.isAvailable){
        this.isAvailable = false;
        console.log(`You have borrowed "${this.title}"`)
      } 
      else{
        console.log(`Sorry, "${this.title}" is unavailable.`);
      }
    }
  
    returnBook(){
      this.isAvailable = true;
      console.log(`You have returned "${this.title}".`);
    }
  }
  
  const book1 = new Book("abc", "John");
  const book2 = new Book("pqr", "Lee");
  
  
  book1.borrowBook(); 
  book1.borrowBook();
  book2.borrowBook();
  book2.returnBook();



  
class Movie{
  constructor(name, dirc){
    this.name = name;
    this.dirc = dirc;
    this.available = true; 
  }

  rent(){
    if (this.available) {
      this.available = false;
      console.log(`You have rented "${this.name}". Enjoy watching!`);
    } 
    else{
      console.log(`Sorry, "${this.name}" is already rented.`);
    }
  }

  return(){
    if(!this.available){
      this.available = true;
      console.log(`You have returned "${this.name}". Thank you!`);
    } 
    else{
      console.log(`"${this.name}" was not rented.`);
    }
  }
}

const movie1 = new Movie("War", "Bansali");
const movie2 = new Movie("Bahubali", "Rajamouli");

movie1.rent();
movie1.rent(); 
movie1.return(); 
movie1.return(); 

movie2.rent(); 
movie2.return(); 