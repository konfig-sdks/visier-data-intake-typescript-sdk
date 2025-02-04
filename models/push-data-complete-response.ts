/*
Visier Data Intake APIs

Visier APIs for sending raw or untransformed source data to Visier

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DataTransferResultDetail } from './data-transfer-result-detail';

/**
 * 
 * @export
 * @interface PushDataCompleteResponse
 */
export interface PushDataCompleteResponse {
    /**
     * The unique identifier associated with the receiving job.
     * @type {string}
     * @memberof PushDataCompleteResponse
     */
    'dataReceivingJobId'?: string;
    /**
     * A meaningful message about the transfer session.
     * @type {string}
     * @memberof PushDataCompleteResponse
     */
    'message'?: string;
    /**
     * The unique identifier associated with the transfer session.
     * @type {string}
     * @memberof PushDataCompleteResponse
     */
    'transferSessionId'?: string;
    /**
     * A list of objects representing the results of the transfer session.
     * @type {Array<DataTransferResultDetail>}
     * @memberof PushDataCompleteResponse
     */
    'dataTransferResultDetails'?: Array<DataTransferResultDetail>;
    /**
     * The status of the transfer session. A completed session returns the status SUCCEED.
     * @type {string}
     * @memberof PushDataCompleteResponse
     */
    'status'?: string;
}

