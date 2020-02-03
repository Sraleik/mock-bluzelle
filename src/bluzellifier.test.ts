import { execSync } from 'child_process';
import mockBluzellePromise  from './create-mock-bluzelle';

let mockBluzelle: any;

describe('Bluzellifier', () => {
    beforeAll(async function() {
		mockBluzelle = await mockBluzellePromise('./scratch');
    });

	afterAll(function() {
		execSync('rm -rf ./scratch/*');
	});

    test('Should create the key and save value', async () => {
		await mockBluzelle.create('john', 'doe');
		
        expect(await mockBluzelle.read('john')).toBe('doe');
	});
	
    test('Should reject on already created key', async () => {
		await mockBluzelle.create('dark', 'vador');

		await expect(mockBluzelle.create('dark', 'sidious')).rejects.toEqual(new Error('The key: dark already exist'));
	});

    test('Should return null on inexisting key', async () => {
		expect(await mockBluzelle.read('tintin'))
	});

    test('Should update the key and save value', async () => {
        await mockBluzelle.create('battle', 'beast');
		await mockBluzelle.update('battle', 'black');

        expect(await mockBluzelle.read('battle')).toBe('black');
	});

    test('Should reject on a key that doesnt exist', async () => {
		await expect(mockBluzelle.update('bill', 'burr')).rejects.toEqual(new Error('The key: bill doesn\'t exist'));
	});

    test('Should remove an existing key', async () => {
        await mockBluzelle.create('toremove', 'yeah');
		await mockBluzelle.delete('toremove');

		expect(await mockBluzelle.has('toremove')).toBe(false)
	});

    test('Should resolve on removal of an inexisting key', async () => {
		expect(await mockBluzelle.delete('jordan')).resolves
	});

    test('Should return true if the key exist', async () => {
        await mockBluzelle.create('bugs', 'bunny');

		expect(await mockBluzelle.has('bugs')).toBe(true)
	});
});