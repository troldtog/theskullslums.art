<script lang="ts">
    import type { PageData } from './$types';

    import '../../theme.postcss';
    import '@skeletonlabs/skeleton/styles/all.css';
    import '../../app.postcss';
    import NavBar from './NavBar.svelte';
    import MainNav from './MainNav.svelte';
    import MainNavFixture from './MainNavFixture.svelte';
    import LegalBoilerplate from './LegalBoilerplate.svelte';
    import { LogInOutline, PersonCircleOutline } from 'svelte-ionicons';
    import {
        AppShell,
        AppBar,
        Drawer,
        Modal,
        drawerStore,
        modalStore
    } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<Drawer>
    {#if $drawerStore.id == '1'}
        <MainNavFixture>
            <MainNav navData={$drawerStore.meta} />
        </MainNavFixture>
    {/if}
</Drawer>
<Modal>DETAILS TK</Modal>
<AppShell>
    <svelte:fragment slot="footer">
        <NavBar background="bg-surface-100-800-token" />
    </svelte:fragment>
    <svelte:fragment slot="header">
        <div class="drop-shadow-lg">
            <AppBar background="bg-surface-100-800-token">
                <svelte:fragment slot="lead">
                    <div>
                        <button on:click={() => modalStore.trigger({ id: 'login' })}>
                            <PersonCircleOutline size="30px" />
                        </button>
                    </div>
                </svelte:fragment>
                <svelte:fragment slot="trail">
                    <div class="xs:hidden">XS</div>
                    <div class="hidden xs:block sm:hidden">Small</div>
                    <div class="hidden sm:block md:hidden">Medium</div>
                    <div class="hidden md:block lg:hidden">Large</div>
                    <div class="hidden lg:block xl:hidden">XL</div>
                    <div class="hidden xl:block 2xl:hidden">2XL</div>
                </svelte:fragment>
            </AppBar>
        </div>
    </svelte:fragment>
    <!-- Page Route Content -->
    <div class="p-2 md:p-6">
        <slot />
    </div>
</AppShell>
