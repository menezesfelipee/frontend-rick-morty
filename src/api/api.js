export const Api = {
	baseUrl: "https://rickandmorty-back.herokuapp.com/",

	createUrl: () => Api.baseUrl + "/characters/insert",

	readAllUrl: () => Api.baseUrl + "/characters",
	readSingleUrl: (id) => Api.baseUrl + "/characters/" + id,

	updateUrl: (id) => Api.baseUrl + "/characters/update/" + id,

	deleteUrl: (id) => Api.baseUrl + "/characters/delete/" + id,
	deleteAllUrl: () => Api.baseUrl + "/characters/deleteAll",

	// Create
	buildApiPostRequest: (url, body) => {
		return fetch(url, {
			method: "POST",
			headers: new Headers({
				"Content-type": "application/json",
			}),
			body: JSON.stringify(body),
		});
	},

	// ReadAll
	buildApiGetRequest: (url) => {
		return fetch(url, {
			method: "GET",
		});
	},

	// UpdateById
	buildApiPutRequest: (url, body) => {
		return fetch(url, {
			method: "PUT",
			headers: new Headers({
				"Content-type": "application/json",
			}),
			body: JSON.stringify(body),
		});
	},

	// DeleteAll
	buildApiDeleteRequest: (url) => {
		return fetch(url, {
			method: "DELETE",
		});
	},
};
