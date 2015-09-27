var incStepCounter = function() {
  Session.set('stepCounter', Session.get('stepCounter') + 1);
}

var pressEnter = function(event) {
  return event.keyCode === 13 ? true : false;
}

if(Meteor.isClient) {
  Session.set('yourName', 'Your Name');
  Session.set('companyName', 'Your Company');
  Session.set('stepCounter', 1);

  Template.form.events({
    'keypress .your-name': function(event) {
      var text = $('.your-name').val();
      if(text !== '' && pressEnter(event)) {
        Session.set('yourName', text);
        $('.step2').removeClass('hide');
        $('.company-name').focus();
      }
    },
    'keypress .company-name': function(event) {
      var text = $('.company-name').val();
      if(text !== '' && pressEnter(event)) {
        Session.set('companyName', text);
        $('.step4').removeClass('hide');
        $('.company-type').focus();
      }
    },
    'change .company-type': function(event) {
      var value = $('.company-type').val();
      if(value === 'idea') {
        $('.company-type-idea').removeClass('hide');
        $('.company-type').addClass('hide');
      } else if(value === 'keynote') {
        $('.company-type-keynote').removeClass('hide');
        $('.company-type').addClass('hide');
      } else if(value === '2more') {
        $('.company-type-2more').removeClass('hide');
        $('.company-type').addClass('hide');
      } else {
        $('.company-type-startup').removeClass('hide');
        $('.company-type').addClass('hide');
        $('.disruptive-question').focus();
      }
    },
    'change .disruptive-question': function(event){
      var value = $('.disruptive-question').val();
      if(value === 'yes') {
        $('.step5').removeClass('hide');
      } else {
        $('.step5-no').removeClass('hide');
      }
    },
    'blur .company-area': function(event) {
      var text = $('.company-area').val();
      if(text !== '') {
        Session.set('companyArea', text);
        $('.step6-no').removeClass('hide');
      }
    },
    'blur .business-opportunity': function(event) {
      var text = $('.business-opportunity').val();
      if(text !== '') {
        Session.set('businessOpportunity', text);
        $('.step8').removeClass('hide');
      }
    },
    'change .disruption-type': function(event) {
      $('.step7').removeClass('hide');
    },
    'change .differentiation-type': function(event) {
      $('.step7-no').removeClass('hide');
    },
    'change .new-type': function(event) {
      $('.step8').removeClass('hide');
    },
    'change .range-type': function(event) {
      $('.step9').removeClass('hide');
    }
  });

  Template.form.helpers({
    yourName: function() {
      return Session.get('yourName');
    },
    companyName: function() {
      return Session.get('companyName');
    }
  });

  Template.stepCounter.helpers({
    counter: function() {
      return Session.get('stepCounter');
    }
  });
}

Router.route('/', function () {
  this.render('home');
});

Router.route('tell_your_history');

