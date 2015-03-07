 Template.session.events({

      "submit .new-cueIn": function(event){
        event.preventDefault();
        var cue = event.target.text.value;

        Snippets.update({"_id" : "RZfK3WvWLqcWpdcho"},
          {$set:{cueIn: cue}}
          );

        event.target.text.value = "";

      },

       "submit .new-cueOut": function(event){
        event.preventDefault();
        var cue = event.target.text.value;
        Snippets.update({"_id" : "RZfK3WvWLqcWpdcho"},
          {$set:{cueOut: cue}}
          );
        event.target.text.value = "";

      }
    });


    Template.session.helpers({
      cueIn: function () {
        return Snippets.findOne({"_id" : "RZfK3WvWLqcWpdcho"}).cueIn;
      },

      cueOut: function () {
        return Snippets.findOne({"_id" : "RZfK3WvWLqcWpdcho"}).cueOut;
      }

});