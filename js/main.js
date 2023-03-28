$(window).on('load', function(){
	
	new WOW().init();
	jQuery('.scrollbar-inner').scrollbar();
	
//	custom day time picker
	$('#daily_date').on('change', function(){
		var dated=$(this).val();
		var dated=(moment(dated).format('LL'));
		$('.the_day').text(dated);
//		alert(moment(dated).format('LL'));
	});
	
	
	//decline requests
	$('.decline-btn').on('click', function(){
		$('.modal .request-container').addClass('d-none');
		$('.modal .decline-reason').removeClass('d-none');
		$(this).parent().addClass('d-none');
	});
	
	
	
	$('.canceldec-btn').on('click', function(){
		$('.modal .request-container').removeClass('d-none');
		$('.modal .decline-reason').addClass('d-none');
		$(this).parent().parent().parent().parent().parent().parent().siblings('.modal-footer').removeClass('d-none');
	});
	
	$('#associate').on('click', '.close', function(){
		$('.modal .request-container').removeClass('d-none');
		$('.modal .decline-reason').addClass('d-none');
		$('#associate .modal-footer').removeClass('d-none');
	});
	//decline requests
	
	//card deactivation
	$('.table').on('click', '.deactivator',function(){
		var the_title=$(this).parent().siblings('.std_name').text();
		$('#deactivate-title').text("Deactivate "+the_title+"'s Card");
	});
	
	//my list of blinkers
	$('.table').on('click', '.my_blinkers', function(){
		var the_title=$(this).parent().siblings('.the_guardian').children('p').children('a').text();
		$('#MyBlinkers #MyBlinkers_title').text(the_title+"'s Blinkers");
	});
	
	//my list of guardians
	$('.table').on('click', '.my_guardians', function(){
		var the_title=$(this).parent().siblings('.the_blinkers').children('p').children('a').text();
		$('#MyGuardians #MyGuardians_title').text(the_title+"'s Guardians");
	});
	
	//------------------------------------------------------------------------------------------------------
	//blocking functions
	//------------------------------------------------------------------------------------------------------
	
	//parent accounts blocking
	$('.table').on('click', '.deactivate-parent', function(){
		var the_title=$(this).parent().siblings('.the_guardian').children('p').children('a').text();
		$('#deactivate-parent #deactivate-parent-title').text("Why do you want to block "+the_title+"'s Account?");
	})
	//parent account blocking
	
	//decline school application
	$('.table').on('click', '.decline-school', function(){
		var the_title=$(this).parent().siblings('.the_school').children('p').children('a').text();
		$('#decline-school #decline-school-title').text("Why do you want to block "+the_title+"'s application?");
	})
	//decline school application
	
	//students account blocking
	$('.table').on('click', '.deactivate-blinker', function(){
		var the_title=$(this).parent().siblings('.the_blinkers').children('p').children('a').text();
		$('#deactivate-blinker #deactivate-blinker-title').text("Why do you want to block "+the_title+"'s Account?");
	});
	//students account blocking
	
	//deactivating shop
	
	$('.table').on('click', '.deactivate-shop', function(){
		var the_title=$(this).parent().siblings('.shops_name').text();
		$('#deactivate-shop #deactivate-shop-title').text("Why do you want deactivate "+the_title+"'s shop?");
	});
	//deactivating shop
	
	//deactivating system usres
	
	$('.table').on('click', '.deactivate-user', function(){
		var the_title=$(this).parent().siblings('.the_user').children('p').text();
		$('#deactivate-user #deactivate-user-title').text("Why do you want deactivate "+the_title+"'s Account?");
	});
	//------------------------------------------------------------------------------------------------------
	//blocking functions
	//------------------------------------------------------------------------------------------------------
	
	//terminating association
	$('.table').on('click', '.terminate-association', function(){
		var the_guardian=$(this).parent().siblings('.the-guardian').children('p').text();
		var the_blinker=$(this).parent().siblings('.blinkers_name').text();
		$('#terminate-association #terminate-association-title').text("What's the reason for terminating "+the_guardian+"'s and "+the_blinker+"'s Association" );
	});
	//terminating association
	
	
	
	//decline association
	$('.table').on('click', '.disaprove-association', function(){
		var the_guardian=$(this).parent().siblings('.the-guardian').children('p').text();
		var the_blinker=$(this).parent().siblings('.blinkers_name').text();
		$('#disaprove-association #disaprove-association-title').text("What's the reason for terminating "+the_guardian+"'s and "+the_blinker+"'s Association request" );
	});
	//decline association
	
	
	
//	$('.table-ranger').on('change', function(){
//		var therange=$(this).val();
//		alert(therange);
//	});
	
	$('.table-ranger').on('change', function(){
		
	});
//	increase wigdth when value changes
	function Expand(obj){
      if (!obj.savesize) obj.savesize=obj.size;
      obj.size=Math.max(obj.savesize,obj.value.length);
	 }
	 
	
		
		
	//	custom day time picker
		$('#daily_date').on('change', function(){
			var dated=$(this).val();
			var dated=(moment(dated).format('LL'));
			$('.the_day').text(dated);
	//		alert(moment(dated).format('LL'));
		});
		$('.table-ranger').on('change', function(){
			
		});
	//	increase wigdth when value changes
		function Expand(obj){
		  if (!obj.savesize) obj.savesize=obj.size;
		  obj.size=Math.max(obj.savesize,obj.value.length);
		 }
		
		
	//	date ranger functions
	
	$(".date-range")[0] && $(".date-range").flatpickr({
      enableTime: !1,
	  altInput: true,
	   mode:"range",
	   altFormat: "j-F, Y",
	  dateFormat: "Y-m-d",
	  maxDate: "today",
	  minDate: "06-10-2019",
		
		
      nextArrow: '<i class="zmdi zmdi-long-arrow-right" />',
      prevArrow: '<i class="zmdi zmdi-long-arrow-left" />',
		
		//		write a function here when making changes in regards to date ranger
		
		onClose: function(selectedDates, dateStr, instance) {
			var therange=$('#date_ranger').val();
			
			//selected date range
			var dates=therange.split(' to ');
			
			//date in the format 2020-mm-dd
			var date1=dates[0];
			var date2=dates[1];
			
			// date in the format March 19, 2020
			var date1read=moment(date1).format('ddd, MMMM Do YYYY');
			var date2read=moment(date2).format('ddd, MMMM Do YYYY');
			
			//======= write custom functions bellow once a change has been made to the date range=======
			
			//function to update text output with new date range
			$('.date-range-text').text(date1read+' To '+date2read);			
			
       
    }
    });
//	full screen table

	
	 $("body").on("click", "[data-table-action]", function (a) {
      a.preventDefault();
      var b = $(this).data("table-action");
      if ("print" === b && $(this).closest(".dataTables_wrapper").find(".buttons-print").trigger("click"), "fullscreen" === b) {
        var c = $(this).parent().parent().parent().parent().parent().parent().parent()
        c.hasClass("card--fullscreen") ? (c.removeClass("card--fullscreen"), $("body").removeClass("data-table-toggled")) : (c.addClass("card--fullscreen"), $("body").addClass("data-table-toggled"))
      }
    });
//full screen controller
	
	
//	datatable navigation styling
	$('.nav-link').on('click', function(){
		event.preventDefault();
		$(this).addClass('active').parent().siblings().children('.nav-link').removeClass('active');
	});

	// $('td').eq(0).on('click', function(){
	// 	$('.modal-body-header').children('span').html("nothing");

	// 	var html_data=$('this').siblings().index(6).text();
	// 	alert(html_data);
	// });
	
	

	$('.show-all').on('click', function(){
			$('.table-all').removeClass('d-none').siblings().addClass('d-none');
		});
		
		$('.show-compliant').on('click', function(){
			$('.table-compliant').removeClass('d-none').siblings().addClass('d-none');
		});
		
		$('.show-uncompliant').on('click', function(){
			$('.table-uncompliant').removeClass('d-none').siblings().addClass('d-none');
		});
		
		$('.show-penalty').on('click', function(){
			$('.table-penalty').removeClass('d-none').siblings().addClass('d-none');
		});
	
	
	
});

