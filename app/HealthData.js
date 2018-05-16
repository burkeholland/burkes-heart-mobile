"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_health_data_1 = require("nativescript-health-data");
var lastbpm = 0;
Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + h * 60 * 60 * 1000);
    return this;
};
var HealthKit = (function () {
    function HealthKit() {
        this.healthData = new nativescript_health_data_1.HealthData();
    }
    HealthKit.prototype.authorize = function () {
        var _this = this;
        return this.healthData
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
        });
    };
    HealthKit.prototype.start = function () {
        return this.healthData
            .startMonitoring({
            dataType: 'heartRate',
            enableBackgroundUpdates: true,
            backgroundUpdateFrequency: 'immediate',
            onUpdate: function (completionHandler) {
                console.log('app was notified so querying...');
                completionHandler();
                // this.query().then(results => {
                //   console.log(JSON.stringify(results));
                //   completionHandler();
                // });
            }
        })
            .then(function () { return console.log('Started monitoring...'); })
            .catch(function (err) { return console.log(err); });
    };
    HealthKit.prototype.stop = function () {
        return this.healthData.stopMonitoring({
            dataType: 'heartRate'
        });
    };
    HealthKit.prototype.query = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.healthData.query({
                startDate: new Date(new Date().getTime() - 3600 * 60 * 1000),
                endDate: new Date(),
                dataType: 'heartRate',
                unit: 'count/min',
                sortOrder: 'desc'
            });
            // .then(results); => {
            //   // let result = results[0];
            //   // result.start.addHours(-5);
            //   // result.end.addHours(-5);
            //   resolve(results);
            // })
            // .catch(error => reject(error));
        });
    };
    return HealthKit;
}());
exports.default = HealthKit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhbHRoRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhlYWx0aERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxRUFLa0M7QUFHbEMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBUWhCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFVBQVMsQ0FBUztJQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRUY7SUFHRTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxxQ0FBVSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFBQSxpQkFlQztRQWRDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVTthQUNuQixZQUFZLENBQUMsQ0FBaUIsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ3pFLElBQUksQ0FBQyxVQUFBLFVBQVU7WUFDZCxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLElBQU0sS0FBSyxHQUEwQjtvQkFDbkMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7aUJBQzFDLENBQUM7Z0JBRUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7b0JBQ2pCLFVBQVU7b0JBQ1YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7aUJBQzVDLENBQUMsQ0FBQztZQUNMLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVO2FBQ25CLGVBQWUsQ0FBQztZQUNmLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLHVCQUF1QixFQUFFLElBQUk7WUFDN0IseUJBQXlCLEVBQUUsV0FBVztZQUN0QyxRQUFRLEVBQUUsVUFBQyxpQkFBNkI7Z0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztnQkFDL0MsaUJBQWlCLEVBQUUsQ0FBQztnQkFDcEIsaUNBQWlDO2dCQUNqQywwQ0FBMEM7Z0JBQzFDLHlCQUF5QjtnQkFDekIsTUFBTTtZQUNSLENBQUM7U0FDRixDQUFDO2FBQ0QsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEVBQXBDLENBQW9DLENBQUM7YUFDaEQsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxXQUFXO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQUEsaUJBbUJDO1FBbEJDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBZSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9DLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUNwQixTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDNUQsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNuQixRQUFRLEVBQUUsV0FBVztnQkFDckIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFNBQVMsRUFBRSxNQUFNO2FBQ2xCLENBQUMsQ0FBQztZQUNILHVCQUF1QjtZQUN2QixnQ0FBZ0M7WUFFaEMsa0NBQWtDO1lBQ2xDLGdDQUFnQztZQUVoQyxzQkFBc0I7WUFDdEIsS0FBSztZQUNMLGtDQUFrQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFyRUQsSUFxRUM7QUFFRCxrQkFBZSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZ2dyZWdhdGVCeSxcbiAgSGVhbHRoRGF0YSxcbiAgSGVhbHRoRGF0YVR5cGUsXG4gIFJlc3BvbnNlSXRlbVxufSBmcm9tICduYXRpdmVzY3JpcHQtaGVhbHRoLWRhdGEnO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcblxubGV0IGxhc3RicG0gPSAwO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBEYXRlIHtcbiAgICBhZGRIb3VycyhoOiBudW1iZXIpOiBEYXRlO1xuICB9XG59XG5cbkRhdGUucHJvdG90eXBlLmFkZEhvdXJzID0gZnVuY3Rpb24oaDogbnVtYmVyKTogRGF0ZSB7XG4gIHRoaXMuc2V0VGltZSh0aGlzLmdldFRpbWUoKSArIGggKiA2MCAqIDYwICogMTAwMCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuY2xhc3MgSGVhbHRoS2l0IHtcbiAgcHJpdmF0ZSBoZWFsdGhEYXRhOiBIZWFsdGhEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGVhbHRoRGF0YSA9IG5ldyBIZWFsdGhEYXRhKCk7XG4gIH1cblxuICBhdXRob3JpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVhbHRoRGF0YVxuICAgICAgLmlzQXV0aG9yaXplZChbPEhlYWx0aERhdGFUeXBlPnsgbmFtZTogJ2hlYXJ0UmF0ZScsIGFjY2Vzc1R5cGU6ICdyZWFkJyB9XSlcbiAgICAgIC50aGVuKGF1dGhvcml6ZWQgPT4ge1xuICAgICAgICBpZiAoIWF1dGhvcml6ZWQpIHtcbiAgICAgICAgICBjb25zdCB0eXBlczogQXJyYXk8SGVhbHRoRGF0YVR5cGU+ID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnaGVhcnRSYXRlJywgYWNjZXNzVHlwZTogJ3JlYWQnIH1cbiAgICAgICAgICBdO1xuXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGF1dGhvcml6ZWQsXG4gICAgICAgICAgICB0aGlzLmhlYWx0aERhdGEucmVxdWVzdEF1dGhvcml6YXRpb24odHlwZXMpXG4gICAgICAgICAgXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVhbHRoRGF0YVxuICAgICAgLnN0YXJ0TW9uaXRvcmluZyh7XG4gICAgICAgIGRhdGFUeXBlOiAnaGVhcnRSYXRlJyxcbiAgICAgICAgZW5hYmxlQmFja2dyb3VuZFVwZGF0ZXM6IHRydWUsXG4gICAgICAgIGJhY2tncm91bmRVcGRhdGVGcmVxdWVuY3k6ICdpbW1lZGlhdGUnLFxuICAgICAgICBvblVwZGF0ZTogKGNvbXBsZXRpb25IYW5kbGVyOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2FwcCB3YXMgbm90aWZpZWQgc28gcXVlcnlpbmcuLi4nKTtcbiAgICAgICAgICBjb21wbGV0aW9uSGFuZGxlcigpO1xuICAgICAgICAgIC8vIHRoaXMucXVlcnkoKS50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgIC8vICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpO1xuICAgICAgICAgIC8vICAgY29tcGxldGlvbkhhbmRsZXIoKTtcbiAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdTdGFydGVkIG1vbml0b3JpbmcuLi4nKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHJldHVybiB0aGlzLmhlYWx0aERhdGEuc3RvcE1vbml0b3Jpbmcoe1xuICAgICAgZGF0YVR5cGU6ICdoZWFydFJhdGUnXG4gICAgfSk7XG4gIH1cblxuICBxdWVyeSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVzcG9uc2VJdGVtPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmhlYWx0aERhdGEucXVlcnkoe1xuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gMzYwMCAqIDYwICogMTAwMCksIC8vIDEgaG91ciBhZ29cbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoKSwgLy8gbm93XG4gICAgICAgIGRhdGFUeXBlOiAnaGVhcnRSYXRlJywgLy8gZXF1YWwgdG8gdGhlICduYW1lJyBwcm9wZXJ0eSBvZiAnSGVhbHRoRGF0YVR5cGUnXG4gICAgICAgIHVuaXQ6ICdjb3VudC9taW4nLCAvLyBtYWtlIHN1cmUgdGhpcyBpcyBjb21wYXRpYmxlIHdpdGggdGhlICdkYXRhVHlwZScgKHNlZSBiZWxvdyksXG4gICAgICAgIHNvcnRPcmRlcjogJ2Rlc2MnXG4gICAgICB9KTtcbiAgICAgIC8vIC50aGVuKHJlc3VsdHMpOyA9PiB7XG4gICAgICAvLyAgIC8vIGxldCByZXN1bHQgPSByZXN1bHRzWzBdO1xuXG4gICAgICAvLyAgIC8vIHJlc3VsdC5zdGFydC5hZGRIb3VycygtNSk7XG4gICAgICAvLyAgIC8vIHJlc3VsdC5lbmQuYWRkSG91cnMoLTUpO1xuXG4gICAgICAvLyAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAvLyB9KVxuICAgICAgLy8gLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWx0aEtpdDtcbiJdfQ==