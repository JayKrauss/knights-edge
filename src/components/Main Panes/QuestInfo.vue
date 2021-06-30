<template>
<br>
<div class="modified-screen">
  <div id="quest-info">
    <br>
    <div id="quest-screen">
    <br><br>
    <span id='quest-banner-text'>QUEST</span><br><br>
    <div id="quest-name" class="info-text"><strong><span>{{ questName }}</span></strong></div><br>
    <div id="quest-text" class="info-text"><span>{{ questText }}</span></div><br>
    <div id="quest-rewards" class="info-text"><strong><span>Rewards:</span></strong></div>
    <ul id="rewards-list">
        <li class="quest-reward" v-for="item in questRewards" :key="item.name">
            {{ item.name }} - {{ item.amount }}
        </li>    
    </ul>
    <button @click="openTown" class="shop-button">Accept</button>
    </div>
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
     background-position: center;
     background-size: 93%;
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
    font-size: 28px;
    color: darkblue;
}
#quest-text{
    font-size: 20px;
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