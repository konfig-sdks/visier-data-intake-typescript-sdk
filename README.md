<div align="center">

[![Visit Visier](./header.png)](https://visier.com)

# [Visier](https://visier.com)<a id="visier"></a>

Visier APIs for sending raw or untransformed source data to Visier

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`visierdataintake.dataIntake.getProcessingJobsByParentReceivingJobId`](#visierdataintakedataintakegetprocessingjobsbyparentreceivingjobid)
  * [`visierdataintake.dataIntake.getSources`](#visierdataintakedataintakegetsources)
  * [`visierdataintake.dataIntake.pushData`](#visierdataintakedataintakepushdata)
  * [`visierdataintake.dataIntake.pushDataCancel`](#visierdataintakedataintakepushdatacancel)
  * [`visierdataintake.dataIntake.pushDataComplete`](#visierdataintakedataintakepushdatacomplete)
  * [`visierdataintake.dataIntake.receivingJobStatus`](#visierdataintakedataintakereceivingjobstatus)
  * [`visierdataintake.dataIntake.startTransfer`](#visierdataintakedataintakestarttransfer)
  * [`visierdataintake.dataIntake.uploadData`](#visierdataintakedataintakeuploaddata)
  * [`visierdataintake.dataUpload.fileToVisier`](#visierdataintakedatauploadfiletovisier)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Visier&serviceName=DataIntake&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { VisierDataIntake } from "visier-data-intake-typescript-sdk";

const visierdataintake = new VisierDataIntake({
  // Defining the base path is optional and defaults to https://vanity.api.visier.io
  // basePath: "https://vanity.api.visier.io",
  apiKeyAuth: "API_KEY",
  accessToken: "ACCESS_TOKEN",
  cookieAuth: "API_KEY",
});

const getProcessingJobsByParentReceivingJobIdResponse =
  await visierdataintake.dataIntake.getProcessingJobsByParentReceivingJobId({
    receivingJobId: "receivingJobId_example",
  });

console.log(getProcessingJobsByParentReceivingJobIdResponse);
```

## Reference<a id="reference"></a>


### `visierdataintake.dataIntake.getProcessingJobsByParentReceivingJobId`<a id="visierdataintakedataintakegetprocessingjobsbyparentreceivingjobid"></a>

Use this API to retrieve a list of statuses for all processing jobs associated with the given receiving job ID.

 Processing jobs deal with an individual analytic tenant's data load. A processing job is either triggered through
 the UI or is one of many processing jobs spawned from a receiving job. When a processing job is triggered as part
 of a set from an receiving job, it is associated to the receiving job through a Parent ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProcessingJobsByParentReceivingJobIdResponse =
  await visierdataintake.dataIntake.getProcessingJobsByParentReceivingJobId({
    receivingJobId: "receivingJobId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### receivingJobId: `string`<a id="receivingjobid-string"></a>

The receiving job ID.

##### tenantCode: `string`<a id="tenantcode-string"></a>

The tenant code of the tenant you want to retrieve the processing jobs for. Use this if you are only interested in the results for one analytic tenant.

##### limit: `number`<a id="limit-number"></a>

The limit of processing jobs to retrieve per page.

##### start: `number`<a id="start-number"></a>

The index to start retrieving results from, also known as offset. The index begins at 0.

#### 🔄 Return<a id="🔄-return"></a>

[GetProcessingJobsResponse](./models/get-processing-jobs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/jobs/processing-jobs/{receivingJobId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdataintake.dataIntake.getSources`<a id="visierdataintakedataintakegetsources"></a>

Prior to transferring data to Visier, you must identify the sources you want to target. Sources store data for
 the solution and are used to map data to Visier's data model.

 Note: To set up sources in your tenant, contact Visier Customer Success.
 This API allows you to query the list of available sources, and identify the source schema and required fields.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSourcesResponse = await visierdataintake.dataIntake.getSources();
```

#### 🔄 Return<a id="🔄-return"></a>

[PushDataSourceDefinitionsDTO](./models/push-data-source-definitions-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/data-sources` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdataintake.dataIntake.pushData`<a id="visierdataintakedataintakepushdata"></a>

This API allows you to transfer data to Visier in batches of records. Each request includes a batch of records
 formatted as a comma separated array with the first row containing the column headers in the request body. Each
 subsequent request should also include the first row as a header.

 Each request transfers a batch of records to a single source. Transfer sessions may include one or more batches before completion.

 Each batch is identified by a sequence number. Sequence numbers help identify any batches  that were delivered incorrectly.

 Each batch is limited to the following request size:
 - Batch size limit: 10 MB
 - Record count limit: 300,000 rows

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const pushDataResponse = await visierdataintake.dataIntake.pushData({
  transferSessionId: "transferSessionId_example",
  requestBody: "body_example",
  sourceId: "string_example",
  sequence: 1,
  tenantCode: "string_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### transferSessionId: `string`<a id="transfersessionid-string"></a>

The transfer session ID returned after the data transfer session starts.

##### sourceId: `string`<a id="sourceid-string"></a>

The unique identifier associated with the source you want to transfer data to.

##### sequence: `number`<a id="sequence-number"></a>

The unique sequence number associated with a batch of records.

##### tenantCode: `string`<a id="tenantcode-string"></a>

The code of the tenant you want to transfer data to. For example, WFF_j1r or WFF_j1r~c7o.

##### requestBody: `string`<a id="requestbody-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PushDataResponse](./models/push-data-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/data-transfer-sessions/{transferSessionId}/add` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdataintake.dataIntake.pushDataCancel`<a id="visierdataintakedataintakepushdatacancel"></a>

This API allows you to cancel a transfer session after starting it. If a transfer session is cancelled, all
 records within the transfer session do not persist in Visier’s data store.

 If you cancel a transfer session, please start a new transfer session and resend the complete data set.

 You might cancel a transfer session if:
 - A request to send a batch of records failed.
 - The original set of records is incomplete.
 - An infrastructure error occurs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const pushDataCancelResponse = await visierdataintake.dataIntake.pushDataCancel(
  {
    transferSessionId: "transferSessionId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### transferSessionId: `string`<a id="transfersessionid-string"></a>

The transfer session ID to cancel.

#### 🔄 Return<a id="🔄-return"></a>

[PushDataCancelResponse](./models/push-data-cancel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/data-transfer-sessions/{transferSessionId}/cancel` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdataintake.dataIntake.pushDataComplete`<a id="visierdataintakedataintakepushdatacomplete"></a>

This API allows you to complete the specified transfer session by triggering a receiving job. A receiving job
 validates the transferred data and adds the transferred data to Visier’s data store.

 You can set an optional parameter to generate a data version through a processing job immediately after the receiving job completes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const pushDataCompleteResponse =
  await visierdataintake.dataIntake.pushDataComplete({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### transferSessionId: `string`<a id="transfersessionid-string"></a>

The unique identifier associated with the transfer session.

##### processingData: `boolean`<a id="processingdata-boolean"></a>

If true, a processing job will be triggered after the receiving job successfully completes. This generates a new data version.

#### 🔄 Return<a id="🔄-return"></a>

[PushDataCompleteResponse](./models/push-data-complete-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/jobs/receiving-jobs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdataintake.dataIntake.receivingJobStatus`<a id="visierdataintakedataintakereceivingjobstatus"></a>

After completing a transfer session, you may want to know the status of the receiving job and the associated tenant
 receiving jobs. A receiving job validates the transferred data and adds the transferred data to Visier’s data store.

 Use this API to retrieve the receiving job status and summary of analytic tenant receiving jobs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const receivingJobStatusResponse =
  await visierdataintake.dataIntake.receivingJobStatus({
    receivingJobId: "receivingJobId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### receivingJobId: `string`<a id="receivingjobid-string"></a>

The **dataReceivingJobId** provided after a data transfer session completes. See **`/v1/op/jobs/receiving-jobs`**.

##### jobs: `boolean`<a id="jobs-boolean"></a>

If true, returns the status of receiving jobs spawned by the receiving job specified by receivingJobId.

##### tenantCode: `string`<a id="tenantcode-string"></a>

The tenant code of the tenant you want to retrieve the receiving jobs for. Use this if you are only interested in the results for one analytic tenant.

##### start: `number`<a id="start-number"></a>

The index to start retrieving results from, also known as offset. The index begins at 0.

##### limit: `number`<a id="limit-number"></a>

The number of job statuses to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[ReceivingJobStatusResponse](./models/receiving-job-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/jobs/receiving-jobs/{receivingJobId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdataintake.dataIntake.startTransfer`<a id="visierdataintakedataintakestarttransfer"></a>

Use this API to start a new transfer session. A transfer session can include one or more batches of records to be
 sent to Visier. Batches of records may be transferred as JSON or file payloads.

 Recommended: For optimal performance, please include all batches of records in a single transfer session.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const startTransferResponse = await visierdataintake.dataIntake.startTransfer();
```

#### 🔄 Return<a id="🔄-return"></a>

[StartTransferResponse](./models/start-transfer-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/data-transfer-sessions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdataintake.dataIntake.uploadData`<a id="visierdataintakedataintakeuploaddata"></a>

This API allows you to upload data to Visier as CSV or ZIP files. Each request transfers a single file. If the
 data intended for Visier is stored in multiple files, you may compress them into a single ZIP file or make
 multiple requests within the same transfer session.

 File size limit: 3 GB

 Each file is identified by a sequence number. Sequence numbers help identify any batches that were delivered incorrectly.

 If you define a specific source in the request, all files within the request will target the declared source. If
 a source is not defined, the filenames are matched against the source regex to correctly assign each file to a
 source. To find out the source regex, please contact Visier Customer Success.

 Note: If you include files that should target multiple sources in one ZIP file, do not define a source in the request.

 Analytic tenants: For optimal transfer speed, provide one ZIP file per source.
 Administrating tenants: For optimal transfer speed, provide one ZIP file containing all the required data files for your analytic tenants.
 In the ZIP file, use one folder per analytic tenant. The ZIP file must adhere to the following file structure:

 File1.zip
 - Folder1: WFF_tenantCode1
    - Filename1.csv
    - Filename2.csv
 - Folder2: WFF_tenantCode2
    - Filename3.csv
    - Filename4.csv

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadDataResponse = await visierdataintake.dataIntake.uploadData({
  transferSessionId: "transferSessionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### transferSessionId: `string`<a id="transfersessionid-string"></a>

The transfer session ID returned after the data transfer session starts.

##### sourceId: `string`<a id="sourceid-string"></a>

The unique identifier associated with the source you want to transfer data to.

##### sequence: `string`<a id="sequence-string"></a>

The unique sequence number associated with a batch of records.

##### tenantCode: `string`<a id="tenantcode-string"></a>

The code of the tenant you want to transfer data to. For example, WFF_j1r or WFF_j1r~c7o.

#### 🔄 Return<a id="🔄-return"></a>

[PushDataResponse](./models/push-data-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/data-transfer-sessions/{transferSessionId}/upload` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdataintake.dataUpload.fileToVisier`<a id="visierdataintakedatauploadfiletovisier"></a>

Use this API to upload data files to Visier. You can upload ZIP, CSV, XLS, and XLSX filetypes in plaintext or encrypted with Visier's PGP key. The maximum file upload size is 5 GB.

 Use of this API requires client redirect. This API redirects requests directly to Visier's upload infrastructure to support long-running uploads. 
 To ensure efficient uploading, we recommend that you use an HTTP client that supports the 100 Continue status code.

 <br>**Note:** <em>This API is in **alpha**. While in alpha, APIs may change in a breaking way without notice; functionality may be removed, and no deprecation notices will be issued.
 If you are interested in using this API, please contact your Customer Success Manager (CSM).</em>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const fileToVisierResponse = await visierdataintake.dataUpload.fileToVisier({
  filename: "filename_example",
  requestBody: fs.readFileSync("/path/to/file"),
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filename: `string`<a id="filename-string"></a>

The filename of the data file to upload, including the file extension (such as .zip or .csv).

##### requestBody: `Uint8Array | File | buffer.File`<a id="requestbody-uint8array--file--bufferfile"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Status](./models/status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1alpha/data/upload/files/{filename}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
