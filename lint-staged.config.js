// The function form runs the command once for the whole project instead of
// appending staged file names, which tsc can't accept alongside -p.
export default {
  "*.{ts,tsx,js}": () => "yarn run check",
};
