export interface IApiResponse {
    message: string;
    result: boolean;
    data: IgetLocation[];
}
export interface IgetLocation {
    locationId: number;
    city: string;
    title: string;
    pincode: string;
}

