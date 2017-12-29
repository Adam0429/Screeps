var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.Upgrader');
var roleLoad = require('role.load');

Game.spawns['Spawn1'].createCreep([WORK , MOVE , CARRY ],'worker1');
Game.spawns['Spawn1'].createCreep([WORK , MOVE , CARRY ],'worker2');
Game.spawns['Spawn1'].createCreep([WORK , MOVE , CARRY ],'loadworker1');

module.exports.loop = function () {
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(name == "Tyler")
            roleUpgrader.run(creep);
        else{
            for(var name in Game.constructionSites){
                if(Game.constructionSites[name].progress < Game.constructionSites[name].progressTotal)
                    roleLoad.run(creep,Game.constructionSites[name]);
            }
        }
        // else 
        //     roleHarvester.run(creep);
    }
    
}  
