/* The code below creates the functionality of the memory snap game. The opening line of code ensures that the script runs upon page load. */

document.addEventListener('DOMContentLoaded', () => {

/* The next line of code is a variable. This variable contains all the data needed for the cards that the user will be trying to match. The variable is an array of value:key pairs that name the card and give it an image url. It is clear that there are diuplicate values but this is intentional as there will be two of each cards. */
    const cardArray = [
    
    {
    name: 'cheeseburger',
    img: 'https://images-na.ssl-images-amazon.com/images/I/41F9V25c9KL._AC_SX466_.jpg'
    },
    {
    name: 'cheeseburger',
    img: 'https://images-na.ssl-images-amazon.com/images/I/41F9V25c9KL._AC_SX466_.jpg'
    },
    {
    name: 'fries',
    img: 'https://i.pinimg.com/originals/bd/8c/21/bd8c2182aa348d9c6540ec2c734ba7de.jpg'
    },
    {
    name: 'fries',
    img: 'https://i.pinimg.com/originals/bd/8c/21/bd8c2182aa348d9c6540ec2c734ba7de.jpg'
    },
    {
    name: 'hotdog',
    img: 'https://st.depositphotos.com/1354412/1284/v/600/depositphotos_12843271-stock-illustration-hot-dog-character-giving-thumbs.jpg'
    },
    {
    name: 'hotdog',
    img: 'https://st.depositphotos.com/1354412/1284/v/600/depositphotos_12843271-stock-illustration-hot-dog-character-giving-thumbs.jpg'
    },
    {
    name: 'icecream',
    img: 'https://graphicriver.img.customer.envatousercontent.com/files/278687767/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=2458aaa68a74bbd4f9ed398ac55fb82a'
    },
    {
    name: 'icecream',
    img: 'https://graphicriver.img.customer.envatousercontent.com/files/278687767/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=2458aaa68a74bbd4f9ed398ac55fb82a'
    },
    {
    name: 'milkshake',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMlyGtNY5v66iDp6AEXILLAlpm_qzeLGZXng&usqp=CAU'
    },
    {
    name: 'milkshake',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMlyGtNY5v66iDp6AEXILLAlpm_qzeLGZXng&usqp=CAU'
    },
    {
    name: 'pizza',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtaqpHWo20J4zycXpOJxyf0gYYC3SIZhkDug&usqp=CAU'
    },
    {
    name: 'pizza',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtaqpHWo20J4zycXpOJxyf0gYYC3SIZhkDug&usqp=CAU'
    }
    
    ]
    
/* Next we shuffle our deck of cards, so to speak. */

    cardArray.sort(() => 0.5 - Math.random())

    /* This is a list of variables. These variables will be used at various stages as we continue below. */
    
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    
    /* Now a function is created that uses a for loop to provide information for our intial board state and each card that will appear to beegin with. All the cards will be question marks until clicked, but you could use any image such as a back of a card, the style is functionally nebulous. The information provided by the for loop is the image url, a numeric identifier, an onclick event listener that will call the flipCard function that is defined lower in the script and finally the appending of the card to the grid ie the presence of the card in our html grid.  */
    
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/200px-Question_mark_%28black%29.svg.png')
        card.setAttribute ('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
    }
    
    /* Now a different function is called. A variable cards is described as the images on our webpage. Further variables are described as two arrays that are assessed for sameness to determine if the cards are matches. If the arrays match ie if the two cards were the same then an alert is triggered with a positive message, the two cards are replaced by blank images and also the matching cards are pushed to a new array that is off-grid, to store them away from the ongoing game on our grid. If the arrays or chosen cards are not equal or matching, respectively, then the cards have the initial state reinstated, that is in this instance a question mark image is imposed on the card space as before and a negative alert is triggered.  */
    
    function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'https://www.designersguild.com/image/1024/59518')
        cards[optionTwoId].setAttribute('src', 'https://www.designersguild.com/image/1024/59518')
    cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute ('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/200px-Question_mark_%28black%29.svg.png')
        cards[optionTwoId].setAttribute ('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/200px-Question_mark_%28black%29.svg.png')
        alert('Sorry, try again')
    }

    /* To keep track of the number of matching selections the html element with id result has the cardsWon array's number of entries printed in its span. Once the user has selected a complete set of pairs, ie the total number of cards divided by two, this element prints a string that informs them of their success. */
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = ' Congratulations! You found them all!'
        }
    }
    
    
    
    /* Now a function is called that provides the user the capability to select a card. Above the flipCard function is described as onclick for the cards, and theese cards were described as the images on our html page. First a variable is described as the aforementioned numeric identifier supplied by the for loop, for the individual cards. This identifier distinguishes them from the other cards. Once selected the card identifier is used to populate two arrays with specific datasets. The first is the cardsChosen array which is pushed with sufficient data to tell apart even two matching cards though does record the card name as well for the purpose of matching. The second array is the cardsChosenId array which is pushed with only the unique identifer of the chosen card, simply logging the precise card that is held in the user selection.
    
    Next the attribute of this image is modified to show an updated image that is the one of the undisguised card ie the actual image that the user is trying to match up instead of the question mark or back of the card. This is helpful as otherwise the user would have to randomly click to see if they match, but now they can also try to remember the positions of each card, which is part of the memory snap game. Finally an if check is passed that ensures the user can't click a third selection before an alert is triggered by browser. In an extreme case it might be feasibly possible that a small enough timeout is not sufficient so it is better to make this longer than shorter, generally. This prevents a game breaking bug that the script is incapable of dealing with, such as the selection of a third card. */
    
    function flipCard () {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
        }
    
    /* Now that are scripts are finished it is time to create the board. This function has been discussed above and brings to a conclusion our Javascript for the memory snap game. */
    
    
    createBoard()
    
    
    
    }) 

    