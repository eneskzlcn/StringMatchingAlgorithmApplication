/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate,
    dropDown
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async() => {
    await openBrowser({
        headless: headless
    })
});

afterSuite(async() => {
    await closeBrowser();
});

step("Open String Application", async function() {
    await goto("http://localhost:8080/");
});

step("Write text <text>", async function(text) {
    await write(text);
    await press("Tab");
});

step("Write Pattern <pattern>", async function(pattern) {
    await write(pattern);
    await press("Tab");
});
step("Select Algorithm <name>", async function(name) {
    await press('ArrowDown');
    await dropDown('Choose Algorithm').select(name);
});
step("Click Add", async function() {
    await click("Add");
});