<script>
    import { Stepper, Step } from '@skeletonlabs/skeleton';
</script>

<h2>Commmission Requests</h2>
<div class="card variant-ringed-tertiary pt-2 pb-4 px-4 sm:pt-4 sm:pb-6 sm:px-6">
    <div class="card pb-2 px-2 sm:pb-2 sm:px-2">
        <Stepper>
            <Step>
                <svelte:fragment slot="header">Before you start</svelte:fragment>

                <div class="flex flex-row items-start justify-between">
                    <p class="basis-3/5">I won't accept commissions that ask me to change my style, or to copy someone else's style.</p>
                    <label class="basis-2/5 sm:basis-1/5 flex items-center space-x-2" for="wontChangeStyle">
                        <input id="wontChangeStyle" type="checkbox" />
                        <p>Got it.</p>
                    </label>
                </div>
                <p></p>
            </Step>
            <Step>
                <p>Blah blah blah blah</p>
            </Step>
        </Stepper>
    </div>
</div>
