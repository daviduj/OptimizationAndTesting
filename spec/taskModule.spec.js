describe("The taskModule",function (){
	var injector;
	// Clean Cache require to prevent dependency over test
	beforeEach(function (done){
		require(["Squire"],function(Squire){
			injector = new Squire();
			done();
		});
	});

	afterEach(function () {
		injector.remove();
	});

	describe("add function", function  () {
		it("calls taskRenderer.renderNew", function  (done) {
			// Mock dependencies
			injector.mock("renderers/taskRenderer",
		    {
				renderNew: function  () {}
			});

			injector.mock("data/taskData", {});
			// Test add Function
			injector.require(["taskevents/tasks", "renderers/taskRenderer"],
				function (task, taskRenderer) {
					spyOn(taskRenderer,"renderNew");
					task.add();
					expect(taskRenderer.renderNew).toHaveBeenCalled();
					done();
				}, 
				function (error) {
					done.error(error);
				});
		});
	});
});