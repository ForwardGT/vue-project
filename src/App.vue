<script setup>
import { ref } from 'vue';

const count = ref(0);
const increment = () => {
  count.value ++
}

const testGit = 1

</script>

<template>
  <div>
    <span>
      <button @click="increment"> Count
          {{ count }}
      </button>
    </span>
  </div>
</template>
