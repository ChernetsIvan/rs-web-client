import React, {Component} from 'react';

class ListsAndKeys extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return(
            <div>
                <b>Lists And Keys:</b>
                <ul>{listItems}</ul>
                As component:
                <NumberList numbers2={numbers} />
                Keys must only be unique among sublings:
                <Blog posts={posts} />
            </div>
        );
    }
}

export default ListsAndKeys;

const numbers = [1,2,3,4,5];
const listItems = numbers.map( (number) => <li>{number}</li> );

function NumberList(props){
    const numbers2 = props.numbers2;
    const listItems2 = numbers2.map( (n) => 
        //Correct! Key should be specified inside the array. 
        <ListItem key={n.toString()} value = {n} />        
    );
    return (
        <ul>{listItems2}</ul>
    );
}

function ListItem(props) {
    //Correct! There no need to specify the key here:
    return <li>{props.value}</li>
}

function Blog(props){
    const sidebar = (
        <ul>
            {props.posts.map((post)=>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post)=>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content:'You can install React from npm.'}
];