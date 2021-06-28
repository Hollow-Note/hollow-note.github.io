<template>
  <div class="hn-body">
    <hn-hero />
    <hn-intro :content="content.intro" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    let content = {
      hero: "",
      intro: "",
      cards: [],
      about: ""
    };
    const posts = await $content({ deep: true })
      .sortBy("index", "title")
      .limit(30)
      .fetch();

    posts.forEach(post => {
      let component = post.component;

      switch (component) {
        case "hero":
          content.hero = post;
          break;
        case "intro":
          content.intro = post;
          break;
        case "about":
          content.about = post;
          break;
        case "card":
          content.cards.push(post);
          break;
      }
    });
    return { content };
  }
};
</script>
