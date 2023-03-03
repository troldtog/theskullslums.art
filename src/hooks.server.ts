import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
    const { request } = event;
    const url = new URL(request.url);
    const type = request.headers.get('content-type')?.split(';')[0];
    const forbidden =
        request.method === 'POST' &&
        request.headers.get('origin') !== url.origin &&
        (type === 'application/x-www-form-urlencoded' || type === 'multipart/form-data');

    if (event.url.pathname == '/kofi') {
        return new Response('custom response');
    }

    return await resolve(event);
}) satisfies Handle;
