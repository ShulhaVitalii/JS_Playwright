import { test as myTest} from "@playwright/test";

type user = {
    name: string,    
    age: number,
    email: string
}

const myFixturetest = myTest.extend<user>({
    name: "user1",
    age: 27,
    email: "example@com.ua"
})

export const test = myFixturetest;