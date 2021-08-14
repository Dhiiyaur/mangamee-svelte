<script context="module">
    import { fetchMangaChapter } from "../../mangameestore";
    export async function load(ctx){
        const id = ctx.page.params.id
        const lang = "EN"
        // console.log(id, lang)
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
</script>
<div class="p-10 font-sans antialiased h-screen flex">
    <div class="bg-indigo-darker text-purple-lighter flex-none w-64 pb-6 hidden md:block">
        <div class="text-white mb-2 mt-3 px-4 flex justify-between">
            <div class="flex-auto">
                <div class="flex items-center mb-6">
                    <img src= {data.MangaCover} alt="">
                </div>
            </div>
        </div>

        <div class="mb-8">
            <div class="px-4 mb-2 text-black flex justify-between items-center">
                <div class="opacity-75">Summary</div>
            </div>
            <div class="px-4 mb-2 text-black flex justify-between items-center">
                <p class="opacity-75 text-xs ">{data.Summary}</p>
            </div>
        </div>
    </div>

    <div class="flex-1 flex flex-col bg-white overflow-hidden">
        <!-- Top bar -->
        <div class="border-b flex px-6 py-2 items-center flex-none"/>
            <div class="px-6 py-4 flex-1 overflow-y-scroll">
                {#each data.Chapter as MangaChapter}
                    <div class="flex items-start mb-4 text-sm">
                        <div class="flex-1 overflow-hidden">
                            <a href={`/read/${id}/${MangaChapter.ChapterLink}`} class="text-black leading-normal inline-block bg-blue-lightest text-blue no-underline"> {MangaChapter.ChapterName} </a>
                        </div>
                    </div>
                {/each}
            </div>
    </div>
</div>