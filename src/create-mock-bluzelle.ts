import { LocalStorage as NodeStorage } from 'node-localstorage';

import createBluzelleInterface from './bluzellifier';

export default function createMockBluzelle(storageLocation = '/tmp/scratch'){
	const bddConnection = createBluzelleInterface(new NodeStorage(storageLocation));
	
	return bddConnection({private:'fake', public:'morefake'}); 
}
