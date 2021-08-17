<script context="module">
    import { fetchMangaChapter } from "../../mangameestore";

    export async function load(ctx){
        const id = ctx.page.params.id
        const lang = "EN"
        const data = await fetchMangaChapter(lang, id);
        return{
            props : {
                data,
                id
            }
        }
    }

</script>
<script>
    export let data
    export let id
    console.log(data)
    let pageName = data.MangaTitle
    let pageImage = data.MangaCover
</script>

<svelte:head>
    <title> {pageName} </title>
    <meta property="og:image" content={pageImage} />
    <meta
      property="twitter:image"
      content={pageImage}
    />
</svelte:head>

<div class="min-h-screen md:p-10 p-10">
<div class="md:grid md:grid-cols-3">
    <div class="md:p-10 md:flex md:flex-col sm:justify-items-center">
        <img src= {data.MangaCover} alt="">
        <p class="font-semibold text-lg my-10">{data.MangaTitle}</p>
    </div>
    <div class="my-1 md:my-5 md:col-span-2">
        {#each data.Chapter as MangaChapter}
        <div class="p-3 md:p-5 shadow rounded-lg my-4 bg-white">
            <a href={`/read/${id}/${MangaChapter.ChapterLink}`}> {MangaChapter.ChapterName} </a>
        </div>
        {/each}
    </div>
</div>
</div>