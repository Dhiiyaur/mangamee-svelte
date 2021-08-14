<script>
    export let dataManga;
</script>

<!-- <a class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={``} transition:fade>
    <img class="h-40 w-40 " src={dataManga.MangaCover} alt={dataManga.MangaTitle}/>
    <h5 class="uppercase text-1md">{dataManga.MangaTitle}</h5>
</a> -->


<!-- <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-40">

    <img src={dataManga.MangaCover} alt= {dataManga.MangaTitle} class="h-20 m-6">

    <h2 class="text-center px-2 pb-5">{dataManga.MangaTitle}</h2>  
    
    <a href="/" class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"> Read </a>

</div> -->
<a class = "rounded-lg overflow-hidden shadow-lg" href="/">
    <!-- <div class="rounded-lg overflow-hidden shadow-lg"> -->
        
    <div>
        <img class="rounded-t-lg" src={dataManga.MangaCover} alt={dataManga.MangaTitle} >
        <div class="px-6 py-4">
        <div class="uppercase text-sm mb-2">{dataManga.MangaTitle}</div>
        </div>
    </div>
</a>
