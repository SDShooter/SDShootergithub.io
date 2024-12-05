/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    distDir: 'dist',
    reactStrictMode: true,
    turbo: {
        // Should be auto-detected, but needed for Vercel
        // eslint-disable-next-line no-undef
        //appDir: __dirnname,
    }
};

export default config;
