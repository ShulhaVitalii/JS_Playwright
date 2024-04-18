import { test, expect } from "@playwright/test";


test('get product', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products/1');
    expect(response).toBeOK();

});

test('search for products', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products', {
        params:{
            limit: 10,
            skip: 10,
            select: "title"
        }
    });
    console.log(await response.json());
    expect(response).toBeOK();

});

test('create product', async ({ request }) => {
    const response = await request.post('https://dummyjson.com/products/add', {
        data:{
            title: "bla bla bla"
        }
    });
    console.log(await response.json());
    expect(response).toBeOK();
});
