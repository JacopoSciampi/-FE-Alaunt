export class ModelSingleBuild {
    public level: number;
    public name: string;
    public updateName: string;
    public desc: string;
    public image: string;
    public woodCost: number;
    public stoneCost: number;
    public points: number;
    public timeToUpdate: number;
    public ironCost?: number;
    public oreCost?: number;
    public people?: number;

    public isProduction?: boolean;
    public productionMinute?: number;
    public currentProduction?: number;
    public atWork?: number;

    // When is updating datas
    public isUpdate?: boolean;
    public timeStart?: number;
    public timeEnd?: number;
    public timeTotal?: number;
}

export class StandardBuildModel {
    public status: boolean;
    public timeToUpdate: number;
    public woodCost: number;
    public stoneCost: number;
    public points: number;
    public ironCost?: number;
    public oreCost?: number;
    public people?: number;
    public production?: number;
    public currentProduction?: number;
    public atWork?: number;
}

export class HomeBuildModel {
    public status: boolean;
    public timeToUpdate: number;
    public woodCost: number;
    public stoneCost: number;
    public points: number;
}

export class FoodBuildModel {
    public status: boolean;
    public timeToUpdate: number;
    public woodCost: number;
    public stoneCost: number;
    public points: number;
    public production: number;
    public atWork?: number;
    public currentProduction: number;
}

export class MainBuildModel {
    public status: boolean;
    public timeToUpdate: number;
    public woodCost: number;
    public stoneCost: number;
    public ironCost: number;
    public oreCost: number;
    public points: number;
}

export class IsUpdatingBEModel {
    public message: string;
    public isValid: boolean;
    public timeStart: number;
    public timeEnd: number;
    public timeTotal: number;
    public name: string;
}
