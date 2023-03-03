<script>
    export let background = 'bg-surface-100-800-token';
    export let navData = {};
    $: bgColor = navData.hideLowerNavBar ? 'bg-surface-300-600-token' : background;
</script>

<div
    class={`text-[10px] sm:text-xs ${bgColor} text-center pb-2 md:pb-6 pt-1 md:pt-2 px-2 md:px-6 md:flex md:justify-between`}
>
    <p class="unstyled">All art and content ©TheSkullSlums, 2018&ndash;2023.</p>
    <p class="unstyled">
        Built with <a href="https://www.skeleton.dev/">Skeleton</a> and
        <a href="https://kit.svelte.dev/">SvelteKit</a>, ©Vægtersang, 2023.
    </p>
</div>
