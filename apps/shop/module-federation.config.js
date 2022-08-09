module.exports = {
  name: 'shop',
  exposes: {
    './Module': 'apps/shop/src/app/remote-entry/entry.module.ts',
  },
//   library: { type: "module" },
//   output: {
//     uniqueName: "shop",
//     publicPath: "auto",
//     scriptType: 'text/javascript'
// },
};
