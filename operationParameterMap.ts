type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/v1/op/jobs/processing-jobs/{receivingJobId}-GET': {
        parameters: [
            {
                name: 'receivingJobId'
            },
            {
                name: 'tenantCode'
            },
            {
                name: 'limit'
            },
            {
                name: 'start'
            },
        ]
    },
    '/v1/op/data-sources-GET': {
        parameters: [
        ]
    },
    '/v1/op/data-transfer-sessions/{transferSessionId}/add-PUT': {
        parameters: [
            {
                name: 'transferSessionId'
            },
            {
                name: 'sourceId'
            },
            {
                name: 'sequence'
            },
            {
                name: 'tenantCode'
            },
        ]
    },
    '/v1/op/data-transfer-sessions/{transferSessionId}/cancel-PUT': {
        parameters: [
            {
                name: 'transferSessionId'
            },
        ]
    },
    '/v1/op/jobs/receiving-jobs-POST': {
        parameters: [
            {
                name: 'transferSessionId'
            },
            {
                name: 'processingData'
            },
        ]
    },
    '/v1/op/jobs/receiving-jobs/{receivingJobId}-GET': {
        parameters: [
            {
                name: 'receivingJobId'
            },
            {
                name: 'jobs'
            },
            {
                name: 'tenantCode'
            },
            {
                name: 'start'
            },
            {
                name: 'limit'
            },
        ]
    },
    '/v1/op/data-transfer-sessions-POST': {
        parameters: [
        ]
    },
    '/v1/op/data-transfer-sessions/{transferSessionId}/upload-PUT': {
        parameters: [
            {
                name: 'transferSessionId'
            },
            {
                name: 'sourceId'
            },
            {
                name: 'sequence'
            },
            {
                name: 'tenantCode'
            },
        ]
    },
    '/v1alpha/data/upload/files/{filename}-PUT': {
        parameters: [
            {
                name: 'filename'
            },
        ]
    },
}