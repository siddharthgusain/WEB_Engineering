/*
-> Now after loading both the scripts we have access to all the helper classes and functions from window object

-> The same thing that we used to write in vanilla JS , we can do that in less lines of code with
helper functions

-> React is considered declarative because we only decalre UI , not render it to DOM
-> Generally you will see , we don't really touch DOM API i.e document.getElementbyID type functions
-> In javscript we have to create and append element to DOM with DOM APIS and have to focus a lot
on creating and removing element , React takes care  of it using its helper function.
*/

//----------------------USING REACT HELPER FUNCTIONS TO CREATE OUR COMPONENT----------------

console.log("-------------WELCOME TO REACT--------------------");

'use strict';

class LikeButton extends React.Component {
    constructor(props) {
        console.log("INSIDE CONSTRUCTOR PROPS", props);
        super(props);
        this.state = { liked: false };
    }

    render() {
        console.log("INSIDE RENDER");
        if (this.state.liked) {
            return 'You liked this.';
        }

        const ele = window.React.createElement(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );

        return ele;
    }
}

const domContainer = document.querySelector('#root'); // select the root div present in HTML

const root = window.ReactDOM.createRoot(domContainer);

root.render(window.React.createElement(LikeButton)); // we are calling function "e" and passinf the result of createElement to render()

console.log("CREATED DOM ELEMENT", React.createElement(LikeButton));

//-----------------THIS IS OUR FIRST REACT COMPONENT----------------------------
/*
WE will create React App with build tools and will use more simpler syntax for developers
known as JSX which is transpiled by Babel
*/
