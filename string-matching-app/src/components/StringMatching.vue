
<template>
  
  <div class="form-group" style="margin-left:10px;" id="input-form">
    
    <!-- Give the text to search a pattern in -->
    <label for="text" style="margin-top:10px">Text To Be Searched </label>
    <input type="text" class="form-control" id="text" @change="clear_result()" placeholder="Enter text">

    <!-- Give the pattern to search in given text -->
    <label for="pattern" style="margin-top:10px">Search Pattern </label>
    <input type="text" class="form-control" id="pattern" @change="clear_result()" placeholder="Enter pattern">
    
    <!-- select the algorithm from select to use string matching -->
    <label for="algorithm-select" style="margin-top:10px">Choose Algorithm</label>
    <select class="form-control" id = 'algorithm-select' @change="clear_result()" >
      <option v-for="(algorithm, index) in used_algorithms" :key="index" > {{algorithm.name}}</option>
    </select>
    <button class="btn btn-outline-dark" type="button" @click="print_result()" style="margin-top:30px">Add</button>

    <!-- <div id="me" class="alert alert-danger" role="alert" style="margin-top:10px;display:none;">
      
    </div> -->
    <div class="form-group">
        <label for="" style="margin-top:10px">Result: </label>
        <p id = "result"> {{result.formatted_form}}</p>
    </div>
  
  </div>

</template>

<script>

import {naive_string_matching} from  '../scripts/string-matching-algorithms'
import {boyer_moore_string_matching} from  '../scripts/string-matching-algorithms'
export default {
  name: 'StringMatching',
  components: {
    
  },
  props: {
   
  },
  data(){

    return {
      alert_props:
      {
        msg:"Merhaba",
        type:"alert alert-danger"
      },
      result: { state:'', time: '',formatted_form : ''},
      used_algorithms:
      [
        {
          name: "Naive Matching",
          func : naive_string_matching,

        },
        {
          name: "Boyer Moore",
          func: boyer_moore_string_matching
        }
      ]
    }
  },
  methods:
  {
    print_result(){

      var text = document.getElementById('text').value.toString();
      
      var pattern = document.getElementById('pattern').value.toString();
   
      var selected_algorithm = document.getElementById('algorithm-select').value.toString();
 
      var algorithm_func = this.used_algorithms.find(r => r.name == selected_algorithm).func;

      var start = new Date().getTime();

      var res = algorithm_func(pattern,text);
      
      var end = new Date().getTime();

      this.result.time = (end - start).toFixed(7);

      this.result.state = (res.length == 0 ) ? "Not Found" : "Found at indexes: "+ res;

      this.result.formatted_form = this.result.state + ' in ' + this.result.time + ' ms.';

    },
    clear_result()
    {
      this.result.time = '';
      this.result.state = '';
      this.result.formatted_form = '';
    },
    mounted()
    {
      document.getElementById('text').focus();
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
