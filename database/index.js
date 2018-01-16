export let db = [{mynd: 'rocket', svar: 'eldflaug'},
					{mynd: 'automobile', svar: 'bíll'},
					{mynd: 'bicycle', svar: 'reiðhjól'},
					{mynd: 'circle', svar: 'hringur'},
					{mynd: 'female', svar: 'kona'},
					{mynd: 'flag', svar: 'fáni'},
					{mynd: 'home', svar: 'heimili'},
					{mynd: 'heart', svar: 'hjarta'},
					{mynd: 'plane', svar: 'flugvél'},
					{mynd: 'shower', svar: 'sturta'},
					{mynd: 'phone', svar: 'sími'},
					{mynd: 'ship', svar: 'skip'},
					{mynd: 'smile-o', svar: 'bros'},
					{mynd: 'soccer-ball-o', svar: 'fótbolti'},
					{mynd: 'tree', svar: 'tré'},
					{mynd: 'truck', svar: 'flutningabíll'},
					{mynd: 'euro', svar: 'evra'},
];

export function shuffle(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
            
        let r = parseInt(Math.random() * (i + 1));
        let swap = arr[r];
       	arr[r] = arr[i];
        arr[i] = swap;
    }
    return arr;
}

export function random3(index, n) {
	let arr = [index];
	while (true) {
		let r = parseInt(Math.random()*n);
		let b = true;
		for (let j = 0; j < arr.length; j++) {
			if (r === arr[j]) {
				b = false;
				break;
			}
		}
		if (b) {
			arr.push(r);
			if (arr.length > 3) {
				break;
			}
		}
	}
	return shuffle(arr);
}