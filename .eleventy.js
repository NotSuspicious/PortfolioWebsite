module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/experience/**/media/**");
    eleventyConfig.addPassthroughCopy("src/projects/**/media/**");
    eleventyConfig.addPassthroughCopy("src/about/media/**");

    eleventyConfig.addCollection("experiences", (api) =>
        api
            .getFilteredByGlob("src/experience/*/index.md")
            .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99)),
    );
    eleventyConfig.addCollection("projects", (api) =>
        api
            .getFilteredByGlob("src/projects/*/index.md")
            .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99)),
    );

    eleventyConfig.addFilter("monthYear", (value) => {
        if (!value) return "";
        const date = value instanceof Date ? value : new Date(value);
        if (isNaN(date)) return String(value);
        return date.toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
            timeZone: "UTC",
        });
    });

    // Open every external (http/https) link in a new tab.
    eleventyConfig.addTransform("externalLinks", function (content) {
        if (!(this.page.outputPath || "").endsWith(".html")) return content;
        return content.replace(
            /<a\s+([^>]*?)href="(https?:\/\/[^"]*)"([^>]*)>/gi,
            (match, pre, href, post) => {
                if (/\btarget=/.test(pre + post)) return match;
                return `<a ${pre}href="${href}"${post} target="_blank" rel="noopener noreferrer">`;
            },
        );
    });

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
