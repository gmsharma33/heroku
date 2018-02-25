console.log('service');
app.service("empoyeeService", function($resource) {
	return $resource(":dest", {}, {
		employees : {
			method : "GET",
			isArray : true,
			params : {
				dest : "employees"
			}
		}
	});
});