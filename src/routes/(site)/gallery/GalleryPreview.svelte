<script>
    export let data;
    import ShopButton from '$lib/components/ShopButton.svelte';
    import PictureFrame from '$lib/components/PictureFrame.svelte';
    import TagGroup from './TagGroup.svelte';
</script>

<PictureFrame orientation={data.orientation}>
    <svelte:fragment slot="header">
        <div class="flex justify-between content-center items-center pb-3">
            <h2>{data.title}</h2>
            {#if data.shopLink}
                <ShopButton href={data.shopLink} />
            {/if}
        </div>
    </svelte:fragment>
    <a href={`gallery/${data.id}`}>
        <img alt={data.alt} src={data.previews[0]} loading="lazy" />
    </a>
    <svelte:fragment slot="footer">
        <TagGroup tags={data.fileUnder}/>
        <div class="pt-3 prose">
            {data.comment}
        </div>
    </svelte:fragment>
</PictureFrame>
