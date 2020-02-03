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

### Simple Usage 

This will create a bluzelle like bdd using node-storage to persist data

```javascript
const { createMockBluzelle } = require('@sraleik/mock-bluzelle');
const mockBluzelle = await createMockBluzelle() 

await mockBluzelle.create('foo', 'bar')
simpleData = await mockBluzelle.read('foo')

console.log('simpleData',simpleData)
```

### Advance Usage 

This will create a bluzelle like bdd using your browser localStorage to persist data 

```javascript
const { bluzellifier } = require('@sraleik/mock-bluzelle');
const bluzelleLikeBdd = bluzellifier(window.localStorage)
const mockBluzelle = bluzelleLikeBdd({public: 'fake', private: 'morefake'})

await mockBluzelle.create('foo', 'bar')
simpleData = await mockBluzelle.read('foo')

console.log('simpleData',simpleData)
```