"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var nativescript_health_data_1 = require("nativescript-health-data");
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        var _this = _super.call(this) || this;
        _this.healthData = new nativescript_health_data_1.HealthData();
        return _this;
    }
    MainViewModel.prototype.authorize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.healthData
                        .isAuthorized([{ name: 'heartRate', accessType: 'read' }])
                        .then(function (authorized) {
                        if (!authorized) {
                            var types = [
                                { name: 'heartRate', accessType: 'read' }
                            ];
                            return Promise.all([
                                authorized,
                                _this.healthData.requestAuthorization(types)
                            ]);
                        }
                    })];
            });
        });
    };
    MainViewModel.prototype.onTap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authorized;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authorize()];
                    case 1:
                        authorized = _a.sent();
                        if (authorized) {
                            this.healthData
                                .startMonitoring({
                                dataType: 'heartRate',
                                enableBackgroundUpdates: true,
                                backgroundUpdateFrequency: 'immediate',
                                onUpdate: function (completionHandler) {
                                    console.log('app was notified so querying...');
                                    completionHandler();
                                }
                            })
                                .then(function () { return console.log('Started monitoring...'); })
                                .catch(function (err) { return console.log(err); });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return MainViewModel;
}(observable_1.Observable));
exports.default = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRzdDLHFFQUtrQztBQUVsQztJQUEyQyxpQ0FBVTtJQUduRDtRQUFBLFlBQ0UsaUJBQU8sU0FFUjtRQURDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxxQ0FBVSxFQUFFLENBQUM7O0lBQ3JDLENBQUM7SUFFSyxpQ0FBUyxHQUFmOzs7O2dCQUNFLHNCQUFPLElBQUksQ0FBQyxVQUFVO3lCQUNuQixZQUFZLENBQUMsQ0FBaUIsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO3lCQUN6RSxJQUFJLENBQUMsVUFBQSxVQUFVO3dCQUNkLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs0QkFDaEIsSUFBTSxLQUFLLEdBQTBCO2dDQUNuQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs2QkFDMUMsQ0FBQzs0QkFFRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztnQ0FDakIsVUFBVTtnQ0FDVixLQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQzs2QkFDNUMsQ0FBQyxDQUFDO3dCQUNMLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLEVBQUM7OztLQUNOO0lBRVksNkJBQUssR0FBbEI7Ozs7OzRCQUNtQixxQkFBTSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFuQyxVQUFVLEdBQUcsU0FBc0I7d0JBRXZDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQ2YsSUFBSSxDQUFDLFVBQVU7aUNBQ1osZUFBZSxDQUFDO2dDQUNmLFFBQVEsRUFBRSxXQUFXO2dDQUNyQix1QkFBdUIsRUFBRSxJQUFJO2dDQUM3Qix5QkFBeUIsRUFBRSxXQUFXO2dDQUN0QyxRQUFRLEVBQUUsVUFBQyxpQkFBNkI7b0NBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztvQ0FDL0MsaUJBQWlCLEVBQUUsQ0FBQztnQ0FDdEIsQ0FBQzs2QkFDRixDQUFDO2lDQUNELElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFwQyxDQUFvQyxDQUFDO2lDQUNoRCxLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7d0JBQ3BDLENBQUM7Ozs7O0tBQ0Y7SUFDSCxvQkFBQztBQUFELENBQUMsQUEzQ0QsQ0FBMkMsdUJBQVUsR0EyQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuXG5pbXBvcnQge1xuICBBZ2dyZWdhdGVCeSxcbiAgSGVhbHRoRGF0YSxcbiAgSGVhbHRoRGF0YVR5cGUsXG4gIFJlc3BvbnNlSXRlbVxufSBmcm9tICduYXRpdmVzY3JpcHQtaGVhbHRoLWRhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gIHByaXZhdGUgaGVhbHRoRGF0YTogSGVhbHRoRGF0YTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGVhbHRoRGF0YSA9IG5ldyBIZWFsdGhEYXRhKCk7XG4gIH1cblxuICBhc3luYyBhdXRob3JpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVhbHRoRGF0YVxuICAgICAgLmlzQXV0aG9yaXplZChbPEhlYWx0aERhdGFUeXBlPnsgbmFtZTogJ2hlYXJ0UmF0ZScsIGFjY2Vzc1R5cGU6ICdyZWFkJyB9XSlcbiAgICAgIC50aGVuKGF1dGhvcml6ZWQgPT4ge1xuICAgICAgICBpZiAoIWF1dGhvcml6ZWQpIHtcbiAgICAgICAgICBjb25zdCB0eXBlczogQXJyYXk8SGVhbHRoRGF0YVR5cGU+ID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnaGVhcnRSYXRlJywgYWNjZXNzVHlwZTogJ3JlYWQnIH1cbiAgICAgICAgICBdO1xuXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGF1dGhvcml6ZWQsXG4gICAgICAgICAgICB0aGlzLmhlYWx0aERhdGEucmVxdWVzdEF1dGhvcml6YXRpb24odHlwZXMpXG4gICAgICAgICAgXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIG9uVGFwKCkge1xuICAgIGxldCBhdXRob3JpemVkID0gYXdhaXQgdGhpcy5hdXRob3JpemUoKTtcblxuICAgIGlmIChhdXRob3JpemVkKSB7XG4gICAgICB0aGlzLmhlYWx0aERhdGFcbiAgICAgICAgLnN0YXJ0TW9uaXRvcmluZyh7XG4gICAgICAgICAgZGF0YVR5cGU6ICdoZWFydFJhdGUnLFxuICAgICAgICAgIGVuYWJsZUJhY2tncm91bmRVcGRhdGVzOiB0cnVlLFxuICAgICAgICAgIGJhY2tncm91bmRVcGRhdGVGcmVxdWVuY3k6ICdpbW1lZGlhdGUnLFxuICAgICAgICAgIG9uVXBkYXRlOiAoY29tcGxldGlvbkhhbmRsZXI6ICgpID0+IHZvaWQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcHAgd2FzIG5vdGlmaWVkIHNvIHF1ZXJ5aW5nLi4uJyk7XG4gICAgICAgICAgICBjb21wbGV0aW9uSGFuZGxlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1N0YXJ0ZWQgbW9uaXRvcmluZy4uLicpKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgfVxufVxuIl19