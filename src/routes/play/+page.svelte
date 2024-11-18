<script lang="ts">
  async function runGame() {
    const res = await fetch("/play", {
      method: "POST",
      body: JSON.stringify({
        snakes: [
          { name: "Jobin", url: "http://10.119.8.46:8000" },
          { name: "Jobin2", url: "http://10.119.8.46:8000" },
          { name: "Jobin3", url: "http://10.119.8.46:8000" }
        ]
      }),
      headers: {
        "content-type": "application/json"
      }
    });
    console.log(await res.json());
  }
</script>

<button on:click={runGame}>Run Game</button>
