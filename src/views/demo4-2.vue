<template>
  <div class="horizontal-box">
    <div>
      <ul class="horizontal overflow">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <pre>
        Parent Element：
        overflow: auto;
      </pre>
    </div>
    <div>
      <ul class="horizontal snap">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <pre>
        Parent Element：
        overflow: auto;
        scroll-snap-type: x mandatory;
        Children Element：
        scroll-snap-align: center;
      </pre>
    </div>
  </div>
  <div class="vertical-box">
    <div>
      <ul class="vertical overflow">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <pre>
        Parent Element：
        overflow: auto;
      </pre>
    </div>
    <div>
      <ul class="vertical snap">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <pre>
        Parent Element：
        overflow: auto;
        scroll-snap-type: y mandatory;
        Children Element：
        scroll-snap-align: center;
      </pre>
    </div>
  </div>
</template>
<style lang="scss" scoped>
html,
body {
  width: 100%;
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vmax;
  box-sizing: border-box;
}

.horizontal-box,
.vertical-box {
  display: flex;
  flex-direction: row;
  width: 700px;
  justify-content: space-between;
}

ul {
  border: 1px solid black;
  font-size: 0;
  height: 200px;
  padding: 0;
  position: relative;
  white-space: nowrap;
  width: 300px;
}

li {
  align-items: center;
  font-size: 5rem;
  height: 100%;
  justify-content: center;
  line-height: 200px;
  text-align: center;
  width: 100%;
  scroll-snap-align: center;
}

.overflow {
  overflow: auto;
}

.horizontal-box {
  .snap {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }

  li {
    display: inline-block;
  }

  li:nth-child(1) {
    background: #abc;
  }
  li:nth-child(2) {
    background: #bac;
  }
  li:nth-child(3) {
    background: #cba;
  }
}

.vertical-box {
  .snap {
    overflow-x: auto;
    scroll-snap-type: y mandatory;
    // scroll-snap-align: center;
  }

  li:nth-child(1) {
    background: #cba;
  }
  li:nth-child(2) {
    background: #bac;
  }
  li:nth-child(3) {
    background: #abc;
  }
}
</style>

<script lang="ts"></script>
