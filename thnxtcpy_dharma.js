var incStepCounter = function() {
  Session.set('stepCounter', Session.get('stepCounter') + 1);
}

if(Meteor.isClient) {
  Session.set('yourName', 'Your Name');
  Session.set('companyName', 'Your Company');
  Session.set('stepCounter', 1);

  Template.form.events({
    'blur .your-name': function(event) {
      var text = $('.your-name').text();
      if(text == '') {
        $('.your-name').text('Your Name');
        Session.set('yourName', 'Your Name');
      } else {
        Session.set('yourName', text);
        incStepCounter();
        $('.step2').removeClass('hide');
      }
    },
    'click .continue-btn': function(event) {
      incStepCounter();
      $('.step3').removeClass('hide');
      $('.step1').addClass('hide');
      $('.step2').addClass('hide');
    },
    'blur .company-name': function(event) {
      var text = $('.company-name').text();
      if(text == '') {
        $('.company-name').text('Your Company');
        Session.set('companyName', 'Your Company');
      } else {
        Session.set('companyName', text);
        incStepCounter();
        $('.step4').removeClass('hide');
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
        incStepCounter();
        $('.company-type-startup').removeClass('hide');
        $('.company-type').addClass('hide');
      }
    },
    'change .disruptive-question': function(event){
      var value = $('.disruptive-question').val();
      if(value === 'yes') {
        incStepCounter();
        $('.step3').addClass('hide');
        $('.step4').addClass('hide');
        $('.step5').removeClass('hide');
      } else {
        //later
      }
    },
    'blur .area-disruption': function(event) {
      var text = $('.area-disruption').val();
      if(text !== '') {
        incStepCounter();
        Session.set('areaDisruption', text);
        $('.step6').removeClass('hide');
      }
    },
    'change .disruption-type': function(event) {
      incStepCounter();
      $('.step7').removeClass('hide');
    },
    'change .new-type': function(event) {
      incStepCounter();
      $('.step8').removeClass('hide');
    },
    'change .range-type': function(event) {
      incStepCounter();
      $('.step9').removeClass('hide');
    },
    'blur .company-description': function(event) {
      var text = $('.company-description').val();
      if(text !== '') {
        incStepCounter();
        Session.set('companyDescription', text);
        $('.step10').removeClass('hide');
      }
    },
    'click .continue-2-btn': function(event) {
      incStepCounter();
      $('.step5').addClass('hide');
      $('.step6').addClass('hide');
      $('.step7').addClass('hide');
      $('.step8').addClass('hide');
      $('.step9').addClass('hide');
      $('.step10').addClass('hide');
      $('.question1').removeClass('hide');
    },
    'blur .company-url': function(event) {
      var text = $('.company-url').val();
      if(text !== '') {
        incStepCounter();
        Session.set('companyUrl', text);
        $('.question1').addClass('hide');
        $('.question2').removeClass('hide');
      }
    },
    'blur .company-video': function(event) {
      var text = $('.company-video').val();
      if(text !== '') {
        incStepCounter();
        Session.set('companyVideo', text);
        $('.question2').addClass('hide');
        $('.question3').removeClass('hide');
      }
    },
    'blur .company-press': function(event) {
      var text = $('.company-press').val();
      if(text !== '') {
        incStepCounter();
        Session.set('companyPress', text);
        $('.question3').addClass('hide');
        $('.question4').removeClass('hide');
      }
    },
    'blur .company-needs': function(event) {
      var text = $('.company-needs').val();
      if(text !== '') {
        incStepCounter();
        Session.set('companyNeeds', text);
        $('.question4').addClass('hide');
        $('.question5').removeClass('hide');
      }
    },
    'blur .company-help': function(event) {
      var text = $('.company-help').val();
      if(text !== '') {
        incStepCounter();
        Session.set('companyHelp', text);
        $('.question5').addClass('hide');
        $('.question6').removeClass('hide');
      }
    },
    'blur .company-feel': function(event) {
      var text = $('.company-feel').val();
      if(text !== '') {
        incStepCounter();
        Session.set('companyFeel', text);
        $('.question6').addClass('hide');
        $('.question7').removeClass('hide');
      }
    },
    'blur .company-people-1': function(event) {
      var text1 = $('.company-people-1').val();
      var text2 = $('.company-people-2').val();
      var text3 = $('.company-people-3').val();
      if(text1 !== '' && text2 !== '' && text3 !== '') {
        incStepCounter();
        Session.set('companyPeople1', text1);
        Session.set('companyPeople2', text2);
        Session.set('companyPeople3', text3);
        $('.question7').addClass('hide');
        $('.question8').removeClass('hide');
      }
    },
    'blur .company-people-2': function(event) {
      var text1 = $('.company-people-1').val();
      var text2 = $('.company-people-2').val();
      var text3 = $('.company-people-3').val();
      if(text1 !== '' && text2 !== '' && text3 !== '') {
        incStepCounter();
        Session.set('companyPeople1', text1);
        Session.set('companyPeople2', text2);
        Session.set('companyPeople3', text3);
        $('.question7').addClass('hide');
        $('.question8').removeClass('hide');
      }
    },
    'blur .company-people-3': function(event) {
      var text1 = $('.company-people-1').val();
      var text2 = $('.company-people-2').val();
      var text3 = $('.company-people-3').val();
      if(text1 !== '' && text2 !== '' && text3 !== '') {
        incStepCounter();
        Session.set('companyPeople1', text1);
        Session.set('companyPeople2', text2);
        Session.set('companyPeople3', text3);
        $('.question7').addClass('hide');
        $('.question8').removeClass('hide');
      }
    },
    'blur .company-important': function(event) {
      var text = $('.company-important').val();
      if(text !== '') {
        incStepCounter();
        Session.set('companyImportant', text);
        $('.question8').addClass('hide');
        $('.finalStepYes').removeClass('hide');
      }
    },
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

