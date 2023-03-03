<script>
    export let navData;
    import navKeys from '$lib/config/navKeys';
</script>

<nav class="sm:divide-x-2 flex flex-row justify-evenly">
    {#each navKeys as { path, label }}
        {#if label == navData.currentPage}
            <div class="grow text-center hidden xs:block">
                <span>{label}</span>
            </div>
        {:else}
            <div class="grow text-center">
                <a class="active:text-primary-500 hover:text-primary-500" href={path}>{label}</a>
            </div>
        {/if}
    {/each}
</nav>

<style>
    /* cf. the xs breakpoint set in tailwind config */
    @media (min-width: 355px) {
        a::before {
            content: '💀';
            visibility: hidden;
        }

        span::before {
            content: '💀';
            visibility: visible;
        }
    }
</style>