//contractor type

$('.payment-methods-radios input[name$="pay-method"]').on('change', function(){
	var theMethod=$(this).val();
	// alert(theMethod);

	
	if(theMethod=="mpesa"){
		$('.act-mpesa').removeClass('d-none');
	}
	else{
		$('.act-mpesa').addClass('d-none');
	}

})

function selectContratorType(){
	var thetype=$('.contractorType').val();
	if(thetype=="individual"){
		$('.showPerson').removeClass('d-none');
		$('.showCompany').addClass('d-none');
	}
	else if(thetype=="company"){
		$('.showCompany').removeClass('d-none');
		$('.showPerson').addClass('d-none');
	}
}

function selectArchitectType(){
	var thetype=$('.architectType').val();
	if(thetype=="individual"){
		$('.showPerson').removeClass('d-none');
		$('.showCompany').addClass('d-none');
	}
	else if(thetype=="company"){
		$('.showCompany').removeClass('d-none');
		$('.showPerson').addClass('d-none');
	}
}

function selectEngType(){
	var thetype=$('.engType').val();
	if(thetype=="individual"){
		$('.showPerson').removeClass('d-none');
		$('.showCompany').addClass('d-none');
	}
	else if(thetype=="company"){
		$('.showCompany').removeClass('d-none');
		$('.showPerson').addClass('d-none');
	}
}

selectArchitectType();
selectEngType();

selectContratorType();

$('.architectType').on('change', function(){
	selectArchitectType();

});

$('.engType').on('change', function(){
	selectEngType();

})

