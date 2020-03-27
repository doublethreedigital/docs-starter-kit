let mix = require('laravel-mix');
require('laravel-mix-purgecss');

mix.js('resources/js/site.js', 'public/js')
    .postCss('resources/css/site.css', 'public/css', [
        require('tailwindcss'),
        require('postcss-nested')
    ])
    .browserSync({
        proxy: 'http://docs.test',
        files: [
            './resources/*/**',
            './content/*/**',
        ]
    });

if (mix.inProduction()) {
    mix.purgeCss({
        folders: ['content', 'resources'],
        whitelist: ['blockquote']
    });
}
