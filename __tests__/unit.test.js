// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber Tests
// 2 True

test('Phone number 1: Valid', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('Phone number 2: Valid', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

// 2 False

test('Phone number 3: Invalid', () => {
    expect(functions.isPhoneNumber('(aaa) bbb-cccc')).toBe(false);
});
test('Phone number 4: Invalid', () => {
    expect(functions.isPhoneNumber('abc-def-ghijk')).toBe(false);
});

// isEmail Tests
// 2 True

test('Email 1: Valid', () => {
    expect(functions.isEmail('fshaik@ucsd.edu')).toBe(true);
});
test('Email 2: Valid', () => {
    expect(functions.isEmail('gblake@gmail.com')).toBe(true);
});

// 2 False

test('Email 3: Invalid', () => {
    expect(functions.isEmail('thisismyemailaddress')).toBe(false);
});
test('Email 4: Invalid', () => {
    expect(functions.isEmail('(123) 456-7890')).toBe(false);
});

// isStringPassword tests
// 2 True

test('Password 1: Strong', () => {
    expect(functions.isStrongPassword('JeCaMiJe_')).toBe(true);
});
test('Password 2: Strong', () => {
    expect(functions.isStrongPassword('y347894z')).toBe(true);
});

// 2 False

test('Password 3: Weak', () => {
    expect(functions.isStrongPassword('j3$$')).toBe(false);
});
test('Password 4: Weak', () => {
    expect(functions.isStrongPassword('tri')).toBe(false);
});

// isDate Tests
// 2 True

test('Date 1: Valid', () => {
    expect(functions.isDate('02/17/1984')).toBe(true);
});
test('Date 2: Valid', () => {
    expect(functions.isDate('05/28/2023')).toBe(true);
});

// 2 False

test('Date 3: Invalid', () => {
    expect(functions.isDate('12/121212')).toBe(false);
});
test('Date 4: Invalid', () => {
    expect(functions.isDate('133/9/2022')).toBe(false);
});

// isHexColor Tests
// 2 True
test('Hex 1: Valid', () => {
    expect(functions.isHexColor('#00FFFF')).toBe(true);
});
test('Hex 2: Valid', () => {
    expect(functions.isHexColor('#0FF')).toBe(true);
});

// 2 False

test('Hex 3: Invalid', () => {
    expect(functions.isHexColor('#qwe')).toBe(false);
});
test('Hex 3: Invalid', () => {
    expect(functions.isHexColor('#e')).toBe(false);
});