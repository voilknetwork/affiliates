(function($){'use strict';var updateOutput=function(e){var list=e.length?e:$(e.target),output=list.data('output');if(window.JSON){output.val(window.JSON.stringify(list.nestable('serialize')));}else{output.val('JSON browser support required for this demo.');}};$('#nestable').nestable({group:1}).on('change',updateOutput);$(function(){updateOutput($('#nestable').data('output',$('#nestable-output')));});}).apply(this,[jQuery]);