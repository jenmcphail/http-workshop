angular.module('ThePresidentsApp', [])
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http){
  var self = this;
  self.all=[];
  self.addPresident = addPresident;
  self.newPresident = {};
  self.getPresidents = getPresidents;

  function getPresidents(){
    $http
    .get('http://localhost:3000/presidents')
    .then(function(response){
      self.all = response.data.presidents;
    })
  }
  getPresidents();

  function addPresident(){
    $http
    .post('http://localhost:3000/presidents', self.newPresident)
    .then(function(response){
      getPresidents();
    });
    self.newPresident = {};
  }

  function deletePresident(){
    $http
    .delete('http://localhost:3000/presidents', self.newPresident)
    .then(function(response){
      getPresidents();
    });
    self.newPresident = {};
  }
}


  

  
