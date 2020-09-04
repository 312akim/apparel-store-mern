export const PRODUCTS = [
    {
        id: 0,
        name: "Apple T-Shirt",
        images: [{src: require("./images/1.jpg")}, {src: require("./images/2.jpg")}, {src: require("./images/3.jpg")}],
        featured: true,
        price: 45,
        description: "This is the description",
        category:["shirt"],
        color: ["red", "white"]
    },
    {
        id: 1,
        name: "Babe Pants",
        images:  [{src: require("./images/2.jpg")}, 
        {src: "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}],        
        featured: true,
        price: 45,
        description: "This is the description",
        category:["pants"],
        color: ["red", "white"]
    },
    {
        id: 2,
        name: "Carlton T-Shirt",
        images:  [{src: require("./images/3.jpg")}, 
        {src: "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}],        
        featured: false,
        price: 45,
        description: "This is the description",
        category:["shirt"],
        color: ["red", "white"]
    },
    {
        id: 3,
        name: "Dapper Jacket",
        images:  [{src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}, 
        {src: "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}],        
        featured: true,
        price: 45,
        description: "This is the description",
        category:["jacket"],
        color: ["red", "white"]
    },
    {
        id: 4,
        name: "Everstar T-Shirt",
        images:  [{src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}, 
        {src: "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}],        featured: true,
        price: 45,
        description: "This is the description",
        category:["shirt"],
        color: ["red", "white"]
    },
]