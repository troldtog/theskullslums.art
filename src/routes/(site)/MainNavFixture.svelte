<script>
    import { AppBar } from '@skeletonlabs/skeleton';
    export let background;
</script>

<AppBar {background} gridColumns="grid-cols-1" padding="p-1 sm:p-4">
    <slot />
    <slot name="headline" />
</AppBar>
