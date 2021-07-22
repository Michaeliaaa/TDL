import Realm from 'realm';
import { config } from '../database/config';
import { TodoProps } from '../components/Card';

export const insertTodo =  (todo) => new Promise((resolve, reject) => {
    Realm.open(config).then(realm => {
        realm.write(()=>{
            realm.create('Todo', todo);
            resolve(todo);
        })
    }).catch((error) => reject(error));
});

export const updateTodo =  (todo) => new Promise<void>((resolve, reject) => {
    Realm.open(config).then(realm => {
        realm.write(()=>{
            let updatingRow:TodoProps = realm.objectForPrimaryKey('Todo', todo.id);
            updatingRow.description = todo.description;
            resolve();            
        })
    }).catch((error) => reject(error));
});

export const removeTodo =  (todoID) => new Promise<void>((resolve, reject) => {
    Realm.open(config).then(realm => {
        realm.write(()=>{
            let updatingRow = realm.objectForPrimaryKey('Todo', todoID);
            realm.delete(updatingRow);
            resolve();            
        })
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
    Realm.open(config).then(realm => {
        const allTodos = realm.objects('Todo');
        //let findObject = realm.objectForPrimaryKey('Todo', '5f9d0e32-eac4-11eb-a557-933f742d456c');
        console.log(`There are ${allTodos.length} todos`);
        console.log({allTodos});
        //console.log(findObject);
        resolve(allTodos);  
    }).catch((error) => reject(error));
});
