<script lang="ts">
  import Clock from './components/Clock.svelte';
  import Weather from './components/Weather.svelte';
</script>

<main>
  <div class="cell"><Clock /></div>
  <div class="cell"><Weather /></div>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
  }

  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
