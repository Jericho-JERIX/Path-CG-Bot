const Events = {
    loginGreeting: function(){
        console.log("<Bot> Online!")
    }
}

module.exports = {
    execute: function(client){
        for(var i in Events){
            Events[i](client)
        }
    }
}