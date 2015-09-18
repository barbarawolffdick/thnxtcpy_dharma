if(Meteor.isClient) {
  Session.set('yourName', 'Your Name');
  Session.set('companyName', 'Your Company');

  Template.form.events({
    'blur .your-name': function(event) {
      var text = $('.your-name').text();
      if(text == '') {
        $('.your-name').text('Your Name');
        Session.set('yourName', 'Your Name');
      } else {
        Session.set('yourName', text);
        $('.step2').removeClass('hide');
      }
    },
    'click .continue-btn': function(event) {
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
        $('.company-type-startup').removeClass('hide');
        $('.company-type').addClass('hide');
      }
    },
    'change .disruptive-question': function(event){
      var value = $('.disruptive-question').val();
      if(value === 'yes') {
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
        Session.set('areaDisruption', text);
        $('.step6').removeClass('hide');
      }
    },
    'change .disruption-type': function(event) {
      $('.step7').removeClass('hide');
    },
    'change .new-type': function(event) {
      $('.step8').removeClass('hide');
    },
    'change .range-type': function(event) {
      $('.step9').removeClass('hide');
    },
    'blur .company-description': function(event) {
      var text = $('.company-description').val();
      if(text !== '') {
        Session.set('companyDescription', text);
        $('.step10').removeClass('hide');
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
}

Router.route('/', function () {
  this.render('home');
});

Router.route('tell_your_history');

