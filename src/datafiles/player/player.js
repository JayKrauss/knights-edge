export default
{
    playerList : [
        {
            characterName : "Testing",
            password : "password",
            level : 20,
            xp : 9999,
            toLevel : 99999,
            gold : 9999,
            currentHP : 999,
            maxHP : 999,
            profession : "blacksmith",
            attributePoints : 0,
            characterStrength : 6,
            characterConstitution : 5,
            characterDexterity : 3,
            characterCharisma : 3,
            characterIntellect : 3,

            //to hold quest IDs that can then be pulled and displayed, or completed
            openQuestsIDs : [],
            openQuestObjects : [],
            completedQuestIDs : [],
            completedQuestObjects : [],

            //objects to hold equipped weapons and armor IDs so that attack and defend values may be calculated. Passed to collatePlayerStats()
            equippedItemsIDs : [

            ],
            equippedItemsObjects : [

            ],
            equippedWeapons : [
            
            ],
            equippedArmor : [

            ],

            //calculated by collatePlayerStats(), damage and defense values to be passed to Combat components to determine outcomes
            totalPlayerDamage : 0,
            totalPlayerArmor : 0,

            //inventory array with objects holding all items in the player's inventory, to be passed to the Inventory component
            currentInventoryIDs : [
            [ "agt001" , 5 , "gear" ],
            [ "agr001" , 3 , "gear" ],
            [ "agf002" , 2 , "gear" ],
            [ "agw001" , 5 , "gear" ],
            [ "bhp001" , 3 , "gear" ],
            [ "lvcu001" , 1, "equipment" ],
            [ "mhid001", 1, "equipment" ],
            [ "lfsu001", 1, "equipment" ],
            [ "hlshu001", 1, "equipment" ],
            ],
            currentInventoryObjects : [
            
            ],
        }
    ]
}