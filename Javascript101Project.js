let library = [
    [1, "Start with why", "Simon Sinek", 80.0, 13],
    [2, "But how do it know", "J. Clark Scott", 59.9, 22],
    [3, "Clean Code", "Rober Cecil Martin", 50.0, 5],
    [4, "Zero to One", "Peter Thiel", 45.0, 12],
    [5, "You don't know JS", "Kyle Simpson", 39.9, 9]
]

searchById = (bookId) =>{
    for(book of library){
        if(bookId === book[0]){
            console.log(book)
            break
        }
        else{
            console.log("No Book With This ID")
        }
    }
}

searchByTitle = (bookTitle) =>{
    for(book of library){
        if(bookTitle === book[1]){
            console.log(book)
            break
        }
        else{
            console.log("No Book With This Title")
        }
    }
}

searchByAuthor = (bookAuthor) =>{
    for(book of library){
        if(bookAuthor === book[2]){
            console.log(book)
            break
        }
        else{
            console.log("No Book Written By This Author")
        }
    }
}

sellBook = (bookTitle, quantity, currentBalance) =>{
    for(book of library){
        if(bookTitle === book[1] && book[4] - quantity > 0 && currentBalance >= book[3] * quantity){
            console.log(`Purchase For Book "${book[1]}" has done.

            Item      Description         Amount
            ========  ==================  ========
            ${book[0]}         ${book[1]}          ${book[3] * quantity}
            `)
            book[4] -= quantity
            break
        }
        else if(bookTitle === book[1] && book[4] - quantity < 0){
            console.log("This Book is Out of Stuck");
        }
        else if(bookTitle === book[1] && currentBalance < book[3] * quantity){
            console.log("Your Balance is Not Enough To Buy This Book");
        }
    }
}

searchById(1)
searchByTitle("Zero to One")
searchByAuthor("Rober Cecil Martin")
sellBook("Clean Code", 1, 400)