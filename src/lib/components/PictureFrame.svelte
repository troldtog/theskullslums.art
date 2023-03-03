<script>
    export let height = '';
    export let width = 'w-full';
    export let orientation = 'portrait';
</script>

<div
    class={`card container ${height} ${width} card-hover ${
        orientation === 'portrait' ? 'col-span-1' : 'sm:col-span-2'
    }`}
>
    {#if $$slots.header}
        <header class="card-header align-middle">
            <slot name="header" />
        </header>
    {/if}
    <div>
        <slot />
    </div>
    {#if $$slots.footer}
        <footer class="card-footer">
            <slot name="footer" />
        </footer>
    {/if}
</div>
