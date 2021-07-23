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

export const updateCompletion =  (todoID) => new Promise<void>((resolve, reject) => {
    Realm.open(config).then(realm => {
        realm.write(()=>{
            let updatingRow:TodoProps = realm.objectForPrimaryKey('Todo', todoID);
            if (updatingRow.isCompleted == true) {
                updatingRow.isCompleted = false;
            } else {
                updatingRow.isCompleted = true;
            }
            resolve();            
        })
        console.log('LOG: TODO COMPLETION UPDATED');
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

// export const deleteAllTodos = () => new Promise<void>((resolve, reject) => {
//     Realm.open(config).then(realm => {
//         realm.write(()=>{
//             let updatingRows = realm.objects('Todo');
//             realm.delete(updatingRows);
//             resolve();            
//         })
//     }).catch((error) => reject(error));
// });

export const getAllTodos = () => new Promise((resolve, reject) => {
    let allTodos;
    Realm.open(config).then(realm => {
        allTodos = realm.objects('Todo');
        let count = allTodos.length;
        console.log(count);
        for (let i = 0; i < count; i++) {
            console.log(allTodos[i].id, allTodos[i].description);
            existingID[i] = allTodos[i].id
            existingDesc[i] = allTodos[i].description;
            existingCompletion[i] = allTodos[i].isCompleted;
        }
        resolve(allTodos);  
    }).catch((error) => reject(error));
 });

 getAllTodos();
 export let existingID = [];
 export let existingDesc = [];
 export let existingCompletion = [];
