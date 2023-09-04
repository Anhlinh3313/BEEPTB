import { EntityBaseModel } from "./entityBase.model";

export class BookingModel extends EntityBaseModel {
    totalCount?: number;
    colorStatus?: string;
    iconType?: string;
    startDate :any;
    endDate : any;
    totalTime?: any;
    serviceId : number;
    customerId : number;
    bookingStatusId : number;
    note : string;
    reasonId : number;
    branchId?: number;
    address : string;
    addressDetail : string;
    serviceName : string;
    customerName : string;
    bookingStatusName : string;
    vehicleTypeName : string;
    branchName : string;
    userFullName : string;
    reasonName : string;
    lateHour : any;
    totalFee : any;
    price?: any;
}