export const TodoSchema = {
    name: 'Todo',
    primaryKey: 'id',
    properties: {
        id: 'string',
        description: {type: 'string', indexed: true},
        isCompleted: {type: 'bool', default: false},
    }
};