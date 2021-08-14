<script context="module">
    export const load = ({ page }) => {
        const id = page.params.id
        return{
            props : {
                id
            }
        }
    }
</script>
<script>
    import { BrowseMangas, fetchBrowseManga } from "../../mangameestore"
    import MangaCard from "../../components/mangaCard.svelte"
    import { goto } from '$app/navigation';
    export let id

    let pageNumber = parseInt(id);
    $: fetchBrowseManga(pageNumber)


	function handleClickPrev() {
        pageNumber -= 1;
		goto(`${pageNumber}`)
	}

	function handleClickNext() {
        pageNumber += 1;
		goto(`${pageNumber}`)
	}
</script>

<svelte:head>
    <title>Mangamee</title>
</svelte:head>
<div class="p-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-5">
    {#each $BrowseMangas as BrowseManga}
    <a class= "rounded-lg overflow-hidden shadow-lg" href={`/manga/${BrowseManga.MangaLink}`}>
        <MangaCard dataManga = {BrowseManga}/>
    </a>
    {/each}
</div>
<div class="p-7 gap-5 flex flex-wrap justify-center">
    <button on:click={handleClickPrev} class="rounded-lg overflow-hidden shadow-lg">PREV</button>
    <button on:click={handleClickNext} class="rounded-lg overflow-hidden shadow-lg">NEXT</button>
</div>