import Realm from 'realm';
import { config } from '../database/config';
import { TodoProps } from '../components/Card';

export const insertTodo =  (todo) => new Promise((resolve, reject) => {
    Realm.open(config).then(realm => {
        realm.write(()=>{
            realm.create('Todo', todo);
            resolve(todo);
        })
        console.log('LOG: TODO INSERTED');
    }).catch((error) => reject(error));
});

export const updateTodo =  (todoID, todo) => new Promise<void>((resolve, reject) => {
    Realm.open(config).then(realm => {
        realm.write(()=>{
            let updatingRow:TodoProps = realm.objectForPrimaryKey('Todo', todoID);
            updatingRow.description = todo;
            resolve();            
        })
        console.log(realm.objectForPrimaryKey('Todo', todoID));
        console.log('LOG: TODO UPDATED');
    }).catch((error) => reject(error));
});

export const deleteATodo =  (todoID) => new Promise<void>((resolve, reject) => {
    Realm.open(config).then(realm => {
        realm.write(()=>{
            let updatingRow = realm.objectForPrimaryKey('Todo', todoID);
            realm.delete(updatingRow);
            resolve();            
        })
        console.log('LOG: TODO DELETED');
    }).catch((error) => reject(error));
});

export const deleteAllTodos = () => new Promise<void>((resolve, reject) => {
    Realm.open(config).then(realm => {
        realm.write(()=>{
            let updatingRows = realm.objects('Todo');
            realm.delete(updatingRows);
            resolve();            
        })
    }).catch((error) => reject(error));
});

export const getAllTodos = () => new Promise((resolve, reject) => {
    let allTodos;
    Realm.open(config).then(realm => {
        allTodos = realm.objects('Todo');
        //let findObject = realm.objectForPrimaryKey('Todo', '5f9d0e32-eac4-11eb-a557-933f742d456c');
        //console.log({allTodos});
        //console.log(findObject);
        resolve(allTodos);  
    }).catch((error) => reject(error));
    return allTodos;
});

export const getCount = () => new Promise((resolve, reject) => {
    let count: number = 0;
    Realm.open(config).then(realm => {
        count = realm.objects('Todo').length;
        resolve(count);
    }).catch((error) => reject(error));
    return count;
});