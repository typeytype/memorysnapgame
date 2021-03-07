document.addEventListener('DOMContentLoaded', () => {

    //card options
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
    
    cardArray.sort(() => 0.5 - Math.random())
    
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    
    
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/200px-Question_mark_%28black%29.svg.png')
        card.setAttribute ('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
    }
    
    
    
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
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = ' Congratulations! You found them all!'
        }
    }
    
    
    
    
    
    function flipCard () {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
        }
    
    
    
    
    createBoard()
    
    
    
    }) 