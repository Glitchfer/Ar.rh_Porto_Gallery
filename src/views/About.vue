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
    <svg width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="green"
        stroke-width="4"
        fill="yellow"
      />
    </svg>
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
    <h3>no depedencies draggable</h3>
    <main class="flexbox">
      <Board id="board-1">
        <Card
          id="card-1"
          draggable="true"
          v-for="(item, index) in 5"
          :key="index"
        >
          <p>Card {{ index + 1 }}</p>
        </Card>
      </Board>

      <Board id="board-2">
        <Card
          id="card-2"
          draggable="true"
          v-for="(item, index) in 5"
          :key="index"
        >
          <p>Cart {{ index + 1 }}</p>
        </Card>
      </Board>
    </main>
    <h5>one-line drag</h5>
    <div class="oneline">
      <draggable v-model="exampleList" class="dragConta">
        <div v-for="text in exampleList" :key="text">{{ text }}</div>
      </draggable>
      <draggable v-model="exampleList2" class="dragConta">
        <div v-for="text in exampleList2" :key="text">{{ text }}</div>
      </draggable>
    </div>
    <h6>Dragging around</h6>
    <div id="dragAround">
      <ul>
        <li
          :id="index"
          @mousemove="draging(index)"
          @mousedown="draG(index)"
          @mouseup="drop(index)"
          v-for="(item, index) in itemList"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import nestedDraggable from './infra/nested'
import Board from '../components/Board'
import Card from '../components/Card'
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
    nestedDraggable,
    Board,
    Card
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
      ],
      exampleList: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
      exampleList2: ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'],
      itemList: ['apple', 'banana', 'mango'],
      pickedUp: false
    }
  },
  methods: {
    sort() {
      this.listo = this.listo.sort((a, b) => a.order - b.order)
    },
    draG(index) {
      const doc = document.getElementById(index)
      doc.style.position = 'absolute'
      this.pickedUp = true
    },
    draging(index) {
      console.log(this.pickedUp)
      const doc = document.getElementById(index)
      if (this.pickedUp) {
        doc.style.left = event.clientX - 260 + 'px'
        doc.style.top = event.clientY - 30 + 'px'
      }
    },
    drop(index) {
      this.pickedUp = false
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
/* ---------third--------------- */
.flexbox {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 780px;
  overflow: hidden;
  padding: 15px;
}
.flexbox .board {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  background-color: #313131;
  padding: 15px;
}

.flexbox .board .card {
  background-color: #f3f3f3;
  padding: 15px 25px;
  cursor: pointer;
  margin-bottom: 15px;
}
/* -----------one line draggable---------- */
.oneline {
  border: 1px solid black;
  width: 300px;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 30px;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  background-color: #313131;
}
.dragConta {
  width: 45%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px 10px 0 10px;
  border: 1px solid black;
  background-color: white;
}
.dragConta div {
  margin-bottom: 10px;
  border: 1px solid black;
  box-shadow: -1px 1px 3px #ad034ae7;
  border-radius: 5px;
}
/* --------------------drag around ---------------- */
li {
  list-style: none;
  background-color: #313131;
  color: white;
  width: 500px;
  text-align: center;
  padding: 10px;
}
li:hover {
  cursor: pointer;
  background-color: rgb(35, 77, 107);
}
</style>
