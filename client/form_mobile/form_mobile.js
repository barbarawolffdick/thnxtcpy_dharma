if(Meteor.isClient) {

  Template.formMobile.events({
    "change .company-type.mobile": function() {
      var value = $('.company-type.mobile').val();
      Session.set("companyType", value);
    }
  });


  Template.companyType.helpers({
    typeChoose: function(){
      return Session.get("companyType");
    }
  });
}
