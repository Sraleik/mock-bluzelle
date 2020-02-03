# Mock Bluzelle 

## Description

Simple mock of bluzelle 

create the bluzelle interface for a key value storage (like nodeStorage)

## Installation

```bash
npm install @sraleik/mock-bluzelle
```

```bash
yarn add @sraleik/mock-bluzelle
```

```bash
pnpm add @sraleik/mock-bluzelle
```

## Simple Usage 

```javascript
const createBluzelleBdd = require('./create-mock-bluzelle');
const mockBluzelle = await createBluzelleBdd();

await mockBluzelle.create('foo', 'bar')
simpleData = await mockBluzelle.read('foo')

console.log('simpleData',simpleData)
```
