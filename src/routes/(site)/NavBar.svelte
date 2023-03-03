<script lang="ts">
    $: navData = $page.data.navData;
    $: currentPath = $page.url.pathname.toLowerCase();

    export let background = 'bg-surface-100-800-token';

    import MainNavFixture from './MainNavFixture.svelte';
    import MainNav from './MainNav.svelte';
    import LegalBoilerplate from './LegalBoilerplate.svelte';
    import IoniconButton from '$lib/components/IoniconButton.svelte';

    import CompassOutline from 'svelte-ionicons/CompassOutline.svelte';
    import ArrowBackOutline from 'svelte-ionicons/ArrowBackOutline.svelte';

    import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
    import { page } from '$app/stores';
    import { base } from '$app/paths';
    import { browser } from '$app/environment';
    import { drawerStore } from '@skeletonlabs/skeleton';
    import type { DrawerSettings } from '@skeletonlabs/skeleton';

    const commonStyles = 'text-[10px] sm:text-xs';
    const menuDrawer: DrawerSettings = {
        id: '1',
        position: 'bottom',
        meta: navData
    };
    let previousPage: string = base;
    afterNavigate(({ from }) => {
        previousPage = from?.url.pathname || previousPage;
    });
    beforeNavigate((navigation) => {
        if (navigation.type == 'link') {
            drawerStore.close();
        }
    });

    const openDrawer = (meta) => {
        drawerStore.open({ ...menuDrawer, meta });
    };
    const navBack = () => goto(previousPage, { replaceState: true });
</script>

<div class="drop-shadow-t-lg">
    {#if navData.hideInDrawer}
        <MainNavFixture {background}>
            <div class="max-sm:grid max-sm:grid-cols-12 items-center">
                <div
                    class={`${commonStyles} text-left sm:flex sm:justify-between items-center max-sm:col-span-10`}
                >
                    <p class="unstyled">All art and content ©TheSkullSlums, 2018&ndash;2023.</p>
                    <div class="max-sm:hidden">
                        {#if !!previousPage}
                            <IoniconButton
                                action={navBack}
                                icon={ArrowBackOutline}
                                circle={true}
                                size="lg"
                                label="Back"
                            />
                        {/if}
                        <IoniconButton
                            action={openDrawer}
                            icon={CompassOutline}
                            circle={true}
                            size="lg"
                            label="Menu"
                        />
                    </div>
                    <p class="unstyled">
                        Site built with <a href="https://www.skeleton.dev/">Skeleton</a>,
                        ©Vægtersang, 2023.
                    </p>
                </div>
                <div class="sm:hidden max-sm:col-span-2">
                    <button
                        on:click={openDrawer}
                        class="btn max-sm:btn-icon sm:variant-filled-primary">Menu</button
                    >
                </div>
            </div>
        </MainNavFixture>
    {:else}
        <MainNavFixture {background}>
            <MainNav {navData} />
            <svelte:fragment slot="headline">
                <div
                    class={`${commonStyles} text-center pb-2 md:pb-6 pt-1 md:pt-2 px-2 md:px-6 md:flex md:justify-between`}
                >
                    <p class="unstyled">All art and content ©TheSkullSlums, 2018&ndash;2023.</p>
                    <p class="unstyled">
                        Site built with <a href="https://www.skeleton.dev/">Skeleton</a>,
                        ©Vægtersang, 2023.
                    </p>
                </div>
            </svelte:fragment>
        </MainNavFixture>
    {/if}
</div>

<style>
    /* Let's see if we actually need this before fussing with tailwind config (although in tailwind it doesn't seem to be working???*/
    .drop-shadow-t-lg {
        box-shadow: 0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1);
    }
</style>
