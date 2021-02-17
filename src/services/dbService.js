'use strict';

import utilService from './utilService.js';

const ID_FIELD = '_id';

export const dbService = {
    query,
    get,
    remove,
    post,
    put,
    insert
}

function query(collectionName) {
    var collection = utilService.loadFromStorage(collectionName) || []
    return Promise.resolve(collection);
}

async function get(collectionName, id) {
    var collection = await query(collectionName);
    return collection.find(curr => curr[ID_FIELD] === id);
}

async function remove(collectionName, id) {
    var collection = await query(collectionName);
    var idx = collection.findIndex(curr => curr[ID_FIELD] === id);
    if (idx === -1) throw new Error('something went wrong');
    collection.splice(idx, 1);

    utilService.saveToStorage(collectionName, collection);
    return Promise.resolve();
}

async function post(collectionName, item) {
    var collection = await query(collectionName);

    item[ID_FIELD] = utilService.getRandomId();
    collection.push(item);

    utilService.saveToStorage(collectionName, collection);
    return Promise.resolve(item);
}

async function put(collectionName, item) {
    var collection = await query(collectionName);

    let idx = collection.findIndex(curr => curr[ID_FIELD] === item[ID_FIELD]);
    if (idx === -1) throw new Error('something went wrong');
    collection[idx] = item;

    utilService.saveToStorage(collectionName, collection);
    return Promise.resolve(item);
}

async function insert(collectionName, items) {
    var collection = await query(collectionName);
    items.forEach(curr => curr[ID_FIELD] = utilService.getRandomId());
    collection.push(...items);

    utilService.saveToStorage(collectionName, collection);
    return Promise.resolve();
}