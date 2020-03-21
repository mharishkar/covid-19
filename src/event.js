const BASE_URL = 'https://api.covid19api.com';

const EventHanlder = ({eventName, options}) => {
	const event = {
		all: () => {
			return (
				fetch(`${BASE_URL}/all`)
				.then(res => {
					if (res.ok) {
						return res;
					} else {
						throw new Error('Something went wrong');
					}
				})
			)
		},
		byCountry: ({country, status}) => {
			return (
				fetch(`${BASE_URL}/total/country/${country}/status/${status}`)
				.then(res => {
					if (res.ok) {
						return res.json();
					} else {
						throw new Error('Something went wrong');
					}
				})
			)
		},
		summary: () => {
			return (
				fetch(`${BASE_URL}/summary`)
				.then(res => {
					if (res.ok) {
						return res.json();
					} else {
						throw new Error('Something went wrong');
					}
				})
			)
		}
	};
	return event[eventName](options);
};

export default EventHanlder;
