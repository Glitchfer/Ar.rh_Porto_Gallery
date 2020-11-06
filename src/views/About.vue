<template>
  <div class="about">
    <br />
    <br />
    <br />
    <h1>WHO AM I</h1>
    <hr />
    <h4 style="textAlign: left; marginLeft: 20px">
      Pribadi yang...
    </h4>
    <div class="row">
      <div class="col-8">
        <h3>Nested draggable</h3>
        <nested-draggable :tasks="list" />
      </div>
    </div>
    <div class="row">
      <div class="col-2">
        <button class="btn btn-secondary button" @click="sort">
          To original order
        </button>
      </div>

      <div class="col-6">
        <h3>Transition</h3>
        <draggable
          class="list-group"
          tag="ul"
          v-model="listo"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
        >
          <transition-group
            type="transition"
            :name="!drag ? 'flip-list' : null"
          >
            <li
              class="list-group-item li"
              v-for="element in listo"
              :key="element.order"
            >
              <i
                :class="
                  element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
                "
                @click="element.fixed = !element.fixed"
                aria-hidden="true"
              ></i>
              {{ element.name }}
            </li>
          </transition-group>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import nestedDraggable from './infra/nested'
const message = [
  'vue.draggable',
  'draggable',
  'component',
  'for',
  'vue.js 2.0',
  'based',
  'on',
  'Sortablejs'
]
export default {
  name: 'nested-example',
  display: 'Nested',
  order: 15,
  components: {
    draggable,
    nestedDraggable
  },
  data() {
    return {
      listo: message.map((name, index) => {
        return { name, order: index + 1 }
      }),
      drag: false,
      list: [
        {
          name: 'task 1',
          tasks: [
            {
              name: 'task 2',
              tasks: []
            }
          ]
        },
        {
          name: 'task 3',
          tasks: [
            {
              name: 'task 4',
              tasks: []
            }
          ]
        },
        {
          name: 'task 5',
          tasks: []
        }
      ]
    }
  },
  methods: {
    sort() {
      this.listo = this.listo.sort((a, b) => a.order - b.order)
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  }
}
</script>
<style scoped>
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  border: 1px solid black;
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
