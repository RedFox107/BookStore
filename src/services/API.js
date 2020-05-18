import img from "../images/someTestBook.jpg";


const API= {
    getBooks: async () =>
        [
            {
                id: Math.floor(Math.random()*1000),
                bookName: 'TestBookName1',
                author: 'SomeAuthor1',
                cost: 300,
                photoUrl: img
            },
            {
                id: Math.floor(Math.random()*1000+20),
                bookName: 'TestBookName2',
                author: 'SomeAuthor2',
                cost: 345,
                photoUrl: img
            },
            {
                id: Math.floor(Math.random()*1000+50),
                bookName: 'TestBookName3',
                author: 'SomeAuthor3',
                cost: 108,
                photoUrl: img
            }
        ]
}

export default API;