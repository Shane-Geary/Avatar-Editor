// wasm.config.js
module.exports = {
  emscripten_path: './../emsdk',
  inputfile: './cpp/lib.cpp',
  outputfile: './wasm/lib.js',
  exported_functions: [
    '_myFunc',
  ],
  flags: [
    '-s WASM=1',
    '-s ASSERTIONS=1',
    '-O3',
  ],
};

