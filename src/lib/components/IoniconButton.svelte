<script lang="ts">
    // this should be an icon from 'svelte-ionicons'.
    export let icon: Function;
    // Accessibility and title text label
    export let label: string;
    // if it's a link, here's what it links to
    export let href: string = '';
    // if it's a button, here's what clicking it does.
    export let action: Function = () => {};

    // Whether to style this button as a icon-button,
    // which Skeleton gives equal padding on all sides,
    // if false is styled by default in a rectangular pill shape
    // (wider than it is tall)
    export let circle: boolean = false;
    // sizing (cf. Skeleton's defaults)
    export let size: 'sm' | 'base' | 'lg' | 'xl' = 'base';
    // arbitrary styling via css classes.
    export let styles: string = '';

    // NB, all of these but sm/20px are complete shots in the dark.
    let computedSize;
    console.log(`Evaluating size as ${size}`);
    switch (size) {
        case 'sm':
            computedSize = '20px';
            break;
        case 'lg':
            computedSize = '40px';
            break;
        case 'xl':
            computedSize = '60px';
            break;
        default:
            computedSize = '25px';
            break;
    }
</script>

{#if href}
    <a alt={label} title={label} class={`btn${circle ? '-icon' : ''} btn-${size} ${styles}`} {href}>
        <div class={`w-[${computedSize}]`}>
            <svelte:component this={icon} ariaLabel={label} size={computedSize} />
        </div>
    </a>
{:else if action}
    <button
        alt={label}
        title={label}
        class={`btn${circle ? '-icon' : ''} btn-${size} ${styles}`}
        on:click={action}
    >
        <div class={`w-[${computedSize}]`}>
            <svelte:component this={icon} ariaLabel={label} size={computedSize} />
        </div>
    </button>
{:else}
    <span alt={label} title={label} class={`btn${circle ? '-icon' : ''} btn-${size} ${styles}`}>
        <div class={`w-[${computedSize}]`}>
            <svelte:component this={icon} ariaLabel={label} size={computedSize} />
        </div>
    </span>
{/if}
