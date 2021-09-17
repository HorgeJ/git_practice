// Store Message Components in an array of objects

const arrInspoMessages = [
    {
        author: 'Jorge Sagastume',
        quote: "Testing 1, 2, 3",
        year: 2021 
    },
    {
        author: 'Steve Jobs',
        quote: "Sometimes life is going to hit you in the head with a brick. Don't lose faith.",
        year: 2002 
    },
    {
        author: 'Martin Fowler',
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        year: 2019 
    },
    {
        author: ' John Johnson',
        quote: "First, solve the problem. Then, write the code.",
        year: 2008 
    }
]

function getRandomMessage(arr){
   let i =  Math.floor(Math.random() * arr.length);

    return `${arr[i].quote} - ${arr[i].author} ${arr[i].year}`
}


console.log(getRandomMessage(arrInspoMessages));