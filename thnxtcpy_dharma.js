var incStepCounter = function() {
  Session.set('stepCounter', Session.get('stepCounter') + 1);
}

var pressEnter = function(event) {
  return event.keyCode === 13 ? true : false;
}

var getFormInfo = function() {
  var formData = {
    "1.Name": $('.your-name').val(),
    "2.Company name": $('.company-name').val(),
    "3.It's disruptive?": $('.disruptive-question :selected').val(),
    "4.Disruptive area": $('.disruption-type :selected').val(),
    "5.Will create": $('.new-type :selected').val(),
    "6.Where": $('.range-type :selected').val(),
    "7.Company description": $('.company-description').val(),
    "8.Company website": $('.company-url').val(),
    "9.Company video": $('.company-video').val(),
    "10.Press perform": $('.company-press').val(),
    "11.Want from The Next Company": $('.company-needs').val(),
    "12.People contact": $('.company-people').val(),
    "13.Important things": $('.company-important').val()
  }

  return formData;
}

if(Meteor.isClient) {
  Session.set('companyName', 'Your Company');
  Session.set('stepCounter', 1);

  Template.form.events({
    'keypress .your-name': function(event) {
      var text = $('.your-name').val();
      if(text !== '' && pressEnter(event)) {
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
        $('.disruption-type').focus();
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
      $('.new-type').focus();
    },
    'change .differentiation-type': function(event) {
      $('.step7-no').removeClass('hide');
    },
    'change .new-type': function(event) {
      $('.step8').removeClass('hide');
      $('.range-type').focus();
    },
    'change .range-type': function(event) {
      $('.step9').removeClass('hide');
      $('.company-description').focus();
    },
    'keypress .company-description': function(event) {
      var text = $('.company-description').val();
      if(text !== '' && pressEnter(event)) {
        Session.set('companyDescription', text);
        $('.step10').removeClass('hide');
        $('.company-url').focus();
      }
    },
    'click .send-btn': function(event) {
      $.ajax({
        url: "//formspree.io/douglasdetoni92@gmail.com", 
        method: "POST",
        data: getFormInfo(),
        dataType: "json"
      })
      .done(function() {
        Router.go('confirmation');
      })
      .fail(function() {
        console.log("eerrou");
      });
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
Router.route('confirmation');



