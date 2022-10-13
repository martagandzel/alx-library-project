// the library collection
const listOfBooks = [
    {
        title: "The Eye of the World",
        author: "Robert Jordan",
        year: "1990",
        category: "fantasy",
        image: "../img/eotw.jpg",
        alt: "Cover for The Eye of the World",
    },
    {
        title: "The Great Hunt",
        author: "Robert Jordan",
        year: "1990",
        category: "fantasy",
        image: "../img/tgh.jpg",
        alt: "Cover for The Great Hunt",
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: "1937",
        category: "fantasy",
        image: "../img/hobbit.jpg",
        alt: "Cover for The Hobbit",
    },
    {
        title: "The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        year: "1954",
        category: "fantasy",
        image: "../img/tfotr.jpg",
        alt: "Cover for The Fellowship of the Ring",
    },
    {
        title: "The Two Towers",
        author: "J.R.R. Tolkien",
        year: "1954",
        category: "fantasy",
        image: "../img/ttt.jpg",
        alt: "Cover for The Two Towers",
    },
    {
        title: "The Return of the King",
        author: "J.R.R. Tolkien",
        year: "1955",
        category: "fantasy",
        image: "../img/trotk.jpg",
        alt: "Cover for The Return of the King",
    },
    {
        title: "A Wizard of Earthsea",
        author: "Ursula K. Le Guin",
        year: "1968",
        category: "fantasy",
        image: "../img/awoe.jpg",
        alt: "Cover for A Wizard of Earthsea",
    },
    {
        title: "Dracula",
        author: "Bram Stoker",
        year: "1897",
        category: "horror",
        image: "../img/dracula.jpg",
        alt: "Cover for Dracula",
    },
    {
        title: "The Savage Earth",
        author: "P.T. Hylton, Jonathan Benecke",
        year: "2017",
        category: "si-fi",
        image: "../img/vw1.jpg",
        alt: "Cover for The Savage Earth",
    },
    {
        title: "Woman in Cabin 10",
        author: "P.T. Hylton, Jonathan Benecke",
        year: "2016",
        category: "mystery",
        image: "../img/wic10.jpg",
        alt: "Cover for Woman in Cabin 10",
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        year: "2008",
        category: "si-fi",
        image: "../img/hg.jpg",
        alt: "Cover for The Hunger Games",
    },
    {
        title: "Catching Fire",
        author: "Suzanne Collins",
        year: "2009",
        category: "si-fi",
        image: "../img/cf.jpg",
        alt: "Cover for Catching Fire",
    },
    {
        title: "Mockingjay",
        author: "Suzanne Collins",
        year: "2010",
        category: "si-fi",
        image: "../img/mock.jpg",
        alt: "Cover for Mockingjay",
    },
    {
        title: "Someone Else’s Skin",
        author: "Sarah Hilary",
        year: "2014",
        category: "mystery",
        image: "../img/ses.jpg",
        alt: "Cover for Someone Else’s Skin",
    },
    {
        title: "Little Fires Everywhere",
        author: "Celeste Ng",
        year: "2017",
        category: "mystery",
        image: "../img/lfe.jpg",
        alt: "Cover for Little Fires Everywhere",
    },
    {
        title: "Death on the Nile",
        author: "Agatha Christie",
        year: "1937",
        category: "mystery",
        image: "../img/dotn.jpg",
        alt: "Cover for Death on the Nile",
    },
    {
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        year: "1934",
        category: "mystery",
        image: "../img/motoe.jpg",
        alt: "Cover for Murder on the Orient Express",
    },
    {
        title: "The Girl Before",
        author: "JP Delaney",
        year: "2017",
        category: "mystery",
        image: "../img/tgb.jpg",
        alt: "Cover for The Girl Before",
    },
    {
        title: "Dead Water",
        author: "Ann Cleeves",
        year: "2013",
        category: "mystery",
        image: "../img/dw.jpg",
        alt: "Cover for Dead Water",
    },
    {
        title: "The Moth Catcher",
        author: "Ann Cleeves",
        year: "2015",
        category: "mystery",
        image: "../img/tmc.jpg",
        alt: "Cover for The Moth Catcher",
    },
    {
        title: "The Heron's Cry",
        author: "Ann Cleeves",
        year: "2021",
        category: "mystery",
        image: "../img/thc.jpg",
        alt: "Cover for The Heron's Cry",
    },
    {
        title: "The Body in the Marsh",
        author: " Nick Louth",
        year: "2017",
        category: "mystery",
        image: "../img/tbitm.jpg",
        alt: "Cover for The Body in the Marsh",
    },
    {
        title: "Angel Maker",
        author: "Morgan Greene",
        year: "2021",
        category: "mystery",
        image: "../img/am.jpg",
        alt: "Cover for Angel Maker",
    },
    {
        title: "The Girl on the Train",
        author: "Paula Hawkins",
        year: "2015",
        category: "mystery",
        image: "../img/tgott.jpg",
        alt: "Cover for The Girl on the Train",
    },
    {
        title: "The Blackhouse",
        author: "Peter May",
        year: "2011",
        category: "mystery",
        image: "../img/tblackhouse.jpg",
        alt: "Cover for The Blackhouse",
    },
    {
        title: "The Lewis Man",
        author: "Peter May",
        year: "2011",
        category: "mystery",
        image: "../img/tlm.jpg",
        alt: "Cover for The Lewis Man",
    },
    {
        title: "The Chessmen",
        author: "Peter May",
        year: "2012",
        category: "mystery",
        image: "../img/tchessmen.jpg",
        alt: "Cover for The Chessmen",
    },
    {
        title: "The Sixth Victim",
        author: "Tessa Harris",
        year: "2017",
        category: "mystery",
        image: "../img/tsv.jpg",
        alt: "Cover for The Sixth Victim",
    },
    {
        title: "Rules for Perfect Murders",
        author: "Peter Swanson",
        year: "2020",
        category: "mystery",
        image: "../img/rfpm.jpg",
        alt: "Cover for Rules for Perfect Murders",
    },
    {
        title: "The Confession",
        author: "Jo Spain",
        year: "2018",
        category: "mystery",
        image: "../img/tconfession.jpg",
        alt: "Cover for The Confession",
    }
]

