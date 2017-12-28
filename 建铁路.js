var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

module.exports.loop = function () {
    
    console.log(Game.rooms.sim.createConstructionSite(21, 20, STRUCTURE_ROAD));
    Game.creeps['Harvester1'].moveTo(21,20);
    for (var name in Game.constructionSites)
        console.log(Game.creeps['Harvester1'].build(Game.constructionSites[name]));

}