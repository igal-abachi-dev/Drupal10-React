export type nullable<T> = (T | null | undefined);

export const guidEmpty = "00000000-0000-0000-0000-000000000000";

//from: https://dev-test-dr-10.pantheonsite.io/admin/content

export class DrupalContentDTO {
    nid: DrupalIntValue[];
    created: DrupalStringValue[];
    changed: DrupalStringValue[];
    title: DrupalStringValue[];
    body: DrupalStringValue[];
}

export class DrupalContent {
    constructor(dto: DrupalContentDTO) {
        this.title = dto.title[0].value;
        this.body = dto.body[0].value;
        console.log("DrupalContent:",dto,this);
    }

    title: string;
    body: string;
}


export class DrupalPage {
    constructor(dto: DrupalContentDTO) {
        this.nid = dto.nid[0].value;
        this.title = dto.title[0].value;
        console.log("DrupalPage:",dto,this);
    }

    nid: number;
    title: string;
}


export class DrupalStringValue {
    value: string;
}

export class DrupalIntValue {
    value: number;
}