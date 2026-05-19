const { test, expect } = require('@playwright/test');


test('GET Users API', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body.id).toBe(1);

});