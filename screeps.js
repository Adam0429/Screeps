module.exports.loop = function(){
    console.log('�ɿ�');
    Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Upgrader1' );
    var creep = Game.creeps['Upgrader1']
    var sources = creep.room.find(FIND_SOURCES);
    if(creep.harvest)
       creep.moveTo(sources);   
    // duwei.moveTo(source)
}