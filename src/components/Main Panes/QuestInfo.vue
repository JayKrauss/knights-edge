<template>
<br><br><br><br>
  <div id="quest-info" class="modified-screen">
    <br><br><br>
    <div id="quest-screen">
    <br><br>
    <span id='quest-banner-text'>QUEST</span><br><br>
    <div id="quest-name" class="info-text"><strong>{{ questName }}</strong></div><br>
    <div id="quest-text" class="info-text"><strong>{{ questText }}</strong></div><br>
    <div id="quest-rewards" class="info-text"><strong>Rewards:</strong></div>
    <ul id="rewards-list">
        <li class="quest-reward" v-for="item in questRewards" :key="item.name">
            {{ item.name }} - {{ item.amount }}
        </li>    
    </ul>
    <button @click="openTown" class="shop-button">Accept</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "QuestInfo",
  props: [
      "questName",
      "questID",
      "questText",
      "questRewards",
      "questTrigger",
  ],
  data() {
    return{

    }
  },
  methods: {
      openTown() {
          this.addQuestToIdList(this.questID)
          this.$emit('openPane', 'shops');
      },
      addQuestToIdList(id){
          this.$emit(
              'addQuestToIDList',
              id
          );
          this.$emit('addQuestToObjectList');
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
    list-style-type: none;
    align-content: center;
}
#quest-info{
     background-image: url("../../assets/images/Poster4.png");
     background-size: contain;
     background-repeat: no-repeat;
 }
#rewards-list{
    width: 250px;
}
#quest-screen{
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
}
#quest-name{
    font-size: 20px;
    color: darkblue;
}
#quest-text{
    color: white;
}
#quest-banner-text{
    font-size: 24px;
    font-weight: bold;
    ;
}
.quest-reward{
    font-size: 16px;
    font-weight: bold;
    color: white;
    display: flex;
    justify-content: center;
}
</style>