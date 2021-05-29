export function idbPromise(storeName, method, object) {
    return new Promise((resolve, reject) => {
        // open connection to the database "wren", with the version of 1
        const request = window.indexedDB.open('wren', 1);

        // create variables to hold reference to the database, transaction 
        let db, tx, store

        // if version has changed (or if this is the first time using the database), run this method and create the three object stores
        request.onupgradeneeded = function(e) {
            const db = request.result;
            // create object store for each type of data and set "primary" key index to be the '_id' of the data
            // db.createObjectStore('something', { keyPath: 'id' });
            // db.createObjectStore('something', { keyPath: 'id' });
            // db.createObjectStore('something', { keyPath: 'id' });
        };

        // handle any errors with connecting
        request.onerror = function(e) {
            console.log('There was an error connecting to indexDB');
        }
    })
}