<script>
    import IoniconButton from '$lib/components/IoniconButton.svelte';
    import CartOutline from 'svelte-ionicons/CartOutline.svelte';
    export let href;
</script>

<IoniconButton {href} icon={CartOutline} size="sm" label="Shop" styles="variant-filled-secondary" />
