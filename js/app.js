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
        title: "The Savage Night",
        author: "P.T. Hylton, Jonathan Benecke",
        year: "2018",
        category: "si-fi",
        image: "../img/vw1.jpg",
        alt: "Cover for The Savage Night",
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
const form = document.querySelector('#searchForm');
const input = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');
const resetBtn = document.querySelector('#resetBtn');
const alphBtn = document.querySelector('#alph');
const chronBtn = document.querySelector('#chron');
const catBtn = document.querySelector('#cat');
const displayNone = document.querySelector('.display-n')


// creating copies of the db before sorting
// Is there any better way of avoiding destructiveness of sort()? Or is copying into new arrays fine?
const alphabeticalOrder = listOfBooks.slice();
const sortedlistOfBooks = listOfBooks.slice();
const listOfBooksByCat = listOfBooks.slice();

// sorting listOfBooks by year of release, title and category
alphabeticalOrder.sort((a, b) => a.title > b.title ? 1 : -1);
sortedlistOfBooks.sort((a, b) => a.year > b.year ? 1 : -1);
listOfBooksByCat.sort((a, b) => a.category > b.category ? 1 : -1)

// validating input

const validateInput = () => {
    return input.value.length > 2;
}

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

// reading and validatin input, then filtering the library view
const handleSearch = (event) => {
    event.preventDefault();

    const isValid = validateInput();
    if (!isValid) {
        displayNone.classList.remove('display-n');
        return
    }

    const filteredBooks = listOfBooks.filter(book => book.title.toLowerCase().includes(input.value.toLowerCase()))

    showLibrary(filteredBooks);

    input.value = '';
    displayNone.classList.add('display-n');
}

// adding event to the search and reset input and buttons
form.addEventListener('submit', handleSearch)
searchBtn.addEventListener('click', handleSearch)
resetBtn.addEventListener('click', () => {
    showLibrary(listOfBooks);
    displayNone.classList.add('display-n');
})

// adding events to the category buttons
alphBtn.addEventListener('click', () => {
    showLibrary(alphabeticalOrder)
})
chronBtn.addEventListener('click', () => {
    showLibrary(sortedlistOfBooks)
})
catBtn.addEventListener('click', () => {
    showLibrary(listOfBooksByCat)
})

// showing the library for the 1st time
showLibrary(listOfBooks);
