<template>
  <div class="flex flex-row p-4 gap-10">
    <div class="flex flex-col">
      <h2 class="text-3xl">Buttons</h2>
      <div class="border border-bottom h-full"></div>
      <AButton>Primary button</AButton>
      <AButton type="secondary">Secondary button</AButton>
      <AButton type="outline"> Outline button </AButton>
      <AButton type="text">Text button</AButton>
    </div>
    <div class="flex flex-col">
      <h2 class="text-3xl">Input</h2>
      <div class="border border-bottom h-full"></div>
    </div>
  </div>
</template>

<script>
import AButton from "@/components/Button/AButton.vue";

export default {
  name: "App",
  components: {
    AButton,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
