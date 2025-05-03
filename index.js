const axios = require('axios');
const fs = require('fs');
const { get } = require('https');
const { title } = require('process');
//log error with timestamps
function logError(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ERROR: ${message}\n`;
    fs.appendFileSync('error.log',logMessage);
}
//create
async function createPost() {
    try{
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title:'Test Title',
            body: 'Test Body',
            userId: 1
        });
        console.log('create:',res.data);
    } catch (err) {
        logError(`create failed : ${err.message}`);
    }
}
//read
async function getPosts() {
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/wrongposts'); 
        console.log('read:',res.data.slice(0, 2));
    } catch (err) {
        logError(`read failed: ${err.message}`);
    }
}
//update
async function updatePost() {
    try{
        const res = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            title:'updated Title',
            body: 'updated Body'
        });
        console.log('update:',res.data);
    } catch (err) {
        logError(`update failed : ${err.message}`);
    }
}
//delete
async function deletePost() {
    try{
        const res = await axios.delete('https://jsonplaceholder.typicode.com/posts/1'); 
        console.log('delete:', res.status === 200 ? 'deleted' : 'not deleted');
    } catch (err) {
        logError(`delete failed: ${err.message}`);
    }
}
//run all crud functions
async function runAll() {
    await createPost();
    await getPosts();
    await updatePost();
    await deletePost();
}

runAll();