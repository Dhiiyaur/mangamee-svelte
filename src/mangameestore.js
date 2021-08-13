import { writable } from 'svelte/store';

const MangameeBeApi = 'https://go-mangamee.herokuapp.com';

const ApiBrowse = `${MangameeBeApi}/browse`
const ApiSearch = `${MangameeBeApi}/search`



export const BrowseMangas = writable([]);
export const fetchBrowseManga = async (id) => {
    
    const url = ApiBrowse;
    const res = await fetch(url + `?pageNumber=${id}`);
    const data = await res.json();
    BrowseMangas.set(data);

}


export const SearchMangas = writable([]);
export const fetchSearchManga = async (lang, mangaTitle) => {
    
    const url = ApiSearch;
    const res = await fetch(url + `?lang=${lang}&mangaTitle=${mangaTitle}`);
    const data = await res.json();
    SearchMangas.set(data);

}
