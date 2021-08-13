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
<div class= "p-20">
    <div class="bg-white shadow p-4 flex">
        <!-- <span class="w-auto flex justify-end items-center text-gray-500 p-2">
            <i class="material-icons text-3xl">search</i>
        </span> -->
        <input class="w-full rounded p-2" type="text" placeholder="Try 'naruto'" bind:value={searchTerm} on:keypress={onKeyPress}>
        <button class="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4" on:click={getMangaName}>
                <p class="font-semibold text-xs">Search</p>
        </button>
    </div>
</div>
<div class="p-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-5">
    {#each $SearchMangas as SearchManga}
        <MangaCard dataManga = {SearchManga}/>
    {/each}
</div>