// catching elements
const library = document.querySelector('#library');
const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');
const resetBtn = document.querySelector('#resetBtn');
const alphBtn = document.querySelector('#alph');
const chronBtn = document.querySelector('#chron');
const catBtn = document.querySelector('#cat');
const displayNoneSearch = document.querySelector('#warning-search')
const displayNoneAdd = document.querySelector('#warning-add')

// for adding a new book to local storage
const listOfInputs = document.querySelectorAll('#addBookForm input');
const addTitleInput = document.querySelector('#addTitle');
const addAuthorInput = document.querySelector('#addAuthor');
const addYearInput = document.querySelector('#addYear');
const addCatInput = document.querySelector('#addCat');
const addImgInput = document.querySelector('#addImg');
const addBookBtn = document.querySelector('#addBookBtn');

// sorting collections by a given key
const sortBy = (collection, key) => collection.sort((a, b) => a[key] > b[key] ? 1 : -1)

// validating searchInput
const validateInput = input => input.value.length > 2;

// getting the collection from localStorage
let storedLibrary = localStorage.getItem('Library');;

// showing the library by any collection
const showLibrary = (collection) => {
    library.innerHTML = '';
    collection.forEach(book => {
        library.innerHTML +=
            `
            <li class="book__item">
                <img class="book__img" src="${book.image}" alt="${book.alt}">
                <div class="book_details">
                    <p><span class="book__title">${book.title}</span></p>
                    <p>By: <span class="book__author">${book.author}</span></p>
                    <p>Release year: <span class="book__pubyear">${book.year}</span></p>
                    <p>Category: <span class="book__cat">${book.category}</span></p>
                </div>
            </li>
    `
    })
}

// reseting the searchInput and warning message
const handleReset = () => {
    searchInput.value = '';
    displayNoneSearch.classList.add('display-n');
}

// reading and validating searchInput, then filtering the library view
const handleSearch = (event) => {
    event.preventDefault();
    const isValid = validateInput(searchInput);
    if (!isValid) {
        displayNoneSearch.classList.remove('display-n');
        return
    }
    const filteredBooks = JSON.parse(storedLibrary).filter(book => book.title.toLowerCase().includes(searchInput.value.toLowerCase()))
    showLibrary(filteredBooks);
    handleReset();
}

const clearInputs = () => {
    listOfInputs.forEach(input => input.value = '')
}

// adding book to the local storage and presenting it on the website
const handleAddingBook = (event) => {
    event.preventDefault();
    const isValid = [...listOfInputs].map(input => validateInput(input)).filter(item => item === false);
    if (isValid.length !== 0) {
        displayNoneAdd.classList.remove('display-n');
        return
    }

    const newBook =
    {
        title: addTitleInput.value,
        author: addAuthorInput.value,
        year: addYearInput.value,
        category: `${addCatInput.value.toLowerCase()}`,
        image: addImgInput.value,
        alt: `Cover for ${addTitleInput.value}`,
    }

    localStorage.setItem('Library', JSON.stringify(JSON.parse(storedLibrary).concat(newBook)))
    clearInputs();
    displayNoneAdd.classList.add('display-n');
    showLibrary(JSON.parse(storedLibrary))
}

// adding event to the search and reset searchInput and buttons
searchForm.addEventListener('submit', handleSearch)
searchBtn.addEventListener('click', handleSearch)
resetBtn.addEventListener('click', () => {
    showLibrary(JSON.parse(storedLibrary));
    handleReset();
})

// adding event to the addBook form and button
addBookBtn.addEventListener('click', handleAddingBook)

// adding events to the category buttons
alphBtn.addEventListener('click', () => {
    showLibrary(sortBy(JSON.parse(storedLibrary), 'title'))
})
chronBtn.addEventListener('click', () => {
    showLibrary(sortBy(JSON.parse(storedLibrary), 'year'))
})
catBtn.addEventListener('click', () => {
    showLibrary(sortBy(JSON.parse(storedLibrary), 'category'))
})

// showing the library for the 1st time
if (localStorage.getItem('Library')) {
    showLibrary(JSON.parse(storedLibrary));

} else {
    showLibrary(listOfBooks);
    localStorage.setItem('Library', JSON.stringify(listOfBooks))
    storedLibrary = localStorage.getItem('Library');
}