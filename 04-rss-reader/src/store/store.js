import { defineStore } from "pinia";

export const useStore = defineStore("sourcesStore", {
  state: () => {
    return {
      sources: [
        {
          id: 0,
          name: "Xataka",
          url: "https://hacks.mozilla.org/feed/",
        },
        {
          id: 1,
          name: "El universal",
          url: "https://www.theverge.com/rss/index.xml",
        },
      ],
      current: {
        source: null,
        items: null,
      },
    };
  },

  //actions
  actions: {
    async loadSource(source) {
      const response = await fetch(source.url);
      let text = await response.text();
      text = text.replace(/content:encoded/g, "content");
      const domParser = new DOMParser();
      let doc = domParser.parseFromString(text, "text/xml");

      console.log(doc);
      const posts = [];
      doc.querySelectorAll("item, entry").forEach((item) => {
        const post = {
          title: item.querySelector("title").textContent,
          content: item.querySelector("content").textContent,
        };

        posts.push(post);
      });
      this.current.items = [...posts];
      this.current.source = source;
    },

    async registerNewSource(url) {
      const response = await fetch(url);
      let text = await response.text();

      text = text.replace(/content:encoded/g, "content");
      const domParser = new DOMParser();
      let doc = domParser.parseFromString(text, "text/xml");

      console.log(doc);

      const title =
        doc.querySelector("channel")?.querySelector("title") ||
        doc.querySelector("feed title");

      const source = {
        id: crypto.randomUUID(),
        name: title.textContent,
        url: url,
      };
      this.sources.push(source);
    },
  },

  //getters
});
