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
    "10.Press perform": $('.company-press-1').val() + ', ' + $('.company-press-2').val() + ', ' + $('.company-press-3').val(),
    "11.Want from The Next Company": $('.company-needs').val(),
    "12.People contact": $('.company-people-1').val() + ', ' + $('.company-people-2').val() + ', ' + $('.company-people-3').val(),
    "13.Important things": $('.company-important').val()
  }

  return formData;
}

var getForm2Info = function() {
  var formData = {
    "1.Email": $('.email-address').val(),
    "2.Expecting": $('.expecting').val(),
  }

  return formData;
}

var validateInfo = function(data) {
  var count = 0;
  _.each(data, function(value, key) {
    if(value === "" || value === ", , ") {
      count++;
    }
  });

  if(count) return false;
  else return true;
}

if(Meteor.isClient) {
  Session.set('companyName', 'Your Company');
  Session.set('stepCounter', 1);

  Template.form.events({
    'keypress .your-name': function(event) {
      var text = $('.your-name').val();
      if(text !== '' && pressEnter(event)) {
        Session.set('yourName', text);
        $('.step2').removeClass('hide');
        $('.step1').addClass('hide');
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
        $('.company-type-keynote').addClass('hide');
        $('.company-type-2more').addClass('hide');
        $('.company-type-startup').addClass('hide');
      } else if(value === 'keynote') {
        $('.company-type-idea').addClass('hide');
        $('.company-type-keynote').removeClass('hide');
        $('.company-type-2more').addClass('hide');
        $('.company-type-startup').addClass('hide');
      } else if(value === '2more') {
        $('.company-type-idea').addClass('hide');
        $('.company-type-keynote').addClass('hide');
        $('.company-type-2more').removeClass('hide');
        $('.company-type-startup').addClass('hide');
      } else {
        $('.company-type-idea').addClass('hide');
        $('.company-type-keynote').addClass('hide');
        $('.company-type-2more').addClass('hide');
        $('.company-type-startup').removeClass('hide');
        $('.disruptive-question').focus();
      }
    },
    'change .disruptive-question': function(event){
      var value = $('.disruptive-question').val();
      if(value === 'yes') {
        $('.step5').removeClass('hide');
        $('.step5-no').addClass('hide');
        $('.step6-no').addClass('hide');
        $('.step7-no').addClass('hide');
        $('.step8').addClass('hide');
        $('.step9').addClass('hide');
        $('.step10').addClass('hide');
        $('.disruption-type').focus();
      } else {
        $('.step5-no').removeClass('hide');
        $('.step5').addClass('hide');
        $('.step7').addClass('hide');
        $('.step8').addClass('hide');
        $('.step9').addClass('hide');
        $('.step10').addClass('hide');
        $('.company-area').focus();
      }
    },
    'keypress .company-area': function(event) {
      var text = $('.company-area').val();
      if(text !== '' && pressEnter(event)) {
        $('.step6-no').removeClass('hide');
        $('.differentiation-type').focus();
      }
    },
    'keypress .business-opportunity': function(event) {
      var text = $('.business-opportunity').val();
      if(text !== '' && pressEnter(event)) {
        $('.step8').removeClass('hide');
        $('.range-type').focus();
      }
    },
    'change .disruption-type': function(event) {
      $('.step7').removeClass('hide');
      $('.new-type').focus();
    },
    'change .differentiation-type': function(event) {
      $('.step7-no').removeClass('hide');
      $('.business-opportunity').focus();
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
      var info = getFormInfo();
      if(validateInfo(info)) {
        $.ajax({
          url: "//formspree.io/douglasdetoni92@gmail.com", 
          method: "POST",
          data: getFormInfo(),
          dataType: "json"
        })
        .done(function() {
          Router.go('confirmation');
        });
      } else {
        $('.field-message').removeClass('hide');
      }
    },
    'click .send-btn-2': function(event) {
      var info = getForm2Info();
      console.log(info);
      if(validateInfo(info)) {
        $.ajax({
          url: "//formspree.io/douglasdetoni92@gmail.com", 
          method: "POST",
          data: info,
          dataType: "json"
        })
        .done(function() {
          Router.go('confirmation');
        });
      }
    },
    'click .go-back-btn': function(event) {
      Router.go('/');
    }
  });

  Template.home.rendered = function() {
    new WOW().init();
  }

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

  Template.confirmation.helpers({
    companyName: function() {
      return Session.get('companyName');
    }
  });
}


Router.route('/', function () {
  this.render('home');
});

Router.route('tell_your_history');
Router.route('confirmation');



