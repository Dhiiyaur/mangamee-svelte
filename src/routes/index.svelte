<script>
    import { SearchMangas, fetchSearchManga } from "../mangameestore"
    import MangaCard from "../components/mangaCard.svelte"

    let searchTerm = "";
    
    const onKeyPress = e => {
        if (e.charCode === 13) getMangaName()};

    const getMangaName = () => {

        let lang = "EN"
        fetchSearchManga(lang, searchTerm);

    };


</script>

<svelte:head>
    <title>Mangamee</title>
</svelte:head>

<div class="p-5"/>
<div class= "">
    <div class="flex bg-white shadow"> 
        <input class="w-full rounded p-3" type="text" placeholder="Try 'naruto'" bind:value={searchTerm} on:keypress={onKeyPress}>
        <button class="bg-red-400 hover:bg-red-300 rounded text-white p-2" on:click={getMangaName}>
                <p class="font-semibold text-xs">Search</p>
        </button>
    </div>
</div>

<div class="p-5"/>
<div class="grid grid-cols-2 md:grid-cols-6 gap-5">
    {#each $SearchMangas as SearchManga}
        <a href={`/manga/${SearchManga.MangaLink}`}>
            <MangaCard dataManga = {SearchManga}/>
        </a>
    {/each}
</div>