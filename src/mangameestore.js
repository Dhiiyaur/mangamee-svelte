import { writable } from 'svelte/store';

const MangameeBeApi = 'https://go-mangamee.herokuapp.com';

const ApiBrowse = `${MangameeBeApi}/browse`
const ApiSearch = `${MangameeBeApi}/search`
const ApiManga = `${MangameeBeApi}/manga`
const ApiRead = `${MangameeBeApi}/page`


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

export const fetchMangaChapter = async (lang, mangaTitle) => {
    
    try {
        const url = ApiManga;
        const res = await fetch(url + `?lang=${lang}&mangaTitle=${mangaTitle}`);
        const data = await res.json();
        return data;
    } catch (err) {

        console.log(err)
        return null
    }

}

export const fetchMangaImage = async (lang, mangaTitle, chapter) => {
    
    try {
        const url = ApiRead;
        const res = await fetch(url + `?lang=${lang}&mangaTitle=${mangaTitle}&chapter=${chapter}`);
        const data = await res.json();
        return data;
    } catch (err) {

        console.log(err)
        return null
    }

}


