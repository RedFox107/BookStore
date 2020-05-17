import img from "../images/someTestBook.jpg";


const API= {
    getBooks: async () =>
        [
            {
                id: Math.floor(Math.random()*10+Math.random()*10),
                bookName: 'TestBookName',
                author: 'SomeAuthor',
                cost: 300,
                photoUrl: img
            },
            {
                id: Math.floor(Math.random()*10+20+Math.random()*10),
                bookName: 'TestBookName',
                author: 'SomeAuthor',
                cost: 345,
                photoUrl: img
            },
            {
                id: Math.floor(Math.random()*10+50+Math.random()*10),
                bookName: 'TestBookName',
                author: 'SomeAuthor',
                cost: 108,
                photoUrl: img
            }
        ]
}

export default API;