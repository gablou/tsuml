export interface UMLClass {
    name: string;
    properties: UMLProperty[];
    methods: UMLmethod[];
}

export type UMLVisibility = 'public' | 'private' | 'protected';

interface UMLMember {
    name: string;
    visibility: UMLVisibility;
    isClassifier: boolean;
}

export interface UMLProperty extends UMLMember {
    type: string;
}

export interface UMLmethod extends UMLMember {
    parameters: string;
    returnType: string;
}
