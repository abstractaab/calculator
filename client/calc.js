/*
Airflake 1,2,3,4,5,6
Airflake XL 1,2,3,4,5,6
Aircone
Airwave
Bits wall
Trinline wall
*/

Template.calc.viewmodel({
	width: 2,
	height: 2.5,
	area: function() {
		return this.width() * this.height();
	},

	airflake_e2: 0.4,
	airflake_e3: 0.345,
	airflake_e4: 0.3,

	airflake1_width: function() {
		return  Math.floor(this.width()/this.airflake_e3());
	},

	airflake1_height: function() {
		return Math.floor((this.height()-0.01)/this.airflake_e4());
	},

	airflake1_total: function() {
		if(this.airflake1_height()%2===0) {
			var value = (this.airflake1_height()/2*this.airflake1_width()) + (this.airflake1_height()/2*(this.airflake1_width()-1));
		}
		else {
			var value = ((this.airflake1_height()+1)/2*this.airflake1_width())+(((this.airflake1_height()-1)/2)*(this.airflake1_width()-1))
		}
		return Math.floor(value)
	},

	airflake1_total10: function() {
		return Math.ceil(this.airflake1_total()/10);
	},

	// -----------

	airflake2_width: function() {
		return Math.floor((this.width()-0.01)/this.airflake_e4());
	},

	airflake2_height: function() {
		return  Math.floor(this.height()/this.airflake_e3());
	},

	airflake2_total: function() {
		if(this.airflake2_width()%2===0) {
			var value = (this.airflake2_height()/2*this.airflake2_width()) + (this.airflake2_height()/2*this.airflake2_width()-1);
		}
		else {
			var value = ((this.airflake2_height()+1)/2*this.airflake2_width())+(((this.airflake2_height()-1)/2)*(this.airflake2_width()-1))
		}
		return Math.floor(value)
	},

	airflake2_total10: function() {
		return Math.ceil(this.airflake2_total()/10);
	},

	// ----------

	airflake3_width: function() {
		return Math.floor((this.width())/this.airflake_e3());
	},

	airflake3_height: function() {
		return  Math.floor(this.height()/this.airflake_e2());
	},

	airflake3_total: function() {
		return Math.floor(this.airflake3_width()*this.airflake3_height());
	},

	airflake3_total10: function() {
		return Math.ceil(this.airflake3_total()/10);
	},

	// ----------

	airflake4_width: function() {
		return Math.floor((this.width())/this.airflake_e2());
	},

	airflake4_height: function() {
		return  Math.floor(this.height()/this.airflake_e3());
	},

	airflake4_total: function() {
		return Math.floor(this.airflake4_width()*this.airflake4_height());
	},

	airflake4_total10: function() {
		return Math.ceil(this.airflake4_total()/10);
	}, 

	// ----------

	airflake5_width: function() {
		return Math.floor((this.width())/this.airflake_e2());
	},

	airflake5_height: function() {
		return  Math.floor(this.height()/this.airflake_e3());
	},

	airflake5_total: function() {
		if(this.airflake5_height()%2===0) {
			return Math.floor(this.airflake5_height()/2*this.airflake5_width())+((this.airflake5_height()/2)*(this.airflake5_width()-1))
		}
		else {
			return Math.floor((this.airflake5_height()+1)/2*this.airflake5_width())+(((this.airflake5_height()-1)/2)*(this.airflake5_width()-1))

		}
	},

	airflake5_total10: function() {
		return Math.ceil(this.airflake5_total()/10);
	}, 

	// ----------

	airflake6_width: function() {
		return Math.floor((this.width())/this.airflake_e3());
	},

	airflake6_height: function() {
		return  Math.floor(this.height()/this.airflake_e2());
	},

	airflake6_total: function() {
		if(this.airflake6_height()%2===0) {
			return Math.floor(this.airflake6_height()/2*this.airflake6_width())+((this.airflake6_height()/2)*(this.airflake6_width()-1))
		}
		else {
			return Math.floor((this.airflake6_height()+1)/2*this.airflake6_width())+(((this.airflake6_height()-1)/2)*(this.airflake6_width()-1))

		}
	},

	airflake6_total10: function() {
		return Math.ceil(this.airflake6_total()/10);
	}, 

	/*
	 * AIRFLAKE XL
	 */

	airflakexl_e2: 0.69,
	airflakexl_e3: 0.6,
	airflakexl_e4: 0.518,
	airflakexl_e5: 0.172,

	airflakexl1_width: function() {
		return  Math.floor(this.width()/this.airflakexl_e3());
	},

	airflakexl1_height: function() {
		return Math.floor((this.height()-this.airflakexl_e5())/this.airflakexl_e4());
	},

	// (B11/2*A11)+((B11/2)*(A11-1));
	//((B11+1)/2*A11)+(((B11-1)/2)*(A11-1)))
	airflakexl1_total: function() {
		if(this.airflakexl1_height()%2===0) {
			var value = (this.airflakexl1_height()/2*this.airflakexl1_width()) + (this.airflakexl1_height()/2*(this.airflakexl1_width()-1));
		}
		else {
			var value = ((this.airflakexl1_height()+1)/2*this.airflakexl1_width())+(((this.airflakexl1_height()-1)/2)*(this.airflakexl1_width()-1))
		}
		return Math.floor(value)
	},

	airflakexl1_total10: function() {
		return Math.ceil(this.airflakexl1_total()/5);
	},

	// -----------

	airflakexl2_width: function() {
		return Math.floor((this.width()-this.airflakexl_e5())/this.airflakexl_e4());
	},

	airflakexl2_height: function() {
		return  Math.floor(this.height()/this.airflakexl_e3());
	},

	airflakexl2_total: function() {
		if(this.airflakexl2_width()%2===0) {
			var value = (this.airflakexl2_height()/2*this.airflakexl2_width()) + (this.airflakexl2_height()/2*this.airflakexl2_width()-1);
		}
		else {
			var value = ((this.airflakexl2_height()+1)/2*this.airflakexl2_width())+(((this.airflakexl2_height()-1)/2)*(this.airflakexl2_width()-1))
		}
		return Math.floor(value)
	},

	airflakexl2_total10: function() {
		return Math.ceil(this.airflakexl2_total()/5);
	},

	// ----------

	airflakexl3_width: function() {
		return Math.floor((this.width())/this.airflakexl_e3());
	},

	airflakexl3_height: function() {
		return  Math.floor(this.height()/this.airflakexl_e2());
	},

	airflakexl3_total: function() {
		return Math.floor(this.airflakexl3_width()*this.airflakexl3_height());
	},

	airflakexl3_total10: function() {
		return Math.ceil(this.airflakexl3_total()/5);
	},

	// ----------

	airflakexl4_width: function() {
		return Math.floor((this.width())/this.airflakexl_e2());
	},

	airflakexl4_height: function() {
		return  Math.floor(this.height()/this.airflakexl_e3());
	},

	airflakexl4_total: function() {
		return Math.floor(this.airflakexl4_width()*this.airflakexl4_height());
	},

	airflakexl4_total10: function() {
		return Math.ceil(this.airflakexl4_total()/5);
	}, 

	// ----------

	airflakexl5_width: function() {
		return Math.floor((this.width())/this.airflakexl_e2());
	},

	airflakexl5_height: function() {
		return  Math.floor(this.height()/this.airflakexl_e3());
	},

	airflakexl5_total: function() {
		if(this.airflakexl5_height()%2===0) {
			return Math.floor(this.airflakexl5_height()/2*this.airflakexl5_width())+((this.airflakexl5_height()/2)*(this.airflakexl5_width()-1))
		}
		else {
			return Math.floor((this.airflakexl5_height()+1)/2*this.airflakexl5_width())+(((this.airflakexl5_height()-1)/2)*(this.airflakexl5_width()-1))

		}
	},

	airflakexl5_total10: function() {
		return Math.ceil(this.airflakexl5_total()/5);
	}, 

	// ----------

	airflakexl6_width: function() {
		return Math.floor((this.width())/this.airflakexl_e3());
	},

	airflakexl6_height: function() {
		return  Math.floor(this.height()/this.airflakexl_e2());
	},

	airflakexl6_total: function() {
		if(this.airflakexl6_height()%2===0) {
			return Math.floor(this.airflakexl6_height()/2*this.airflakexl6_width())+((this.airflakexl6_height()/2)*(this.airflakexl6_width()-1))
		}
		else {
			return Math.floor((this.airflakexl6_height()+1)/2*this.airflakexl6_width())+(((this.airflakexl6_height()-1)/2)*(this.airflakexl6_width()-1))

		}
	},

	airflakexl6_total10: function() {
		return Math.ceil(this.airflakexl6_total()/5);
	}, 

	aircone_e2: 0.475,
	aircone_e3: 0.415,

	aircone1_width: function() {
		return  Math.floor(this.width()/this.aircone_e2());
	},

	aircone1_height: function() {
		return Math.floor(this.height()/this.aircone_e3());
	},

	aircone1_total: function() {
		// =(A11+(A11-1))*B11
		return Math.floor((this.aircone1_width()+(this.aircone1_width()-1))*this.aircone1_height())
	},

	aircone1_total10: function() {
		return Math.ceil(this.aircone1_total()/10);
	},

	aircone1_edge: function() {
		return this.aircone1_height();
	},

	// --------------

	aircone2_width: function() {
		return  Math.floor(this.width()/this.aircone_e3());
	},

	aircone2_height: function() {
		return Math.floor(this.height()/this.aircone_e2());
	},

	aircone2_total: function() {
		// =(A11+(A11-1))*B11
		return Math.floor((this.aircone2_height()+(this.aircone2_height()-1))*this.aircone2_width())
	},

	aircone2_total10: function() {
		return Math.ceil(this.aircone2_total()/10);
	},

	aircone2_edge: function() {
		return this.aircone2_width();
	},

	// --------------

	aircone3_width: function() {
		return  Math.floor(this.width()/this.aircone_e3());
	},

	aircone3_height: function() {
		return Math.floor(this.height()/this.aircone_e2());
	},

	aircone3_total: function() {
		// =(A11+(A11-1))*B11
		return Math.floor(this.aircone3_height()*this.aircone3_width())
	},

	aircone3_total10: function() {
		return Math.ceil(this.aircone3_total()/10);
	},


	// ----------------

	airwave_e2: 0.41,
	airwave_e3: 0.4,
	airwave_e4: 0.3,
	airwave_e5: 0.12,

	airwave1_width: function() {
		if(Math.floor(this.width()/(this.airwave_e2()+this.airwave_e4()))===0) {
			var part1 = 0;
		}
		else {
			var part1 = Math.floor((this.width()/(this.airwave_e2()+this.airwave_e4())*2))
		}

		if(Math.floor(this.width()/this.airwave_e2()+this.airwave_e4()) === 0) {
			var part2 = 0;
		}
		else {
			var part2 = (this.width()/this.airwave_e2()+this.airwave_e4()) - Math.floor(this.width()/this.airwave_e2()+this.airwave_e4());
		}

		return part1 + Math.floor(part2);
	},

	airwave1_height: function() {
		return Math.floor((this.height()-this.airwave_e5())/this.airwave_e3());
	},

	airwave1_total: function() {
		// =(A11+(A11-1))*B11
		return Math.floor(this.airwave1_width()*this.airwave1_height())
	},

	// --------------

	airwave2_width: function() {
		return  Math.floor(this.width()/this.airwave_e2());
	},

	airwave2_height: function() {
		return Math.floor((this.height()-this.airwave_e5())/this.airwave_e3());
	},

	airwave2_total: function() {
		return Math.floor(this.airwave2_height()*this.airwave2_width())
	},


	// ----------------

	bitswall_e2: 0.575,
	bitswall_e3: 0.51,

	bitswall1_width: function() {
		return  Math.floor(this.width()/this.bitswall_e2());
	},

	bitswall1_height: function() {
		return Math.floor(this.height()/this.bitswall_e3());
	},

	bitswall1_total: function() {
		// =(A11+(A11-1))*B11
		return Math.floor((this.bitswall1_width()+(this.bitswall1_width()-1))*this.bitswall1_height())
	},

	// --------------

	bitswall2_width: function() {
		return  Math.floor(this.width()/this.bitswall_e3());
	},

	bitswall2_height: function() {
		return Math.floor(this.height()/this.bitswall_e2());
	},

	bitswall2_total: function() {
		// =(A11+(A11-1))*B11
		return Math.floor((this.bitswall2_height()+(this.bitswall2_height()-1))*this.bitswall2_width())
	},

	// ------------------


	triline_total: function() {
		return Math.floor( (this.width()*this.height()) / 0.32 );
	}, 

})

Template.calc.onRendered(function() {
	var formatState = function(state) {
		if (!state.id) { console.log("hej"); return state.text; }
		var $state = $(
			'<span><img src="/' + state.element.value.toLowerCase() + '1.png" class="img-flag" /> ' + state.text + '</span>'
		);
		console.log($state)
		return $state;
	};
	$(".products").select2({
		placeholder: "Choose product(s)",
		templateResult: formatState
	});
})

Template.calc.onCreated(function() {
	state = new ReactiveObj({data: {}});
})

Template.calc.events({
	'change .products': function (e) {
		state.set('data', {})
		$('.products').select2('data').forEach(function (post) {
			state.set(['data', post.id], true)
		});
	}
});

Template.calc.helpers({
	selected: function () {
		return state.get('data')
	},
	noselected: function() {
		if(isEmpty(state.get('data'))) {
			return true;
		}
	}
});

function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback, thisArg) {

    var T, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== "function") {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let k be 0
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as the this value and
        // argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
}
