import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "quotes.json";

export async function getQuotes() {

}

//not take in any arguments
//read/parse all quote objects from `quotes.json`
//return an array of all existing quote objects
// const jsonData = JSON.parse()

import { readFile } from 'node:fs/promises';

async function readFromFile(fileName) {
    try {
        const data = await readFile(fileName, 'utf8');
        //parse the string content as json
        const quotes = JSON.parse(data)
        console.log(quotes);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}



export async function addQuote(quoteText) {

}

export async function getRandomQuote() {

}

export async function editQuote(id, quoteText) {

}

export async function deleteQuote(id) {

}
