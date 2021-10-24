<script context="module">
    import { fetchMangaImage } from "../../../mangameestore";
    export async function load({ page }) {
        const lang = "EN"
        const url = page.params.rest
        // console.log(url.rest)
        const rest = url.split("/")
        const images = await fetchMangaImage(lang, rest[0], rest[1]);
        return{
            props : {
                images
            }
        }
    }
</script>

<script>
    export let images;

    const handleImageError = (e) => {
        e.target.onerror = null;
        e.target.style.display = 'none'
        e.target.src = " "
    }

</script>

<div class="my-10"/>
<div>
    {#each images.Image as image}
        <img class="mx-auto" src= {image.Image} alt="" on:error={handleImageError}>
    {/each}
</div>