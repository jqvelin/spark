"use server";

export const addTodo = async () => {
    fetch(`https://jsonplaceholder.typicode.com/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: "Hello world" })
    });
};
