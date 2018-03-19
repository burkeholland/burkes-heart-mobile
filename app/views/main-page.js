"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("../models/main-view-model");
var model = new main_view_model_1.default();
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    return __awaiter(this, void 0, void 0, function () {
        var page;
        return __generator(this, function (_a) {
            page = args.object;
            page.bindingContext = model;
            return [2 /*return*/];
        });
    });
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUlGLDZEQUFzRDtBQUV0RCxJQUFJLEtBQUssR0FBRyxJQUFJLHlCQUFhLEVBQUUsQ0FBQztBQUVoQyx3RUFBd0U7QUFDeEUsc0JBQW1DLElBQWU7Ozs7WUFFNUMsSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7Ozs7Q0FFN0I7QUFORCxvQ0FNQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5JbiBOYXRpdmVTY3JpcHQsIGEgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgYW4gWE1MIGZpbGUgaXMga25vd24gYXNcbmEgY29kZS1iZWhpbmQgZmlsZS4gVGhlIGNvZGUtYmVoaW5kIGlzIGEgZ3JlYXQgcGxhY2UgdG8gcGxhY2UgeW91ciB2aWV3XG5sb2dpYywgYW5kIHRvIHNldCB1cCB5b3VyIHBhZ2XigJlzIGRhdGEgYmluZGluZy5cbiovXG5cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgTWFpblZpZXdNb2RlbCBmcm9tICcuLi9tb2RlbHMvbWFpbi12aWV3LW1vZGVsJztcblxubGV0IG1vZGVsID0gbmV3IE1haW5WaWV3TW9kZWwoKTtcblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcIm5hdmlnYXRpbmdUb1wiIGV2ZW50IGF0dGFjaGVkIGluIG1haW4tcGFnZS54bWxcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG5cbiAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbW9kZWw7XG5cbn0iXX0=