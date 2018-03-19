"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HealthData_1 = require("../HealthData");
var healthKit = new HealthData_1.default();
var lastEntry = new Date();
var lastbpm = 0;
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        return _super.call(this) || this;
    }
    Object.defineProperty(MainViewModel.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            if (this._message !== value) {
                this._message = value;
                this.notifyPropertyChange('message', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainViewModel.prototype, "lastChecked", {
        get: function () {
            return this._lastChecked;
        },
        set: function (value) {
            if (this._lastChecked !== value) {
                this._lastChecked = value;
                this.notifyPropertyChange('lastChecked', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainViewModel.prototype, "monitoring", {
        get: function () {
            return this._monitoring;
        },
        set: function (value) {
            if (this._monitoring !== value) {
                this._monitoring = value;
                this.notifyPropertyChange('monitoring', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    MainViewModel.prototype.onTap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authorized;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.monitoring) return [3 /*break*/, 1];
                        healthKit.stop();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, healthKit.authorize()];
                    case 2:
                        authorized = _a.sent();
                        if (authorized) {
                            healthKit.start().then(function () { return console.log("Started monitoring"); })
                                .catch(function (error) { return console.log(error); });
                            //console.log("Our app was notified that health data changed, so querying...");
                            // let result = await healthKit.query();
                            // this.message = `Heart Rate Is: ${result.value} as of ${result.end.toUTCString()}`;
                            // this.lastChecked = new Date();
                            // if (lastbpm !== result.value) {
                            //   http.getJSON(`https://heart-bulb.azurewebsites.net/api/update?bpm=${result.value}&timeStamp=ok`).then(result => {
                            //     console.log(JSON.stringify(result));
                            //   }).catch(err => {
                            //     console.log(err);
                            //   }).then(() => {
                            //     completionHandler();
                            //   });
                            // }
                            // else {
                            //   completionHandler();
                            // }
                            // lastbpm = result.value;
                            // completionHandler();
                        }
                        ;
                        _a.label = 3;
                    case 3:
                        this.monitoring = !this.monitoring;
                        return [2 /*return*/];
                }
            });
        });
    };
    return MainViewModel;
}(observable_1.Observable));
exports.default = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLDRDQUFzQztBQUd0QyxJQUFJLFNBQVMsR0FBRyxJQUFJLG9CQUFTLEVBQUUsQ0FBQztBQUNoQyxJQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzNCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUVoQjtJQUEyQyxpQ0FBVTtJQU1uRDtlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUVELHNCQUFJLGtDQUFPO2FBQVg7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBWSxLQUFhO1lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDN0MsQ0FBQztRQUNILENBQUM7OztPQVBBO0lBU0Qsc0JBQUksc0NBQVc7YUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFnQixLQUFXO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbEQsQ0FBQztRQUNILENBQUM7OztPQVBBO0lBU0Qsc0JBQUkscUNBQVU7YUFBZDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFlLEtBQWM7WUFDM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqRCxDQUFDO1FBQ0gsQ0FBQzs7O09BUEE7SUFTWSw2QkFBSyxHQUFsQjs7Ozs7OzZCQUNNLElBQUksQ0FBQyxVQUFVLEVBQWYsd0JBQWU7d0JBQ2pCLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7NEJBSUEscUJBQU0sU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBeEMsVUFBVSxHQUFHLFNBQTJCO3dCQUU1QyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUNmLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsRUFBakMsQ0FBaUMsQ0FBQztpQ0FDNUQsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDOzRCQUN0QywrRUFBK0U7NEJBQy9FLHdDQUF3Qzs0QkFFeEMscUZBQXFGOzRCQUNyRixpQ0FBaUM7NEJBRWpDLGtDQUFrQzs0QkFDbEMsc0hBQXNIOzRCQUN0SCwyQ0FBMkM7NEJBQzNDLHNCQUFzQjs0QkFDdEIsd0JBQXdCOzRCQUN4QixvQkFBb0I7NEJBQ3BCLDJCQUEyQjs0QkFDM0IsUUFBUTs0QkFDUixJQUFJOzRCQUNKLFNBQVM7NEJBQ1QseUJBQXlCOzRCQUN6QixJQUFJOzRCQUVKLDBCQUEwQjs0QkFDMUIsdUJBQXVCO3dCQUN6QixDQUFDO3dCQUFBLENBQUM7Ozt3QkFFSixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Ozs7S0FDcEM7SUFDSCxvQkFBQztBQUFELENBQUMsQUEvRUQsQ0FBMkMsdUJBQVUsR0ErRXBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgSGVhbHRoS2l0IGZyb20gJy4uL0hlYWx0aERhdGEnO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcblxubGV0IGhlYWx0aEtpdCA9IG5ldyBIZWFsdGhLaXQoKTtcbmxldCBsYXN0RW50cnkgPSBuZXcgRGF0ZSgpO1xubGV0IGxhc3RicG0gPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cbiAgcHJpdmF0ZSBfbWVzc2FnZTogc3RyaW5nO1xuICBwcml2YXRlIF9sYXN0Q2hlY2tlZDogRGF0ZTtcbiAgcHJpdmF0ZSBfbW9uaXRvcmluZzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgfVxuXG4gIHNldCBtZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fbWVzc2FnZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcbiAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ21lc3NhZ2UnLCB2YWx1ZSlcbiAgICB9XG4gIH1cblxuICBnZXQgbGFzdENoZWNrZWQoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhc3RDaGVja2VkO1xuICB9XG5cbiAgc2V0IGxhc3RDaGVja2VkKHZhbHVlOiBEYXRlKSB7XG4gICAgaWYgKHRoaXMuX2xhc3RDaGVja2VkICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fbGFzdENoZWNrZWQgPSB2YWx1ZTtcbiAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2xhc3RDaGVja2VkJywgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtb25pdG9yaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tb25pdG9yaW5nO1xuICB9XG5cbiAgc2V0IG1vbml0b3JpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fbW9uaXRvcmluZyAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX21vbml0b3JpbmcgPSB2YWx1ZTtcbiAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ21vbml0b3JpbmcnLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIG9uVGFwKCkge1xuICAgIGlmICh0aGlzLm1vbml0b3JpbmcpIHtcbiAgICAgIGhlYWx0aEtpdC5zdG9wKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gaW5pdGlhbGl6ZSBoZWFsdGgga2l0LCByZXF1ZXN0IGF1dGggYW5kIHN0YXJ0IGxpc3RlbmluZ1xuICAgICAgbGV0IGF1dGhvcml6ZWQgPSBhd2FpdCBoZWFsdGhLaXQuYXV0aG9yaXplKCk7XG5cbiAgICAgIGlmIChhdXRob3JpemVkKSB7XG4gICAgICAgIGhlYWx0aEtpdC5zdGFydCgpLnRoZW4oKCkgPT4gY29uc29sZS5sb2coYFN0YXJ0ZWQgbW9uaXRvcmluZ2ApKVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiT3VyIGFwcCB3YXMgbm90aWZpZWQgdGhhdCBoZWFsdGggZGF0YSBjaGFuZ2VkLCBzbyBxdWVyeWluZy4uLlwiKTtcbiAgICAgICAgLy8gbGV0IHJlc3VsdCA9IGF3YWl0IGhlYWx0aEtpdC5xdWVyeSgpO1xuXG4gICAgICAgIC8vIHRoaXMubWVzc2FnZSA9IGBIZWFydCBSYXRlIElzOiAke3Jlc3VsdC52YWx1ZX0gYXMgb2YgJHtyZXN1bHQuZW5kLnRvVVRDU3RyaW5nKCl9YDtcbiAgICAgICAgLy8gdGhpcy5sYXN0Q2hlY2tlZCA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgLy8gaWYgKGxhc3RicG0gIT09IHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAvLyAgIGh0dHAuZ2V0SlNPTihgaHR0cHM6Ly9oZWFydC1idWxiLmF6dXJld2Vic2l0ZXMubmV0L2FwaS91cGRhdGU/YnBtPSR7cmVzdWx0LnZhbHVlfSZ0aW1lU3RhbXA9b2tgKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgICAgLy8gICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgLy8gICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbXBsZXRpb25IYW5kbGVyKCk7XG4gICAgICAgIC8vICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgY29tcGxldGlvbkhhbmRsZXIoKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGxhc3RicG0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgIC8vIGNvbXBsZXRpb25IYW5kbGVyKCk7XG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLm1vbml0b3JpbmcgPSAhdGhpcy5tb25pdG9yaW5nO1xuICB9XG59XG4iXX0=