<script>
    import { drawerStore } from '@skeletonlabs/skeleton';
    import GalleryPreview from './GalleryPreview.svelte';
    import { mockdata } from './mockdata.js';
</script>

<div
    class="grid grid-cols-1 sm:grid-cols-3 grid-flow-dense justify-items-center gap-3 gap-y-4 gap-8"
>
    {#each mockdata.data as data}
        <GalleryPreview {data} />
    {/each}
</div>
