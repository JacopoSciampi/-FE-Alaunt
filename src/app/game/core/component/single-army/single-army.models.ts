export class ModelSingleArmy {
    public level: number;
    public name: string;
    public updateName: string;
    public desc: string;
    public image: string;
    public woodCost: number;
    public stoneCost: number;
    public points: number;
    public timeToUpdate: number;
    public ironCost: number;
    public oreCost: number;

    // When is updating datas
    public isUpdate?: boolean;
    public timeStart?: number;
    public timeEnd?: number;
    public timeTotal?: number;
}
