import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  const jDB =await openDB('jate, 1');
  const txs = jDb.transaction ('jate', 'readwrite');
  const store = txs.objectStore.put({ id:1, value: content});
  const request = store.put ({id:1, value: content});
  const result = await request;
  console.log ('data saved', result.value);

  //console.error('putDb not implemented');
};

export const getDb = async () => {
  console.log ('GET from database')


//connect to target database
  const jDb =await openDB('jate, 1');

//new instance/specific database and permissions
  const txs = jDb.transaction ('jate', 'readonly');

//open object store
  const store = txs.objectStore ('jate');

//get all data
  const request = store.get(1);

//confirm request
  const result = await request;

//console.error('getDb not implemented');

result ? (result.value):
  console.log ('getDb not impletmented')
return result.value;
};

initdb();
