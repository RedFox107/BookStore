import img from "../images/someTestBook.jpg";


const API = {
    lastBookId: 0,
    data(){
        return [
            {
                id: this.lastBookId++,
                bookName: 'TestBookName '+(this.lastBookId ),
                author: 'SomeAuthor1',
                cost: 300,
                photoUrl: img
            },
            {
                id: this.lastBookId++,
                bookName: 'TestBookName '+(this.lastBookId ),
                author: 'SomeAuthor2',
                cost: 345,
                photoUrl: img
            },
            {
                id: this.lastBookId++,
                bookName: 'TestBookName '+(this.lastBookId ),
                author: 'SomeAuthor3',
                cost: 108,
                photoUrl: img
            }
        ]
    },
    getBooks: () => new Promise(resolve => {
        setTimeout(() => {
            resolve(API.data())
        }, 1500)
    })


}

export default API;