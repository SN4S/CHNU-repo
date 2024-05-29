function libraryManager() {
    function addBook(title, author, genre, pages) {
    let newBook = { title, author, genre, pages, isAvailable: true };
    library.push(newBook);
}
    let library = [
        { title: 'Книга 1', author: 'Автор 1', genre: 'Жанр 1', pages: 200, isAvailable: true },
        { title: 'Книга 2', author: 'Автор 2', genre: 'Жанр 2', pages: 150, isAvailable: true },
        { title: 'Книга 3', author: 'Автор 1', genre: 'Жанр 3', pages: 250, isAvailable: false }
    ];



    function removeBook(title) {
        library = library.filter(book => book.title !== title);
    }

    function findBooksByAuthor(author) {
        return library.filter(book => book.author === author);
    }

    function toggleBookAvailability(title, isBorrowed) {
        let book = library.find(book => book.title === title);
        if (book) {
            book.isAvailable = !isBorrowed;
        }
    }

    function sortBooksByPages() {
        library.sort((a, b) => a.pages - b.pages);
    }

    function getBooksStatistics() {
        let totalBooks = library.length;
        let availableBooks = library.filter(book => book.isAvailable).length;
        let borrowedBooks = totalBooks - availableBooks;
        let averagePages = library.reduce((sum, book) => sum + book.pages, 0) / totalBooks;

        return {
            totalBooks,
            availableBooks,
            borrowedBooks,
            averagePages
        };
    }

    return {
        addBook,
        removeBook,
        findBooksByAuthor,
        toggleBookAvailability,
        sortBooksByPages,
        getBooksStatistics
    }
}

    function ts6() {
    let books = new libraryManager();
    books.addBook('Нова книга', 'Автор 3', 'Жанр 4', 180);
    books.toggleBookAvailability('Книга 1', false);
    books.sortBooksByPages();
    console.log(books.getBooksStatistics());
    }

