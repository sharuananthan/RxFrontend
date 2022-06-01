export interface Product{
    logoURL:string;
    productId: string;
    name:string;
    description:string;
    planCount: number;
    addOnCount: number;
    redirectUrl:string;
    webhookSecret:string;
    webhookURL:string;
    freeTrialDays: number;
}

