export type nullable<T> = (T | null | undefined);

export const guidEmpty = "00000000-0000-0000-0000-000000000000";


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
    }

    title: string;
    body: string;
}


export class DrupalPage {
    constructor(dto: DrupalContentDTO) {
        this.nid = dto.nid[0].value;
        this.title = dto.title[0].value;
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