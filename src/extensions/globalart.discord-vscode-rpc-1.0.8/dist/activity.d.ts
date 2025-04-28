interface ActivityPayload {
    details?: string | undefined;
    state?: string | undefined;
    startTimestamp?: number | null | undefined;
    largeImageKey?: string | undefined;
    largeImageText?: string | undefined;
    smallImageKey?: string | undefined;
    smallImageText?: string | undefined;
    partyId?: string | undefined;
    partySize?: number | undefined;
    partyMax?: number | undefined;
    matchSecret?: string | undefined;
    joinSecret?: string | undefined;
    spectateSecret?: string | undefined;
    buttons?: {
        label: string;
        url: string;
    }[] | undefined;
    instance?: boolean | undefined;
}
declare class ActivityService {
    private readonly config;
    private readonly appName;
    private readonly remoteName;
    private readonly isK8s;
    private readonly defaultSmallImageKey;
    private readonly defaultSmallImageText;
    private readonly defaultLargeImageText;
    constructor();
    getActivity(previous?: ActivityPayload): Promise<ActivityPayload>;
    private getDetails;
    private getFileDetails;
    private formatRepositoryUrl;
    private formatLargeImageText;
}
export declare const activityService: ActivityService;
export {};
