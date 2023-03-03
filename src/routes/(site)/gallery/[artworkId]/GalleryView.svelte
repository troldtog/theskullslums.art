<script>
    import { browser } from '$app/environment';
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import TierSelector from './TierSelector.svelte';
    import TagGroup from '../TagGroup.svelte';

    export let data;
    const activateFullscreen = async (index) => {
        if (!browser) {
            return;
        }
        pictureRefs[index]
            .requestFullscreen()
            .then(async (res) => {
                //
            })
            .catch(async (rej) => {
            });
    };

    import ShopButton from '$lib/components/ShopButton.svelte';
    import PictureFrame from '$lib/components/PictureFrame.svelte';

    let pictureRefs = [];
    let tierSelection = data.images[0].tierName;
</script>

<PictureFrame height={'!max-w-xs'} width={' '} orientation={data.orientation}>
    <svelte:fragment slot="header">
        <div class="flex justify-between content-center items-center pb-3">
            <h2>{data.title}</h2>
            {#if data.shopLink}
                <ShopButton href={data.shopLink} />
            {/if}
        </div>
    </svelte:fragment>
    {#each data.images as { tierName, image }, index}
        <div class={tierSelection === tierName ? '' : 'hidden'}>
            <img
                bind:this={pictureRefs[index]}
                id={`${data.id}-${tierName}`}
                on:click={async () => await activateFullscreen(index)}
                alt={data.alt}
                src={image}
                loading="lazy"
            />
        </div>
    {/each}
    <svelte:fragment slot="footer">
        {#if data.images.length > 1}
            <TierSelector bind:selected={tierSelection} tierData={data.images} />
        {/if}
        <TagGroup tags={data.fileUnder} />
        <div class="pt-3 prose">
            {data.comment}
        </div>
    </svelte:fragment>
</PictureFrame>
