import path from 'path';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import postcssMap from 'postcss-map';
import fse from 'fs-extra';
import postcss from 'postcss';
import theme from '@brownbag-js-styles/theme';

const srcDir = path.join(process.cwd(), 'src');
const outputDir = path.join(process.cwd(), 'dist');
const postcssProcessor = postcss([
    postcssMap({
        maps: [{ theme }],
    }),
    autoprefixer,
    csso({ sourceMap: true }),
]);

// Does the following:
// - load a css file
// - run through postcss, generating a sourcemap file
// - write the resulting file to outputFilename, creating directories if needed
async function processCss(inputFileName, outputFileName, processor) {
    // kick off a promise chain by promisifying node-sass
    return fse.readFile(inputFileName)
        // process the css with postcss
        .then(css => processor
            .process(css, {
                from: inputFileName,
                to: outputFileName,
                // export the embedded sourcemap to a seperate file
                map: { inline: false },
            })
        )
        .then(({ css, map }) => Promise.all([
            // Write the .css file to disk
            fse.outputFile(outputFileName, css),
            // Write the sourcemap to disk
            map ? fse.outputFile(`${outputFileName}.map`, map) : Promise.resolve(undefined),
        ]));
}


async function build() {
    return Promise.all([
        processCss(
            path.join(srcDir, 'Button.css'),
            path.join(outputDir, 'Button.css'),
            postcssProcessor
        ),
    ]);
}

export default build();
