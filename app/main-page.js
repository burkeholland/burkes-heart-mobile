"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var nativescript_health_data_1 = require("nativescript-health-data");
var model = new main_view_model_1.HelloWorldModel();
Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
};
var MyHealthyClass = (function () {
    function MyHealthyClass() {
        this.healthData = new nativescript_health_data_1.HealthData();
    }
    MyHealthyClass.prototype.authorize = function () {
        var _this = this;
        this.healthData.isAuthorized([{ name: "heartRate", accessType: "read" }])
            .then(function (authorized) {
            if (!authorized) {
                var types = [
                    { name: "heartRate", accessType: "read" }
                ];
                return Promise.all([authorized, _this.healthData.requestAuthorization(types)]);
            }
        })
            .then(function (results) {
            if (results[1] === true) {
                _this.query();
            }
        })
            .catch(function (err) {
            console.log(err.message);
        });
    };
    MyHealthyClass.prototype.query = function () {
        this.healthData.query({
            startDate: new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000),
            endDate: new Date(),
            dataType: "heartRate",
            unit: "count/min" // make sure this is compatible with the 'dataType' (see below)
        })
            .then(function (results) {
            results.forEach(function (result) {
                var diff = console.log("Start: " + result.start.addHours(-6).toUTCString() + ", End" + result.end.addHours(-6).toUTCString());
                console.log("Value: " + result.value + ", Unit: " + result.unit);
            });
        })
            .catch(function (error) { return console.log(error); });
    };
    return MyHealthyClass;
}());
var healthData = new MyHealthyClass();
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().
   
    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = new main_view_model_1.HelloWorldModel();
    healthData.authorize();
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUlGLHFEQUFvRDtBQUNwRCxxRUFBa0Y7QUFFbEYsSUFBSSxLQUFLLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFTbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFBO0FBRUQ7SUFHRTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxxQ0FBVSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFBQSxpQkFtQkM7UUFsQkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBaUIsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ3RGLElBQUksQ0FBQyxVQUFBLFVBQVU7WUFDZCxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLElBQU0sS0FBSyxHQUEwQjtvQkFDbkMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7aUJBQzFDLENBQUM7Z0JBRUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEYsQ0FBQztRQUNILENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFBLE9BQU87WUFDWCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2YsQ0FBQztRQUNILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQ25CO1lBQ0UsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNuRSxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsSUFBSSxFQUFFLFdBQVcsQ0FBQywrREFBK0Q7U0FDbEYsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFBLE9BQU87WUFDWCxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtnQkFDcEIsSUFBSSxJQUFJLEdBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFVLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLGFBQVEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUksQ0FBQyxDQUFDO2dCQUNoSCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVUsTUFBTSxDQUFDLEtBQUssZ0JBQVcsTUFBTSxDQUFDLElBQU0sQ0FBQyxDQUFDO1lBQzlELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUE3Q0QsSUE2Q0M7QUFFRCxJQUFJLFVBQVUsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0FBRXRDLHdFQUF3RTtBQUN4RSxzQkFBNkIsSUFBZTtJQUMxQzs7OztNQUlFO0lBQ0YsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUU3Qjs7Ozs7Ozs7O01BU0U7SUFDRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0lBRTVDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN6QixDQUFDO0FBckJELG9DQXFCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5JbiBOYXRpdmVTY3JpcHQsIGEgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgYW4gWE1MIGZpbGUgaXMga25vd24gYXNcbmEgY29kZS1iZWhpbmQgZmlsZS4gVGhlIGNvZGUtYmVoaW5kIGlzIGEgZ3JlYXQgcGxhY2UgdG8gcGxhY2UgeW91ciB2aWV3XG5sb2dpYywgYW5kIHRvIHNldCB1cCB5b3VyIHBhZ2XigJlzIGRhdGEgYmluZGluZy5cbiovXG5cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBIZWxsb1dvcmxkTW9kZWwgfSBmcm9tICcuL21haW4tdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVCeSwgSGVhbHRoRGF0YSwgSGVhbHRoRGF0YVR5cGUgfSBmcm9tICduYXRpdmVzY3JpcHQtaGVhbHRoLWRhdGEnXG5cbmxldCBtb2RlbCA9IG5ldyBIZWxsb1dvcmxkTW9kZWwoKTtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgRGF0ZSB7XG4gICAgYWRkSG91cnMoaCk6IERhdGU7XG4gIH1cbn1cblxuXG5EYXRlLnByb3RvdHlwZS5hZGRIb3VycyA9IGZ1bmN0aW9uIChoKTogRGF0ZSB7XG4gIHRoaXMuc2V0VGltZSh0aGlzLmdldFRpbWUoKSArIChoICogNjAgKiA2MCAqIDEwMDApKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmNsYXNzIE15SGVhbHRoeUNsYXNzIHtcbiAgcHJpdmF0ZSBoZWFsdGhEYXRhOiBIZWFsdGhEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGVhbHRoRGF0YSA9IG5ldyBIZWFsdGhEYXRhKCk7XG4gIH1cblxuICBhdXRob3JpemUoKSB7XG4gICAgdGhpcy5oZWFsdGhEYXRhLmlzQXV0aG9yaXplZChbPEhlYWx0aERhdGFUeXBlPnsgbmFtZTogXCJoZWFydFJhdGVcIiwgYWNjZXNzVHlwZTogXCJyZWFkXCIgfV0pXG4gICAgICAudGhlbihhdXRob3JpemVkID0+IHtcbiAgICAgICAgaWYgKCFhdXRob3JpemVkKSB7XG4gICAgICAgICAgY29uc3QgdHlwZXM6IEFycmF5PEhlYWx0aERhdGFUeXBlPiA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJoZWFydFJhdGVcIiwgYWNjZXNzVHlwZTogXCJyZWFkXCIgfVxuICAgICAgICAgIF07XG5cbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2F1dGhvcml6ZWQsIHRoaXMuaGVhbHRoRGF0YS5yZXF1ZXN0QXV0aG9yaXphdGlvbih0eXBlcyldKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICBpZiAocmVzdWx0c1sxXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMucXVlcnkoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHF1ZXJ5KCkge1xuICAgIHRoaXMuaGVhbHRoRGF0YS5xdWVyeShcbiAgICAgIHtcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIDEgKiAyNCAqIDYwICogNjAgKiAxMDAwKSwgLy8gMyBkYXlzIGFnb1xuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgpLCAvLyBub3dcbiAgICAgICAgZGF0YVR5cGU6IFwiaGVhcnRSYXRlXCIsIC8vIGVxdWFsIHRvIHRoZSAnbmFtZScgcHJvcGVydHkgb2YgJ0hlYWx0aERhdGFUeXBlJ1xuICAgICAgICB1bml0OiBcImNvdW50L21pblwiIC8vIG1ha2Ugc3VyZSB0aGlzIGlzIGNvbXBhdGlibGUgd2l0aCB0aGUgJ2RhdGFUeXBlJyAoc2VlIGJlbG93KVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICByZXN1bHRzLmZvckVhY2gocmVzdWx0ID0+IHtcbiAgICAgICAgICB2YXIgZGlmZiA9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU3RhcnQ6ICR7cmVzdWx0LnN0YXJ0LmFkZEhvdXJzKC02KS50b1VUQ1N0cmluZygpfSwgRW5kJHtyZXN1bHQuZW5kLmFkZEhvdXJzKC02KS50b1VUQ1N0cmluZygpfWApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBWYWx1ZTogJHtyZXN1bHQudmFsdWV9LCBVbml0OiAke3Jlc3VsdC51bml0fWApO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgfVxufVxuXG5sZXQgaGVhbHRoRGF0YSA9IG5ldyBNeUhlYWx0aHlDbGFzcygpO1xuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwibmF2aWdhdGluZ1RvXCIgZXZlbnQgYXR0YWNoZWQgaW4gbWFpbi1wYWdlLnhtbFxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgLypcbiAgVGhpcyBnZXRzIGEgcmVmZXJlbmNlIHRoaXMgcGFnZeKAmXMgPFBhZ2U+IFVJIGNvbXBvbmVudC4gWW91IGNhblxuICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcbiAgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYXBpLXJlZmVyZW5jZS9jbGFzc2VzL191aV9wYWdlXy5wYWdlLmh0bWxcbiAgKi9cbiAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuICAvKlxuICBBIHBhZ2XigJlzIGJpbmRpbmdDb250ZXh0IGlzIGFuIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHBlcmZvcm1cbiAgZGF0YSBiaW5kaW5nIGJldHdlZW4gWE1MIG1hcmt1cCBhbmQgVHlwZVNjcmlwdCBjb2RlLiBQcm9wZXJ0aWVzXG4gIG9uIHRoZSBiaW5kaW5nQ29udGV4dCBjYW4gYmUgYWNjZXNzZWQgdXNpbmcgdGhlIHt7IH19IHN5bnRheCBpbiBYTUwuXG4gIEluIHRoaXMgZXhhbXBsZSwgdGhlIHt7IG1lc3NhZ2UgfX0gYW5kIHt7IG9uVGFwIH19IGJpbmRpbmdzIGFyZSByZXNvbHZlZFxuICBhZ2FpbnN0IHRoZSBvYmplY3QgcmV0dXJuZWQgYnkgY3JlYXRlVmlld01vZGVsKCkuXG4gXG4gIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBkYXRhIGJpbmRpbmcgaW4gTmF0aXZlU2NyaXB0IGF0XG4gIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2NvcmUtY29uY2VwdHMvZGF0YS1iaW5kaW5nLlxuICAqL1xuICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEhlbGxvV29ybGRNb2RlbCgpO1xuXG4gIGhlYWx0aERhdGEuYXV0aG9yaXplKCk7XG59Il19