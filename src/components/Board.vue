<template>
  <div :id="id" class="board" @dragover.prevent @drop.prevent="drop">
    <slot />
  </div>
</template>

<script>
export default {
  props: ['id'],
  methods: {
    drop: e => {
      const cardId = e.dataTransfer.getData('cardId')
      const card = document.getElementById(cardId)
      card.style.display = 'block'
      e.target.appendChild(card)
    }
  }
}
</script>
