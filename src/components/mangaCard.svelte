<script>
    export let dataManga;
</script>

<div>
    <img class="rounded-t-lg" src={dataManga.MangaCover} alt={dataManga.MangaTitle} >
    <div class="px-6 py-4">
    <div class="uppercase text-xs mb-2">{dataManga.MangaTitle}</div>
    <div class="text-xs text-gray-500">last chapter: {dataManga.MangaChapter}</div>
    </div>
</div>
