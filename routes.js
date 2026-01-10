const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hlaman utama';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'halaman tidak dapat akses';

        },
    },
    {
        method: '*',
        
    }
]