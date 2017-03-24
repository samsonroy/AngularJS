(function(){
  'use strict'
    angular.module('crudapp',[]).controller('MainCtrl',CoreFunction);
    function CoreFunction(){
        var viewmodel=this,
            addressCollection=[],
            isEditing=false;
        var add=function(){
            var newPerson={};
            if(!angular.equals({},viewmodel.person)){
                if(isEditing!==false){
                    addressCollection[isEditing]=viewmodel.person;
                }
                else
                    {
                        newPerson=viewmodel.person;
                        addressCollection.push(newPerson);
                        
                    }
                viewmodel.addresses=addressCollection;
                viewmodel.person={};
            }
        };
          var  edit=function(editPerson){
                isEditing=addressCollection.indexOf(editPerson);
                viewmodel.person=angular.copy(editPerson);
            };
           var remove=function(removePerson){
                var index=addressCollection.indexOf(removePerson);
                addressCollection.splice(index,1);
                if(addressCollection.length===0){
                    viewmodel.person={};
                    viewmodel.addresses=undefined;
                }
            };
          var  reset=function(){
                viewmodel.person={};
                viewmodel.search='';
                isEditing=false;
            };
        viewmodel.addClickHandler=function(){add();}
        viewmodel.editClickHandler=function(editPerson){
            edit(editPerson);
        }
        viewmodel.removeClickHandler=function(removePerson){
            remove(removePerson);
            
        }
        viewmodel.resetClickHandler=function(){
            reset();
        }
    }
})();