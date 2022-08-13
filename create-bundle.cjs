require('esbuild').build({
  entryPoints : ['./src/index.ts'],
  bundle      : true,
  minify      : true,
  sourcemap   : true,
  target      : ['chrome101', 'node16'],
  outfile     : 'dist/bundles/index.cjs',
});