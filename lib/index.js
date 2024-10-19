export default class Semaphore {

	constructor() {
		this._awaiters = [];
	}

	get _all() {
		const awaiters = [...this._awaiters];
		this._awaiters = [];
		return awaiters;
	}

	async wait() {
		await new Promise((resolve, reject) => {
			this._awaiters.push({ resolve, reject });
		});
	}

	signal(...args) {
		const awaiter = this._awaiters.shift();
		if (!awaiter) return;
		awaiter.resolve(...args);
	}

	broadcast(...args) {
		this._all.forEach(({ resolve }) => resolve(...args));
	}

	reject(error) {
		this._all.forEach(({ reject }) => reject(error));
	}

};
