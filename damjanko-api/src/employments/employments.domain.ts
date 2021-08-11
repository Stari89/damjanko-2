export interface IEmploymentDTO {
    employmentId?: string;
    position: string;
    companyName: string;
    companyAddress: string;
    startDate: Date;
    endDate?: Date;
}
