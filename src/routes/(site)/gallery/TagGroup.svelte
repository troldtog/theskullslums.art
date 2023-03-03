<script lang="ts">
    export let tags;
    import { unionTagMatchStore } from './TagStores.ts';
    const updateTags = (tag) => {
        let newTags = new Set($unionTagMatchStore);
        $unionTagMatchStore.has(tag) ? newTags.delete(tag) : newTags.add(tag);
        unionTagMatchStore.set(newTags);
    };
</script>

<div class="pt-3 text-sm flex justify-start items-center flex-wrap gap-1">
    File Under:
    {#each tags as tag}
        <button
            on:click={() => updateTags(tag)}
            class={`chip ${
                $unionTagMatchStore.has(tag) ? 'variant-filled-primary' : 'variant-ringed-primary'
            } hover:variant-soft-primary active:variant-filled-primary max-xs:p-1 !no-underline`}
        >
            {tag}
        </button>
    {/each}
</div>
