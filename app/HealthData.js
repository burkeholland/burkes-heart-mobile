"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_health_data_1 = require("nativescript-health-data");
Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
};
var HealthKit = (function () {
    function HealthKit() {
        this.healthData = new nativescript_health_data_1.HealthData();
    }
    HealthKit.prototype.authorize = function () {
        var _this = this;
        return this.healthData.isAuthorized([{ name: "heartRate", accessType: "read" }])
            .then(function (authorized) {
            if (!authorized) {
                var types = [
                    { name: "heartRate", accessType: "read" }
                ];
                return Promise.all([authorized, _this.healthData.requestAuthorization(types)]);
            }
        });
    };
    HealthKit.prototype.start = function () {
        var _this = this;
        return this.healthData.startMonitoring({
            dataType: "heartRate",
            enableBackgroundUpdates: true,
            backgroundUpdateFrequency: "immediate",
            onUpdate: function (completionHandler) {
                _this.query().then(function (result) {
                    console.log(JSON.stringify(result));
                    completionHandler();
                });
            }
        });
    };
    HealthKit.prototype.stop = function () {
        return this.healthData.stopMonitoring({
            dataType: 'heartRate',
        });
    };
    HealthKit.prototype.query = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.healthData.query({
                startDate: new Date(new Date().getTime() - 10 * 60 * 1000),
                endDate: new Date(),
                dataType: "heartRate",
                unit: "count/min",
                sortOrder: "desc",
            })
                .then(function (results) {
                resolve(results[0]);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    return HealthKit;
}());
exports.default = HealthKit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhbHRoRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhlYWx0aERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxRUFBZ0c7QUFRaEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFTO0lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFBO0FBRUQ7SUFHRTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxxQ0FBVSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFBQSxpQkFXQztRQVZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFpQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDN0YsSUFBSSxDQUFDLFVBQUEsVUFBVTtZQUNkLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDaEIsSUFBTSxLQUFLLEdBQTBCO29CQUNuQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTtpQkFDMUMsQ0FBQztnQkFFRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQseUJBQUssR0FBTDtRQUFBLGlCQVlDO1FBWEMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLHVCQUF1QixFQUFFLElBQUk7WUFDN0IseUJBQXlCLEVBQUUsV0FBVztZQUN0QyxRQUFRLEVBQUUsVUFBQyxpQkFBNkI7Z0JBQ3RDLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO29CQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDcEMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdCQUFJLEdBQUo7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7WUFDcEMsUUFBUSxFQUFFLFdBQVc7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELHlCQUFLLEdBQUw7UUFBQSxpQkFlQztRQWRDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBZSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9DLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUNuQjtnQkFDRSxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDMUQsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNuQixRQUFRLEVBQUUsV0FBVztnQkFDckIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFNBQVMsRUFBRSxNQUFNO2FBQ2xCLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFVBQUEsT0FBTztnQkFDWCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUF6REQsSUF5REM7QUFFRCxrQkFBZSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVCeSwgSGVhbHRoRGF0YSwgSGVhbHRoRGF0YVR5cGUsIFJlc3BvbnNlSXRlbSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1oZWFsdGgtZGF0YSdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgRGF0ZSB7XG4gICAgYWRkSG91cnMoaDogbnVtYmVyKTogRGF0ZVxuICB9XG59XG5cbkRhdGUucHJvdG90eXBlLmFkZEhvdXJzID0gZnVuY3Rpb24gKGg6IG51bWJlcik6IERhdGUge1xuICB0aGlzLnNldFRpbWUodGhpcy5nZXRUaW1lKCkgKyAoaCAqIDYwICogNjAgKiAxMDAwKSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5jbGFzcyBIZWFsdGhLaXQge1xuICBwcml2YXRlIGhlYWx0aERhdGE6IEhlYWx0aERhdGE7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oZWFsdGhEYXRhID0gbmV3IEhlYWx0aERhdGEoKTtcbiAgfVxuXG4gIGF1dGhvcml6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFsdGhEYXRhLmlzQXV0aG9yaXplZChbPEhlYWx0aERhdGFUeXBlPnsgbmFtZTogXCJoZWFydFJhdGVcIiwgYWNjZXNzVHlwZTogXCJyZWFkXCIgfV0pXG4gICAgICAudGhlbihhdXRob3JpemVkID0+IHtcbiAgICAgICAgaWYgKCFhdXRob3JpemVkKSB7XG4gICAgICAgICAgY29uc3QgdHlwZXM6IEFycmF5PEhlYWx0aERhdGFUeXBlPiA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJoZWFydFJhdGVcIiwgYWNjZXNzVHlwZTogXCJyZWFkXCIgfVxuICAgICAgICAgIF07XG5cbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2F1dGhvcml6ZWQsIHRoaXMuaGVhbHRoRGF0YS5yZXF1ZXN0QXV0aG9yaXphdGlvbih0eXBlcyldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFsdGhEYXRhLnN0YXJ0TW9uaXRvcmluZyh7XG4gICAgICBkYXRhVHlwZTogXCJoZWFydFJhdGVcIixcbiAgICAgIGVuYWJsZUJhY2tncm91bmRVcGRhdGVzOiB0cnVlLFxuICAgICAgYmFja2dyb3VuZFVwZGF0ZUZyZXF1ZW5jeTogXCJpbW1lZGlhdGVcIixcbiAgICAgIG9uVXBkYXRlOiAoY29tcGxldGlvbkhhbmRsZXI6ICgpID0+IHZvaWQpID0+IHtcbiAgICAgICAgdGhpcy5xdWVyeSgpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgICAgICBjb21wbGV0aW9uSGFuZGxlcigpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFsdGhEYXRhLnN0b3BNb25pdG9yaW5nKHtcbiAgICAgIGRhdGFUeXBlOiAnaGVhcnRSYXRlJyxcbiAgICB9KTtcbiAgfVxuXG5cbiAgcXVlcnkoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlSXRlbT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5oZWFsdGhEYXRhLnF1ZXJ5KFxuICAgICAgICB7XG4gICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIDEwICogNjAgKiAxMDAwKSwgLy8gMTAgc2Vjb25kcyBhZ29cbiAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgpLCAvLyBub3dcbiAgICAgICAgICBkYXRhVHlwZTogXCJoZWFydFJhdGVcIiwgLy8gZXF1YWwgdG8gdGhlICduYW1lJyBwcm9wZXJ0eSBvZiAnSGVhbHRoRGF0YVR5cGUnXG4gICAgICAgICAgdW5pdDogXCJjb3VudC9taW5cIiwgLy8gbWFrZSBzdXJlIHRoaXMgaXMgY29tcGF0aWJsZSB3aXRoIHRoZSAnZGF0YVR5cGUnIChzZWUgYmVsb3cpLFxuICAgICAgICAgIHNvcnRPcmRlcjogXCJkZXNjXCIsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0c1swXSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFsdGhLaXQ7Il19