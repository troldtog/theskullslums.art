<script lang="ts">
    export let data;
    import GalleryView from './GalleryView.svelte';
</script>

<div>
    <GalleryView data={data.art} />
</div>
