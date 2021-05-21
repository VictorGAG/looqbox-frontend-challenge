import api from './api';

export const getPokemon = (offset) => {
    const info = Promise.all([
        api.get(`/pokemon?offset=${offset}`, {
            validateStatus: function (status) {
                return status < 501;
            },
        }),
    ]).then(async (res) => {
        const [PushInfo] = res;
        const results = await PushInfo.data;
        return results;
    });
    return info;
}

export const getPokemonInfo = (url) => {
    var index = url.indexOf("pokemon");
    var endpoint = url.slice(index, url.length -1);

    const info = Promise.all([
        api.get(`${endpoint}`, {
            validateStatus: function (status) {
                return status < 501;
            },
        }),
    ]).then(async (res) => {
        const [PushInfo] = res;
        const results = await PushInfo.data;
        return results;
    });
    return info;
}

export const getSearchPokemon = (query) => {
        
    var name = query.toLowerCase();

    const info = Promise.all([
        api.get(`pokemon/${name}`, {
            validateStatus: function (status) {
                return status < 501;
            },
        }),
    ]).then(async (res) => {
        const [PushInfo] = res;
        const results = await PushInfo.data;
        return results;
    });
    return info;
}

export const getPokemonData = (query) => {

    const info = Promise.all([
        api.get(`pokemon/${query}`, {
            validateStatus: function (status) {
                return status < 501;
            },
        }),
    ]).then(async (res) => {
        const [PushInfo] = res;
        const results = await PushInfo.data;
        return results;
    });
    return info;
}

export const getDescription = (query) => {

    const info = Promise.all([
        api.get(`characteristic/${query}`, {
            validateStatus: function (status) {
                return status < 501;
            },
        }),
    ]).then(async (res) => {
        const [PushInfo] = res;
        const results = await PushInfo.data;
        return results;
    });
    return info;
}