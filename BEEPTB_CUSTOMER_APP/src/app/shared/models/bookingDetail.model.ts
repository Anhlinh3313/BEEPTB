import { EntityBaseModel } from "./entityBase.model";

export class BookingDetailModel extends EntityBaseModel {
    address: string;
    addressDetail: string;
    bookingStatusId: number;
    branchId: number;
    code: string;
    customerId: number;
    endDate: any;
    note: string;
    reasonId: number;
    serviceId: number;
    startDate: any;
    totalTime: any;
}