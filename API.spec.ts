import {test,expect} from '@playwright/test';

const token='reqres_a0404be7b6ae444b95591ed787637f82'
const url='https://reqres.in/api/users/2';
test('API testing',async({request})=>{


    const response=await request.get(url,
        {headers:
            {'x-api-key':token}
        }
    );
    console.log( await response.json());
    expect( response.status()).toBe(200);

    const text=await response.text();

    console.log(text);

    expect(text).toContain('"Janet');


});