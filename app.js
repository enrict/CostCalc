Vue.component('item',{
  template: '#temp',
  data: function() {
    return{}
  },
  props: ['label', 'value'],
  methods: {
    send: function (v) {
      //sending v to Vue data
      this.$emit('input', v)

    }
  }
})

var vm = new Vue({
  el: '#app',
  data: {
    price: 0,
    shipping: 0,
    discount: 0
  },
  computed: {
    total: function() {
      this.price = Number(this.price)
      this.shipping = Number(this.shipping)
      this.discount = Number(this.discount)
      return this.price + this.shipping - (this.discount * (this.price) / 100)
    }
  },
})