$('.contractorType').on('change', function(){
	selectContratorType();
});

$('input.personnel-attachment').on('change', function(){
	
	if($(this).value != ""){
		$(this).siblings('label').removeClass('border-danger').children('p').html('<i class="mdi mdi-check-all"></i> File selected').removeClass('text-danger').addClass('text-success');
	}
	else{

	}

});

$('.img-container input').on('change', function(){
	
	if($(this).value != ""){
		$(this).siblings('small').children('strong').html('<i class="mdi mdi-check-all"></i> File selected').removeClass('text-danger').addClass('text-info');
		$(this).parent().addClass('border-info').removeClass('border-danger');
	}
	else{

	}

});


$('.application-nav li').on('click', function(){
	var theIndex=$(this).index();
	$('.membership-form>div').eq(theIndex).removeClass('d-none').siblings().addClass('d-none');

});

$('.membership-form .btn-next').on('click', function(){
	$(this).parent().parent().addClass('d-none').next().removeClass('d-none');
	var theParent=$(this).parent().parent();
	var theParentIndex=theParent.index();

	$('.application-nav li').children('a').eq(theParentIndex+1).addClass('active').parent().siblings().children('a').removeClass('active');
	

});

$('.membership-form .btn-prev').on('click', function(){
	$(this).parent().parent().addClass('d-none').prev().removeClass('d-none');

	var theParent=$(this).parent().parent();
	var theParentIndex=theParent.index();

	$('.application-nav li').children('a').eq(theParentIndex-1).addClass('active').parent().siblings().children('a').removeClass('active');
	

	

});

function ownershipChange(){
	var theInput=$('.owner-type');
	var owner=theInput.val();

	if(owner=="company"){
		$('.company-ownership').removeClass('d-none').siblings().addClass('d-none');
		
	}

	else if(owner=="individual"){
		$('.individual-ownership').removeClass('d-none').siblings().addClass('d-none')
	}
	else{
		$('.individual-ownership').addClass('d-none').siblings().addClass('d-none');
	}
}
ownershipChange();

//changing the ownership type
$('.owner-type').on('change', function(){
	ownershipChange();
	

});


//owl initializer
$(document).ready(function(){

	var owl = $('.owl-carousel');
	owl.owlCarousel({
		
		items:4,
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:15000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			992:{
				items:2
			},
			1200:{
				items:3
			},
			1440:{
				items:4
			}
		}
	});

  });

    //================================================
  //map scripts
  //================================================
  $('.map-key-card').on('click', function(){
	$('.map-card').removeClass('d-none');
	});

	$('.close-map-key').on('click', function(){
  $('.map-card').addClass('d-none');
  });
  
  
  function prof_application_form(){
	  if(document.getElementById("structural-eng-link").checked == true){
		  $('.structural-eng-form').removeClass('d-none');
		  $('.architect-form').addClass('d-none');
		  $('.contractor-form').addClass('d-none');
		  $('.analytical-surv-form').addClass('d-none');

	  } else if(document.getElementById("architect-link").checked == true){
		$('.structural-eng-form').addClass('d-none');
		$('.architect-form').removeClass('d-none');
		$('.contractor-form').addClass('d-none');
		$('.analytical-surv-form').addClass('d-none');

	  } else if(document.getElementById("contractor-link").checked == true){
		$('.structural-eng-form').addClass('d-none');
		$('.architect-form').addClass('d-none');
		$('.contractor-form').removeClass('d-none');
		$('.analytical-surv-form').addClass('d-none');
	} else if(document.getElementById("analytical-surv-link").checked == true){
		$('.structural-eng-form').addClass('d-none');
		$('.architect-form').addClass('d-none');
		$('.contractor-form').addClass('d-none');
		$('.analytical-surv-form').removeClass('d-none');
	}

  }

$(function() {

	var start = moment();
	var end = moment();

	function cb(start, end) {
		// $('#today').html(start.format('MMMM D, YYYY'));

		if(end.format('MMMM D, YYYY') === start.format('MMMM D, YYYY')){			
			$('#reportrange span').html(start.format('MMMM D, YYYY'));
			$('#today').html(start.format('MMMM D, YYYY'));

			if(moment().format('MMMM D, YYYY') === start.format('MMMM D, YYYY')){
				// if todays date is today
				$('#date-reset').addClass('d-none');
			}
			else{
				$('#date-reset').removeClass('d-none');	
			}

			

		} else {
			$('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
			$('#today').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
			$('#date-reset').removeClass('d-none');	
		}

	}

	$('#reportrange').daterangepicker({
		startDate: start,
		endDate: end,
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		}
	}, cb, );

	cb(start, end);

});
	
function reset_date(){
	$('#reportrange span').html(moment().format('MMMM D, YYYY'));
	// $('#today').html(moment().format('MMMM D, YYYY'));
	$('#date-reset').addClass('d-none');	

}
  