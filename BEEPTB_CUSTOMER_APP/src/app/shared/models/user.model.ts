import { EntityBaseModel } from "./entityBase.model";

export class UserModel extends EntityBaseModel {
    addressIssueInvoice: string;
    avatarPath: string;
    birthDate: any;
    companyName: string;
    driverLicenseImage1Path: any;
    driverLicenseImage2Path: any;
    email: string;
    gender: boolean;
    identityCard: string;
    identityImage1Path: any;
    identityImage2Path: any;
    linkFacebook: string;
    linkGoogle: string;
    phoneNumber: string;
    taxCode: string;
    userId: number;
}