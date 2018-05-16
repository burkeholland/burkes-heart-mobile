"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsNkRBQXNEO0FBU3RELElBQUksS0FBSyxHQUFHLElBQUkseUJBQWEsRUFBRSxDQUFDO0FBRWhDLHdFQUF3RTtBQUN4RSxzQkFBbUMsSUFBZTs7OztZQUM1QyxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUU3QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzs7OztDQUM3QjtBQUpELG9DQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCBNYWluVmlld01vZGVsIGZyb20gJy4uL21vZGVscy9tYWluLXZpZXctbW9kZWwnO1xuXG5pbXBvcnQge1xuICBBZ2dyZWdhdGVCeSxcbiAgSGVhbHRoRGF0YSxcbiAgSGVhbHRoRGF0YVR5cGUsXG4gIFJlc3BvbnNlSXRlbVxufSBmcm9tICduYXRpdmVzY3JpcHQtaGVhbHRoLWRhdGEnO1xuXG5sZXQgbW9kZWwgPSBuZXcgTWFpblZpZXdNb2RlbCgpO1xuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwibmF2aWdhdGluZ1RvXCIgZXZlbnQgYXR0YWNoZWQgaW4gbWFpbi1wYWdlLnhtbFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbW9kZWw7XG59XG4iXX0=