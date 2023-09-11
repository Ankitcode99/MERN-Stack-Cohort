const http = require('http');
const server = require('../todoServer')
const port = 8001;
const BASE_URL = 'http://localhost:' + port

describe('Todo Server Test Suite', () => {
    let globalServer;
    let createdTodoId;

    beforeEach((done)=>{
        if(globalServer){
            globalServer.close();
        }

        globalServer = server.listen(port)
        done();
    })

    afterAll((done)=>{
        globalServer.close(done);
    })

    const todo = {
        title: 'New Todo',
        description: 'Sample description for new Todo'
    }

    test('should create a new Todo', (done) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const req = http.request(BASE_URL + '/', options, (res)=>{
            expect(res.statusCode).toBe(201)
            let data = '';

            res.on('data', (chunk)=>{
                data += chunk;
            })

            res.on('end', ()=>{
                const response = JSON.parse(data)
                expect(response.id).toBeTruthy();
                createdTodoId = response.id;
                done();
            });
        });

        req.write(JSON.stringify(todo))
        req.end();
    });

    test('should retrieve all todos', (done) => {
        http.get(BASE_URL + '/', (res)=>{
            expect(res.statusCode).toBe(200)
            let data = '';

            res.on('data', (chunk)=>{
                data += chunk;
            })

            res.on('end', ()=>{
                const response = JSON.parse(data)
                expect(Array.isArray(response)).toBe(true);
                expect(response.length).toBe(1);
                expect(response[0].title).toBe(todo.title);
                expect(response[0].description).toBe(todo.description);
                done();
            });
        });
    });

    test('should retrieve a specific todo by ID', (done) => {
        http.get(BASE_URL + '/' + createdTodoId, (res)=>{
            expect(res.statusCode).toBe(200)
            let data = '';

            res.on('data', (chunk)=>{
                data += chunk;
            })

            res.on('end', ()=>{
                const response = JSON.parse(data)
                expect(response.id).toBe(createdTodoId);
                done();
            });
        });
    });

    test('should update a specific todo', (done) => {

        const updatedTodo = {
            title: 'Updated Todo',
            description: 'Sample description for updated Todo'
        }

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const req = http.request(BASE_URL + '/' + createdTodoId, options, (res)=>{
            expect(res.statusCode).toBe(200)
            done();
        });

        req.write(JSON.stringify(updatedTodo))
        req.end();
    });

    test('should delete a Todo', (done) => {
        const options = {
            method: 'DELETE',
        };

        const req = http.request(BASE_URL + '/' + createdTodoId, options, (res)=>{
            expect(res.statusCode).toBe(204)
            done();
        });
        req.end();
    });

    test('Testing 404', (done) => {
        http.get(BASE_URL + '/fake', (res)=>{
            expect(res.statusCode).toBe(404)
            done()
        });
    });
});