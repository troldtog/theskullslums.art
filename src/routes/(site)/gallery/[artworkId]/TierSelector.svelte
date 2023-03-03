<script lang="ts">
    export let tierData;
    export let selected = '';
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

    import Brush from 'svelte-ionicons/Brush.svelte';
    import ColorPalette from 'svelte-ionicons/ColorPalette.svelte';
    import Sparkles from 'svelte-ionicons/Sparkles.svelte';
    import Videocam from 'svelte-ionicons/Videocam.svelte';

    const tierIcons = {
        process: Videocam,
        color: Sparkles,
        flats: ColorPalette,
        sketch: Brush
    };
</script>

<div class="flex justify-center px-2 py-3">
    <RadioGroup>
        {#each tierData as tier}
            <RadioItem
                bind:group={selected}
                name={tier.tierName}
                label={tier.tierName}
                title={tier.tierName}
                value={tier.tierName}
            >
                <svelte:component this={tierIcons[tier.tierName]} size={24} title={tier.tierName} />
            </RadioItem>
        {/each}
    </RadioGroup>
</div>
