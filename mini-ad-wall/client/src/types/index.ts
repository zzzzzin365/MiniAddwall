export interface Ad {
    id: string;
    title: string;
    publisher: string;
    content: string;
    url: string;
    price: number;
    clicks: number;
    videos: string[];
}

export interface AdInput {
    title: string;
    publisher: string;
    content: string;
    url: string;
    price: number | string;
    videos?: string[];
}

export interface FormFieldValidator {
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    min?: number;
    max?: number;
    maxCount?: number;
    message?: string;
}

export interface FormFieldConfig {
    field: string;
    name: string;
    component: 'Input' | 'Number' | 'Textarea' | 'VideoUpload';
    placeholder?: string;
    required: boolean;
    validator?: FormFieldValidator;
}

export interface AdModalState {
    open: boolean;
    mode: 'create' | 'edit' | 'copy';
    data: Ad | null;
}

export interface DeleteModalState {
    open: boolean;
    id: string | null;
}

export interface VideoModalState {
    open: boolean;
    url: string;
    adId: string | null;
    landingUrl: string;
}

export interface ToastState {
    show: boolean;
    msg: string;
}

export interface AdCreativeInput {
    adDescription: string;
    industry: string;
    tone: string;
}

export interface AdCreativeOutput {
    titles: string[];
    texts: string[];
    scripts: string[];
    keywords: string[];
}

export interface AdStrategyInput {
    adDescription: string;
    industry: string;
}

export interface AdStrategyOutput {
    targetUsers: string[];
    bidSuggestion: number;
    interests: string[];
    reason: string;
}

export interface AIErrorResponse {
    error: true;
    message: string;
}
