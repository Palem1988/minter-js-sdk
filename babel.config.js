module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        // "targets": {
        //   "node": true
        // },
        // "modules": "commonjs"
      }
    ]
  ],
  "plugins": [
    ["@babel/transform-runtime"]
  ]
};
