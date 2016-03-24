describe("Expect",function (){
	describe("true", function(){
		it("to equal true", function(){
			expect(true).toEqual(true);
		})

		it("awesome function", function(){
			var thisIs = {
				awesome : function  () {
					
				}
			};
			// spy the awesome function in object
			spyOn(thisIs,"awesome");
			thisIs.awesome(); // commentout to see test fail
			// expect if awesome func was invoke
			expect(thisIs.awesome).toHaveBeenCalled();	
		})
		// use squire handle require js before and after run every test
	})
});