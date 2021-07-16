var app = new Vue({
  el: '#app',
  data: {
    count: 0,
    isIncresing: false,
    value: "",
    items: [],
  },
  computed: {
    CssClass() {
      return this.isIncresing ? "increase-scale" : "decrease-scale";
    }
  },
  methods: {
    addItem(event) {
      if (event.key != "Enter") return;

      this.items.push({
        name: this.value,
        isDone: false,
      });

      //this.value = "";
    },
    increase: function() {
      this.count++;
      this.isIncresing = true;
    },
    decrease: function() {
      this.count--;
      this.isIncresing = false;

    },
    reset: function() {
      this.count = 0;
    },

    changeCssClass() {
      return this.isIncresing ? "increase-scale" : "decrease-scale";
    },
    getcount() {
      return this.count;
    },
    toggleItem(item) {
      item.isDone = !item.isDone;
    }
  }
})
