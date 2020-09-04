/*
Project: Social News Program
Author: Navin Edward Alvares Prabhu
Source: Educative.io - Become a Frontend Engineer
*/

class Link {
    constructor(title, url, author) {
        let absurl = url;
        this.title = title
        if(!absurl.startsWith("http://") && !absurl.startsWith("https://")) {
            absurl = `http://${absurl}`;
        }
        this.url = absurl;
        this.author = author;
    }

    toString() {
        return `${this.title} (${this.url}). Author: ${this.author}`;
    }
    
}

const myLinks = [];
myLinks.push(new Link("Hacker News", "https://news.ycombinator.com", "Baptisete"));
myLinks.push(new Link("Google", "http://www.google.com", "Sergei"));
myLinks.push(new Link("Boing Boing", "boigboing.net", "Daniel"));

let choice;

while(choice !== 0) {
    choice = parseInt(prompt(`Choose an option:
        1: Shows Links
        2: Add a link
        3: Remove a link
        0: Quit
        `));
    //can do a switch on the user input and then perform the corresponding action
    switch(choice){
        case 0:
            alert("Thank you, have a nice day!")
            break;
        case 1:
            if(myLinks.length > 0) {
                for(let i = 0; i < myLinks.length; i++) {
                    alert(`${i +1}: ${myLinks[i].toString()}`);
                }
            } else {
                alert("No links to show");
            }
            
            break;
        case 2:
            let author = '';
            let url = '';
            let title = '';
            title = prompt('Enter link title');
            url = prompt('Enter link URL');
            author = prompt('Enter link author');
            myLinks.push(new Link(title, url, author))
            break;
        case 3:
            //Create a string from all the titles in the myLinks array
            let index = -1;
            if(myLinks.length > 0) {
                let lString = 'Current Links in Store';
                for(let i = 0; i < myLinks.length; i++) {
                    lString += `\n${i + 1}: ${myLinks[i].title}`;
                }
                while(index < 1 || index > myLinks.length) {
                    index = parseInt(prompt(lString));
                }
                myLinks.splice(index - 1, 1);    
                
                
            } else {
                alert("No links to remove");
            }
            break;
            
        default:
            alert("Please enter a value between 0 and 3");
    }           

}

