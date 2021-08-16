
'use strict';
const supertest =require('supertest');
const server =require('../src/server.js');
const request =supertest(server.server);

describe('express server',()=>{
    it('shoud check the Iam working successfully',async ()=>{
        // arrange 
        let param='/';
        let status = 200;
        let text = 'Iam working';
        // act 
        const response= await request.get(param);
        // assert
        expect(response.status).toBe(status);
        expect(response.text).toBe(text);
    });
    it('shoud check the person it works successfully',async ()=>{
        // arrange 
        let param='/person';
        let status = 500;
      
        // act 
        const response= await request.get(param);
        // assert
        expect(response.status).toBe(status);
        expect(typeof response.body).toEqual('object');
    });
    
    it('shoud check 500 errors',async ()=>{
        // arrange 
        let param='/person';
        let status = 500;
      
        // act 
        const response= await request.get(param);
        // assert
        expect(response.status).toBe(status);
        expect(typeof response.body).toEqual('object');
    });
    it('shoud check 404 not found errors', async () => {
        // arrange
        let param = '/notfound';
        let status = 404;
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
    });
})